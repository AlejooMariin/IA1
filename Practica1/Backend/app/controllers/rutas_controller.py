

from app.services.prolog_service import (
    obtener_rutas,
    obtener_ruta_mas_corta
)

def listar_rutas(origen,destino):

    rutas = obtener_rutas(
        origen,
        destino
    )

    return rutas

def ruta_optima(origen,destino):

    resultado = obtener_ruta_mas_corta(
        origen,
        destino
    )

    return resultado