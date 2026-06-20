import React, { useState, useEffect } from "react";

import {
    obtenerDiagnosticos,
    crearDiagnostico,
    actualizarDiagnostico,
    eliminarDiagnostico
} from "../../services/diagnosticocrud";

import {
    obtenerFallas
} from "../../services/fallas.service";

function DiagnosticoCrud() {

    const [nombre, setNombre] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [editando, setEditando] = useState(null);

    const [lista, setLista] = useState([]);
    const [fallas, setFallas] = useState([]);


    const cargar = async () => {

        try {

            const data =
                await obtenerDiagnosticos();

            setLista(data);

        } catch (error) {

            console.error(error);
        }
    };

    const cargarFallas =
            async () => {
    
            try {
    
                const data =
                    await obtenerFallas();
    
                setFallas(
                    data
                );
    
            } catch(error) {
    
                console.error(
                    error
                );
    
            }
        };

    useEffect(() => {
        cargar();
    }, []);

    // GUARDAR / ACTUALIZAR
    const guardar = async () => {

        try {

            if (editando) {

                await actualizarDiagnostico(
                    editando,
                    nombre,
                    sintomas
                );

            } else {

                await crearDiagnostico(
                    nombre,
                    sintomas
                );
            }

            setNombre("");
            setSintomas("");
            setEditando(null);

            cargar();

        } catch (error) {

            console.error(error);
        }
    };

    // EDITAR
    const editar = (item) => {

        setNombre(item.diagnostico);
        setSintomas(item.sintomas.join(","));
        setEditando(item.diagnostico);
    };

    // ELIMINAR
    const eliminar = async (nombre) => {

        try {

            await eliminarDiagnostico(nombre);

            cargar();

        } catch (error) {

            console.error(error);
        }
    };

    

    

    return (
        <div className="container">

            <div className="card">

                <h2>CRUD Diagnósticos</h2>

                <div className="form-group">

                    <label>
                        Falla
                    </label>

                    <input
                        value={nombre}
                        onChange={(e) =>
                            setNombre(e.target.value)
                        }
                    />

                </div>
                

                <div className="form-group">

                    <label>Síntomas (separados por coma)</label>

                    <input
                        value={sintomas}
                        onChange={(e) =>
                            setSintomas(e.target.value)
                        }
                    />

                </div>

                 <button onClick={() => {
                            guardar();
                    }}>

                    {editando ? "Actualizar" : "Guardar"}

                </button>

                <br /><br />

                <div className="lista-sintomas">

                    {lista.map((item, index) => (

                        <div key={index} className="sintoma-item">

                            <div>
                                <strong>{item.diagnostico}</strong>
                                <br />
                                <small>
                                    {item.sintomas?.join(", ")}
                                </small>
                            </div>

                            <div style={{ display: "flex", gap: "5px" }}>

                                <button
                                    className="btn-editar"
                                    onClick={() => editar(item)}
                                >
                                    <span className="material-symbols-outlined">
                                                edit
                                            </span>
                                </button>

                                <button
                                    className="btn-eliminar"
                                    onClick={() => eliminar(item.diagnostico)}
                                >
                                    <span className="material-symbols-outlined">
                                                delete
                                            </span>
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default DiagnosticoCrud;