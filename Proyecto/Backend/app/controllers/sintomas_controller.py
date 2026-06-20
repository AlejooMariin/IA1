from app.services.sintomas_service import (
    get_sintomas_service,
    crear_sintoma_service,
    actualizar_sintoma_service,
    eliminar_sintoma_service
)


def get_sintomas():

    return get_sintomas_service()


def crear_sintoma(
    nombre
):

    return crear_sintoma_service(
        nombre
    )


def actualizar_sintoma(
    anterior,
    nuevo
):

    return actualizar_sintoma_service(
        anterior,
        nuevo
    )


def eliminar_sintoma(
    nombre
):

    return eliminar_sintoma_service(
        nombre
    )