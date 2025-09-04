// src/components/common/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Este componente recebe outros componentes como "children"
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Se o usuário não estiver autenticado, redireciona para a página inicial
        return <Navigate to="/" replace />;
    }

    // Se estiver autenticado, renderiza o componente filho (a página protegida)
    return <>{children}</>;
};