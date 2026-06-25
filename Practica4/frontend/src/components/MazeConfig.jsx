import { useState } from "react";

function MazeConfig({
    createMaze
}) {

    const [rows,setRows] =
        useState(5);

    const [cols,setCols] =
        useState(5);

    const handleCreate = () => {

        createMaze(
            rows,
            cols
        );
    };

    return (

        <div className="config-panel">

            <h2>
                Nuevo Laberinto
            </h2>

            <label>
                Filas
            </label>

            <input
                type="number"
                min="2"
                value={rows}
                onChange={(e)=>
                    setRows(
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <label>
                Columnas
            </label>

            <input
                type="number"
                min="2"
                value={cols}
                onChange={(e)=>
                    setCols(
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <button
                onClick={handleCreate}
            >
                Crear Laberinto
            </button>

        </div>
    );
}

export default MazeConfig;