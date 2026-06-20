from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
import os
import shutil
import traceback

from typing import List
from app.models.factura import Factura


from app.utils.dependencies import get_db
from app.utils.auth import get_current_user

from app.models.usuario import Usuario

from app.schemas.factura import (
    FacturaCreate,
    FacturaUpdate,
    FacturaResponse
)

from app.schemas.ocr import OCRResponse

from app.services import factura_service
from app.services import ocr_service
from app.services import bitacora_service

from app.rpa.factura_rpa import ejecutar_rpa_facturas

from app.utils.extractors import (
    extraer_numero_factura,
    extraer_nit,
    extraer_total
)

router = APIRouter(
    prefix="/facturas",
    tags=["Facturas"]
)


# =========================
# LISTAR
# =========================
@router.get("/", response_model=list[FacturaResponse])
def listar(
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):
    return factura_service.get_all(db)


# =========================
# OBTENER
# =========================
@router.get("/{factura_id}", response_model=FacturaResponse)
def obtener(factura_id: int, db: Session = Depends(get_db)):

    factura = factura_service.get_by_id(db, factura_id)

    if not factura:
        raise HTTPException(404, "Factura no encontrada")

    return factura


# =========================
# UPLOAD
# =========================
@router.post("/{factura_id}/upload")
def subir_archivo(
    factura_id: int,
    archivo: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):

    factura = factura_service.get_by_id(db, factura_id)

    if not factura:
        raise HTTPException(404, "Factura no encontrada")

    ext = os.path.splitext(archivo.filename)[1].lower()

    if ext not in [".pdf", ".png", ".jpg", ".jpeg"]:
        raise HTTPException(400, "Formato no permitido")

    os.makedirs("uploads/facturas", exist_ok=True)

    ruta = f"uploads/facturas/factura_{factura_id}{ext}"

    with open(ruta, "wb") as buffer:
        shutil.copyfileobj(archivo.file, buffer)

    factura.archivo = ruta
    db.commit()

    bitacora_service.registrar(
        db=db,
        accion="UPLOAD_FACTURA",
        descripcion="Archivo subido",
        factura_id=factura.id,
        usuario_id=current_user.id
    )

    return {"message": "Archivo subido", "ruta": ruta}


# =========================
# PROCESAR + CREAR FACTURA REAL
# =========================
@router.post("/procesar-y-crear/{factura_id}")
def procesar_y_crear(
    factura_id: int,
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):

    factura_temp = factura_service.get_by_id(db, factura_id)

    if not factura_temp or not factura_temp.archivo:
        raise HTTPException(400, "Factura sin archivo")

    try:
        # =========================
        # 1. OCR
        # =========================
        texto = ocr_service.extraer_texto(factura_temp.archivo)

        numero = extraer_numero_factura(texto)
        nit = extraer_nit(texto)
        total_raw = extraer_total(texto)

        # =========================
        # 2. NORMALIZAR TOTAL
        # =========================
        try:
            total_num = float(
                str(total_raw)
                .replace("Q", "")
                .replace(",", "")
                .strip()
            )
        except:
            total_num = 0.0

        subtotal = round(total_num * 0.9, 2)
        impuestos = round(total_num * 0.1, 2)

        # =========================
        # 3. CREAR FACTURA REAL
        # =========================
        nueva = factura_service.create_from_ocr(
            db=db,
            numero_factura=numero or "SIN_NUMERO",
            fecha=factura_temp.fecha,
            nit=nit or "SIN_NIT",
            subtotal=subtotal,
            impuestos=impuestos,
            total=total_num,
            proveedor_id=factura_temp.proveedor_id,
            usuario_id=current_user.id,
            archivo=factura_temp.archivo
        )

        # =========================
        # 4. BITÁCORA
        # =========================
        bitacora_service.registrar(
            db=db,
            accion="FACTURA_CREADA_OCR",
            descripcion="Factura creada desde OCR",
            factura_id=nueva.id,
            usuario_id=current_user.id
        )

        return {
            "message": "Factura creada correctamente",
            "factura": nueva,
            "ocr": {
                "numero": numero,
                "nit": nit,
                "total": total_num
            }
        }

    except Exception as e:

        print("\n ERROR REAL EN OCR:")
        traceback.print_exc()

        bitacora_service.registrar(
            db=db,
            accion="ERROR_OCR_CREATE",
            descripcion=str(e),
            factura_id=factura_id,
            usuario_id=current_user.id
        )

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )



#
# RPA
@router.post("/rpa/batch-crear")
def crear_facturas_en_lote(
    archivos: List[UploadFile] = File(...),
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):

    resultados = []

    os.makedirs("uploads/facturas", exist_ok=True)

    for archivo in archivos:

        try:
            # =========================
            # 1. VALIDAR EXTENSIÓN
            # =========================
            extension = os.path.splitext(archivo.filename)[1].lower()

            if extension not in [".pdf", ".png", ".jpg", ".jpeg"]:
                resultados.append({
                    "archivo": archivo.filename,
                    "estado": "ERROR",
                    "error": "Formato no permitido"
                })
                continue

            # =========================
            # 2. GUARDAR ARCHIVO
            # =========================
            ruta = os.path.join(
                "uploads",
                "facturas",
                f"{current_user.id}_{archivo.filename}"
            )

            with open(ruta, "wb") as buffer:
                shutil.copyfileobj(archivo.file, buffer)

            # =========================
            # 3. OCR
            # =========================
            texto = ocr_service.extraer_texto(ruta)

            numero = extraer_numero_factura(texto)
            nit = extraer_nit(texto)
            total_raw = extraer_total(texto)

            # =========================
            # 4. NORMALIZAR TOTAL
            # =========================
            try:
                total = float(
                    str(total_raw)
                    .replace("Q", "")
                    .replace(",", "")
                    .strip()
                )
            except:
                total = 0.0

            subtotal = round(total * 0.9, 2)
            impuestos = round(total * 0.1, 2)

            # =========================
            # 5. CREAR FACTURA
            # =========================
            factura = Factura(
                numero_factura=numero or "SIN_NUMERO",
                nit=nit or "SIN_NIT",
                subtotal=subtotal,
                impuestos=impuestos,
                total=total,
                estado="Procesado",
                archivo=ruta,
                proveedor_id=1,
                usuario_id=current_user.id
            )

            db.add(factura)
            db.commit()
            db.refresh(factura)

            # =========================
            # 6. BITÁCORA
            # =========================
            bitacora_service.registrar(
                db=db,
                accion="RPA_BATCH",
                descripcion=f"Factura creada desde lote: {archivo.filename}",
                factura_id=factura.id,
                usuario_id=current_user.id
            )

            resultados.append({
                "archivo": archivo.filename,
                "factura_id": factura.id,
                "estado": "OK"
            })

        except Exception as e:

            resultados.append({
                "archivo": archivo.filename,
                "estado": "ERROR",
                "error": str(e)
            })

    return {
        "message": "Proceso batch completado",
        "total": len(resultados),
        "resultados": resultados
    }