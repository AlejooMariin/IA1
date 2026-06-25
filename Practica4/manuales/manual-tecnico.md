#  Manual Técnico

## Universidad de San Carlos de Guatemala

### Facultad de Ingeniería

### Inteligencia Artificial 1

### Práctica 4 - RoboMaze

---

# 1. Introducción

RoboMaze es una aplicación web desarrollada para la simulación y resolución de laberintos utilizando algoritmos de búsqueda no informada.

El sistema permite crear y configurar laberintos personalizados, definir puntos de inicio y meta, agregar obstáculos y ejecutar algoritmos de búsqueda para encontrar rutas válidas.

La aplicación implementa los algoritmos:

- Breadth First Search (BFS)
- Depth First Search (DFS)

Además, proporciona una interfaz gráfica interactiva que permite visualizar el proceso de búsqueda y comparar el rendimiento de los algoritmos implementados.

---

# 2. Objetivos

## Objetivo General

Desarrollar una aplicación web que permita resolver laberintos mediante algoritmos de búsqueda no informada y visualizar los resultados obtenidos.

## Objetivos Específicos

- Implementar BFS para la búsqueda de rutas.
- Implementar DFS para la búsqueda de rutas.
- Permitir la creación dinámica de laberintos NxM.
- Permitir la edición de obstáculos.
- Permitir la selección de puntos de inicio y meta.
- Visualizar gráficamente las rutas encontradas.
- Comparar métricas de desempeño entre algoritmos.

---

# 3. Descripción General del Sistema

La solución fue desarrollada bajo una arquitectura Cliente-Servidor.

El Frontend es responsable de:

- Mostrar la interfaz gráfica.
- Permitir la interacción con el usuario.
- Visualizar laberintos y rutas.
- Mostrar resultados y métricas.

El Backend es responsable de:

- Procesar solicitudes.
- Ejecutar algoritmos de búsqueda.
- Calcular métricas.
- Retornar resultados al frontend.

---

# 4. Arquitectura del Sistema

```text
+------------------------+
|        Frontend        |
|      React + Vite      |
+-----------+------------+
            |
            |
         HTTP
            |
            |
+-----------v------------+
|        Backend         |
|       FastAPI          |
+-----------+------------+
            |
            |
+-----------v------------+
| Algoritmos de Búsqueda |
|     BFS y DFS          |
+------------------------+
```

---

# 5. Tecnologías Utilizadas

## Frontend

- React
- Vite
- Axios
- React Icons
- CSS3

## Backend

- Python 3.14
- FastAPI
- Uvicorn
- Pydantic

## Herramientas

- Visual Studio Code
- Git
- GitHub

---

# 6. Estructura del Proyecto

```text
Practica4/

├── backend/
│
│   ├── app/
│   │
│   ├── routes/
│   │   └── search.py
│   │
│   ├── services/
│   │   ├── bfs_service.py
│   │   └── dfs_service.py
│   │
│   ├── models/
│   │   └── maze_request.py
│   │
│   ├── utils/
│   │   └── helpers.py
│   │
│   └── main.py
│
├── frontend/
│
│   ├── src/
│   │
│   ├── components/
│   │   ├── Controls.jsx
│   │   ├── MazeGrid.jsx
│   │   ├── MazeSelector.jsx
│   │   ├── MazeConfig.jsx
│   │   ├── Results.jsx
│   │   └── ComparisonTable.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── data/
│   │   └── mazes.js
│   │
│   ├── App.jsx
│   └── App.css
│
└── manuales/
    ├── manual-tecnico.md
    └── manual-usuario.md
```

---

# 7. Backend

## Descripción

El backend fue desarrollado utilizando FastAPI y tiene como responsabilidad ejecutar los algoritmos de búsqueda.

---

## Modelo de Entrada

```json
{
  "maze": [
    [0,0,0],
    [1,1,0],
    [0,0,0]
  ],
  "start": [0,0],
  "goal": [2,2]
}
```

### Descripción

| Campo | Descripción |
|---------|---------|
| maze | Matriz del laberinto |
| start | Coordenada inicial |
| goal | Coordenada destino |

---

# 8. API REST

## BFS

### Endpoint

```http
POST /search/bfs
```

### Request

```json
{
  "maze": [[0,0],[0,0]],
  "start": [0,0],
  "goal": [1,1]
}
```

### Response

```json
{
  "path": [[0,0],[0,1],[1,1]],
  "nodes_explored": 3,
  "execution_time": 0.0001
}
```

---

## DFS

### Endpoint

```http
POST /search/dfs
```

### Request

```json
{
  "maze": [[0,0],[0,0]],
  "start": [0,0],
  "goal": [1,1]
}
```

### Response

```json
{
  "path": [[0,0],[1,0],[1,1]],
  "nodes_explored": 3,
  "execution_time": 0.0001
}
```

---

# 9. Algoritmo BFS

## Definición

Breadth First Search (BFS) es un algoritmo de búsqueda que explora primero los nodos más cercanos al origen antes de avanzar a niveles más profundos.

---

## Características

- Utiliza una cola (Queue).
- Explora por niveles.
- Garantiza encontrar la ruta más corta en grafos no ponderados.
- Es completo.

---

## Pseudocódigo

```text
Crear cola

Insertar nodo inicial

Mientras cola no esté vacía

    Extraer nodo

    Si es meta

        retornar ruta

    Insertar vecinos válidos
```

---

## Complejidad

### Tiempo

```text
O(V + E)
```

### Espacio

```text
O(V)
```

---

# 10. Algoritmo DFS

## Definición

Depth First Search (DFS) explora primero la mayor profundidad posible antes de retroceder.

---

## Características

- Utiliza una pila (Stack).
- Explora profundidad primero.
- No garantiza la ruta más corta.
- Es completo en espacios finitos.

---

## Pseudocódigo

```text
Crear pila

Insertar nodo inicial

Mientras pila no esté vacía

    Extraer nodo

    Si es meta

        retornar ruta

    Insertar vecinos válidos
```

---

## Complejidad

### Tiempo

```text
O(V + E)
```

### Espacio

```text
O(V)
```

---

# 11. Frontend

## Descripción

La interfaz fue desarrollada utilizando React y permite interactuar visualmente con el laberinto.

---

## Componentes Implementados

### App.jsx

Componente principal de la aplicación.

Responsabilidades:

- Administración de estados.
- Comunicación con API.
- Control de animaciones.

---

### MazeGrid.jsx

Responsable de:

- Dibujar la matriz.
- Mostrar obstáculos.
- Mostrar inicio.
- Mostrar meta.
- Mostrar ruta.
- Mostrar animación.

---

### Controls.jsx

Permite:

- Seleccionar modo de edición.
- Ejecutar BFS.
- Ejecutar DFS.
- Limpiar ruta.
- Limpiar laberinto.

---

### MazeConfig.jsx

Permite:

- Crear laberintos personalizados.
- Configurar tamaño NxM.
- Reiniciar configuraciones.

---

### MazeSelector.jsx

Permite:

- Seleccionar mapas predefinidos.

---

### Results.jsx

Presenta:

- Nodos explorados.
- Tiempo de ejecución.
- Longitud de ruta.
- Coordenadas recorridas.

---

### ComparisonTable.jsx

Muestra una comparación entre BFS y DFS.

---

# 12. Visualización de Laberintos

Cada celda tiene una representación gráfica.

| Color | Significado |
|---------|---------|
| Blanco | Espacio libre |
| Negro | Obstáculo |
| Verde | Inicio |
| Rojo | Meta |
| Amarillo | Ruta |
| Azul | Posición actual del robot |

---

# 13. Animación de la Ruta

La ruta encontrada se visualiza progresivamente.

La implementación utiliza:

```javascript
setInterval()
```

La velocidad puede configurarse por el usuario mediante un selector.

Opciones disponibles:

- Rápida
- Media
- Lenta

---

# 14. Métricas Calculadas

## Nodos Explorados

Cantidad de nodos visitados por el algoritmo.

---

## Tiempo de Ejecución

Tiempo empleado para encontrar la solución.

---

## Longitud de Ruta

Cantidad de pasos desde el inicio hasta la meta.

---

# 15. Instalación

## Clonar Repositorio

```bash
git clone URL_REPOSITORIO
```

---

# 16. Ejecución del Backend

```bash
cd backend
```

Instalar dependencias:

```bash
pip install -r requirements.txt
```

Ejecutar servidor:

```bash
python -m uvicorn app.main:app --reload
```

---

# 17. Ejecución del Frontend

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar aplicación:

```bash
npm run dev
```

---

# 18. Resultados Obtenidos

El sistema permite:

- Resolver laberintos mediante BFS.
- Resolver laberintos mediante DFS.
- Visualizar rutas.
- Comparar algoritmos.
- Crear escenarios personalizados.
- Analizar desempeño mediante métricas.

---

# 19. Mejoras Futuras

Se identifican las siguientes posibles extensiones:

- Implementación de A*.
- Implementación de Greedy Best First Search.
- Generación aleatoria de laberintos.
- Visualización paso a paso de nodos explorados.

---

# 20. Conclusiones

La aplicación RoboMaze permite comprender el funcionamiento de los algoritmos BFS y DFS mediante una representación visual interactiva.

La implementación demuestra cómo distintos algoritmos de búsqueda exploran un espacio de estados y permite analizar diferencias en rendimiento, exploración y calidad de las soluciones encontradas.

La arquitectura basada en React y FastAPI proporciona una solución modular, escalable y fácil de mantener para futuras extensiones del proyecto.