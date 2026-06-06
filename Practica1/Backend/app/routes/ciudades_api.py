from fastapi import APIRouter

from app.controllers.ciudades_controller import (
    listar_ciudades
)

router = APIRouter(
    prefix="/ciudades",
    tags=["Ciudades"]
)

@router.get("/")
def obtener_ciudades():

    return listar_ciudades()