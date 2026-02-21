

import AnimatedButton from "./AnimatedButton";

export default function NavBar() {
    return (
        <nav className="fixed top-6 lg:top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div className="px-6 lg:px-10">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-forest-dark rounded-xl flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-white text-2xl select-none">agriculture</span>
                        </div>
                        <span className="font-display font-bold text-lg lg:text-xl text-forest-dark tracking-tighter uppercase whitespace-nowrap">MARCO ELÍSIO</span>
                    </div>
                    <div className="hidden md:flex space-x-10 items-center">
                        <a className="text-forest-dark/70 hover:text-forest-dark transition-colors text-sm font-bold uppercase tracking-widest" href="#sobre">Sobre</a>
                        <a className="text-forest-dark/70 hover:text-forest-dark transition-colors text-sm font-bold uppercase tracking-widest" href="#atuacao">Atuação</a>
                        <a className="text-forest-dark/70 hover:text-forest-dark transition-colors text-sm font-bold uppercase tracking-widest" href="#social">Social</a>
                        <div className="hidden lg:block">
                            <AnimatedButton href="#contato" text="Contato" className="nav-bttn" />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-forest-dark p-2">
                        <span className="material-symbols-outlined text-2xl">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
