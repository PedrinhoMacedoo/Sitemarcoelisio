import Counter from './Counter';

export default function ImpactSection() {
    return (
        <>
            <section className="py-24 bg-white dark:bg-background-dark" id="impacto">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2">
                            <div className="sticky top-32">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[1px] w-12 bg-primary"></div>
                                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Impacto Social</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-forest dark:text-white mb-8 leading-tight">
                                    Empoderando Comunidades com Inovação
                                </h2>
                                <img
                                    alt="Community garden project"
                                    className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9UykxE0JqgVyWes36LCobUQWgqqvprGL1W1fJLrwF_iopqhcctJhfvAm4FhGjEJopcznVO-dbj-_1-BJBtBld6koNoY3i6Id9XHi_ORGSs9AKO1k_L7RMiF9Xr-r-QIWijRBFFQF8qEZepnNGKx2RJU10zX5FB_UArcLJpj6ldp1BBjvOHCvEPCkJyusJr3k8oQG1kCzfBxOQHEDSE7aY0q_kRTBz8aynIgIa6mS6qBQyP3i-d5fqryf9vWSiZd_WXsGOZk3Zx2Y"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 py-8">
                            <div className="space-y-4">
                                <div className="accordion-item border-b border-slate-200 dark:border-slate-800 pb-8 cursor-pointer group">
                                    <div className="flex items-center justify-between py-4">
                                        <h3 className="text-2xl font-bold text-forest dark:text-white group-hover:text-primary transition-colors">01. Instituto IAPNF</h3>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:rotate-45 transition-transform">add_circle</span>
                                    </div>
                                    <div className="accordion-content">
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Uma fundação dedicada à preservação ambiental e ao desenvolvimento de tecnologias sustentáveis para pequenos produtores, garantindo a regeneração dos ecossistemas onde o agronegócio atua.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item border-b border-slate-200 dark:border-slate-800 pb-8 cursor-pointer group">
                                    <div className="flex items-center justify-between py-4">
                                        <h3 className="text-2xl font-bold text-forest dark:text-white group-hover:text-primary transition-colors">02. Horta Social</h3>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:rotate-45 transition-transform">add_circle</span>
                                    </div>
                                    <div className="accordion-content">
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Projeto de agricultura urbana que capacita cidadãos e fornece alimentos frescos para comunidades carentes, utilizando técnicas de cultivo vertical e hidroponia simplificada.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item border-b border-slate-200 dark:border-slate-800 pb-8 cursor-pointer group">
                                    <div className="flex items-center justify-between py-4">
                                        <h3 className="text-2xl font-bold text-forest dark:text-white group-hover:text-primary transition-colors">03. Capacitação Jovem</h3>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:rotate-45 transition-transform">add_circle</span>
                                    </div>
                                    <div className="accordion-content">
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Programa de mentoria para jovens talentos que desejam ingressar no novo agronegócio digital, focando em ciência de dados e operação de maquinário autônomo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-light dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Presença Digital</span>
                            <div className="h-[1px] w-12 bg-primary"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-forest dark:text-white">Impacto Além do Campo</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white dark:bg-background-dark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-start gap-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                                <img
                                    alt="Marco Elísio Profile"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApIAaN62tJTShbcAZhAUOiqFZHO8MpdCA_3GVnr8rAwqeuR66WH--FKeJAhzFfOTONyR-KAx72-gwTlNSrfdqgke9NHPR0Li3XgmXqb2ydYb43la5xikCV4pQxhM7VU4HElBZNwDwV4IEWAelcVU6kb2F5plmbt2AU4ile5rOtflvbPoU6jmOnHReLvxv9jXAUHC_CLktb9F332_zStx59HaKw-OaX_XXtw1HzQ2HuLvlms_DA9LokkZAkWpX15lBcUTJXES-t3qw"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-bold text-forest dark:text-white">LinkedIn Influencer</span>
                                    <span className="text-blue-500 material-symbols-outlined text-sm">verified</span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 italic">"Compartilhando insights diários sobre o futuro do agro e liderança executiva para mais de 15 mil conexões."</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="block text-xl font-black text-forest dark:text-white">
                                            <Counter value="15k+" />
                                        </span>
                                        <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Seguidores</span>
                                    </div>
                                    <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                                        Ver Perfil <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-background-dark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-start gap-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                                <img
                                    alt="Marco Elísio Profile"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqfATw4D6iANiPBO_KUUCcsGNWp1dHtqjSrw4zQusYYVdXmjWLuwz7YtK8yBPbAqn2XlSrIjnFsRNttYsdxhK0PZ6_CSimQ4UqFHSGdNkkXxhNsfvf6_T2q9pyRYSqKBcSaX9vR9MZwrSL1S6gKsF9m6K3W9wrxP5eBriv2kxNzd1KPg7jf1Z1ElIRbKbF9swtqhwJnsoGBLJN9MqKEoexWBzbLBv4kQcomUkJMAzd-EDrR5Zc8xyteziDONihxWKX9lbPeOcMBck"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-bold text-forest dark:text-white">Instagram Insight</span>
                                    <span className="text-pink-500 material-symbols-outlined text-sm">verified</span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 italic">"O dia a dia real da gestão no agronegócio. Transparência, tecnologia e a vida no campo."</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="block text-xl font-black text-forest dark:text-white">
                                            <Counter value="28k+" />
                                        </span>
                                        <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Seguidores</span>
                                    </div>
                                    <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                                        Ver Perfil <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
