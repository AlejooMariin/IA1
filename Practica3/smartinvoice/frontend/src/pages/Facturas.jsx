import { useEffect, useState } from "react";
import api from "../services/api";
import {
    FiUpload,
    FiCpu,
    FiFileText,
    FiX,
    FiLoader,
    FiLayers
} from "react-icons/fi";

export default function Facturas() {

    const [facturas, setFacturas] = useState([]);
    const [selectedFactura, setSelectedFactura] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // 🔥 NUEVO: batch mode
    const [modoBatch, setModoBatch] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [loading, setLoading] = useState(false);

    const [modal, setModal] = useState({
        show: false,
        title: "",
        message: ""
    });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await api.get("/facturas");
        setFacturas(res.data);
    };

    // =========================
    // UPLOAD NORMAL
    // =========================
    const upload = async () => {

        if (!selectedFile) return;

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("archivo", selectedFile);

            await api.post(`/facturas/${selectedFactura}/upload`, formData);

            setModal({
                show: true,
                title: "Upload OK",
                message: "Archivo subido correctamente"
            });

            load();

        } finally {
            setLoading(false);
        }
    };

    // =========================
    // OCR NORMAL
    // =========================
    const procesarYCrear = async () => {

        if (!selectedFactura) return;

        try {
            setLoading(true);

            const res = await api.post(
                `/facturas/procesar-y-crear/${selectedFactura}`
            );

            setModal({
                show: true,
                title: "Factura creada",
                message: `
                Número: ${res.data.ocr.numero}
                Total: ${res.data.ocr.total}
                NIT: ${res.data.ocr.nit}
                `
            });

            load();

        } finally {
            setLoading(false);
        }
    };

    // =========================
    // RPA BATCH
    // =========================
    const procesarBatch = async () => {

        if (!selectedFiles.length) return;

        try {
            setLoading(true);

            const formData = new FormData();

            for (let file of selectedFiles) {
                formData.append("archivos", file);
            }

            const res = await api.post("/facturas/rpa/batch-crear", formData);

            setModal({
                show: true,
                title: "Batch completado",
                message: JSON.stringify(res.data.resultados, null, 2)
            });

            load();

        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20 }}>

            <h1>
                <FiFileText style={{ marginRight: 6 }} />
                Facturas
            </h1>

            {/* =========================
                PANEL ACCIONES
            ========================= */}
            <div style={{
                background: "#f3f4f6",
                padding: 10,
                marginBottom: 20
            }}>

                {/* SWITCH BATCH */}
                <label style={{ marginRight: 10 }}>
                    <input
                        type="checkbox"
                        checked={modoBatch}
                        onChange={(e) => setModoBatch(e.target.checked)}
                    />
                    <FiLayers style={{ marginLeft: 5, marginRight: 5 }} />
                    Modo Batch (RPA)
                </label>

                {/* =========================
                    MODO NORMAL
                ========================= */}
                {!modoBatch && (
                    <>
                        <select
                            onChange={(e) => setSelectedFactura(e.target.value)}
                        >
                            <option value="">Seleccionar factura</option>
                            {facturas.map(f => (
                                <option key={f.id} value={f.id}>
                                    Factura #{f.id}
                                </option>
                            ))}
                        </select>

                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />

                        <button onClick={upload} disabled={loading}>
                            <FiUpload style={{ marginRight: 5 }} />
                            Upload
                        </button>

                        <button onClick={procesarYCrear} disabled={loading}>
                            <FiCpu style={{ marginRight: 5 }} />
                            OCR + Crear
                        </button>
                    </>
                )}

                {/* =========================
                    MODO BATCH
                ========================= */}
                {modoBatch && (
                    <>
                        <input
                            type="file"
                            multiple
                            onChange={(e) =>
                                setSelectedFiles(Array.from(e.target.files))
                            }
                        />

                        <button onClick={procesarBatch} disabled={loading}>
                            <FiLayers style={{ marginRight: 5 }} />
                            Procesar Lote
                        </button>
                    </>
                )}

            </div>

            {/* LOADER */}
            {loading && (
                <p>
                    <FiLoader className="spin" style={{ marginRight: 6 }} />
                    Procesando...
                </p>
            )}

            {/* MODAL */}
            {modal.show && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <div style={{
                        background: "white",
                        padding: 20,
                        maxWidth: 500
                    }}>

                        <h3>{modal.title}</h3>
                        <pre style={{ whiteSpace: "pre-wrap" }}>
                            {modal.message}
                        </pre>

                        <button
                            onClick={() =>
                                setModal({ ...modal, show: false })
                            }
                        >
                            <FiX style={{ marginRight: 5 }} />
                            Cerrar
                        </button>

                    </div>
                </div>
            )}

            {/* TABLA */}
            <table width="100%" border="1">
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Fecha</th>
                        <th>Proveedor</th>
                        <th>NIT</th>
                        <th>Subtotal</th>
                        <th>Impuestos</th>
                        <th>Total</th>
                        <th>Estado</th>
                    </tr>
                </thead>

                <tbody>
                    {facturas.map((f, index) => (
                        <tr key={index}>
                            <td>{f.numero_factura}</td>
                            <td>{f.fecha}</td>
                            <td>{f.proveedor_nombre}</td>
                            <td>{f.nit}</td>
                            <td>{f.subtotal}</td>
                            <td>{f.impuestos}</td>
                            <td>{f.total}</td>
                            <td>{f.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

const styles = {

    container: {
        padding: "20px"
    },

    panel: {
        backgroundColor: "#f3f4f6",
        padding: "10px",
        marginBottom: "15px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
    },

    loader: {
        padding: "10px",
        backgroundColor: "#fef3c7",
        marginBottom: "10px",
        borderRadius: "6px"
    },

    modalBackdrop: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    modal: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "400px"
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "15px"
    },
    th: {
        backgroundColor: "#1f2937",
        color: "white",
        padding: "10px"
    },
    td: {
        padding: "10px",
        borderBottom: "1px solid #ddd"
    }
};