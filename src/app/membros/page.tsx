import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Membros - AAG',
    description: 'Membros da Associação Anti Giba',
};

export default function Membros() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
            <Header />

            {/* Conteúdo Principal */}
            <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 md:py-16">
                {/* Título */}
                <div className="mb-8 text-center sm:mb-12">
                    <h1 className="mb-3 px-4 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl">
                        Membros da AAG
                    </h1>
                    <p className="text-base text-white/70 sm:text-lg md:text-xl">
                        A diretoria que lidera a resistência
                    </p>
                </div>

                {/* Diretoria */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 sm:gap-8 md:grid-cols-2">
                    {/* Presidente */}
                    <div className="transform rounded-lg border border-red-500/30 bg-gradient-to-br from-red-600/20 to-red-800/20 p-6 text-center backdrop-blur-lg transition hover:scale-105 sm:rounded-xl sm:p-8">
                        <div className="mb-4">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-500 bg-red-600/30 sm:h-32 sm:w-32">
                                <span className="text-5xl sm:text-6xl">👑</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
                                PRESIDENTE
                            </span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                            Gustavo Pontes de Sousa
                        </h2>
                        <p className="text-sm text-white/70 italic sm:text-base">
                            Fundador e líder supremo da resistência
                        </p>
                    </div>

                    {/* Vice Presidente */}
                    <div className="transform rounded-lg border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg transition hover:scale-105 sm:rounded-xl sm:p-8">
                        <div className="mb-4">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-500 bg-slate-600/30 sm:h-32 sm:w-32">
                                <span className="text-5xl sm:text-6xl">🛡️</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="mb-3 inline-block rounded-full bg-slate-600 px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
                                VICE-PRESIDENTE
                            </span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                            André Negão
                        </h2>
                        <p className="text-sm text-white/70 italic sm:text-base">
                            Braço direito e guardião da ordem
                        </p>
                    </div>
                </div>

                {/* Seção de Membros */}
                <div className="rounded-lg border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg sm:rounded-xl sm:p-8">
                    <h2 className="mb-3 text-2xl font-bold text-red-400 sm:mb-4 sm:text-3xl">
                        Membros Honorários
                    </h2>
                    <p className="mb-4 text-sm text-white/80 sm:mb-6 sm:text-base">
                        A AAG continua crescendo. Cada novo membro fortalece
                        nossa causa contra o terror.
                    </p>
                    <button
                        disabled
                        className="w-full cursor-not-allowed rounded-full bg-gray-600 px-8 py-3 text-base font-bold text-white/50 shadow-lg sm:w-auto sm:px-12 sm:py-4 sm:text-lg"
                    >
                        Em Breve?
                    </button>
                </div>

                {/* Frase motivacional */}
                <div className="mt-8 px-4 text-center sm:mt-12">
                    <p className="text-lg text-white/60 italic sm:text-xl md:text-2xl">
                        "Juntos somos imbatíveis. Separados, esperamos pelo
                        Giba."
                    </p>
                </div>
            </div>
        </div>
    );
}
