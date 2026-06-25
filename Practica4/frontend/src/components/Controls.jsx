function Controls({
    editMode,
    setEditMode,
    runBFS,
    runDFS,
    clearPath,
    clearMaze
}) {

    return (

        <div className="controls">

            <h3>Modo edición</h3>

            <button
                className={
                    editMode === "wall"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    setEditMode("wall")
                }
            >
                🧱 Obstáculo
            </button>

            <button
                className={
                    editMode === "start"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    setEditMode("start")
                }
            >
                🟩 Inicio
            </button>

            <button
                className={
                    editMode === "goal"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    setEditMode("goal")
                }
            >
                🟥 Meta
            </button>

            <hr />

            <button
                onClick={runBFS}
            >
                BFS
            </button>

            <button
                onClick={runDFS}
            >
                DFS
            </button>
            <button
                onClick={clearPath}
            >
                🧹 Limpiar Ruta
            </button>

            <button
                onClick={clearMaze}
            >
                🗑️ Limpiar Laberinto
            </button>

        </div>
    );
}

export default Controls;