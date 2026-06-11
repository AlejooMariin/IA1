import MiFormulario from "./components/MiFormulario";
import { useState, useEffect } from "react";
import api from "./services/api";

function App() {

    const [ciudades, setCiudades] = useState([]);
    const [tabActiva, setTabActiva] = useState("inicio");

    const cargarSintomas = async () => {
        console.log("Carga de informacion");

        try {

            const response = await api.get("/ciudades");

            console.log("carga de info", response.data);

            setCiudades(response.data);

        } catch (error) {

            console.error(error);

            alert("Error al cargar ciudades");
        }
    };

    useEffect(() => {

    cargarSintomas();

        
    }, []);


    return (

    <div>
      <div style={{ minHeight: "600px" }}>
            <h1>           Proyecto Fase 1        </h1>

            <MiFormulario></MiFormulario>
        </div>

        <footer className="footer">
            <p>
                © {new Date().getFullYear()} Sistema de Rutas IA1 - Practica 1 -
            </p>
            <p>
                Universidad de San Carlos de Guatemala - Inteligencia Artificial 1 - {new Date().toLocaleDateString()}
            </p>
            <p> José Alejandro Grande Marín - 201602855 </p>
        </footer>
    </div>
);
}

export default App;