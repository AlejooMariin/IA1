from fastapi import APIRouter

from app.controllers.fallas_controller import (
    get_fallas,
    crear_falla,
    actualizar_falla,
    eliminar_falla
)

router = APIRouter(
    prefix="/fallas",
    tags=["fallas"]
)


@router.get("")
def listar():

    return get_fallas()


@router.post("")
def crear(
    nombre: str
):

    return crear_falla(
        nombre
    )


@router.put("")
def actualizar(
    anterior: str,
    nuevo: str
):

    return actualizar_falla(
        anterior,
        nuevo
    )


@router.delete("")
def eliminar(
    nombre: str
):

    return eliminar_falla(
        nombre
    )