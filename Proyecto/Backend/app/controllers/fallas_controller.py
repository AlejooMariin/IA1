from app.services.fallas_services import (
    get_fallas_service,
    crear_falla_service,
    actualizar_falla_service,
    eliminar_falla_service
)


def get_fallas():

    return get_fallas_service()


def crear_falla(
    nombre
):

    return crear_falla_service(
        nombre
    )


def actualizar_falla(
    anterior,
    nuevo
):

    return actualizar_falla_service(
        anterior,
        nuevo
    )


def eliminar_falla(
    nombre
):

    return eliminar_falla_service(
        nombre
    )