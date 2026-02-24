
export default function Acting() {
    return (
        <section className="py-24 md:py-32 bg-background-light relative overflow-hidden" id="atuacao">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="cima elemento1 mb-16 max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-gray-400 w-8"></div>
                        <span className="text-gray-500 text-sm tracking-widest uppercase">Empreendedorismo</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-medium text-forest leading-[1.1] tracking-tight">
                        Liderança Corporativa <br className="hidden md:block" /> e Institucional
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">
                    {/* Card 1 */}
                    <div className="esquerda elemento2 group relative rounded-[20px] h-[450px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img loading="lazy" alt="Planalto Tratores" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/foto-33.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                        <div className="absolute bottom-2 left-2 right-2 bg-white p-6 rounded-xl shadow-lg transform translate-y-0 transition-transform duration-300">
                            <span className="text-[11px] font-bold tracking-[0.15em] text-[#9CA3AF] mb-3 block uppercase">Tecnologia & Máquinas</span>
                            <h3 className="font-display text-2xl font-bold text-[#1a2f20] mb-3">Planalto Tratores</h3>
                            <p className="text-[#6B7280] text-[15px] leading-[1.6]">
                                Concessionária referência, levando tecnologia <br className="hidden sm:block" />
                                de ponta e maquinário eficiente para <br className="hidden sm:block" />
                                impulsionar a produtividade no campo.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="cima elemento3 group relative rounded-[20px] h-[450px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img alt="Assoreval" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="/assoreval-bg-opt.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                        <div className="absolute bottom-2 left-2 right-2 bg-white p-6 rounded-xl shadow-lg transform translate-y-0 transition-transform duration-300">
                            <span className="text-[11px] font-bold tracking-[0.15em] text-[#9CA3AF] mb-3 block uppercase">Representação & Classe</span>
                            <h3 className="font-display text-2xl font-bold text-[#1a2f20] mb-3">Assoreval</h3>
                            <p className="text-[#6B7280] text-[15px] leading-[1.6]">
                                Atuação estratégica na associação, <br className="hidden sm:block" />
                                defendendo os interesses dos produtores <br className="hidden sm:block" />
                                rurais e fortalecendo a união.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="direita elemento3 group relative rounded-[20px] h-[450px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img loading="lazy" alt="Agrovia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/agrovia.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                        <div className="absolute bottom-2 left-2 right-2 bg-white p-6 rounded-xl shadow-lg transform translate-y-0 transition-transform duration-300">
                            <span className="text-[11px] font-bold tracking-[0.15em] text-[#9CA3AF] mb-3 block uppercase">Infraestrutura</span>
                            <h3 className="font-display text-2xl font-bold text-[#1a2f20] mb-3">Agrovia</h3>
                            <p className="text-[#6B7280] text-[15px] leading-[1.6]">
                                Logística conectada, garantindo que a <br className="hidden sm:block" />
                                produção chegue ao destino com eficiência <br className="hidden sm:block" />
                                na rodovia Castelo Branco.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
