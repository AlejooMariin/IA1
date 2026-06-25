import {
    FaPlay,
    FaTrash,
    FaBroom,
    FaMapMarkerAlt,
    FaFlag,
    FaSquare
} from "react-icons/fa";

function Controls({
    editMode,
    setEditMode,
    runBFS,
    runDFS,
    clearPath,
    clearMaze
}) {

    return (

        <div className="card">

            <h3 className="section-title">
                Modo Edición
            </h3>

            <div className="controls-grid">

                <button
                    className={
                        editMode === "wall"
                            ? "btn btn-active"
                            : "btn"
                    }
                    onClick={() =>
                        setEditMode("wall")
                    }
                >
                    <FaSquare />
                    Obstáculo
                </button>

                <button
                    className={
                        editMode === "start"
                            ? "btn btn-active"
                            : "btn"
                    }
                    onClick={() =>
                        setEditMode("start")
                    }
                >
                    <FaMapMarkerAlt />
                    Inicio
                </button>

                <button
                    className={
                        editMode === "goal"
                            ? "btn btn-active"
                            : "btn"
                    }
                    onClick={() =>
                        setEditMode("goal")
                    }
                >
                    <FaFlag />
                    Meta
                </button>

            </div>

            <hr />

            <h3 className="section-title">
                Algoritmos
            </h3>

            <div className="controls-grid">

                <button
                    className="btn btn-success"
                    onClick={runBFS}
                >
                    <FaPlay />
                    BFS
                </button>

                <button
                    className="btn btn-success"
                    onClick={runDFS}
                >
                    <FaPlay />
                    DFS
                </button>

            </div>

            <hr />

            <h3 className="section-title">
                Utilidades
            </h3>

            <div className="controls-grid">

                <button
                    className="btn btn-warning"
                    onClick={clearPath}
                >
                    <FaBroom />
                    Limpiar Ruta
                </button>

                <button
                    className="btn btn-danger"
                    onClick={clearMaze}
                >
                    <FaTrash />
                    Limpiar Laberinto
                </button>

            </div>

        </div>

    );
}

export default Controls;