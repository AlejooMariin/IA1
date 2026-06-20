import { useState } from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import Sintomas from "./components/sintomas/Sintomas";
import Fallas from "./components/fallas/Fallas";
import Recomendaciones from "./components/recomendaciones/Recomendaciones";
import Diagnostico from "./components/Diagnostico";
import Historial from "./components/Historial";
import DiagnosticoCrud from "./components/diagnostico/Diagnosticocrud";

function App() {

    const [logueado, setLogueado] = useState(false);
    const [modulo, setModulo] = useState("diagnostico");

    if (!logueado) {
        return <Login onLogin={() => setLogueado(true)} />;
    }

    const renderModulo = () => {

        switch (modulo) {

            case "sintomas":
                return <Sintomas />;

            case "fallas":
                return <Fallas />;

            case "recomendaciones":
                return <Recomendaciones />;

            case "cruddiagnostico":
                return <DiagnosticoCrud />;

            case "historial":
                return <Historial />;

            default:
                return <Diagnostico />;
        }
    };

    return (
        <div>

            <Navbar
                setModulo={setModulo}
                onLogout={() => setLogueado(false)}
            />

            {renderModulo()}

        </div>
    );
}

export default App;