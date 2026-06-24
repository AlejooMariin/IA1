from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.routers import (
    auth,
    proveedores,
    facturas,
    bitacora,
    dashboard
)

from app.models.usuario import Usuario
from app.models.proveedor import Proveedor
from app.models.factura import Factura
from app.models.bitacora import Bitacora


app = FastAPI(
    title="SmartInvoice"
)

# ---------------- CORS ----------------

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://tu-proyecto.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- DB ----------------
Base.metadata.create_all(bind=engine)

# ---------------- ROUTERS ----------------
app.include_router(auth.router)
app.include_router(proveedores.router)
app.include_router(facturas.router)
app.include_router(bitacora.router)
app.include_router(dashboard.router)

# ---------------- ROOT ----------------
@app.get("/")
def root():
    return {"message": "SmartInvoice API"}