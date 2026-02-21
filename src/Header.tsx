
export default function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tighter text-forest flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
                    ARIMEX <span className="text-primary font-medium text-lg pt-1">AGRO</span>
                </div>
                <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-forest/80">
                    <a className="hover:text-primary transition-colors" href="#crops">Products</a>
                    <a className="hover:text-primary transition-colors" href="#polymers">Polymers</a>
                    <a className="hover:text-primary transition-colors" href="#routes">Logistics</a>
                    <a
                        className="px-6 py-2.5 bg-forest text-white rounded-full font-medium hover:bg-primary transition-colors flex items-center gap-2"
                        href="#contact"
                    >
                        Contact Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-forest">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </nav>
    );
}
