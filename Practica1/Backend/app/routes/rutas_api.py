from fastapi import APIRouter

from app.controllers.rutas_controller import (
    listar_rutas,
    ruta_optima
)

router = APIRouter(
    prefix="/rutas",
    tags=["Rutas"]
)

@router.get("/")
def obtener_rutas(
    origen: str,
    destino: str
):
    return listar_rutas(
        origen,
        destino
    )

@router.get("/mas-corta")
def obtener_mejor_ruta(
    origen: str,
    destino: str
):
    return ruta_optima(
        origen,
        destino
    )