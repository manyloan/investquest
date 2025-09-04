// src/pages/DashboardPage.tsx
import { useEffect, useState } from "react";
import { getMyPortfolio } from "../services/portfolioService";
import type { Portfolio } from "../types";

export default function DashboardPage() {
    // Estados para armazenar os dados, o carregamento e possíveis erros.
    const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect para buscar os dados QUANDO o componente é montado na tela.
    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await getMyPortfolio();
                setPortfolio(response.data);
            } catch (err) {
                setError("Não foi possível carregar os dados do portfólio.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPortfolio();
    }, []); // O array vazio [] garante que o useEffect rode apenas UMA VEZ.

    // Renderização condicional com base no estado de carregamento e erro.
    if (isLoading) {
        return <div className="text-center pt-20">Carregando seu dashboard...</div>;
    }

    if (error) {
        return <div className="text-center pt-20 text-red-400">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white">Seu Dashboard</h1>
            </header>

            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-medium text-gray-400">Saldo Virtual</h2>
                <p className="text-4xl font-bold text-sky-400 mt-2">
                    {/* Formata o número para o padrão monetário brasileiro */}
                    {portfolio ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(portfolio.virtualCashBalance) : 'R$ 0,00'}
                </p>
            </div>

            {/* Futuramente, outros componentes do dashboard virão aqui (lista de ações, etc) */}
        </div>
    );
}