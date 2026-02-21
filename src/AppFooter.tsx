import React from 'react';

export default function AppFooter() {
    return (
        <footer className="py-12 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl p-10 md:p-20">
                    {/* Background tractor image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1592982537447-6f2ae82aa5c3?q=80&w=2000&auto=format&fit=crop"
                            alt="Tractor background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-forest/80"></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between items-center">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-2 mb-12">
                                <span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
                                <span className="text-xl font-bold text-white tracking-widest">ARIMEX<br /><span className="text-primary text-sm">AGRO</span></span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                                Ready to discuss your request
                            </h2>
                            <p className="text-white/80 max-w-md">
                                Leave your details and we will contact you to discuss your specific requirements.
                            </p>
                        </div>

                        {/* Right Form */}
                        <div className="w-full lg:w-[450px] bg-white rounded-3xl p-8 shadow-xl">
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Phone Number"
                                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                                <textarea
                                    placeholder="How can we help you?"
                                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary min-h-[120px] resize-none"
                                ></textarea>
                                <button
                                    type="button"
                                    className="w-full bg-forest text-white py-4 rounded-xl font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2 mt-4"
                                >
                                    Contact Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
