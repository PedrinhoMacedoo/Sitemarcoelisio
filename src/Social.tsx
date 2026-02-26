import AnimatedButton from './AnimatedButton';

export default function Social() {
    return (
        <section className="py-12 md:py-24 bg-background-light" id="social">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl overflow-hidden shadow-sm flex items-center min-h-[500px]">

                    {/* Background Image Container */}
                    <div className="absolute inset-0 z-0">
                        <img loading="lazy" alt="Horta comunitária" className="w-full h-full object-cover object-center" src="/horta-social.webp" />
                        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div> {/* Fallback overlay for mobile */}
                    </div>

                    {/* Content Card over the background */}
                    <div className="cima elemento1 relative z-10 w-full md:w-1/2 p-6 md:p-12 lg:ml-12">
                        <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl border border-gray-100/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-gray-400 w-8"></div>
                                <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Responsabilidade Social</span>
                            </div>

                            <h2 className="font-display text-4xl font-bold text-forest mb-6 tracking-tight leading-[1.1]">
                                Projeto Horta Social
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                                O Projeto Horta Social é uma iniciativa do Instituto APNF que traduz, na prática, o compromisso do agronegócio com a transformação social. Mais do que produzir alimentos, o projeto promove dignidade, educação e fortalecimento comunitário por meio do cultivo sustentável.
                            </p>

                            <ul className="space-y-4 text-gray-600 mb-8 text-sm md:text-base font-medium">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#65a30d] mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Segurança alimentar para comunidades em situação de vulnerabilidade.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#65a30d] mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Educação ambiental e nutricional aplicada.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#65a30d] mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Integração comunitária e fortalecimento de vínculos por meio do cultivo coletivo.</span>
                                </li>
                            </ul>

                            <AnimatedButton href="https://institutoapnf.org/" text="Apoie o Projeto" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
