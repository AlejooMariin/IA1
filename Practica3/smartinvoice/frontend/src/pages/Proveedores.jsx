import { useEffect, useState } from "react";
import api from "../services/api";

export default function Proveedores() {

    const [proveedores, setProveedores] = useState([]);
    const [form, setForm] = useState({
        nombre: "",
        nit: "",
        direccion: ""
    });

    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await api.get("/proveedores");
        setProveedores(res.data);
    };

    const save = async () => {
        setLoading(true);

        try {
            if (editId) {
                await api.put(`/proveedores/${editId}`, form);
            } else {
                await api.post("/proveedores", form);
            }

            setForm({ nombre: "", nit: "", direccion: "" });
            setEditId(null);
            load();
        } finally {
            setLoading(false);
        }
    };

    const edit = (p) => {
        setForm(p);
        setEditId(p.id);
    };

    const remove = async (id) => {
        await api.delete(`/proveedores/${id}`);
        load();
    };

    return (
        <div style={{ padding: 20 }}>

            <h2>Proveedores</h2>

            <div style={{ marginBottom: 10 }}>
                <input
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />

                <input
                    placeholder="NIT"
                    value={form.nit}
                    onChange={(e) => setForm({ ...form, nit: e.target.value })}
                />

                <input
                    placeholder="Dirección"
                    value={form.direccion}
                    onChange={(e) => setForm({ ...form, direccion: e.target.value })}
                />

                <button onClick={save} disabled={loading}>
                    {editId ? "Actualizar" : "Crear"}
                </button>
            </div>

            {loading && <p>Cargando...</p>}

            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>NIT</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {proveedores.map(p => (
                        <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.nit}</td>
                            <td>{p.direccion}</td>
                            <td>
                                <button onClick={() => edit(p)}>Editar</button>
                                <button onClick={() => remove(p.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}