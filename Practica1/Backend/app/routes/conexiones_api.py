from fastapi import APIRouter

from app.controllers.conexiones_controller import (
    listar_conexiones,
    crear_conexion
)

router = APIRouter(
    prefix="/conexiones",
    tags=["Conexiones"]
)


@router.get("/")
def obtener_conexiones():
    return listar_conexiones()


@router.post("/crear-conexion")
def agregar(
    origen: str,
    destino: str,
    distancia: str
):

    return crear_conexion(
        origen,
        destino,
        distancia
    )