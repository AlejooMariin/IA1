import axios from "axios";

const api = axios.create({
    baseURL: "https://ia1-production.up.railway.app"
});

// Interceptor para JWT
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;