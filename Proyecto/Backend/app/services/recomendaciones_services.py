import re

ARCHIVO = "base_prolog/auxiliar.pl"


def get_recomendaciones_service():

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        contenido = archivo.read()

    recomendaciones = re.findall(
        r"recomendacion\((.*?),\s*'(.*?)'\)\.",
        contenido
    )

    return [
        {
            "falla": falla,
            "recomendacion": recomendacion
        }
        for falla, recomendacion
        in recomendaciones
    ]


def crear_recomendacion_service(
    falla,
    recomendacion
):

    with open(
        ARCHIVO,
        "a",
        encoding="utf-8"
    ) as archivo:

        archivo.write(
            f"\nrecomendacion({falla}, '{recomendacion}').\n"
        )

    return {
        "mensaje":
        "Recomendacion creada"
    }


def eliminar_recomendacion_service(
    falla
):

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        lineas = archivo.readlines()

    with open(
        ARCHIVO,
        "w",
        encoding="utf-8"
    ) as archivo:

        for linea in lineas:

            if not linea.startswith(
                f"recomendacion({falla},"
            ):
                archivo.write(
                    linea
                )

    return {
        "mensaje":
        "Recomendacion eliminada"
    }


def actualizar_recomendacion_service(
    falla_anterior,
    falla_nueva,
    recomendacion
):

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        contenido = archivo.read()

    patron = (
        rf"recomendacion\({falla_anterior},\s*'.*?'\)\."
    )

    reemplazo = (
        f"recomendacion({falla_nueva}, '{recomendacion}')."
    )

    contenido = re.sub(
        patron,
        reemplazo,
        contenido
    )

    with open(
        ARCHIVO,
        "w",
        encoding="utf-8"
    ) as archivo:

        archivo.write(
            contenido
        )

    return {
        "mensaje":
        "Recomendacion actualizada"
    }