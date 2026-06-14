import re

ARCHIVO = "base_prolog/diagnostico.pl"
ARCHIVOAUX = "base_prolog/auxiliar.pl"

def get_diagnosticos_service():

    contenido = ""

    with open(ARCHIVO, "r", encoding="utf-8") as f:
        contenido += f.read()

    with open(ARCHIVOAUX, "r", encoding="utf-8") as f:
        contenido += "\n" + f.read()

    pattern = re.findall(
        r"diagnostico\(\s*(.*?),\s*(.*?)\s*\)\s*:-\s*member\(\s*\1\s*,\s*\[(.*?)\]\)\.",
        contenido
    )

    diagnosticos = []

    for _, nombre, sintomas in pattern:

        diagnosticos.append({
            "diagnostico": nombre,
            "sintomas": [s.strip() for s in sintomas.split(",")]
        })

    return diagnosticos

def crear_diagnostico_service(nombre, sintomas):

    lista = ",".join(sintomas.split(","))

    regla = (
        f"\ndiagnostico(Sintomas, {nombre}) :- "
        f"member(Sintomas, [{lista}]).\n"
    )

    with open(ARCHIVOAUX, "a", encoding="utf-8") as f:
        f.write(regla)

    return {"mensaje": "Diagnóstico creado"}

def eliminar_diagnostico_service(nombre):

    with open(ARCHIVOAUX, "r", encoding="utf-8") as f:
        lineas = f.readlines()

    with open(ARCHIVOAUX, "w", encoding="utf-8") as f:

        for linea in lineas:

            if f", {nombre}" not in linea:
                f.write(linea)

    return {"mensaje": "Diagnóstico eliminado"}

def actualizar_diagnostico_service(nombre_anterior, nombre_nuevo, sintomas):

    lista = ",".join(sintomas.split(","))

    nuevo = (
        f"diagnostico(Sintomas, {nombre_nuevo}) :- "
        f"member(Sintomas, [{lista}])."
    )

    with open(ARCHIVOAUX, "r", encoding="utf-8") as f:
        contenido = f.read()

    contenido = re.sub(
        rf"diagnostico\(Sintomas,\s*{nombre_anterior}\).*?\.",
        nuevo,
        contenido,
        flags=re.DOTALL
    )

    with open(ARCHIVOAUX, "w", encoding="utf-8") as f:
        f.write(contenido)

    return {"mensaje": "Diagnóstico actualizado"}