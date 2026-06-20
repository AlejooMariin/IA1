from fastapi import FastAPI
from routers.categorias import router as categoria_router
from routers.preguntas import router as pregunta_router
from routers.auth import router as auth_router
from routers.configuracion import router as configuracion_router
from routers.consultas import router as consultas_router
from routers.estadisticas import router as estadisticas_router

app = FastAPI(
    title="SmartBot API"
)

app.include_router(
    categoria_router
)

app.include_router(
    pregunta_router
)

app.include_router(
    auth_router
)

app.include_router(
    configuracion_router
)

app.include_router(
    consultas_router
)

app.include_router(
    estadisticas_router
)