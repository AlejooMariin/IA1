import React, { useState } from "react";

function Diagnostico() {

    const [sintomaSeleccionado, setSintomaSeleccionado] = useState("");

    const [sintomasSeleccionados, setSintomasSeleccionados] = useState([]);

    const sintomas = [
        "pantalla_azul",
        "pantalla_negra",
        "equipo_lento",
        "temperatura_alta",
        "sin_audio",
        "usb_no_reconoce"
    ];

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