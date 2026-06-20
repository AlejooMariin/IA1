import re
from app.services.notification_service import notificar

ARCHIVO = "base_prolog/diagnostico.pl"
ARCHIVOAUX = "base_prolog/auxiliar.pl"


def get_recomendaciones_service():

    def parse(texto):
        return re.findall(
            r"recomendacion\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*'([^']*)'\s*\)\s*\.",
            texto
        )

    datos = {}
    
    try:
        with open(ARCHIVO, "r", encoding="utf-8") as f:
            for k, v in parse(f.read()):
                datos[k] = v
    except:
        pass

    try:
        with open(ARCHIVOAUX, "r", encoding="utf-8") as f:
            for k, v in parse(f.read()):
                datos[k] = v
    except:
        pass

    return [
        {"falla": k, "recomendacion": v}
        for k, v in datos.items()
    ]


def crear_recomendacion_service(
    falla,
    recomendacion
):

    with open(
        ARCHIVOAUX,
        "a",
        encoding="utf-8"
    ) as archivo:

        archivo.write(
            f"\nrecomendacion({falla}, '{recomendacion}').\n"
        )
    notificar(
        "Crear Recomendación",
        falla,
        recomendacion
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
    
    notificar(
        "Elimina Recomendación",
        falla
    )

    return {
        "mensaje":
        "Recomendacion eliminada"
    }


def actualizar_recomendacion_service(falla, nueva_recomendacion):

    patron = rf"recomendacion\s*\(\s*{falla}\s*,\s*'([^']*)'\s*\)\s*\."

    def reemplazar(file):

        try:
            with open(file, "r", encoding="utf-8") as f:
                contenido = f.read()
        except:
            return None, False

        nuevo = re.sub(
            patron,
            f"recomendacion({falla}, '{nueva_recomendacion}').",
            contenido
        )

        return nuevo, nuevo != contenido

    nuevo_aux, cambio_aux = reemplazar(ARCHIVOAUX)

    if cambio_aux:

        with open(ARCHIVOAUX, "w", encoding="utf-8") as f:
            f.write(nuevo_aux)

        return {"mensaje": "Actualizado en auxiliar"}

    nuevo_orig, cambio_orig = reemplazar(ARCHIVO)

    if cambio_orig:

        # copiar al auxiliar
        with open(ARCHIVOAUX, "a", encoding="utf-8") as f:
            f.write(f"\nrecomendacion({falla}, '{nueva_recomendacion}').\n")

        return {"mensaje": "Copiado desde original y actualizado en auxiliar"}

    return {"mensaje": "No se encontró la recomendación"}