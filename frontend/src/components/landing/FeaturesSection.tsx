import { ChartBarIcon, PuzzlePieceIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

const features = [
    {
        name: 'Aprenda Sem Riscos',
        description: 'Use R$100.000,00 de dinheiro virtual para comprar e vender ações reais sem arriscar seu capital.',
        icon: ChartBarIcon,
    },
    {
        name: 'Desafios e Conquistas',
        description: 'Complete missões, como diversificar sua carteira ou obter seu primeiro lucro, e ganhe medalhas.',
        icon: PuzzlePieceIcon,
    },
    {
        name: 'Competição Saudável',
        description: 'Veja sua posição em rankings e compare seu desempenho com o de outros investidores da plataforma.',
        icon: TrophyIcon,
    },
];

export default function FeaturesSection() {
    return (
        <div className="bg-slate-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} // Anima quando o elemento entra na tela
                    viewport={{ once: true }} // Anima apenas uma vez
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl lg:text-center"
                >
                    <h2 className="text-base font-semibold leading-7 text-sky-400">TUDO EM UM SÓ LUGAR</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Uma plataforma completa para você evoluir
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Combine teoria e prática em um ambiente seguro e motivador. Desenvolva suas habilidades de investimento
                        enquanto se diverte.
                    </p>
                </motion.div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={feature.name} 
                                className="relative pl-16 transition-transform duration-300 hover:scale-105" // 1. Micro-interação de hover
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 * index }} // 2. Efeito cascata
                            >
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}