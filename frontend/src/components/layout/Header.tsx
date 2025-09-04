import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
    onLoginClick: () => void;
    onRegisterClick: () => void; 
}

export default function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className="bg-slate-800 shadow-md">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-sky-400">InvestQuest</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            // Se o usuário ESTIVER autenticado, mostre isso:
                            <button
                                onClick={logout} // Chama a função de logout do nosso contexto
                                className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Sair
                            </button>
                        ) : (
                            // Se o usuário NÃO ESTIVER autenticado, mostre isso:
                            <>
                                <button
                                    onClick={onLoginClick}
                                    className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Entrar
                                </button>
                                <button
                                    onClick={onRegisterClick}
                                    className="text-white bg-sky-600 hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Registrar
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}