import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'História - AAG',
    description: 'A história da Associação Anti Giba',
};

export default function Historia() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
            <Header />

            {/* Conteúdo Principal */}
            <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 md:py-16">
                {/* Título Principal */}
                <div className="mb-8 text-center sm:mb-12">
                    <h1 className="mb-3 px-4 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl">
                        ASSOCIAÇÃO ANTI-GIBA (AAG)
                    </h1>
                    <p className="px-4 text-base text-red-400 italic sm:text-lg md:text-xl">
                        "Unidos contra o terror desde 2016"
                    </p>
                </div>

                {/* A Origem */}
                <div className="mb-6 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-lg sm:mb-8 sm:rounded-xl sm:p-8">
                    <h2 className="mb-3 text-2xl font-bold text-red-400 sm:mb-4 sm:text-3xl">
                        A ORIGEM DA AAG
                    </h2>
                    <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                        Tudo começou quando percebemos um padrão perturbador.
                        Enquanto a história registra vilões icônicos como Darth
                        Vader, Voldemort e Thanos, nenhum deles se compara à
                        trajetória de caos deixada por Giba.
                    </p>
                </div>

                {/* O Dossiê */}
                <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-6 backdrop-blur-lg sm:mb-8 sm:rounded-xl sm:p-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-red-400 sm:mb-6 sm:text-3xl">
                        O DOSSIÊ GIBA: CRIMES CONTRA A HUMANIDADE
                    </h2>

                    {/* Crime 1 */}
                    <div className="mb-4 rounded-lg border border-white/10 bg-black/30 p-4 sm:mb-6 sm:p-6">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                            🍕 Operação Pizza Fria (2019)
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                            Enquanto Loki tentava conquistar a Terra com um
                            exército Chitauri, Giba simplesmente comeu a última
                            fatia de pizza durante o jogo sem perguntar se
                            alguém queria. Especialistas confirmam: mais cruel
                            que estalar dedos.
                        </p>
                    </div>

                    {/* Crime 2 */}
                    <div className="mb-4 rounded-lg border border-white/10 bg-black/30 p-4 sm:mb-6 sm:p-6">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                            📺 O Incidente do Spoiler (2021)
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                            Sauron levou três filmes para conseguir o Um Anel.
                            Giba levou três segundos para dar spoiler do final
                            da série que todo mundo estava assistindo. No grupo
                            do WhatsApp. Sem aviso prévio.
                        </p>
                    </div>

                    {/* Crime 3 */}
                    <div className="mb-4 rounded-lg border border-white/10 bg-black/30 p-4 sm:mb-6 sm:p-6">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                            🥩 A Grande Traição do Churrasco (2022)
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                            O Coringa apenas queria ver o mundo pegar fogo. Giba
                            combinou churrasco na casa dele e depois mudou para
                            outro lugar sem avisar a galera. Duas pessoas
                            chegaram na casa vazia. Uma delas estava em jejum.
                        </p>
                    </div>

                    {/* Crime 4 */}
                    <div className="mb-4 rounded-lg border border-white/10 bg-black/30 p-4 sm:mb-6 sm:p-6">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                            ⏰ Operação "Já Vou" (Data: Todo Fim de Semana)
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                            Thanos eliminou metade do universo com uma
                            finalidade. Giba diz "já vou sair" e demora 2 horas
                            para aparecer. Sem finalidade alguma. Pura maldade
                            gratuita.
                        </p>
                    </div>

                    {/* Crime 5 */}
                    <div className="mb-4 rounded-lg border border-white/10 bg-black/30 p-4 sm:mb-6 sm:p-6">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                            💸 O Golpe do Racha (2023)
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                            Walter White construiu um império das drogas. Giba
                            "esqueceu" a carteira no dia do racha e nunca mais
                            tocou no assunto. O império do calote permanece
                            imbatível.
                        </p>
                    </div>

                    {/* Crime 6 */}
                    <div className="rounded-lg border border-white/10 bg-black/30 p-4 sm:p-6">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                            👻 A Mensagem Fantasma (Diariamente)
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                            Pennywise aparece a cada 27 anos para aterrorizar.
                            Giba visualiza mensagem, fica online 40 minutos, e
                            não responde. Reaparece 3 dias depois com "opa, não
                            vi". Mais assustador que qualquer palhaço assassino.
                        </p>
                    </div>
                </div>

                {/* Manifesto */}
                <div className="mb-6 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-lg sm:mb-8 sm:rounded-xl sm:p-8">
                    <h2 className="mb-3 text-center text-2xl font-bold text-red-400 sm:mb-4 sm:text-3xl">
                        MANIFESTO DA AAG
                    </h2>
                    <p className="text-center text-base leading-relaxed text-white/90 sm:text-lg">
                        Enquanto o mundo se preocupa com Voldermorts e Darth
                        Vaders, nós sabemos a verdade: o verdadeiro vilão está
                        entre nós, provavelmente atrasado para algo neste exato
                        momento.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-600/20 to-red-800/20 p-6 text-center backdrop-blur-lg sm:rounded-xl sm:p-8">
                    <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                        JUNTE-SE À RESISTÊNCIA
                    </h2>
                    <p className="mb-4 text-lg text-red-400 italic sm:mb-6 sm:text-xl">
                        "Porque alguém precisa fazer alguma coisa"
                    </p>
                    <button
                        disabled
                        className="w-full cursor-not-allowed rounded-full bg-gray-600 px-8 py-3 text-base font-bold text-white/50 shadow-lg sm:w-auto sm:px-12 sm:py-4 sm:text-lg"
                    >
                        Em Breve?
                    </button>
                </div>
            </div>
        </div>
    );
}
