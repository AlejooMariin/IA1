# Manual de Usuario

## Universidad de San Carlos de Guatemala

### Inteligencia Artificial 1

### Práctica 4 - RoboMaze

---

# 1. Introducción

RoboMaze es una aplicación web desarrollada para la simulación y resolución de laberintos utilizando algoritmos de búsqueda no informada.

El sistema permite:

* Crear laberintos personalizados de tamaño N x M.
* Seleccionar laberintos predefinidos.
* Definir punto de inicio.
* Definir punto meta.
* Agregar y eliminar obstáculos.
* Ejecutar algoritmos BFS y DFS.
* Visualizar la ruta encontrada mediante animación.
* Comparar métricas de rendimiento entre algoritmos.

---

# 2. Requisitos del Sistema

## Navegador Web

* Google Chrome
* Microsoft Edge

## Backend

* Python 3.11 o superior
* FastAPI

## Frontend

* Node.js 20 o superior
* React
* Vite

---

# 3. Pantalla Principal

La aplicación se encuentra dividida en las siguientes áreas:

## Configuración de Laberinto

Permite crear un nuevo laberinto indicando:

* Número de filas.
* Número de columnas.

## Selección de Laberintos

Permite cargar mapas predefinidos almacenados en el sistema.

## Modo Edición

Permite seleccionar:

* Obstáculos.
* Punto de inicio.
* Punto meta.

## Área de Visualización

Muestra gráficamente el laberinto.

## Resultados

Presenta información relacionada con la búsqueda realizada.

---

# 4. Creación de un Laberinto

1. Ingresar el número de filas.
2. Ingresar el número de columnas.
3. Presionar el botón **Crear**.

El sistema generará una matriz vacía lista para ser editada.

---

# 5. Selección de un Laberinto Predefinido

1. Abrir el selector de laberintos.
2. Elegir uno de los mapas disponibles.
3. El sistema cargará automáticamente el mapa seleccionado.

---

# 6. Configuración del Punto Inicial

1. Seleccionar el modo **Inicio**.
2. Hacer clic sobre una celda libre del laberinto.

La celda seleccionada se mostrará en color verde.

---

# 7. Configuración del Punto Meta

1. Seleccionar el modo **Meta**.
2. Hacer clic sobre una celda libre.

La celda seleccionada se mostrará en color rojo.

---

# 8. Configuración de Obstáculos

1. Seleccionar el modo **Obstáculo**.
2. Hacer clic sobre cualquier celda libre.

La celda cambiará a estado bloqueado.

Para eliminar un obstáculo, hacer clic nuevamente sobre la celda.

---

# 9. Ejecución del Algoritmo BFS

1. Configurar inicio y meta.
2. Presionar el botón **BFS**.

El sistema:

* Ejecutará la búsqueda.
* Mostrará la ruta encontrada.
* Mostrará métricas de ejecución.
* Dibujará la ruta mediante animación.

---

# 10. Ejecución del Algoritmo DFS

1. Configurar inicio y meta.
2. Presionar el botón **DFS**.

El sistema:

* Ejecutará la búsqueda.
* Mostrará la ruta encontrada.
* Presentará métricas de ejecución.
* Animará la solución encontrada.

---

# 11. Interpretación de Resultados

## Nodos Explorados

Cantidad de nodos visitados durante la ejecución del algoritmo.

## Tiempo de Ejecución

Tiempo empleado para encontrar una solución.

## Longitud de Ruta

Cantidad de pasos que conforman la solución encontrada.

## Coordenadas de la Ruta

Secuencia de posiciones recorridas desde el inicio hasta la meta.

Ejemplo:

```text
(0,0)
(0,1)
(1,1)
(2,1)
(2,2)
```

---

# 12. Comparación de Algoritmos

La aplicación permite comparar:

* BFS (Breadth First Search)
* DFS (Depth First Search)

Métricas comparadas:

* Nodos explorados.
* Tiempo de ejecución.
* Longitud de la ruta.

---

# 13. Herramientas Disponibles

## Limpiar Ruta

Elimina la ruta encontrada y las métricas mostradas.

## Limpiar Laberinto

Elimina todos los obstáculos y configuraciones actuales.

## Reset

Restablece la configuración predeterminada del sistema.

---

# 14. Restricciones

* El inicio no puede ubicarse sobre un obstáculo.
* La meta no puede ubicarse sobre un obstáculo.
* Los obstáculos no pueden colocarse sobre inicio o meta.
* Debe existir una ruta válida para obtener una solución.

---

# 15. Conclusiones

RoboMaze permite comprender de forma visual el funcionamiento de los algoritmos BFS y DFS mediante la resolución de laberintos, facilitando el análisis comparativo de su desempeño y comportamiento.
