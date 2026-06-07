import json

FILE_PATH = "app/data/conexiones.json"


def obtener_conexiones():

    with open(FILE_PATH, "r", encoding="utf-8") as archivo:
        return json.load(archivo)


def agregar_conexion(
    origen,
    destino,
    distancia
):

    conexiones = obtener_conexiones()

    conexiones.append(
        {
            "origen": origen,
            "destino": destino,
            "distancia": distancia
        }
    )

    with open(FILE_PATH, "w", encoding="utf-8") as archivo:

        json.dump(
            conexiones,
            archivo,
            indent=4
        )