import React, { useState, useEffect } from "react";
import {
    obtenerFallas,
    crearFalla,
    actualizarFalla,
    eliminarFalla
} from "../../services/fallas.service";

function Fallas() {

    const [nombre, setNombre] = useState("");
    const [newnombre, setnewNombre] = useState("");

    const [editando, setEditando] = useState(null);

    const [fallas, setFallas] = useState([]);

    const cargarFallas = async () => {

        try {

            const data =
                await obtenerFallas();

            setFallas(data);

        } catch(error) {

            console.error(error);
        }
    };

    const guardar = async () => {

        try {

            await crearFalla(
                nombre
            );

            setNombre("");

            cargarFallas();

        } catch(error) {

            console.error(error);
        }
    };

    const actualizar = async () => {

        try {

            await actualizarFalla(
                newnombre,
                nombre
            );
            setNombre("");
            cargarFallas();

        } catch(error) {

            console.error(error);
        }
    };

    const eliminar = async (
    nombre
    ) => {

        try {
            console.log(nombre)
            await eliminarFalla(
                nombre
            );

            cargarFallas();

        } catch(error) {

            console.error(error);
        }
    };

    const editar = async (item) => {
         setNombre(item);
         setnewNombre(item);
         setEditando(item);
        
    };

    useEffect(() => {

        cargarFallas();

    }, []);

    return (

        <div className="container">

            <div className="card">

                <h2>CRUD Síntomas</h2>

                <div className="form-group">

                    <label>Nombre</label>

                    <input
                        value={nombre}
                        onChange={(e) =>
                            setNombre(
                                e.target.value
                            )
                        }
                    />

                </div>

                <button onClick={() => {
                        if (editando !== null) {
                            actualizar();
                        } else {
                            guardar();
                        }
                    }}>

                    {
                        editando !== null
                            ? "Actualizar"
                            : "Guardar"
                    }

                </button>

                <br />
                <br />

                <div className="lista-sintomas">

                    {
                        fallas.map(
                            (item, index) => (

                                <div
                                    key={index}
                                    className="sintoma-item"
                                >

                                    <span>
                                        {item}
                                    </span>

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "5px"
                                        }}
                                    >

                                        <button
                                            className="btn-editar"
                                            onClick={() =>
                                                editar(item)
                                            }
                                        >

                                            <span className="material-symbols-outlined">
                                                edit
                                            </span>

                                        </button>

                                        <button
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminar(item)
                                            }
                                        >

                                            <span className="material-symbols-outlined">
                                                delete
                                            </span>

                                        </button>

                                    </div>

                                </div>
                            )
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default Fallas;