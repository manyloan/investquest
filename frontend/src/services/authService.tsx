// src/services/authService.ts
import apiClient from './api';
import type { UserRegistrationRequest, AuthenticationRequest, AuthenticationResponse } from '../types';

export const registerUser = (data: UserRegistrationRequest) => {
    return apiClient.post('/auth/register', data);
};

export const loginUser = (data: AuthenticationRequest) => {
    // O Axios espera o tipo da resposta como um "generic"
    return apiClient.post<AuthenticationResponse>('/auth/login', data);
};