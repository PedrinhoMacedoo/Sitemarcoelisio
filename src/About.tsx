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
                            Empresário, produtor rural e voz ativa no setor.
                        </h2>

                        <div className="space-y-6 text-gray-600 font-light leading-relaxed text-base md:text-lg max-w-lg">
                            <p>
                                Com uma trajetória marcada pela paixão e dedicação ao campo, Marco Elísio construiu sua carreira pautada na união entre tradição e inovação tecnológica.
                            </p>
                            <p>
                                Zootecnista de formação e produtor rural por vocação, ele entende as dores e as potências de quem vive da terra. Sua liderança vai além da porteira, atuando em frentes que modernizam a gestão e ampliam a representatividade do setor produtivo.
                            </p>
                            <div className="pt-6">
                                <span className="font-display italic text-forest text-xl">"O futuro do agro se planta com gestão eficiente e propósito."</span>
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
