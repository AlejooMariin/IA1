import { useState } from "react";
import api from "../services/api";

function ConexionForm({ciudades}) {

    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [distancia, setDistancia] = useState("");

    const guardarConexion = async() => {

        try {

            const response = await api.post(
                "/conexiones/crear-conexion",
                null,
                {
                    params: {
                        origen,
                        destino,
                        distancia
                    }
                }
            );
            console.log(response.data);
            

        } catch (error) {

            console.error(error);

            alert("No se pudo crear la conexion vuelve a intentarlo.");
        }



    };

    return (

        <div>

            <h2>Nueva Conexión</h2>

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

            <input
                type="number"
                placeholder="Distancia"
                value={distancia}
                onChange={(e) =>
                    setDistancia(e.target.value)
                }
            />

            <button onClick={guardarConexion}>
                Agregar
            </button>

        </div>
    );
}

export default ConexionForm;