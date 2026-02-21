import React from 'react';

export default function HeroHeader() {
    return (
        <header className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Colheitadeira em campo de trigo ao pôr do sol"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FhZD5Dr0K3fZkqRVgLnJTQ1Yc9EPjyCo5TR8OVlA9FHFbDyd-07LITRy7-AKcTIjRtRORKUdRT1Fz-w-aM16LAUsRFv0gLQJ30YrrjXCVZ_HIprvALb2P9c-b7a5jlqSCzgrM5iD5ipjSN_4ADvYIbJf5NC95bU3nMN4h3xz1_ltQAqMe5ot49H5v4t8sYdbA2j-0FHafhsJeytl9VeqUw0IB6_379cqA9FCaOVe6tNEbTC2-7EWTfD-mZxKOj-NkH5i48l1VkM"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <nav className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-accent rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                        <span className="material-icons text-primary text-2xl">eco</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-xl leading-none tracking-wide">MARCO</span>
                        <span className="text-accent font-bold text-lg leading-none tracking-wide">ELÍSIO</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-12 h-12 rounded-full bg-[#1a3c2f]/80 backdrop-blur-sm text-white font-medium hover:bg-primary transition-colors border border-white/10 flex items-center justify-center">
                        PT
                    </button>
                    <button className="h-12 px-6 rounded-full bg-[#1a3c2f]/80 backdrop-blur-sm text-white font-medium hover:bg-primary transition-colors border border-white/10 flex items-center gap-3">
                        <span>menu</span>
                        <span className="material-icons text-xl">menu</span>
                    </button>
                </div>
            </nav>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-12 md:pb-20 flex flex-col md:flex-row items-end justify-between gap-12 h-full">
                <div className="w-full md:w-3/5 lg:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-md">
                        Liderança estratégica e inovação no agronegócio brasileiro
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed drop-shadow-sm">
                        Transformando desafios em produtividade através de uma gestão focada em resultados e pessoas.
                    </p>
                    <div className="flex items-center gap-3">
                        <button className="h-14 px-8 bg-[#1a4d3a] hover:bg-[#153e2e] text-white rounded-full font-medium transition-colors duration-300 flex items-center justify-center">
                            fale conosco
                        </button>
                        <button className="w-14 h-14 bg-[#1a4d3a] hover:bg-[#153e2e] text-white rounded-full flex items-center justify-center transition-colors duration-300 group">
                            <span className="material-icons transform group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/3 flex justify-end">
                    <div className="glass-card p-8 rounded-3xl w-full max-w-md text-white">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Nossa Missão</span>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed font-light">
                            Ajudamos produtores e empresas do agronegócio a alcançar novos patamares de eficiência, abrindo caminhos sustentáveis para o mercado global.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
