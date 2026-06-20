from pydantic import BaseModel


class OCRResponse(BaseModel):

    texto: str

    numero_factura: str | None = None

    nit: str | None = None

    total: str | None = None