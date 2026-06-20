import re


def extraer_numero_factura(
    texto: str
):

    patron = r'Factura\s*(?:No|#|Número)?[:\s]*([A-Z0-9\-]+)'

    match = re.search(
        patron,
        texto,
        re.IGNORECASE
    )

    if match:
        return match.group(1)

    return None


def extraer_nit(
    texto: str
):

    patron = r'NIT[:\s]*([0-9\-]+)'

    match = re.search(
        patron,
        texto,
        re.IGNORECASE
    )

    if match:
        return match.group(1)

    return None


def extraer_total(
    texto: str
):

    patron = r'Total[:\sQ]*([0-9.,]+)'

    match = re.search(
        patron,
        texto,
        re.IGNORECASE
    )

    if match:
        return match.group(1)

    return None