// src/pages/LandingPage.tsx
import FeaturesSection from "../components/landing/FeaturesSection";
import { motion } from 'framer-motion'; // 1. Importe o motion

export default function LandingPage({ onRegisterClick }: { onRegisterClick: () => void }) {
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        {/* 2. Transforme os elementos em componentes de 'motion' */}
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
                            className="mt-10 flex items-center justify-center gap-x-6"
                        >
                            <a href="#" onClick={(e) => { e.preventDefault(); onRegisterClick(); }}
                                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 transition-colors"
                            >
                                Crie sua conta gratuita
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            <FeaturesSection />
        </>
    );
}