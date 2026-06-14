from app.services.diagnosticocrud_service import (
    get_diagnosticos_service,
    crear_diagnostico_service,
    eliminar_diagnostico_service,
    actualizar_diagnostico_service
)


def get_diagnosticos():
    return get_diagnosticos_service()

def crear_diagnostico(nombre, sintomas):
    return crear_diagnostico_service(nombre, sintomas)

def eliminar_diagnostico(nombre):
    return eliminar_diagnostico_service(nombre)

def actualizar_diagnostico(anterior, nuevo, sintomas):
    return actualizar_diagnostico_service(anterior, nuevo, sintomas)