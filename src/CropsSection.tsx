import React from 'react';

export default function CropsSection() {
    return (
        <section className="py-24 bg-white" id="crops">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Export of Agricultural Products</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light text-forest max-w-2xl leading-tight">
                        <span className="text-primary font-medium">We supply key crops</span> to international markets with full support of transactions.
                    </h2>
                </div>

                {/* Circular Diagram - Desktop */}
                <div className="hidden lg:block relative w-full max-w-[900px] h-[700px] mx-auto mt-20">

                    {/* Inner Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-primary/20 bg-[#F9FAFB]/50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-primary/40 bg-[#F9FAFB]"></div>

                    {/* Center Leaf Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <span className="material-symbols-outlined text-[120px] text-[#eef6e9]">eco</span>
                    </div>

                    {/* Wheat (Top Left) */}
                    <div className="absolute top-0 left-[15%] bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[240px] z-10 hover:-translate-y-2 transition-transform">
                        <h3 className="text-lg font-bold text-forest mb-1">Wheat</h3>
                        <p className="text-[11px] text-slate-500 mb-3 leading-tight">compliance with the requirements of food & defatted wheat.</p>
                        <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&auto=format&fit=crop" alt="Wheat" className="w-full h-24 object-cover rounded-xl" />
                        <div className="w-3 h-3 rounded-full bg-primary absolute -right-6 top-1/2 -translate-y-1/2"></div>
                    </div>

                    {/* Barley (Top Right) */}
                    <div className="absolute top-[5%] right-[5%] bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[240px] z-10 hover:-translate-y-2 transition-transform">
                        <h3 className="text-lg font-bold text-forest mb-1">Barley</h3>
                        <p className="text-[11px] text-slate-500 mb-3 leading-tight">compliance with the requirements of food & defatted barley.</p>
                        <img src="https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=400&auto=format&fit=crop" alt="Barley" className="w-full h-24 object-cover rounded-xl" />
                        <div className="w-3 h-3 rounded-full bg-primary absolute -left-6 top-1/2 -translate-y-1/2"></div>
                    </div>

                    {/* Sunflower Oil (Bottom Right) */}
                    <div className="absolute bottom-[10%] right-[0%] bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[240px] z-10 hover:-translate-y-2 transition-transform">
                        <h3 className="text-lg font-bold text-forest mb-1">Sunflower oil</h3>
                        <p className="text-[11px] text-slate-500 mb-3 leading-tight">compliance with the requirements of food & defatted sunflower oil.</p>
                        <img src="https://images.unsplash.com/photo-1628189855523-a151b7522ff6?q=80&w=400&auto=format&fit=crop" alt="Sunflower Oil" className="w-full h-24 object-cover rounded-xl" />
                        <div className="w-3 h-3 rounded-full bg-primary absolute -left-6 top-1/2 -translate-y-1/2"></div>
                    </div>

                    {/* Soya (Bottom Center) */}
                    <div className="absolute bottom-[-5%] left-[30%] bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[240px] z-10 hover:-translate-y-2 transition-transform">
                        <h3 className="text-lg font-bold text-forest mb-1">Soya</h3>
                        <p className="text-[11px] text-slate-500 mb-3 leading-tight">compliance with the requirements of food & feed soya.</p>
                        <img src="https://images.unsplash.com/photo-1599863266212-04db80f2e04e?q=80&w=400&auto=format&fit=crop" alt="Soya" className="w-full h-24 object-cover rounded-xl" />
                        <div className="w-3 h-3 rounded-full bg-primary absolute -top-6 left-1/2 -translate-x-1/2"></div>
                    </div>

                    {/* Corn (Left Middle) */}
                    <div className="absolute top-[35%] left-0 bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[240px] z-10 hover:-translate-y-2 transition-transform">
                        <h3 className="text-lg font-bold text-forest mb-1">Corn</h3>
                        <p className="text-[11px] text-slate-500 mb-3 leading-tight">compliance with the requirements of food & feed corn.</p>
                        <img src="https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?q=80&w=400&auto=format&fit=crop" alt="Corn" className="w-full h-24 object-cover rounded-xl" />
                        <div className="w-3 h-3 rounded-full bg-primary absolute -right-6 top-1/2 -translate-y-1/2"></div>
                    </div>

                </div>

                {/* Mobile Grid View (Hidden on large screens) */}
                <div className="lg:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                        <h3 className="text-xl font-bold text-forest mb-2">Wheat</h3>
                        <p className="text-xs text-slate-500 mb-4 h-8">compliance with the requirements of food & defatted wheat.</p>
                        <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&auto=format&fit=crop" alt="Wheat" className="w-full h-32 object-cover rounded-xl" />
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                        <h3 className="text-xl font-bold text-forest mb-2">Barley</h3>
                        <p className="text-xs text-slate-500 mb-4 h-8">compliance with the requirements of food & defatted barley.</p>
                        <img src="https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=400&auto=format&fit=crop" alt="Barley" className="w-full h-32 object-cover rounded-xl" />
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                        <h3 className="text-xl font-bold text-forest mb-2">Corn</h3>
                        <p className="text-xs text-slate-500 mb-4 h-8">compliance with the requirements of food & feed corn.</p>
                        <img src="https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?q=80&w=400&auto=format&fit=crop" alt="Corn" className="w-full h-32 object-cover rounded-xl" />
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                        <h3 className="text-xl font-bold text-forest mb-2">Soya</h3>
                        <p className="text-xs text-slate-500 mb-4 h-8">compliance with the requirements of food & feed soya.</p>
                        <img src="https://images.unsplash.com/photo-1599863266212-04db80f2e04e?q=80&w=400&auto=format&fit=crop" alt="Soya" className="w-full h-32 object-cover rounded-xl" />
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col sm:col-span-2">
                        <h3 className="text-xl font-bold text-forest mb-2">Sunflower oil</h3>
                        <p className="text-xs text-slate-500 mb-4">compliance with the requirements of food & defatted sunflower oil.</p>
                        <img src="https://images.unsplash.com/photo-1628189855523-a151b7522ff6?q=80&w=400&auto=format&fit=crop" alt="Sunflower Oil" className="w-full h-40 object-cover rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
