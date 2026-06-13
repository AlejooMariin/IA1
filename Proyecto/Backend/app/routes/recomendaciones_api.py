from fastapi import APIRouter

from app.controllers.recomendaciones_controller import (
    get_recomendaciones,
    crear_recomendacion,
    actualizar_recomendacion,
    eliminar_recomendacion
)

router = APIRouter(
    prefix="/recomendaciones",
    tags=["recomendaciones"]
)


@router.get("")
def listar():

    return get_recomendaciones()


@router.post("")
def crear(
    falla: str,
    recomendacion: str
):

    return crear_recomendacion(
        falla,
        recomendacion
    )


@router.put("")
def actualizar(
    falla_anterior: str,
    falla_nueva: str,
    recomendacion: str
):

    return actualizar_recomendacion(
        falla_anterior,
        falla_nueva,
        recomendacion
    )


@router.delete("")
def eliminar(
    falla: str
):

    return eliminar_recomendacion(
        falla
    )