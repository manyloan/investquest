// src/App.tsx
import { useState } from "react";
import AuthModal from "./components/auth/AuthModal";
import Header from "./components/layout/Header";

function App() {
  // Estado para controlar se o modal está aberto ou fechado
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    // Container principal da nossa aplicação
    <div className="bg-slate-900 min-h-screen text-white">

      <Header onLoginClick={handleOpenAuthModal} /> 

      <main className="container mx-auto text-center pt-20">
        <h1 className="text-5xl font-bold text-sky-400">InvestQuest</h1>
        <p className="mt-2 text-lg text-slate-300">Sua jornada gamificada no mundo dos investimentos.</p>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  )
}

export default App;