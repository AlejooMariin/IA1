from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.diagnostico_api import router as diagnostico_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(diagnostico_router)

# python -m uvicorn app.main:app --reload