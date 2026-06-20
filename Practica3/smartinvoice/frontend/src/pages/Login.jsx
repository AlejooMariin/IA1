import { useState, useEffect } from "react";
import api from "../services/api";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const res = await api.post("auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.access_token);

            window.location.href = "/dashboard";

        } catch (err) {
            alert("Error en login");
        }
    };

    useEffect(() => {
        setEmail("Alejo@example.com");
        setPassword("Alejo123");        
    }, []);

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>
                Iniciar sesión
            </button>
        </div>
    );
}