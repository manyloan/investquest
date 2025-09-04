// src/components/auth/AuthModal.tsx
import { loginUser, registerUser } from '../../services/authService';
import type { UserRegistrationRequest } from '../../types';
import Modal from '../common/Modal';
import Input from '../common/Input';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialView?: 'LOGIN' | 'REGISTER';
}

export default function AuthModal({ isOpen, onClose, initialView = 'LOGIN' }: AuthModalProps) {
    const [isLoginView, setIsLoginView] = useState(true);
    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoginView(initialView === 'LOGIN');
    }, [initialView, isOpen]);
    

    // Estados para os campos do formulário
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    // Estados para UX: feedback de carregamento e erro
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const userData: UserRegistrationRequest = { email, password, username };

        try {
            await registerUser(userData);
            alert('Registro bem-sucedido! Por favor, faça o login.');
            setIsLoginView(true); // Muda para a tela de login após o registro
        } catch (err: any) {
            setError(err.response?.data?.message || 'Ocorreu um erro no registro.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await loginUser({ email, password });
            login(response.data.token);
            onClose();
            navigate('/dashboard'); // REDIRECIONA AQUI!
        } catch (err: any) {
            setError(err.response?.data?.message || 'Email ou senha inválidos.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isLoginView ? 'Entrar na sua Conta' : 'Criar Nova Conta'}>
            <form onSubmit={isLoginView ? handleLogin : handleRegister}>
                <div className="space-y-4">
                    {!isLoginView && (
                        <Input
                            label="Nome de Usuário"
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    )}
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Senha"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 disabled:bg-sky-800 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? 'Carregando...' : (isLoginView ? 'Entrar' : 'Registrar')}
                    </button>
                </div>
            </form>

            <div className="mt-4 text-center">
                <button
                    onClick={() => setIsLoginView(!isLoginView)}
                    className="text-sm text-sky-400 hover:text-sky-300"
                >
                    {isLoginView ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Faça o login'}
                </button>
            </div>
        </Modal>
    );
}