
export default function DigitalPresence() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 mb-12">
            <div className="mb-10">
                <h2 className="text-2xl font-medium text-primary dark:text-white max-w-lg">
                    Presença Digital e <span className="text-accent">Eventos</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Conectando o campo ao mundo através das redes.</p>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl">
                <div className="relative w-full h-[400px] flex items-center justify-center">
                    <img alt="World Map Pattern" className="absolute inset-0 w-full h-full object-contain opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe4TnjITG2GLcqjisqhP-GBY5dizKwv9ger-wa0BDZzZwaXgnx_nMTok3Ur0pkk12vPF7j3F8FlQcx2wAyvDLNfahRPM8K5lA1EJfD6W6VxHWseTKJo7xziOiOd8jdLdEdGcQliuTfFX9gGZuxuUxShn4WkRtR2wBE748lrFva23_66DpLQ2G5Igogl82CYljmLmof5f_AwUTLN0L0-k8CDio4l12NBraM_xCeJBVNLK3h3PqpbKCy8pfNJ_zb8-zJYxySch8RAiA" />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 via-yellow-200/20 to-transparent mix-blend-color pointer-events-none"></div>

                    <div className="absolute top-1/4 left-1/4 w-32 md:w-48 p-3 bg-white dark:bg-gray-800 shadow-xl rounded-lg z-10 border-l-4 border-accent animate-pulse">
                        <h4 className="font-bold text-xs text-primary dark:text-white">Instagram Reach</h4>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Conteúdo diário impactando produtores.</p>
                    </div>

                    <div className="absolute bottom-1/3 right-1/4 w-32 md:w-48 p-3 bg-white dark:bg-gray-800 shadow-xl rounded-lg z-10 border-l-4 border-primary">
                        <h4 className="font-bold text-xs text-primary dark:text-white">LinkedIn Network</h4>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Networking profissional estratégico.</p>
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 200 150 Q 400 50 600 250" fill="none" stroke="#A0D633" strokeDasharray="5,5" strokeWidth="2"></path>
                        <path d="M 600 250 Q 800 350 900 200" fill="none" opacity="0.5" stroke="#003322" strokeDasharray="4,4" strokeWidth="1"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}
