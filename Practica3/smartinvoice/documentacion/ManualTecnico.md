# SmartInvoice

## Introducción

## Arquitectura

smartinvoice/
│
backend/
│
├── app/
│   │
│   ├── main.py
│   ├── database.py
│   ├── config.py
│
│   ├── models/
│   │   ├── usuario.py
│   │   ├── proveedor.py
│   │   ├── factura.py
│   │   └── bitacora.py
│
│   ├── schemas/
│   │   ├── usuario.py
│   │   ├── proveedor.py
│   │   ├── factura.py
│   │   └── token.py
│
│   ├── routers/
│   │   ├── auth.py
│   │   ├── proveedores.py
│   │   ├── facturas.py
│   │   └── bitacora.py
│
│   ├── services/
│   │   ├── auth_service.py
│   │   ├── factura_service.py
│   │   └── bitacora_service.py
│
│   ├── utils/
│   │   ├── security.py
│   │   └── dependencies.py
│
│   └── __init__.py
│
├── uploads/
├── reports/
│
├── requirements.txt
├── .env
├── Dockerfile
└── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── routes/
│   │
│   ├── package.json
│   └── Dockerfile
│
├── mysql/
│   └── init.sql
│
├── docker-compose.yml
│
├── docs/
│   ├── ManualTecnico.md
│   └── Arquitectura.png
│
└── README.md

## Tecnologías Utilizadas

- React
- FastAPI
- MySQL
- Docker
- EasyOCR
- OpenCV
- Selenium

## Base de Datos

## API REST

## OCR

## Computer Vision

## Automatización RPA

## Reportes

## Despliegue Docker

## Despliegue en la nube

## Requerimientos Funcionales

## Requerimientos No Funcionales

## Mejoras Futuras