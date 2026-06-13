from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from database import get_db

from models import Categoria
from models import Pregunta
from models import Consulta

router = APIRouter(
    prefix="/estadisticas",
    tags=["Estadisticas"]
)

@router.get("/")
def estadisticas(
    db: Session = Depends(get_db)
):

    total_categorias = (
        db.query(Categoria)
        .count()
    )

    total_preguntas = (
        db.query(Pregunta)
        .count()
    )

    total_consultas = (
        db.query(Consulta)
        .count()
    )

    return {
        "total_categorias": total_categorias,
        "total_preguntas": total_preguntas,
        "total_consultas": total_consultas
    }