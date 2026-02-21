
export default function BannerSection() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop"
                        alt="Tractor in field"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-12 left-12 right-12 md:bottom-16 md:left-16 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl text-white font-light leading-snug mb-8">
                            <strong className="font-bold">ARIMEX AGRO</strong> ensures the export of Ukrainian products — from volume search to logistics and shipment.
                        </h2>
                        <a href="#" className="inline-flex items-center gap-2 bg-forest/80 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-primary hover:text-forest transition-colors font-medium border border-white/20">
                            About us <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
