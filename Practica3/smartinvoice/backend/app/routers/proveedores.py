from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.schemas.proveedor import (
    ProveedorCreate,
    ProveedorUpdate,
    ProveedorResponse
)

from app.utils.dependencies import get_db
from app.services import proveedor_service

from app.utils.auth import get_current_user
from app.models.usuario import Usuario

router = APIRouter(
    prefix="/proveedores",
    tags=["Proveedores"]
)


@router.get(
    "/",
    response_model=list[ProveedorResponse]
)
def listar(
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):
    return proveedor_service.get_all(db)


@router.get(
    "/{proveedor_id}",
    response_model=ProveedorResponse
)
def obtener(
    proveedor_id: int,
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):
    proveedor = proveedor_service.get_by_id(
        db,
        proveedor_id
    )

    if not proveedor:
        raise HTTPException(
            status_code=404,
            detail="Proveedor no encontrado"
        )

    return proveedor


@router.post(
    "/",
    response_model=ProveedorResponse,
    status_code=201
)
def crear(
    data: ProveedorCreate,
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):
    return proveedor_service.create(
        db,
        data
    )


@router.put(
    "/{proveedor_id}",
    response_model=ProveedorResponse
)
def actualizar(
    proveedor_id: int,
    data: ProveedorUpdate,
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):
    proveedor = proveedor_service.update(
        db,
        proveedor_id,
        data
    )

    if not proveedor:
        raise HTTPException(
            status_code=404,
            detail="Proveedor no encontrado"
        )

    return proveedor


@router.delete("/{proveedor_id}")
def eliminar(
    proveedor_id: int,
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):
    eliminado = proveedor_service.delete(
        db,
        proveedor_id
    )

    if not eliminado:
        raise HTTPException(
            status_code=404,
            detail="Proveedor no encontrado"
        )

    return {
        "message": "Proveedor eliminado"
    }