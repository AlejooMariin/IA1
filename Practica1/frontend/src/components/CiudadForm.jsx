import { useState } from "react";
import api from "../services/api";

function CiudadForm({cargarCiudades}) {

    const [nombre, setNombre] = useState("");

    const guardarCiudad = async () => {

            try {

            console.log(nombre);
            const response = await api.post(
                "/ciudades/agregar_nueva_ciudad",
                null,
                {
                    params: {
                        nombre
                    }
                }
            );
            console.log(response.data);
            await cargarCiudades();

        } catch (error) {

            console.error(error);

            alert("No se pudo guardar la ciudad.");
        }

       

        setNombre("");

       

         
    };

    return (

        <div>

            <h2>Nueva Ciudad</h2>

            <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ciudad"
            />

            <button onClick={guardarCiudad}>
                Agregar
            </button>

        </div>
    );
}

export default CiudadForm;