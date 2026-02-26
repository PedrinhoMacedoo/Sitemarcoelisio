import { useState, useEffect } from "react";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
                ${scrolled
                    ? "top-4 w-[85%] max-w-5xl h-14 lg:h-16 bg-white/80 border-white/40 shadow-lg"
                    : "top-8 w-[92%] max-w-6xl h-16 lg:h-20 bg-white/60 border-white/20 shadow-none"} 
                backdrop-blur-xl border rounded-full flex items-center`}
        >
            <div className="w-full px-6 lg:px-10">
                <div className="flex justify-between items-center w-full">
                    {/* Brand */}
                    <div className="flex items-center gap-3 shrink-0 group cursor-pointer">
                        <span className="font-display font-bold text-xl lg:text-2xl text-forest-dark tracking-tighter uppercase whitespace-nowrap">
                            MARCO <span className="text-primary">ELÍSIO</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12">
                        {['Sobre', 'Atuação', 'Social'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-forest-dark/70 hover:text-forest-dark transition-colors text-xs lg:text-sm font-bold uppercase tracking-[0.2em] group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}

                    </div>

                    {/* Social links (Desktop & Mobile) */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a href="https://www.instagram.com/marcoelisionc/" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-9 sm:h-9 border rounded-full flex items-center justify-center transition-all ${scrolled ? 'border-forest-dark/20 text-forest-dark hover:bg-primary hover:border-primary hover:text-white' : 'border-forest-dark/40 text-forest-dark hover:bg-primary hover:border-primary hover:text-white'}`}>
                            <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/marcorelisio" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-9 sm:h-9 border rounded-full flex items-center justify-center transition-all ${scrolled ? 'border-forest-dark/20 text-forest-dark hover:bg-primary hover:border-primary hover:text-white' : 'border-forest-dark/40 text-forest-dark hover:bg-primary hover:border-primary hover:text-white'}`}>
                            <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/people/Marco-El%C3%ADsio-Nunes/61575807624020/" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-9 sm:h-9 border rounded-full flex items-center justify-center transition-all ${scrolled ? 'border-forest-dark/20 text-forest-dark hover:bg-primary hover:border-primary hover:text-white' : 'border-forest-dark/40 text-forest-dark hover:bg-primary hover:border-primary hover:text-white'}`}>
                            <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.125-5.864 10.125-11.853z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@MarcoElisioNunesCunha" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-9 sm:h-9 border rounded-full flex items-center justify-center transition-all ${scrolled ? 'border-forest-dark/20 text-forest-dark hover:bg-primary hover:border-primary hover:text-white' : 'border-forest-dark/40 text-forest-dark hover:bg-primary hover:border-primary hover:text-white'}`}>
                            <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
