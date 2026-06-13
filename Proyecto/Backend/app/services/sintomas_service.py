import re

ARCHIVO = "base_prolog/auxiliar.pl"


def get_sintomas_service():

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        contenido = archivo.read()

    sintomas = re.findall(
        r"sintoma\((.*?)\)\.",
        contenido
    )

    return sintomas


def crear_sintoma_service(
    nombre
):

    with open(
        ARCHIVO,
        "a",
        encoding="utf-8"
    ) as archivo:

        archivo.write(
            f"\nsintoma({nombre}).\n"
        )

    return {
        "mensaje":
        "Sintoma creado"
    }

def eliminar_sintoma_service(
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
                f"sintoma({nombre})."
                not in linea
            ):
                archivo.write(
                    linea
                )

    return {
        "mensaje":
        "Sintoma eliminado"
    }


def actualizar_sintoma_service(
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
        f"sintoma({anterior}).",
        f"sintoma({nuevo})."
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
        "Sintoma actualizado"
    }