
export default function Footer() {
    return (
        <footer className="bg-[#101311] text-white pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 pr-8">
                        <span className="font-display font-bold text-2xl tracking-wider block mb-4">MARCO ELÍSIO</span>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                            Conectando pessoas, propósitos e produtividade no campo, com gestão estratégica, representação institucional e visão de longo prazo para o agro.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/marcoelisionc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/marcorelisio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/people/Marco-El%C3%ADsio-Nunes/61575807624020/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.125-5.864 10.125-11.853z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@MarcoElisioNunesCunha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">Links Rápidos</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a className="hover:text-primary transition-colors" href="#sobre">Sobre</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#atuacao">Projetos</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#palestras">Palestras</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#social">Responsabilidade Social</a></li>
                        </ul>
                    </div>

                    {/* Locations Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">Locais de Atuação</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>Goiás, GO</li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">Contato</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <a className="hover:text-primary transition-colors" href="mailto:Candidadiasrp@gmail.com">Candidadiasrp@gmail.com</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="https://wa.me/5562998012376">+55 62 99801-2376</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-12 flex justify-center text-xs text-gray-500 text-center">
                    <p>Copyright © MARCO ELÍSIO. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
