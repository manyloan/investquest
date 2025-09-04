// src/pages/LandingPage.tsx
import FeaturesSection from "../components/landing/FeaturesSection";
import { motion } from 'framer-motion';
import heroIllustration from '../assets/hero-illustration.svg'; // 1. Importe a ilustração

export default function LandingPage({ onRegisterClick }: { onRegisterClick: () => void }) {
    return (
        <>
            {/* Hero Section Aprimorada */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* 2. Usamos um grid para criar o layout de duas colunas em telas grandes */}
                <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 grid lg:grid-cols-2 lg:gap-x-8 items-center">

                    {/* Coluna de Texto */}
                    <div className="text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                        >
                            Domine o mercado de ações, <span className="text-sky-400">sem arriscar seu dinheiro</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-gray-300"
                        >
                            InvestQuest é a sua plataforma de simulação de investimentos. Aprenda, compita e evolua em uma
                            jornada gamificada e totalmente segura.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
                        >
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); onRegisterClick(); }}
                                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 transition-colors"
                            >
                                Crie sua conta gratuita
                            </a>
                        </motion.div>
                    </div>

                    {/* Coluna da Imagem */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16 lg:mt-0"
                    >
                        <img src={heroIllustration} alt="Ilustração de investimento" className="w-full h-auto" />
                    </motion.div>

                </div>
            </div>

            <FeaturesSection />
        </>
    );
}