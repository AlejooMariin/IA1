import re
from app.services.notification_service import notificar
ARCHIVO = "base_prolog/diagnostico.pl"
ARCHIVOAUX = "base_prolog/auxiliar.pl"


def get_sintomas_service():

    sintomas = []

    with open(
        ARCHIVO,
        "r",
        encoding="utf-8"
    ) as archivo:

        sintomas.extend(
            re.findall(
                r"sintoma\((.*?)\)\.",
                archivo.read()
            )
        )

    with open(
        ARCHIVOAUX,
        "r",
        encoding="utf-8"
    ) as archivo:

        sintomas.extend(
            re.findall(
                r"sintoma\((.*?)\)\.",
                archivo.read()
            )
        )

    sintomas_unicos = []

    for sintoma in sintomas:

        if sintoma not in sintomas_unicos:

            sintomas_unicos.append(
                sintoma
            )

    return sintomas_unicos


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
    notificar(
            "Crear Síntoma",
            nombre
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
    notificar(
        "Eliminar Síntoma",
        nombre
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

    notificar(
        "Actualizar Síntoma",
        f"{anterior} → {nuevo}"
    )
    
    return {
        "mensaje":
        "Sintoma actualizado"
    }