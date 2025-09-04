// src/App.tsx
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthModal from "./components/auth/AuthModal";
import Header from "./components/layout/Header";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialView, setInitialView] = useState<'LOGIN' | 'REGISTER'>('LOGIN');
  const { isAuthenticated } = useAuth();

  const openModal = (view: 'LOGIN' | 'REGISTER') => {
    setInitialView(view);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Header onLoginClick={() => openModal('LOGIN')} onRegisterClick={() => openModal('REGISTER')} />

      <Routes>
        <Route path="/" element={!isAuthenticated ? <LandingPage onRegisterClick={() => openModal('REGISTER')} /> : <Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialView={initialView}
      />
    </div>
  )
}

export default App;