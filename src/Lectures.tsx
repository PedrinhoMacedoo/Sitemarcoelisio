
export default function Lectures() {
    return (
        <section className="py-24 md:py-32 bg-background-light relative overflow-hidden" id="palestras">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left side: Large Image */}
                    <div className="esquerda elemento1 w-full lg:w-1/2">
                        <div className="w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-sm">
                            <img loading="lazy" alt="Palestra Marco Elísio" className="w-full h-full object-cover" src="/palestras.webp" />
                        </div>
                    </div>

                    {/* Right side: Accordion Text */}
                    <div className="direita w-full lg:w-1/2 flex flex-col pt-8 lg:px-4">
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-gray-400 w-8"></div>
                                <span className="text-gray-500 text-sm tracking-widest uppercase">Soluções & Palestras</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest leading-[1.15] tracking-tight">
                                Conteúdo que transforma a visão do agro
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            {/* Accordion Item 1 */}
                            <div className="elemento1 accordion-item border-b border-gray-200 py-6 cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <span className="text-gray-400 font-display text-xl w-6">1.</span>
                                        <h3 className="font-display text-2xl text-forest group-hover:text-primary transition-colors duration-300">Gestão Estratégica</h3>
                                    </div>
                                    <span className="text-gray-400 font-light text-2xl transition-transform duration-300 group-hover:rotate-45">+</span>
                                </div>
                                <div className="accordion-content">
                                    <p className="pl-12 pt-4 text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-lg">
                                        Como profissionalizar a administração rural para maximizar resultados e garantir a sustentabilidade do negócio a longo prazo.
                                    </p>
                                </div>
                            </div>

                            {/* Accordion Item 2 */}
                            <div className="elemento2 accordion-item border-b border-gray-200 py-6 cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <span className="text-gray-400 font-display text-xl w-6">2.</span>
                                        <h3 className="font-display text-2xl text-forest group-hover:text-primary transition-colors duration-300">Liderança com Propósito</h3>
                                    </div>
                                    <span className="text-gray-400 font-light text-2xl transition-transform duration-300 group-hover:rotate-45">+</span>
                                </div>
                                <div className="accordion-content">
                                    <p className="pl-12 pt-4 text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-lg">
                                        Construindo equipes engajadas e alinhadas aos valores do campo, focando na produtividade através da valorização humana.
                                    </p>
                                </div>
                            </div>

                            {/* Accordion Item 3 */}
                            <div className="elemento3 accordion-item border-b border-gray-200 py-6 cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <span className="text-gray-400 font-display text-xl w-6">3.</span>
                                        <h3 className="font-display text-2xl text-forest group-hover:text-primary transition-colors duration-300">Sucessão Familiar</h3>
                                    </div>
                                    <span className="text-gray-400 font-light text-2xl transition-transform duration-300 group-hover:rotate-45">+</span>
                                </div>
                                <div className="accordion-content">
                                    <p className="pl-12 pt-4 text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-lg">
                                        Preparando as novas gerações para os desafios do agronegócio moderno, mantendo o legado e integrando inovação.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
