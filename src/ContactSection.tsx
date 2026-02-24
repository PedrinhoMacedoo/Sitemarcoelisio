import AnimatedButton from './AnimatedButton';

export default function ContactSection() {
    return (
        <>
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative bg-forest rounded-[40px] p-12 md:p-20 overflow-hidden text-center">
                        <div className="absolute inset-0 z-0">
                            <img
                                alt="Agro sunset background"
                                className="w-full h-full object-cover opacity-20"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6c6dmwFjIbJp0f3tEwyjI5KFBMzLxHLa38vWuS1nsr7QSpbXYktCwsjNFuuRiC480EkQ5GUmlP_RymUTjPM2uA5inCDpYZmc1vNnohRtBOZERCwmXrxZeBCVYwGU-KP_5Lg-V75N8xq9QphScitrnf_qUwhtZUr1WAEi7ayytespfqGajiEgaenE1PGK-cE-MSudyiGsh2_kWjqW91EkGoV8bjb8mcZWX9C-vnFniT9yOZYSyZFzQQ2v5gjzDVhkYj2vqpknDCk8"
                            />
                        </div>
                        <div className="cima elemento2 relative z-10 max-w-2xl mx-auto">
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <div className="h-[1px] w-12 bg-primary"></div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Contato Profissional</span>
                                <div className="h-[1px] w-12 bg-primary"></div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Pronto para transformar seu evento?</h2>
                            <p className="text-white/70 text-lg mb-12">
                                Leve uma palestra inspiradora e técnica sobre o futuro do agronegócio para sua empresa ou conferência.
                            </p>
                            <div className="flex justify-center w-full mt-4">
                                <AnimatedButton href="mailto:contato@marcorelisio.com" text="Fale com a equipe" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-forest pt-24 pb-12 text-white" id="contato">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        <div className="lg:col-span-1">
                            <div className="text-3xl font-black tracking-tighter mb-6">MARCO <span className="text-primary">ELÍSIO</span></div>
                            <p className="text-white/60 leading-relaxed mb-8">
                                Líder no agronegócio, gestor estratégico e voz ativa na transformação digital do campo brasileiro.
                            </p>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" href="#">
                                    <span className="material-symbols-outlined text-sm group-hover:text-forest">link</span>
                                </a>
                                <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" href="#">
                                    <span className="material-symbols-outlined text-sm group-hover:text-forest">share</span>
                                </a>
                                <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" href="#">
                                    <span className="material-symbols-outlined text-sm group-hover:text-forest">hub</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-8">Links Rápidos</h4>
                            <ul className="space-y-4 text-white/60">
                                <li><a className="hover:text-primary transition-colors" href="#">Biografia</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Empresas</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Projetos Sociais</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Agenda de Palestras</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-8">Atuação</h4>
                            <ul className="space-y-4 text-white/60">
                                <li>Goiás, Brasil</li>
                                <li>São Paulo, Brasil</li>
                                <li>Mato Grosso, Brasil</li>
                                <li>Paraná, Brasil</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-8">Imprensa e PR</h4>
                            <ul className="space-y-4 text-white/60">
                                <li>press@marcorelisio.com.br</li>
                                <li>+55 (62) 99999-9999</li>
                                <li>Rua do Agronegócio, 1000 - Goiânia/GO</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-white/40 text-sm">© 2024 Marco Elísio Nunes Cunha. Todos os direitos reservados.</p>
                        <div className="flex gap-8 text-sm text-white/40">
                            <a className="hover:text-white transition-colors" href="#">Privacidade</a>
                            <a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
