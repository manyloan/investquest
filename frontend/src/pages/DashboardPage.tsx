// src/pages/DashboardPage.tsx
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
    const { logout } = useAuth();

    return (
        <div className="container mx-auto pt-10 text-center">
            <h1 className="text-4xl font-bold text-sky-400">Bem-vindo ao seu Dashboard!</h1>
            <p className="mt-4 text-lg text-gray-300">Aqui você verá seu portfólio e poderá operar no mercado.</p>
            <button
                onClick={logout}
                className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
            >
                Fazer Logout
            </button>
        </div>
    );
}