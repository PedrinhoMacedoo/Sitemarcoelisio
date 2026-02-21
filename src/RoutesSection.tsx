import React from 'react';
import AnimatedButton from './AnimatedButton';

export default function RoutesSection() {
    return (
        <section className="py-24 bg-[#FAFAFA]" id="routes">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-light text-forest max-w-2xl leading-tight">
                        <span className="text-primary font-medium">We work on international routes</span> and provide transparent control at each stage
                    </h2>
                    <div className="mt-8">
                        <AnimatedButton text="Logistics" />
                    </div>
                </div>

                <div className="relative w-full mt-24">
                    {/* Abstract Map Image */}
                    <div className="w-full flex justify-center">
                        <img src="https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/03/map-arimex.png" alt="World Map" className="w-full max-w-5xl opacity-80" onError={(e) => {
                            // Fallback if image doesn't exist
                            e.currentTarget.src = "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2000&auto=format&fit=crop&blur=10";
                            e.currentTarget.className = "w-full max-w-5xl rounded-[40px] shadow-sm opacity-50";
                        }} />
                    </div>

                    {/* Route Points - Absolute Positioning for Desktop Simulation */}
                    <div className="absolute inset-0 hidden lg:block pointer-events-none">

                        {/* Point 1 */}
                        <div className="absolute top-[20%] left-[15%]">
                            <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                                <h4 className="font-bold text-forest text-sm mb-1">Search phase</h4>
                                <p className="text-xs text-slate-500">we find reliable products in the market</p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="absolute top-[10%] left-[35%]">
                            <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                                <h4 className="font-bold text-forest text-sm mb-1">Purchase</h4>
                                <p className="text-xs text-slate-500">we buy the desired product for a specific request</p>
                            </div>
                        </div>

                        {/* Point 3 */}
                        <div className="absolute top-[25%] left-[55%]">
                            <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                                <h4 className="font-bold text-forest text-sm mb-1">International logistics</h4>
                                <p className="text-xs text-slate-500">we organize delivery by sea, rail or w/auto</p>
                            </div>
                        </div>

                        {/* Point 4 */}
                        <div className="absolute top-[15%] left-[75%]">
                            <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                                <h4 className="font-bold text-forest text-sm mb-1">Customs clearance</h4>
                                <p className="text-xs text-slate-500">we handle docs and all checks completely fast</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
