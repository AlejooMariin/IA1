from fastapi import APIRouter

from app.controllers.sintomas_controller import (
    get_sintomas,
    crear_sintoma,
    actualizar_sintoma,
    eliminar_sintoma
)

router = APIRouter(
    prefix="/sintomas",
    tags=["sintomas"]
)

@router.get("")
def listar():

    return get_sintomas()

@router.post("")
def crear(
    nombre: str
):

    return crear_sintoma(
        nombre
    )

@router.put("")
def actualizar(
    anterior: str,
    nuevo: str
):

    return actualizar_sintoma(
        anterior,
        nuevo
    )

@router.delete("")
def eliminar(
    nombre: str
):

    return eliminar_sintoma(
        nombre
    )