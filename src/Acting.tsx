
import { useState } from 'react';
import AnimatedButton from './AnimatedButton';

export default function Acting() {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setOpenCard(openCard === index ? null : index);
    };

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
                    <div
                        className="esquerda elemento2 group relative rounded-[20px] h-[450px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer"
                        onClick={() => toggleCard(0)}
                    >
                        <img loading="lazy" alt="Planalto Tratores" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/foto-33.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                        <div className={`acting-card absolute bottom-2 left-2 right-2 bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ${openCard === 0 ? 'acting-card-open' : ''}`}>
                            <span className="text-[11px] font-bold tracking-[0.15em] text-[#9CA3AF] mb-1 block uppercase">Gestão, Tecnologia e Negócios</span>
                            <div className="flex justify-between items-center">
                                <h3 className="font-display text-2xl font-bold text-[#1a2f20]">Planalto Tratores</h3>
                                <span className={`md:hidden text-primary text-2xl font-light leading-none transition-transform duration-300 ${openCard === 0 ? 'rotate-45' : ''}`}>+</span>
                            </div>
                            <div className={`acting-card-body overflow-hidden transition-all duration-500 ${openCard === 0 ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                                <p className="text-[#6B7280] text-[15px] leading-[1.6]">
                                    Vice-presidência em uma das principais concessionárias Valtra do Brasil, atuando na relação direta com produtores, aplicação de tecnologia no campo e expansão de negócios em Goiás e Tocantins.
                                </p>
                                <div className="mt-4">
                                    <AnimatedButton
                                        text="Ver mais"
                                        href="https://planaltotratores.com.br/"
                                        className="nav-bttn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="cima elemento3 group relative rounded-[20px] h-[450px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer"
                        onClick={() => toggleCard(1)}
                    >
                        <img alt="Assoreval" className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700" src="/assoreval-bg-opt.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                        <div className={`acting-card absolute bottom-2 left-2 right-2 bg-white p-5 rounded-xl shadow-lg transition-all duration-500 ${openCard === 1 ? 'acting-card-open' : ''}`}>
                            <span className="text-[11px] font-bold tracking-[0.15em] text-[#9CA3AF] mb-1 block uppercase">Liderança Institucional</span>
                            <div className="flex justify-between items-center">
                                <h3 className="font-display text-2xl font-bold text-[#1a2f20]">Assoreval</h3>
                                <span className={`md:hidden text-primary text-2xl font-light leading-none transition-transform duration-300 ${openCard === 1 ? 'rotate-45' : ''}`}>+</span>
                            </div>
                            <div className={`acting-card-body overflow-hidden transition-all duration-500 ${openCard === 1 ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                                <p className="text-[#6B7280] text-[14px] leading-[1.6]">
                                    Presidente da Associação Brasileira dos Distribuidores Autorizados Valtra. Atuação na liderança da associação que representa a Rede Valtra, fortalecendo a união entre distribuidores, a governança institucional e o desenvolvimento sustentável da cadeia produtiva.
                                </p>
                                <div className="mt-4">
                                    <AnimatedButton
                                        text="Ver mais"
                                        href="https://assoreval.com.br/"
                                        className="nav-bttn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="direita elemento3 group relative rounded-[20px] h-[450px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer"
                        onClick={() => toggleCard(2)}
                    >
                        <img loading="lazy" alt="Agrovia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/agrovia.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                        <div className={`acting-card absolute bottom-2 left-2 right-2 bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ${openCard === 2 ? 'acting-card-open' : ''}`}>
                            <span className="text-[11px] font-bold tracking-[0.15em] text-[#9CA3AF] mb-1 block uppercase">Conexão e Desenvolvimento</span>
                            <div className="flex justify-between items-center">
                                <h3 className="font-display text-2xl font-bold text-[#1a2f20]">Agrovia Castelo Branco</h3>
                                <span className={`md:hidden text-primary text-2xl font-light leading-none transition-transform duration-300 ${openCard === 2 ? 'rotate-45' : ''}`}>+</span>
                            </div>
                            <div className={`acting-card-body overflow-hidden transition-all duration-500 ${openCard === 2 ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                                <p className="text-[#6B7280] text-[15px] leading-[1.6]">
                                    Presidente da Agrovia Castelo Branco, a maior avenida do agro do Brasil. Atua na integração entre empresas, produtores e serviços, fortalecendo um ecossistema empresarial diverso, com foco em logística, visibilidade e crescimento coletivo do setor.
                                </p>
                                <div className="mt-4">
                                    <AnimatedButton
                                        text="Ver mais"
                                        href="#"
                                        className="nav-bttn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
