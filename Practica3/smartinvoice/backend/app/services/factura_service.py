from sqlalchemy.orm import Session

from app.models.factura import Factura
from app.services import bitacora_service
from app.models.proveedor import Proveedor


def get_all(db):

    return db.query(Factura).all()


def get_by_id(
    db: Session,
    factura_id: int
):

    return (
        db.query(Factura)
        .filter(
            Factura.id == factura_id
        )
        .first()
    )


def create(
    db: Session,
    data,
    usuario_id: int
):

    factura = Factura(
        numero_factura=data.numero_factura,
        fecha=data.fecha,
        nit=data.nit,
        subtotal=data.subtotal,
        impuestos=data.impuestos,
        total=data.total,
        estado="Pendiente",
        proveedor_id=data.proveedor_id,
        usuario_id=usuario_id
    )

    db.add(factura)

    db.commit()

    db.refresh(factura)

    bitacora_service.registrar(
        db=db,
        accion="CREAR_FACTURA",
        descripcion=f"Factura {factura.numero_factura} creada",
        factura_id=factura.id,
        usuario_id=usuario_id
    )

    return factura


def update(
    db: Session,
    factura_id: int,
    data
):

    factura = get_by_id(
        db,
        factura_id
    )

    if not factura:
        return None

    factura.numero_factura = data.numero_factura
    factura.fecha = data.fecha

    factura.nit = data.nit

    factura.subtotal = data.subtotal
    factura.impuestos = data.impuestos
    factura.total = data.total

    factura.proveedor_id = data.proveedor_id

    db.commit()

    db.refresh(factura)

    return factura


def delete(
    db: Session,
    factura_id: int
):

    factura = get_by_id(
        db,
        factura_id
    )

    if not factura:
        return False

    db.delete(factura)

    db.commit()

    return True


def change_status(
    db: Session,
    factura_id: int,
    nuevo_estado: str
):

    factura = get_by_id(
        db,
        factura_id
    )

    if not factura:
        return None

    factura.estado = nuevo_estado

    db.commit()

    db.refresh(factura)

    return factura

def actualizar_datos_ocr(
    db: Session,
    factura_id: int,
    numero_factura: str | None,
    nit: str | None
):

    factura = get_by_id(
        db,
        factura_id
    )

    if not factura:
        return None

    if numero_factura:
        factura.numero_factura = numero_factura

    if nit:
        factura.nit = nit

    factura.estado = "Procesado"

    db.commit()

    db.refresh(factura)

    return factura

def create_from_ocr(
    db: Session,
    numero_factura: str,
    fecha,
    nit: str,
    subtotal: float,
    impuestos: float,
    total: float,
    proveedor_id: int,
    usuario_id: int,
    archivo: str | None = None
):

    factura = Factura(
        numero_factura=numero_factura,
        fecha=fecha,
        nit=nit,
        subtotal=subtotal,
        impuestos=impuestos,
        total=total,
        estado="Procesado",
        proveedor_id=proveedor_id,
        usuario_id=usuario_id,
        archivo=archivo
    )

    db.add(factura)
    db.commit()
    db.refresh(factura)

    return factura