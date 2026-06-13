from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session
from schemas import CategoriaUpdate

from database import get_db

from models import Categoria
from schemas import CategoriaCreate

router = APIRouter(
    prefix="/categorias",
    tags=["Categorias"]
)


@router.get("/")
def listar_categorias(
    db: Session = Depends(get_db)
):

    return db.query(Categoria).all()


@router.post("/")
def crear_categoria(
    categoria: CategoriaCreate,
    db: Session = Depends(get_db)
):

    nueva_categoria = Categoria(
        nombre=categoria.nombre,
        descripcion=categoria.descripcion
    )

    db.add(nueva_categoria)

    db.commit()

    db.refresh(nueva_categoria)

    return nueva_categoria


@router.get("/{id}")
def obtener_categoria(
    id: int,
    db: Session = Depends(get_db)
):

    categoria = (
        db.query(Categoria)
        .filter(Categoria.id == id)
        .first()
    )

    return categoria


@router.put("/{id}")
def actualizar_categoria(
    id: int,
    categoria: CategoriaUpdate,
    db: Session = Depends(get_db)
):

    categoria_db = (
        db.query(Categoria)
        .filter(Categoria.id == id)
        .first()
    )

    if not categoria_db:
        return {
            "mensaje": "Categoria no encontrada"
        }

    categoria_db.nombre = categoria.nombre
    categoria_db.descripcion = categoria.descripcion

    db.commit()

    return categoria_db


@router.delete("/{id}")
def eliminar_categoria(
    id: int,
    db: Session = Depends(get_db)
):

    categoria = (
        db.query(Categoria)
        .filter(Categoria.id == id)
        .first()
    )

    if not categoria:
        return {
            "mensaje": "Categoria no encontrada"
        }

    db.delete(categoria)

    db.commit()

    return {
        "mensaje": "Categoria eliminada"
    }