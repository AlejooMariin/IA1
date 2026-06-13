from app.services.recomendaciones_services import (
    get_recomendaciones_service,
    crear_recomendacion_service,
    actualizar_recomendacion_service,
    eliminar_recomendacion_service
)


def get_recomendaciones():

    return get_recomendaciones_service()


def crear_recomendacion(
    falla,
    recomendacion
):

    return crear_recomendacion_service(
        falla,
        recomendacion
    )


def actualizar_recomendacion(
    falla_anterior,
    falla_nueva,
    recomendacion
):

    return actualizar_recomendacion_service(
        falla_anterior,
        falla_nueva,
        recomendacion
    )


def eliminar_recomendacion(
    falla
):

    return eliminar_recomendacion_service(
        falla
    )