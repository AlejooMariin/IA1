import BuscarRuta from "./components/BuscarRuta";
import CiudadForm from "./components/CiudadForm";
import ConexionForm from "./components/ConexionForm";
import { useState, useEffect } from "react";
import api from "./services/api";

function App() {

    const [ciudades, setCiudades] = useState([]);
    const [tabActiva, setTabActiva] = useState("inicio");

    const cargarCiudades = async () => {
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

    cargarCiudades();

        
    }, []);


    return (

    <div>
      <div style={{ minHeight: "600px" }}>

        <h1>
           Ruta Más Corta Entre Ciudades en Prolog 
        </h1>

        <div className="tabs">

            <button
                onClick={() => setTabActiva("inicio")}
            >
                Inicio
            </button>

            <button
                onClick={() => setTabActiva("rutas")}
            >
                Buscar Rutas
            </button>

            <button
                onClick={() => setTabActiva("ciudades")}
            >
                Nueva Ciudad
            </button>

            <button
                onClick={() => setTabActiva("conexiones")}
            >
                Nueva Conexión
            </button>

        </div>

        {
            tabActiva === "inicio" && (
                <div>

                    <h2>Bienvenido</h2>

                    <p>
                        Sistema inteligente para el cálculo de rutas
                        utilizando Prolog y React.
                    </p>

                </div>
            )
        }

        {
            tabActiva === "rutas" && (
                <BuscarRuta ciudades={ciudades} />
            )
        }

        {
            tabActiva === "ciudades" && (
                <CiudadForm
                    cargarCiudades={cargarCiudades}
                />
            )
        }

        {
            tabActiva === "conexiones" && (
                <ConexionForm
                    ciudades={ciudades}
                />
            )
        }

        

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