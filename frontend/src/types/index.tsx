// src/types/index.ts

// Corresponde ao nosso DTO UserRegistrationRequest no backend
export interface UserRegistrationRequest {
    username?: string; // Opcional, dependendo do seu formulário
    email: string;
    password: string;
}

// Corresponde ao nosso DTO AuthenticationRequest no backend
export interface AuthenticationRequest {
    email: string;
    password: string;
}

// Corresponde ao nosso DTO AuthenticationResponse no backend
export interface AuthenticationResponse {
    token: string;
}