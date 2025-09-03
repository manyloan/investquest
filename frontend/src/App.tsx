// src/App.tsx
import { useState } from "react";
import AuthModal from "./components/auth/AuthModal";

function App() {
  // Estado para controlar se o modal está aberto ou fechado
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    // Container principal da nossa aplicação
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">

      <header className="text-center">
        <h1 className="text-5xl font-bold text-sky-400">InvestQuest</h1>
        <p className="mt-2 text-lg text-slate-300">Sua jornada gamificada no mundo dos investimentos.</p>
      </header>

      <main className="mt-8">
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
        >
          Começar
        </button>
      </main>

      {/* O componente do Modal de Autenticação */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

    </div>
  )
}

export default App;