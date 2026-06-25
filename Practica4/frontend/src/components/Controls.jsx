function Controls({
    editMode,
    setEditMode,
    runBFS,
    runDFS
}) {

    return (

        <div>

            <h3>Modo Edición</h3>

            <button
                onClick={() =>
                    setEditMode("wall")
                }
            >
                Obstáculo
            </button>

            <button
                onClick={() =>
                    setEditMode("start")
                }
            >
                Inicio
            </button>

            <button
                onClick={() =>
                    setEditMode("goal")
                }
            >
                Meta
            </button>

            <hr/>

            <button onClick={runBFS}>
                Ejecutar BFS
            </button>

            <button onClick={runDFS}>
                Ejecutar DFS
            </button>

        </div>

    );
}

export default Controls;