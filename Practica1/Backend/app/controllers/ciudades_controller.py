import json
import os

FILE_PATH = "app/data/ciudades.json"


def listar_ciudades():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def agregar_ciudad(ciudad):
    ciudades = listar_ciudades()

    if ciudad not in ciudades:
        ciudades.append(ciudad)

        with open(FILE_PATH, "w", encoding="utf-8") as f:
            json.dump(ciudades, f, indent=4)

    return ciudades


