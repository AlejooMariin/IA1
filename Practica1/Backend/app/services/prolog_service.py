from pyswip import Prolog
from app.services.conexiones_service import obtener_conexiones

prolog = Prolog()
prolog.consult("base_prolog/rutas.pl")


def cargar_conexiones():
    
    list(
        prolog.query(
            "retractall(conexion(_,_,_))"
        )
    )

    conexiones = obtener_conexiones()

    for conexion in conexiones:

        consulta = (
            f"assertz(conexion("
            f"{conexion['origen']},"
            f"{conexion['destino']},"
            f"{conexion['distancia']}"
            f"))"
        )

        list(prolog.query(consulta))


def obtener_rutas(origen, destino):
    cargar_conexiones()

    consulta = f"ruta({origen},{destino},Ruta,Distancia)"

    resultados = list(prolog.query(consulta))

    return resultados


def obtener_ruta_mas_corta(origen,destino):
    cargar_conexiones()

    consulta = (
        f"ruta_mas_corta("
        f"{origen},"
        f"{destino},"
        f"Ruta,"
        f"Distancia)"
    )

    resultado = list(prolog.query(consulta))

    return resultado
    # python -m uvicorn app.main:app --reload