import { useState } from "react";

import {
    FaPlusCircle,
    FaUndo
} from "react-icons/fa";

function MazeConfig({
    createMaze,
    resetMazeConfig
}) {

    const [rows,setRows] =
        useState(5);

    const [cols,setCols] =
        useState(5);

    const handleReset = () => {

        setRows(5);

        setCols(5);

        resetMazeConfig();
    };

    return (

        <div className="card">

            <h3>
                Nuevo Laberinto
            </h3>

            <div className="input-group">

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

            </div>

            <div className="input-group">

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

            </div>

            <div className="config-buttons">

                <button
                    className="btn btn-success"
                    onClick={() =>
                        createMaze(
                            rows,
                            cols
                        )
                    }
                >
                    <FaPlusCircle />
                    Crear
                </button>

                <button
                    className="btn btn-warning"
                    onClick={handleReset}
                >
                    <FaUndo />
                    Reset
                </button>

            </div>

        </div>
    );
}

export default MazeConfig;