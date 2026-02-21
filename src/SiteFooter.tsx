
export default function SiteFooter() {
    return (
        <footer className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
            <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
                <div className="relative w-full md:w-1/2 min-h-[400px]">
                    <img alt="Agricultor no campo" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWHe5suXjPhELussf39eUyoQZjsUsKTjex7_AviBqmJ6t_6wIb_uQf5DAxCDhyxXCiNgdyv5pxNS-nCViDzONnAITcNnVYnt_LZaAJwc8h8wW1t_h-SAMKq96gscoK7ZkN28lg5IBIAPN2VVF1RzofJxqk9M1TUfPqNGFKuW4YJ2C6bXrGLAwpTMdUTgiduNY63AvRAGIeINh-EF9DKXrOqjnUE_upP9a2DszPjjlXqDDUPC5xEwZpKQ1jnYcSuERx-0vwLaFx3zE" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

                    <div className="absolute top-8 left-8 flex items-center gap-2">
                        <span className="material-icons text-accent text-3xl">spa</span>
                        <div>
                            <h3 className="text-white font-bold text-lg leading-none">MARCO</h3>
                            <p className="text-accent text-sm font-bold leading-none">ELÍSIO</p>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-8 max-w-sm">
                        <h2 className="text-3xl font-medium text-white mb-4">Pronto para discutir o seu projeto?</h2>
                        <p className="text-gray-300 text-sm mb-6">
                            Entre em contato para palestras, consultorias ou oportunidades de parceria. Vamos cultivar resultados juntos.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors" href="#">
                                <span className="material-icons text-sm">email</span>
                            </a>
                            <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors" href="#">
                                <span className="material-icons text-sm">phone</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/5 backdrop-blur-sm flex items-center">
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl w-full shadow-xl">
                        <form action="#" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nome</label>
                                <input className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-accent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm" id="name" placeholder="Seu nome" type="text" />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="phone">Telefone</label>
                                <input className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-accent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm" id="phone" placeholder="Seu telefone" type="tel" />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Mensagem</label>
                                <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-accent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm resize-none" id="message" placeholder="Como posso ajudar?" rows={3}></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-[#004433] text-white font-medium py-3 rounded-lg transition-colors flex justify-between items-center px-6" type="button">
                                <span>ENVIAR MENSAGEM</span>
                                <span className="material-icons text-sm bg-accent/20 text-accent p-1 rounded-full">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 text-gray-400 text-xs">
                © 2023 Marco Elísio. Todos os direitos reservados.
            </div>
        </footer>
    );
}
