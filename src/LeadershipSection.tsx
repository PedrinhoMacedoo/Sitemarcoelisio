import React from 'react';

export default function LeadershipSection() {
    return (
        <section className="py-24 bg-background-light dark:bg-slate-900/50" id="lideranca">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Liderança Executiva</span>
                        <div className="h-[1px] w-12 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-forest dark:text-white mb-4">Grupos e Organizações</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Pilares da gestão e operação sob a liderança estratégica de Marco Elísio.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-background-dark p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-forest">agriculture</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-forest dark:text-white">Planalto Tratores</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                            Excelência em mecanização agrícola e distribuição de alta tecnologia para o produtor rural.
                        </p>
                        <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="#">
                            Saber mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="bg-white dark:bg-background-dark p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-forest">corporate_fare</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-forest dark:text-white">Assoreval</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                            Fortalecendo a rede de revendedores e impulsionando o setor através da cooperação estratégica.
                        </p>
                        <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="#">
                            Saber mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="bg-white dark:bg-background-dark p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-forest">route</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-forest dark:text-white">Agrovia</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                            Logística inteligente conectando a produção do campo aos principais centros de distribuição.
                        </p>
                        <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="#">
                            Saber mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
