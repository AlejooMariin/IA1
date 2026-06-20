import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Facturas from "./pages/Facturas";
import Bitacora from "./pages/Bitacora";

import Navbar from "./components/Navbar";


function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/" />;
}

export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* LOGIN */}
                <Route path="/" element={<Login />} />

                {/* PROTEGIDAS */}
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Navbar />
                        <Dashboard />
                    </PrivateRoute>
                } />

                <Route path="/facturas" element={
                    <PrivateRoute>
                        <Navbar />
                        <Facturas />
                    </PrivateRoute>
                } />

                <Route path="/bitacora" element={
                    <PrivateRoute>
                        <Navbar />
                        <Bitacora />
                    </PrivateRoute>
                } />

            </Routes>

        </BrowserRouter>
    );
}