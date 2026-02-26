import AnimatedButton from './AnimatedButton';

export default function About() {
    return (
        <section className="py-24 md:py-32 bg-background-light relative overflow-hidden" id="sobre">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                    {/* Left Column */}
                    <div className="esquerda elemento1 w-full lg:w-1/4 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gray-400 w-8"></div>
                            <span className="text-gray-500 text-sm tracking-widest uppercase">Sobre Marco</span>
                        </div>

                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-8 lg:mt-24 shadow-sm">
                            <img loading="lazy" alt="Marco no campo" className="w-full h-full object-cover" src="/foto-34-opt.webp" />
                        </div>

                        <div>
                            <AnimatedButton href="#atuacao" text="Saiba Mais" />
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="cima elemento2 w-full lg:w-2/4 flex flex-col pt-4 lg:px-8">
                        <h2 className="font-display text-3xl md:text-5xl lg:text-[2.75rem] font-medium text-forest mb-8 leading-[1.2] tracking-tight">
                            Empresário, produtor rural e liderança ativa no agro.
                        </h2>

                        <div className="space-y-6 text-gray-600 font-light leading-relaxed text-base md:text-lg max-w-lg">
                            <p>
                                Empresário, produtor rural e liderança ativa no agro, Marco Elísio construiu sua trajetória a partir da vivência no campo, unindo produção, gestão e visão de futuro.
                            </p>
                            <p>
                                Zootecnista de formação, atua como vice-presidente da Planalto Tratores (Goiás e Tocantins), onde participa diretamente da relação com produtores, da aplicação prática de tecnologias e da expansão de negócios voltados à eficiência e aos resultados.
                            </p>
                            <p>
                                Sua experiência também se traduz em palestras e participações institucionais, onde compartilha reflexões sobre gestão, liderança e continuidade no agro.
                            </p>
                            <p>
                                Sua atuação conecta empresas, entidades e pessoas que pensam o campo no longo prazo, com responsabilidade, propósito e decisão.
                            </p>
                            <div className="pt-6">
                                <span className="font-display italic text-forest text-xl">"O futuro do agro se constrói com gestão eficiente e decisões que permanecem."</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="direita elemento3 w-full lg:w-1/4 mt-8 lg:mt-0">
                        <div className="w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-sm">
                            <img loading="lazy" alt="Retrato Profissional Marco Elísio" className="w-full h-full object-cover object-top" src="/foto-54-opt.webp" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
