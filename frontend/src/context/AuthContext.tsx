import { createContext, useState, useContext, useEffect  } from 'react';
import type { ReactNode } from 'react';
import { setAuthToken } from '../services/api';


interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        setAuthToken(token);
    }, [token])

    const login = (newToken: string) => {
        setToken(newToken);
        // Futuramente, aqui também salvaremos dados do usuário, se quisermos.
    };

    const logout = () => {
        setToken(null);
        // Limpa qualquer outra informação de usuário que tivermos
        localStorage.removeItem('authToken');
    };

    const value = {
        isAuthenticated: !!token, // Converte a string do token para um booleano (true se houver token, false se não)
        token,

        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}