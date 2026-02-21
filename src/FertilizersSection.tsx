import React from 'react';

export default function FertilizersSection() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-forest rounded-[40px] p-12 md:p-24 shadow-2xl overflow-hidden relative">

                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-light text-white">
                            Import of fertilizers<br />
                            <span className="font-medium">by individual request</span>
                        </h2>
                    </div>

                    {/* Circles Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">

                        {/* Circle 1 */}
                        <div className="aspect-square rounded-full border border-white/20 flex items-center justify-center p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
                            <span className="text-white text-sm md:text-base font-medium">
                                Search for fertilizers on the foreign market
                            </span>
                        </div>

                        {/* Circle 2 */}
                        <div className="aspect-square rounded-full border border-white/20 flex items-center justify-center p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm -ml-4 mt-8 sm:mt-0 z-10">
                            <span className="text-white text-sm md:text-base font-medium">
                                Purchase of the product at your request
                            </span>
                        </div>

                        {/* Circle 3 */}
                        <div className="aspect-square rounded-full border border-white/20 flex items-center justify-center p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm -ml-4 mt-8 md:mt-0 z-20">
                            <span className="text-white text-sm md:text-base font-medium">
                                Import to Ukraine
                            </span>
                        </div>

                        {/* Circle 4 */}
                        <div className="aspect-square rounded-full border border-white/20 flex items-center justify-center p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm -ml-4 mt-8 md:mt-0 z-30">
                            <span className="text-white text-sm md:text-base font-medium">
                                Distribution and wholesale deliveries
                            </span>
                        </div>

                    </div>

                    {/* Faint Background Logo / Rings */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[200px] border-white/[0.02] rounded-full pointer-events-none"></div>

                </div>
            </div>
        </section>
    );
}
