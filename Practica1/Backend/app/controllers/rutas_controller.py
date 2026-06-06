

from app.services.prolog_service import (
    buscar_ruta,
    obtener_rutas,
    obtener_ruta_mas_corta
)

def consultar_ruta(origen, destino):

    existe = buscar_ruta(origen, destino)

    return {
        "origen": origen,
        "destino": destino,
        "ruta_encontrada": existe
    }

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