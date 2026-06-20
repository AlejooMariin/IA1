

from app.services.prolog_service import (
    get_diagnostico_completo_service,
    get_diagnostico_rapido_service
)

def get_diagnostico_completo(sintoma):

    rutas = get_diagnostico_completo_service(
        sintoma
    )

    return rutas

def get_diagnostico_rapido(sintoma):

    resultado = get_diagnostico_rapido_service(
        sintoma
    )

    return resultado