from pyswip import Prolog

prolog = Prolog()
prolog.consult("base_prolog/diagnostico.pl")



def get_diagnostico_completo_service(sintoma):

    consulta = (
        f"get_diagnostico_completo("
        f"{sintoma},"
        f"Diagnostico,"
        f"Recomendacion)"
    )

    resultados = list(prolog.query(consulta))

    return resultados


def get_diagnostico_rapido_service(sintoma):

    consulta = f"get_diagnostico_rapido({sintoma},Diagnostico,Recomendacion)"

    resultado = list(prolog.query(consulta))

    return resultado
    # python -m uvicorn app.main:app --reload