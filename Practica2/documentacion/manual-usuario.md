# Manual de Usuario - SmartBot

## 1. Introducción

SmartBot es un sistema que permite consultar información mediante Telegram y administrar preguntas frecuentes mediante una interfaz web.

---

## 2. Requisitos

Antes de utilizar el sistema se debe contar con:

- Docker Desktop
- Navegador Web
- Telegram

---

## 3. Inicio del Sistema

### Levantar servicios

```bash
docker compose up -d
```

### Verificar servicios

```bash
docker ps
```

---

## 4. Acceso al Sistema

### API REST

```text
http://localhost:8000/docs
```

### Panel Administrativo

```text
http://localhost:8000/login
```

---

## 5. Inicio de Sesión

Utilizar las credenciales proporcionadas por el administrador.

### Credenciales predeterminadas

```text
Usuario: IA1-User
Contraseña: IA1-password@_new
```

---

## 6. Menú Principal

El sistema dispone de las siguientes opciones:

- Categorías
- Preguntas Frecuentes
- Configuración
- Estadísticas

---

## 7. Administración de Categorías

### Crear Categoría

1. Ingresar al módulo Categorías.
2. Seleccionar Crear Categoría.
3. Completar los datos solicitados.
4. Guardar.

### Editar Categoría

1. Seleccionar la categoría.
2. Modificar la información.
3. Guardar cambios.

### Eliminar Categoría

1. Seleccionar la categoría.
2. Presionar Eliminar.
3. Confirmar la operación.

---

## 8. Administración de Preguntas

### Crear Pregunta

1. Ingresar al módulo Preguntas.
2. Seleccionar Nueva Pregunta.
3. Ingresar la pregunta.
4. Ingresar la respuesta.
5. Asociar una categoría.
6. Guardar.

### Editar Pregunta

1. Seleccionar la pregunta.
2. Modificar los datos.
3. Guardar cambios.

### Eliminar Pregunta

1. Seleccionar la pregunta.
2. Confirmar eliminación.

---

## 9. Configuración del Bot

El sistema permite configurar el identificador del chat de Telegram.

### Actualizar Chat ID

1. Ingresar al módulo Configuración.
2. Modificar el Chat ID.
3. Guardar cambios.

---

## 10. Uso del Bot de Telegram

### Paso 1

Buscar el bot en Telegram.

### Paso 2

Presionar el botón Start.

### Paso 3

Enviar una consulta.

Ejemplo:

```text
horario
```

### Respuesta esperada

```text
Nuestro horario de atención es de lunes a viernes de 8:00 AM a 5:00 PM.
```

---

## 11. Estadísticas

El sistema permite visualizar:

- Total de categorías.
- Total de preguntas.
- Total de consultas.
- Actividad del bot.

---

## 12. Solución de Problemas

### El bot no responde

Verificar:

- Conexión a Internet.
- Token del bot.
- Estado de la API.

### Error de conexión a la base de datos

Verificar que Docker se encuentre en ejecución.

```bash
docker ps
```

### Error al iniciar la API

Verificar dependencias instaladas y configuración de la base de datos.

---

## 13. Buenas Prácticas

- Mantener actualizadas las preguntas frecuentes.
- Verificar periódicamente las estadísticas.
- Realizar respaldos de la base de datos.
- Proteger las credenciales de acceso.

---

## 14. Contacto

Proyecto desarrollado para la Práctica 2 del curso Inteligencia Artificial 1.