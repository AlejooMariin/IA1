from fastapi import APIRouter

from app.controllers.ciudades_controller import (
    listar_ciudades,
    agregar_ciudad
)

router = APIRouter(
    prefix="/ciudades",
    tags=["Ciudades"]
)

@router.get("/")
def obtener_ciudades():

    return listar_ciudades()

@router.post("/agregar_nueva_ciudad")
def agregar_nueva_ciudad(
    nombre: str
):
    return agregar_ciudad(
        nombre
    )