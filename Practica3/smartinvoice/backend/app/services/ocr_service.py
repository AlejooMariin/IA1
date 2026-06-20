import easyocr


reader = easyocr.Reader(
    ['es'],
    gpu=False
)


def extraer_texto(
    ruta_archivo: str
):

    resultado = reader.readtext(
        ruta_archivo,
        detail=0
    )

    return "\n".join(resultado)