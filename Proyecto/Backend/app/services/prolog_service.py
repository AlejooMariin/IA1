from pyswip import Prolog

prolog = Prolog()

def cargar_prolog():

    prolog = Prolog()

    prolog.consult("base_prolog/diagnostico.pl")
    prolog.consult("base_prolog/auxiliar.pl")

    return prolog



def get_diagnostico_completo_service(sintoma):
    prolog = cargar_prolog()
    print(
    list(
        prolog.query(
            "recomendacion(memoria_ram_daniada,X)"
        )
    )
)
    consulta = (
        f"get_diagnostico_completo("
        f"{sintoma},"
        f"Diagnostico,"
        f"Recomendacion)"
    )

    resultados = list(prolog.query(consulta))

    return resultados


def get_diagnostico_rapido_service(sintoma):
    prolog = cargar_prolog()

    print(
    list(
        prolog.query(
            "recomendacion(memoria_ram_daniada,X)"
        )
    )
)
    consulta = (
        f"get_diagnostico_rapido("
        f"{sintoma},"
        f"Diagnostico,"
        f"Recomendacion)"
    )

    resultado = list(prolog.query(consulta))

    return resultado
    # python -m uvicorn app.main:app --reload