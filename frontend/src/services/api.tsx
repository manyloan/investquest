// src/services/api.ts
import axios from 'axios';

// Cria uma instância do Axios com configurações pré-definidas.
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // A URL base do nosso backend
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;