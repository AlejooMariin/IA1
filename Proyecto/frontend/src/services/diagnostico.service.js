import api from "./api";

export const obtenerDiagnosticoRapido = async (
    sintoma
) => {

    const response = await api.get(
        "/diagnostico/rapido",
        {
            params: {
                sintoma
            }
        }
    );

    return response.data;
};

export const obtenerDiagnosticoCompleto = async (
    sintoma
) => {

    const response = await api.get(
        "/diagnostico/completo",
        {
            params: {
                sintoma
            }
        }
    );

    return response.data;
};