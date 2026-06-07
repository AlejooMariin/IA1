from app.services.conexiones_service import (
    obtener_conexiones,
    agregar_conexion
)


def listar_conexiones():
    return obtener_conexiones()


def crear_conexion(
    origen,
    destino,
    distancia
):
    agregar_conexion(
        origen,
        destino,
        distancia
    )

    return {
        "mensaje": "Conexión agregada"
    }