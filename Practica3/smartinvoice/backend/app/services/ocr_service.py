import easyocr

reader = None


def get_reader():

    global reader

    if reader is None:

        reader = easyocr.Reader(
            ['es'],
            gpu=False
        )

    return reader


def extraer_texto(
    ruta_archivo: str
):

    resultado = get_reader().readtext(
        ruta_archivo,
        detail=0
    )

    return "\n".join(resultado)