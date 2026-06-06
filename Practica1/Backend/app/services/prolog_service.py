from pyswip import Prolog

prolog = Prolog()
prolog.consult("base_prolog/rutas.pl")

def buscar_ruta(origen, destino):

    consulta = f"ruta({origen},{destino})"

    resultado = list(prolog.query(consulta))

    return len(resultado) > 0


def obtener_rutas(origen, destino):

    consulta = f"ruta({origen},{destino},Ruta,Distancia)"

    resultados = list(prolog.query(consulta))

    return resultados


def obtener_ruta_mas_corta(origen,destino):

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