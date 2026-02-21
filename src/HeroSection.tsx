
export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Marco Elísio in a modern plantation field"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA63bM4-biIkRUX89h8UMq2u4rXqKd9wkbqTxVFONYs_aKtpe4GNQ1J-T3aGYQL5A9tLSqVoNMoDEHrjp6WlIFCW3128nJs23LNDPEU3fUqw6tzHc16GU3oXJOc4z2BlzaFN__5PObYCClrlF-hXq4xrB1tMmcsDuElUDkkPZHKe-m4vbo7fm3ofUMGjTkRRMWrB-26mG9WmIHSIgCEBxCCpaxTR_uEmmqQbBUpaF1yt_WDMvT7VvHamJ4L0hfSnF3qvQjrpe6qHDw"
                />
                <div className="absolute inset-0 hero-gradient"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl">
                    <span className="inline-block py-1 px-3 bg-primary/20 border border-primary/30 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Agribusiness Leader & Speaker
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                        MARCO ELÍSIO <br />NUNES CUNHA
                    </h1>
                    <p className="text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
                        Transformando o agronegócio brasileiro através da tecnologia, gestão estratégica e compromisso social.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            className="bg-primary text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-2"
                            href="#"
                        >
                            Leve minha palestra para seu evento <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a
                            className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                            href="#"
                        >
                            Conhecer Trajetória
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-6 text-white/40 hidden lg:block">
                <p className="text-right text-sm font-medium vertical-rl rotate-180 uppercase tracking-widest">
                    Inovação • Tecnologia • Sustentabilidade
                </p>
            </div>
        </section>
    );
}
