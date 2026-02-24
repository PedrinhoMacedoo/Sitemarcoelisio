import Counter from './Counter';

export default function MediaStats() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2">
                {/* Instagram Card */}
                <div className="bg-[#2B3F32] py-20 px-6 md:px-12 flex flex-col items-center xl:items-start justify-center">
                    <div className="flex items-center gap-5 mb-14">
                        <div className="w-20 h-20 rounded-full border-[3px] border-[#7F9042] shadow-sm overflow-hidden shrink-0">
                            <img
                                loading="lazy"
                                src="/profile-opt.webp"
                                alt="Marco Elísio - Instagram"
                                className="w-full h-full object-cover object-[center_15%]"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider leading-none">Instagram</h3>
                            <span className="text-white/70 text-lg font-medium mt-1">2025</span>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center xl:justify-between items-center gap-x-8 gap-y-10 w-full text-center">
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#7F9042] font-black">+</span>
                                <Counter value="718,9K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Visualizações</span>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#7F9042] font-black">+</span>
                                <Counter value="133,9K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Alcance</span>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#7F9042] font-black">+</span>
                                <Counter value="4,3K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Seguidores</span>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#7F9042] font-black">+</span>
                                <Counter value="8,3K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Interações</span>
                        </div>
                    </div>
                </div>

                {/* LinkedIn Card */}
                <div className="bg-[#7F9042] py-20 px-6 md:px-12 flex flex-col items-center xl:items-start justify-center">
                    <div className="flex items-center gap-5 mb-14">
                        <div className="w-20 h-20 rounded-full border-[3px] border-[#2B3F32] shadow-sm overflow-hidden shrink-0">
                            <img
                                loading="lazy"
                                src="/profile-opt.webp"
                                alt="Marco Elísio - LinkedIn"
                                className="w-full h-full object-cover object-[center_15%]"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider leading-none">LinkedIn</h3>
                            <span className="text-white/70 text-lg font-medium mt-1">2025</span>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center xl:justify-between items-center gap-x-8 gap-y-10 w-full text-center">
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#2B3F32] font-black">+</span>
                                <Counter value="42,5K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Impressões</span>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#2B3F32] font-black">+</span>
                                <Counter value="7,4K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Usuários</span>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#2B3F32] font-black">+</span>
                                <Counter value="884" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Seguidores</span>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                            <span className="block text-4xl lg:text-[2.75rem] font-bold text-white mb-2 tracking-tight">
                                <span className="text-[#2B3F32] font-black">+</span>
                                <Counter value="1,5K" />
                            </span>
                            <span className="text-sm text-white/80 font-normal">Engajamento</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
