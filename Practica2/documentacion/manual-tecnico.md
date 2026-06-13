# Manual Técnico - SmartBot

## 1. Descripción General

SmartBot es un sistema de preguntas frecuentes desarrollado utilizando Python y FastAPI, que permite responder consultas realizadas por los usuarios a través de Telegram.

El sistema almacena la información en una base de datos MySQL y dispone de un panel administrativo para gestionar preguntas, categorías, configuraciones y estadísticas.

---

## 2. Objetivos del Sistema

- Gestionar preguntas frecuentes.
- Gestionar categorías de preguntas.
- Responder automáticamente consultas desde Telegram.
- Registrar consultas realizadas por los usuarios.
- Generar estadísticas del sistema.
- Permitir la administración mediante una interfaz web.

---

## 3. Arquitectura del Sistema

### Componentes Principales

#### Bot de Telegram

Permite la interacción entre los usuarios y el sistema.

#### API REST

Desarrollada con FastAPI para administrar la lógica de negocio.

#### Base de Datos

MySQL almacena toda la información del sistema.

#### Panel Administrativo

Permite administrar preguntas, categorías, configuraciones y estadísticas.

---

## 4. Tecnologías Utilizadas

### Backend

- Python 3.14
- FastAPI
- SQLAlchemy
- Pydantic

### Base de Datos

- MySQL 8

### Infraestructura

- Docker
- Docker Compose

### Integración

- Telegram Bot API

### Control de Versiones

- Git
- GitHub

---

## 5. Estructura del Proyecto

```text
backend/
│
├── main.py
├── database.py
├── models.py
├── schemas.py
│
├── routers/
│   ├── auth.py
│   ├── categorias.py
│   ├── preguntas.py
│   ├── consultas.py
│   ├── configuracion.py
│   └── estadisticas.py
│
├── templates/
├── static/
├── requirements.txt
└── Dockerfile

telegram_bot/
│
├── bot.py
├── api_client.py
├── telegram_service.py
├── requirements.txt
└── .env

docker-compose.yml
README.md
```

---

## 6. Modelo de Datos

### Tabla usuarios

| Campo | Tipo |
|---------|---------|
| id | INT |
| username | VARCHAR |
| password | VARCHAR |

### Tabla categorias

| Campo | Tipo |
|---------|---------|
| id | INT |
| nombre | VARCHAR |
| descripcion | TEXT |

### Tabla preguntas

| Campo | Tipo |
|---------|---------|
| id | INT |
| pregunta | TEXT |
| respuesta | TEXT |
| categoria_id | INT |

### Tabla consultas

| Campo | Tipo |
|---------|---------|
| id | INT |
| consulta | TEXT |
| respuesta | TEXT |
| fecha | DATETIME |

### Tabla configuracion

| Campo | Tipo |
|---------|---------|
| id | INT |
| telegram_chat_id | VARCHAR |

---

## 7. API REST

### Autenticación

#### Login

```http
POST /login
```

---

### Categorías

#### Listar

```http
GET /categorias
```

#### Obtener por ID

```http
GET /categorias/{id}
```

#### Crear

```http
POST /categorias
```

#### Actualizar

```http
PUT /categorias/{id}
```

#### Eliminar

```http
DELETE /categorias/{id}
```

---

### Preguntas

#### Listar

```http
GET /preguntas
```

#### Obtener por ID

```http
GET /preguntas/{id}
```

#### Crear

```http
POST /preguntas
```

#### Actualizar

```http
PUT /preguntas/{id}
```

#### Eliminar

```http
DELETE /preguntas/{id}
```

---

### Chat

```http
POST /preguntas/chat
```

---

### Consultas

```http
GET /consultas
```

---

### Configuración

```http
GET /configuracion
```

```http
PUT /configuracion
```

---

### Estadísticas

```http
GET /estadisticas
```

---

## 8. Docker

### Levantar servicios

```bash
docker compose up -d
```

### Detener servicios

```bash
docker compose down
```

### Ver contenedores

```bash
docker ps
```

---

## 9. Seguridad

El acceso al panel administrativo requiere autenticación.

### Usuario predeterminado

```text
Usuario: IA1-User
Contraseña: IA1-password@_new
```

---

## 10. Integración con Telegram

El sistema utiliza Telegram Bot API para recibir y responder consultas.

### Flujo de comunicación

```text
Usuario
   ↓
Telegram
   ↓
Bot
   ↓
FastAPI
   ↓
MySQL
   ↓
FastAPI
   ↓
Telegram
   ↓
Usuario
```

---

## 11. Posibles Mejoras

- Implementación de JWT.
- Dashboard avanzado.
- Integración con IA generativa.
- Integración con WhatsApp.
- Despliegue en la nube.
- Notificaciones automáticas.

---

## 12. Conclusiones

El sistema SmartBot permite administrar y responder preguntas frecuentes mediante Telegram, centralizando la información en una base de datos MySQL y proporcionando herramientas administrativas para su mantenimiento.