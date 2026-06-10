from fastapi import APIRouter

from app.controllers.diagnostico_controller import (
    get_diagnostico_completo,
    get_diagnostico_rapido
)

router = APIRouter(
    prefix="/diagnostico",
    tags=["diagnostico"]
)

@router.get("/completo")
def get_diagnostico_completo_api(
    sintoma: str
):
    return get_diagnostico_completo(
        sintoma
    )

@router.get("/rapido")
def get_diagnostico_rapido_api(
    sintoma: str
):
    return get_diagnostico_rapido(
        sintoma
    )