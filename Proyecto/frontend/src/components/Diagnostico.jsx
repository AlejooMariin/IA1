import React, { useState,useEffect } from "react";
import {
    obtenerSintomas
} from "../services/sintomas.service";

function Diagnostico() {

    const [sintomaSeleccionado, setSintomaSeleccionado] = useState("");

    const [sintomasSeleccionados, setSintomasSeleccionados] = useState([]);

    const [sintomas, setSintomas] = useState([]);

    const [diagnostico, setDiagnostico] = useState([]);

    const cargarSintomas =
        async () => {

            try {

                const data =
                    await obtenerSintomas();

                setSintomas(
                    data
                );

            } catch(error) {

                console.error(
                    error
                );

            }
        };

    const agregarSintoma = () => {

        if (!sintomaSeleccionado) {
            return;
        }

        if (
            sintomasSeleccionados.includes(
                sintomaSeleccionado
            )
        ) {
            return;
        }

        setSintomasSeleccionados([
            ...sintomasSeleccionados,
            sintomaSeleccionado
        ]);

        setSintomaSeleccionado("");
    };

    const eliminarSintoma = (sintoma) => {

        setSintomasSeleccionados(
            sintomasSeleccionados.filter(
                item => item !== sintoma
            )
        );
    };


    useEffect(() => {

        cargarSintomas();

    }, []);


    return (
         <div className="container">
            <div className="card">

            <h2>Diagnóstico</h2>

            <div className="form-group">

                <label>Síntoma</label>

                <select
                    value={sintomaSeleccionado}
                    onChange={(e) =>
                        setSintomaSeleccionado(
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        Seleccione un síntoma
                    </option>

                    {
                        sintomas.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))
                    }

                </select>

            </div>

            <button
                type="button"
                onClick={agregarSintoma}
            >
                Agregar Síntoma
            </button>

            <br />
            <br />

            <div className="form-group">

                <label>
                    Síntomas Seleccionados
                </label>

                <div className="lista-sintomas">

                    {
                        sintomasSeleccionados.length === 0
                        &&
                        <p>
                            No hay síntomas seleccionados
                        </p>
                    }

                    {
                        sintomasSeleccionados.map(
                            (item) => (

                                <div
                                    key={item}
                                    className="sintoma-item"
                                >

                                    <span>{item}</span>

                                    <button
                                        className="btn-eliminar"
                                        onClick={() => eliminarSintoma(item)}
                                    >
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>

                                </div>
                            )
                        )
                    }

                </div>

            </div>

            <div>
                <button >
                    Consultar
                </button> *
            </div>
            <div className="form-group">
                

                <label>
                    Diagnostico
                </label>

                <textarea
                    readOnly
                    value={JSON.stringify(
                        sintomasSeleccionados,
                        null,
                        2
                    )}
                />

            </div>
            

        </div>
         </div>

        
    );
}

export default Diagnostico;