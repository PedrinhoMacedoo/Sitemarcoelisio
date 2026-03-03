import { useState } from 'react';

export default function MediaKitSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="py-24 bg-background-light" id="media-kit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl flex items-center min-h-[450px]">
                    {/* Background Image Container */}
                    <div className="absolute inset-0 z-0 bg-[#1A261E]">
                        <img loading="lazy" alt="Mídia Kit Marco Elísio" className="w-full h-full object-cover object-[center_30%] opacity-40 mix-blend-overlay" src="/foto-34-opt.webp" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A261E] via-[#1A261E]/90 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Text Group */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                                <div className="h-px bg-[#7F9042] w-8"></div>
                                <span className="text-[#7F9042] text-sm font-bold tracking-widest uppercase">Imprensa e Parceiros</span>
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-none">
                                Mídia <span className="text-[#7F9042]">Kit</span>
                            </h2>

                            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Acesse uma apresentação detalhada sobre a trajetória, os projetos e a visão estratégica de Marco Elísio. Um documento completo que explora sua liderança no agronegócio e seu compromisso em impulsionar o setor para o futuro.
                            </p>
                        </div>

                        {/* Buttons & Icon Area */}
                        <div className="flex flex-col items-center gap-6 w-full lg:w-auto shrink-0 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl">
                            <div className="w-16 h-16 rounded-full bg-[#7F9042]/20 border border-[#7F9042]/30 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7F9042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                            </div>
                            <div className="flex flex-col flex-wrap justify-center gap-4 w-full sm:flex-row lg:flex-col">
                                {/* Custom AnimatedButton with onClick instead of href */}
                                <button
                                    onClick={openModal}
                                    className="bttn-father"
                                >
                                    <span className="relative z-10 whitespace-nowrap font-bold tracking-wide">ACESSAR MÍDIA KIT</span>
                                    <div className="bttn-child">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff" className="relative z-20">
                                            <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                                        </svg>
                                    </div>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal de Visualização do PDF */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 transition-opacity">
                    <div
                        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header do Modal */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#1A261E]">
                            <h3 className="text-white font-display font-medium text-lg">Visualização do Mídia Kit</h3>
                            <div className="flex items-center gap-4">
                                <a
                                    href="/media-kit.pdf?v=2"
                                    download="Media-Kit-Marco-Elisio.pdf"
                                    className="flex items-center gap-2 text-sm font-semibold text-white bg-[#7F9042] hover:bg-[#687432] px-4 py-2 rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" x2="12" y1="15" y2="3" />
                                    </svg>
                                    Baixar PDF
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Corpo do Modal (iframe do PDF) */}
                        <div className="flex-1 bg-gray-100 w-full relative">
                            <iframe
                                src="/media-kit.pdf?v=2#toolbar=0"
                                className="w-full h-full border-none absolute inset-0"
                                title="Mídia Kit PDF"
                            />
                        </div>
                    </div>
                    {/* Botão de fechar clicando fora do modal (overlay) */}
                    <div className="absolute inset-0 -z-10 cursor-pointer" onClick={closeModal}></div>
                </div>
            )}
        </section>
    );
}
