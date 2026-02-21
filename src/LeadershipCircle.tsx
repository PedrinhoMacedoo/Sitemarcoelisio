
export default function LeadershipCircle() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 relative">
            <div className="text-center mb-16">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">Trajetória</span>
                <h2 className="text-3xl font-medium text-primary dark:text-white">Liderança em diversas frentes</h2>
            </div>
            <div className="relative w-full max-w-5xl mx-auto h-[600px] hidden md:block">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                    <div className="w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full flex items-center justify-center shadow-lg border-2 border-accent/20">
                        <span className="material-icons text-accent text-5xl">spa</span>
                    </div>
                    <p className="mt-4 text-primary dark:text-white font-bold text-lg">Marco Elísio</p>
                </div>

                <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-20">
                    <circle cx="50%" cy="50%" fill="none" r="250" stroke="#A0D633" strokeDasharray="5,5" strokeWidth="1"></circle>
                </svg>

                <div className="absolute top-[10%] left-[20%] w-64 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10 transition hover:scale-105 duration-300">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Planalto Tratores</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Liderança na distribuição de maquinário agrícola de ponta.</p>
                    <img alt="Planalto Tratores" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQOUIU-EkAu8ItSv5V4EHH6nSk7Hh5uq8fYvf66TkPlFzbZ9B69M446BH4SpmeBN5EXSwuO6zQgB0b0mo-w7LXcKkNv1cGBym6FW1Hf0lHgTHn0B0oIXL_cV_b24mt75O6MfjVZZFsxqQRGxcHHnlOk88IloRWJLyUOWxADdl-GRoIBblpF74RSBXcSyj0xsYwXoMN5Rki_NSKrcO0GjB86cswY_mLPUXOmjjVSVBkbLqUMwssr191m1xZVLy04O2HJA5EOjlp3xA" />
                </div>

                <div className="absolute top-[10%] right-[20%] w-64 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10 transition hover:scale-105 duration-300">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Assoreval</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Compromisso com o desenvolvimento regional sustentável.</p>
                    <img alt="Assoreval" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvkJMVuzJ4UVKLYJt1UYQMlKr4mVXffk4OL1wVbZ4Mc6hx7_EeDaMvm27nDU_9YxS2e-4lk4cIv9XTeBl2sSnOU_AP3VIQq8veeoSO8g6QLKTvwGmb_H13IWgH9BiZLJ97-8V46ounEREtPUldlXSNN8bOYXQMKv32U_5puKhHBlZcZeRJjRo7PTX5f_7-EEEfP4EQlgOdCTgwUKc2ZrI8qWXg08PqdvlG_l67AeX1HRXitANlb8RIFtfPnFreTiLZ-9sYKaIkPk" />
                </div>

                <div className="absolute bottom-[10%] right-[20%] w-64 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10 transition hover:scale-105 duration-300">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Agrovia Castelo</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Inovação em logística e infraestrutura para o agro.</p>
                    <img alt="Agrovia" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAawHaQIRPqL01rKG7ZhPviQs_5X-aZMx1MA6nCNHCpN2Y5Skx9wuj_FAygqOFyrjHIfM5hjP4vaQpPcEbcL33-SPsFnlDeTd5rAEo41uj75CB-U8AxIov659IYr4nN0Gk2G_rSpaYsY_vqng5nsdlLBgcKUrBurylrS9dmnk-ogl7UCmMiwbTfIvRC-Hs2sQ6ssScMJN8fcX8ielSjGXsCejh8FZuhVuXK1uDS9dMCeetREZ-Ljbh64Mb8VWshp0hhAal450MQPNE" />
                </div>

                <div className="absolute bottom-[10%] left-[20%] w-64 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10 transition hover:scale-105 duration-300">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Sindicato Rural</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Defesa dos interesses e fortalecimento do produtor.</p>
                    <img alt="Sindicato Rural" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUXIFFKlf26hKBe8FApxh5EN8BTyt-oUqkW-rXinJVDCdFgMRE5WmFXMVTcXGkJDvaBm9OI9rw4-l0_n07QScT4G3Vos6XBbdP-8tvjJVjOz9wzZFr2ZkKBb4WbttmYXiNm1Pv0P8so_n5-kWAYVApQDDEoEVFHNQLdkcJ8yUFwqX38CdxNBJwWtz4J_XlZvNAYJT0HtNM5nUg_HTcfAjGp09N5Z6o4f4U0Au3N1LkOp3kRAtL6XPhiKU7Tnz2bW9L2lu-2udsVck" />
                </div>

                <div className="absolute top-1/2 left-[20%] w-3 h-3 bg-accent rounded-full -ml-1.5"></div>
                <div className="absolute top-1/2 right-[20%] w-3 h-3 bg-accent rounded-full -mr-1.5"></div>
            </div>

            <div className="md:hidden grid grid-cols-1 gap-6">
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Planalto Tratores</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Liderança na distribuição de maquinário.</p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Assoreval</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Desenvolvimento regional sustentável.</p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-primary dark:text-white mb-1">Agrovia Castelo</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Inovação logística.</p>
                </div>
            </div>
        </section>
    );
}
