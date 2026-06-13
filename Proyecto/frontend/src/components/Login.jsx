import React, { useState } from "react";
import "./MiFormulario.css";

function Login({ onLogin }) {

  const [usuario, setUsuario] = useState("admin");
  const [password, setPassword] = useState("123");

  const ingresar = () => {

    if(usuario === "admin" && password === "123"){
      onLogin();
    }else{
      alert("Credenciales inválidas");
    }
  };

  return (

    <div className="container">

      <div className="card">

        <h2>Iniciar Sesión</h2>

        <p className="subtitle">
          Sistema Experto de Diagnóstico
        </p>

        <div className="form-group">

          <label>Usuario</label>

          <input
            value={usuario}
            onChange={(e)=>setUsuario(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Contraseña</label>

          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        <button onClick={ingresar}>
          Ingresar
        </button>

      </div>

    </div>
  );
}

export default Login;