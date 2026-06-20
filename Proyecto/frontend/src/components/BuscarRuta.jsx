import { useState } from "react";
import api from "../services/api";
import "./BuscarRuta.css";

function BuscarRuta({ ciudades }) {

    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");

    const [resultado, setResultado] = useState([]);
    const [resultadoAll, setResultadoAll] = useState([]);
    const [showAllRoutes, setShowAllRoutes] = useState(false);
    

    const obtenerRutaMasCorta = async() =>{
        try {

            const response = await api.get(
                "/rutas/mas-corta",
                {
                    params: {
                        origen,
                        destino
                    }
                }
            );
            console.log(response.data);
            setResultado(response.data);


        } catch (error) {

            console.error(error);

            alert("No se encontró ruta");
        }
    };

    const obtenerPosiblesRutas = async() =>{
        try {

            const response = await api.get(
                "/rutas/",
                {
                    params: {
                        origen,
                        destino
                    }
                }
            );
            console.log(response.data);
            setResultadoAll(response.data);


        } catch (error) {

            console.error(error);

            alert("No se encontró ruta");
        }
    };
    

    const buscarRuta =  async () => {
       await obtenerRutaMasCorta();
       await obtenerPosiblesRutas();
        
    };

    const clickShowAll=() =>{
        setShowAllRoutes()
    };

    return (
        <div>

            <h2>Calculo de Rutas</h2>

            <select value={origen} onChange={(e) => setOrigen(e.target.value)}>
            <option value="">Origen</option>
            {ciudades.map((c) => (
                <option key={c} value={c}>
                {c}
                </option>
            ))}
            </select>

            <select value={destino} onChange={(e) => setDestino(e.target.value)}>
            <option value="">Destino</option>
            {ciudades.map((c) => (
                <option key={c} value={c}>
                {c}
                </option>
            ))}
            </select>

            <button onClick={buscarRuta}>
                Buscar
            </button>


            {
                resultado.length>0 && (

                    <div>
                        <h2 className="subtitle">Ruta más corta</h2>

                        <div className="container-table">

                            <table border="1" className="tabla">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Ruta</th>
                                        <th>Distancia</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        resultado.map((ruta, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{ruta.Ruta.join(" ➜ ")}</td>
                                                <td>{ruta.Distancia} km</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                    
                )
            }

            {
                resultadoAll.length>0 && (
                    <label>
                        <input
                            type="checkbox"
                            checked={showAllRoutes}
                            onChange={(e) => setShowAllRoutes(e.target.checked)}
                        />
                        Mostrar todas las rutas
                    </label>
                )
            }

            {
                    showAllRoutes && resultadoAll.length>0 && (
                        <div>
                            <h2 className="subtitle">Posibles rutas</h2>
                            <div className="container-table">
                                <table border="1" className="tabla">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Ruta</th>
                                            <th>Distancia</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            resultadoAll.map((ruta, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{ruta.Ruta.join(" ➜ ")}</td>
                                                    <td>{ruta.Distancia} km</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                
            }
            
            

        </div>
    );
}

export default BuscarRuta;