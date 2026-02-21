import React from 'react';

export default function AboutLeader() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2">● Sobre o Líder</span>
                    <h2 className="text-3xl font-medium text-primary dark:text-white max-w-lg">
                        Construindo pontes entre <span className="text-accent">tradição</span> e <span className="text-accent">tecnologia</span>.
                    </h2>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mt-4 md:mt-0">
                    Uma trajetória marcada pela paixão pela Zootecnia e pela gestão estratégica no agronegócio.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-8 rounded-2xl flex flex-col justify-between h-80 transition hover:shadow-lg">
                    <div>
                        <h3 className="text-5xl font-bold text-accent mb-2">(ZO)</h3>
                        <h4 className="text-xl font-bold text-primary dark:text-white">Zootecnista</h4>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Formado com excelência, dedicou sua carreira ao entendimento profundo da produção animal e gestão eficiente de recursos naturais.
                        </p>
                        <div className="mt-4 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-3/4"></div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 bg-surface-light dark:bg-surface-dark p-8 rounded-2xl flex flex-col justify-between h-80 transition hover:shadow-lg">
                    <div>
                        <h3 className="text-5xl font-bold text-accent mb-2">(VP)</h3>
                        <h4 className="text-xl font-bold text-primary dark:text-white">Vice-Presidente</h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Atuação estratégica em conselhos e diretorias, impulsionando decisões que moldam o setor.
                    </p>
                </div>
                <div className="md:col-span-1 h-80 rounded-2xl overflow-hidden relative group">
                    <img alt="Inspeção de campo" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVUKzjCPnK05gs30fGxJx_zS3NYRoxVIXn4kUevpsA7_rrwLKCDrNl1bs_fRXLcKuWWRVOQkxsTaoA0uBLJaWKxIPBd1rXB9WEN9bNiPKxOTuK1zhxt1cO26QrixLwXfGfl56PwcQLO8W-P-qX8P1gXBwKMub6j96tiO8agmqKW44ytQbE5L8DeMVz0iKzFb3xwQCpwqj8uYNdTrtXolf5rZzrLULo_uk30Z3All2xWjjSbnxwA_YhLFoiZO7WSRLq6EHKht93cjM" />
                    <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition duration-300"></div>
                </div>
                <div className="md:col-span-1 h-64 rounded-2xl overflow-hidden relative group">
                    <img alt="Silos de grãos" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUF8qfBeMEOMQSqVszy35PA0W0Q0p_VMbju9ia7u5xUe8D2ZoqWKO4kIUTxd7PZ6G8sWKdYaboCpxKalT0mOQLM7tjxnfrW65_qcHqvPCd7zF_nLCMo_MqIb7pe3jgz4MNdOB3ey24ss0-VC81wcXBAwvxgICNI0nFCPD3hu1tlFtbRrhSiaJYkk0TuXNyaeLKtedNmtth2a53k6T8Boxsay6oBKf4yrdJIFjWkYik_wOJdGOvgWx35ycVJ5TE_NxRTZApTLQyKdM" />
                </div>
                <div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-8 rounded-2xl flex flex-col justify-center h-64">
                    <h3 className="text-3xl font-bold text-primary dark:text-white mb-4">(CA)</h3>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Conselheiro Administrativo</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Visão de longo prazo aplicada à governança corporativa de grandes empresas do setor.
                    </p>
                </div>
                <div className="md:col-span-1 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl flex flex-col justify-end h-64">
                    <p className="font-semibold text-primary dark:text-white text-lg leading-tight">
                        Matérias-primas para produção e parcerias industriais.
                    </p>
                </div>
            </div>
        </section>
    );
}
