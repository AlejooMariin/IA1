import React, { useState,useEffect } from "react";
import {
    obtenerSintomas
} from "../services/sintomas.service";
import {obtenerDiagnosticoRapido, obtenerDiagnosticoCompleto} from "../services/diagnostico.service";

function Diagnostico() {

    const [sintomaSeleccionado, setSintomaSeleccionado] = useState("");

    const [sintomasSeleccionados, setSintomasSeleccionados] = useState([]);
    const [diagnosticosintomasSeleccionados, setDiagnosSintomasSeleccionados] = useState([]);

    const [sintomas, setSintomas] = useState([]);

    const [diagnostico, setDiagnostico] = useState([]);

    const [diagnoRapido, setDiagnoRapido] = useState(false);

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

    const getDiagnosticoRapido = async ()=>{

        try {
            
                 const resultadosFinales = [];

                for (let i = 0; i < sintomasSeleccionados.length; i++) {

                    const sintoma = sintomasSeleccionados[i];
                    console.log('--> getDiagnosticoRapido --<',sintoma);

                    const data =
                        await obtenerDiagnosticoRapido(
                            sintoma
                        );

                    for (let j = 0; j < data.length; j++) {

                        resultadosFinales.push({
                            sintoma: sintoma,
                            diagnostico: data[j].Diagnostico,
                            recomendacion: data[j].Recomendacion
                        });
                    }
                }

                setDiagnosSintomasSeleccionados(resultadosFinales);

            } catch(error) {

                console.error(
                    error
                );

            }
    }

    const getDiagnosticoCompleto = async ()=>{

        try {
            

                 const resultadosFinales = [];

                for (let i = 0; i < sintomasSeleccionados.length; i++) {

                    const sintoma = sintomasSeleccionados[i];
                    console.log('--> getDiagnosticoCompleto--<',sintoma);
                    const data =
                        await obtenerDiagnosticoCompleto(
                            sintoma
                        );

                    for (let j = 0; j < data.length; j++) {

                        resultadosFinales.push({
                            sintoma: sintoma,
                            diagnostico: data[j].Diagnostico,
                            recomendacion: data[j].Recomendacion
                        });
                    }
                }

                setDiagnosSintomasSeleccionados(resultadosFinales);

            } catch(error) {

                console.error(
                    error
                );

            }
    }

    const clickShowAll=() =>{
        setShowAllRoutes()
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
                <label>
                        <input
                            type="checkbox"
                            checked={diagnoRapido}
                            onChange={(e) => setDiagnoRapido(e.target.checked)}
                        />
                        Diagnostico Rapido
                </label>
                
                <button onClick={() => {
                        if (diagnoRapido) {
                            getDiagnosticoRapido();
                        } else {
                            getDiagnosticoCompleto();
                        }
                    }} >
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
                        diagnosticosintomasSeleccionados,
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