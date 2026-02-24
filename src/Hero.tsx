

import AnimatedButton from "./AnimatedButton";

export default function Hero() {
    return (
        <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-background-light px-4 pt-2 pb-4 lg:px-10 lg:pt-4 lg:pb-10">
            <div className="relative w-full h-full max-w-screen-2xl overflow-hidden rounded-[20px] lg:rounded-[40px] bg-forest-dark shadow-2xl">
                {/* Background Image */}
                {/* Background Image Wrapper */}
                <div className="absolute top-0 bottom-0 z-0 bg-forest-dark right-0 w-full lg:right-[-35%] lg:w-[135%]">
                    {/* Mobile Image */}
                    <img
                        className="w-full h-full object-cover object-center pointer-events-none absolute inset-0 lg:hidden"
                        src="/hero-mobile.webp"
                        alt="Background Hero Marco Elísio - Mobile"
                    />
                    {/* Desktop Image */}
                    <img
                        className="w-full h-full object-cover object-right pointer-events-none absolute inset-0 hidden lg:block"
                        src="/hero-bg-opt.webp"
                        alt="Background Hero Marco Elísio - Desktop"
                    />
                </div>

                {/* Overlay Component */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 to-black/90 lg:from-black/40 lg:to-black"></div>

                <div className="relative z-10 w-full h-full p-8 lg:p-20 flex flex-col justify-end">
                    <div className="max-w-4xl">
                        <h1 className="esquerda elemento1 font-display text-4xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 md:mb-8 leading-[1] tracking-tight">
                            MARCO ELÍSIO<br />
                            <span className="text-white opacity-70">NUNES CUNHA</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-6 md:mt-8">
                            <div className="baixo elemento2 bg-[#1C1C1C]/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/5 max-w-[600px]">
                                <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                                    Protagonista em iniciativas estratégicas que fortalecem,
                                    inovam e impulsionam o agronegócio brasileiro para o futuro.
                                </p>
                            </div>

                            <div className="direita elemento3 shrink-0 w-full sm:w-auto">
                                <AnimatedButton href="#contato" text="Entre em Contato" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
