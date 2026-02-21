import React from 'react';

export default function PolymersSection() {
    return (
        <section className="py-24 bg-white" id="polymers">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <div className="flex items-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Supply of Industrial Polymers</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light text-forest max-w-2xl leading-tight">
                        <span className="text-primary font-medium">We supply polymer raw materials</span> for production companies for specific needs.
                        <div className="text-sm font-normal text-slate-500 mt-6 tracking-wide">
                            All materials undergo thorough quality control and are suitable for a wide range of technological processes.
                        </div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
                    {/* Row 1: PP, LDPE, Image 1 */}
                    <div className="bg-[#f8f9fa] rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[320px] border border-slate-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-5xl md:text-6xl font-bold text-primary mb-8 group-hover:scale-105 transition-transform origin-left">(PP)</h3>
                        <div>
                            <h4 className="text-xl font-bold text-forest mb-2">Polypropylene</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">For the production of containers, films, household and industrial products.</p>
                        </div>
                    </div>

                    <div className="bg-[#f8f9fa] rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[320px] border border-slate-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-5xl md:text-6xl font-bold text-primary mb-8 group-hover:scale-105 transition-transform origin-left">(LDPE)</h3>
                        <div>
                            <h4 className="text-xl font-bold text-forest mb-2">Low pressure polyethylene</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">A reliable packing film, pipes, web containers.</p>
                        </div>
                    </div>

                    <div className="rounded-[32px] overflow-hidden min-h-[320px] shadow-sm">
                        <img src="https://images.unsplash.com/photo-1579208030886-b937da0925dc?q=80&w=800&auto=format&fit=crop" alt="Polymer pellets" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Row 2: Image 2, HDPE (span 2) */}
                    <div className="rounded-[32px] overflow-hidden min-h-[320px] shadow-sm">
                        <img src="https://images.unsplash.com/photo-1621217743588-44e23180c436?q=80&w=800&auto=format&fit=crop" alt="Pipes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="bg-[#f8f9fa] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row justify-between min-h-[320px] border border-slate-100 md:col-span-2 relative hover:shadow-xl transition-shadow group">
                        <div className="flex flex-col justify-between w-full md:w-[45%] mb-8 md:mb-0">
                            <h3 className="text-5xl md:text-6xl font-bold text-primary mb-8 group-hover:scale-105 transition-transform origin-left">(HDPE)</h3>
                            <div>
                                <h4 className="text-xl font-bold text-forest mb-2">High pressure polyethylene</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">It is used for canisters, household products and technical parts.</p>
                            </div>
                        </div>

                        {/* Divider - only visible on md+ */}
                        <div className="hidden md:block w-[1px] bg-slate-200 absolute left-1/2 top-10 bottom-10"></div>

                        <div className="flex flex-col justify-end w-full md:w-[45%] md:pl-8">
                            <h4 className="text-xl font-bold text-forest mb-2">Raw materials for production and industrial enterprise</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">A wide range of materials for technological processes, packaging, casting and extrusion.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
