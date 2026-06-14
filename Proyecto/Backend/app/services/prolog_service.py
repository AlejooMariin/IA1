from pyswip import Prolog
from app.services.notification_service import notificar
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

    notificar(
        "Consulta Diagnóstico completo",
        f"Síntoma: {sintoma}"
    )
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

    notificar(
        "Consulta Diagnóstico Rapido",
        f"Síntoma: {sintoma}"
    )
    return resultado
    # python -m uvicorn app.main:app --reload