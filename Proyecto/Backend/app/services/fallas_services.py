import re

ARCHIVO = "base_prolog/auxiliar.pl"


def get_fallas_service():

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        contenido = archivo.read()

    fallas = re.findall(
        r"falla\((.*?)\)\.",
        contenido
    )

    return fallas


def crear_falla_service(
    nombre
):

    with open(
        ARCHIVO,
        "a",
        encoding="utf-8"
    ) as archivo:

        archivo.write(
            f"\nfalla({nombre}).\n"
        )

    return {
        "mensaje":
        "Falla creada"
    }


def eliminar_falla_service(
    nombre
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

            if (
                f"falla({nombre})."
                not in linea
            ):
                archivo.write(
                    linea
                )

    return {
        "mensaje":
        "Falla eliminada"
    }


def actualizar_falla_service(
    anterior,
    nuevo
):

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        contenido = archivo.read()

    contenido = contenido.replace(
        f"falla({anterior}).",
        f"falla({nuevo})."
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
        "Falla actualizada"
    }