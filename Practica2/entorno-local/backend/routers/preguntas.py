from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from database import get_db
from models import Pregunta
from schemas import PreguntaCreate, PreguntaUpdate,ChatRequest

from models import Consulta
from datetime import datetime
from pydantic import BaseModel

router = APIRouter(
    prefix="/preguntas",
    tags=["Preguntas"]
)


@router.get("/")
def listar_preguntas(
    db: Session = Depends(get_db)
):
    return db.query(Pregunta).all()


@router.get("/{id}")
def obtener_pregunta(
    id: int,
    db: Session = Depends(get_db)
):

    pregunta = (
        db.query(Pregunta)
        .filter(Pregunta.id == id)
        .first()
    )

    if not pregunta:
        raise HTTPException(
            status_code=404,
            detail="Pregunta no encontrada"
        )

    return preguntas


@router.post("/")
def crear_pregunta(
    pregunta: PreguntaCreate,
    db: Session = Depends(get_db)
):

    nueva_pregunta = Pregunta(
        pregunta=pregunta.pregunta,
        respuesta=pregunta.respuesta,
        categoria_id=pregunta.categoria_id
    )

    db.add(nueva_pregunta)

    db.commit()

    db.refresh(nueva_pregunta)

    return nueva_pregunta



@router.put("/{id}")
def actualizar_pregunta(
    id: int,
    pregunta: PreguntaUpdate,
    db: Session = Depends(get_db)
):

    pregunta_db = (
        db.query(Pregunta)
        .filter(Pregunta.id == id)
        .first()
    )

    if not pregunta_db:
        raise HTTPException(
            status_code=404,
            detail="Pregunta no encontrada"
        )

    pregunta_db.pregunta = pregunta.pregunta
    pregunta_db.respuesta = pregunta.respuesta
    pregunta_db.categoria_id = pregunta.categoria_id

    db.commit()

    return pregunta_db


@router.delete("/{id}")
def eliminar_pregunta(
    id: int,
    db: Session = Depends(get_db)
):

    pregunta = (
        db.query(Pregunta)
        .filter(Pregunta.id == id)
        .first()
    )

    if not pregunta:
        raise HTTPException(
            status_code=404,
            detail="Pregunta no encontrada"
        )

    db.delete(pregunta)

    db.commit()

    return {
        "mensaje": "Pregunta eliminada"
    }



@router.get("/buscar/{texto}")
def buscar_respuesta(
    texto: str,
    db: Session = Depends(get_db)
):
    pregunta = (
        db.query(Pregunta)
        .filter(
            Pregunta.pregunta.ilike(
                f"%{texto}%"
            )
        )
        .first()
    )

    if not pregunta:
        return {
            "respuesta":
            "Lo siento, no tengo información para esa consulta."
        }

    return {
        "pregunta": pregunta.pregunta,
        "respuesta": pregunta.respuesta
    }


@router.post("/chat")
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db)
):

    pregunta = (
        db.query(Pregunta)
        .filter(
            Pregunta.pregunta.ilike(
                f"%{request.mensaje}%"
            )
        )
        .first()
    )

    if not pregunta:

        return {
            "respuesta":
            "Lo siento, no encontré información."
        }

    return {
        "respuesta": pregunta.respuesta
    }
