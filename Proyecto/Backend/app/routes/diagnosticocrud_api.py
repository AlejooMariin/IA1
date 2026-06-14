from fastapi import APIRouter
from app.controllers.diagnosticocrud_controller import *

router = APIRouter(
    prefix="/diagnosticos",
    tags=["diagnosticos"]
)

@router.get("")
def listar():
    return get_diagnosticos()

@router.post("")
def crear(nombre: str, sintomas: str):
    return crear_diagnostico(nombre, sintomas)

@router.delete("")
def eliminar(nombre: str):
    return eliminar_diagnostico(nombre)

@router.put("")
def actualizar(anterior: str, nuevo: str, sintomas: str):
    return actualizar_diagnostico(anterior, nuevo, sintomas)