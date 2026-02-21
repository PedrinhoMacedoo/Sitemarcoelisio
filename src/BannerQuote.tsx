
export default function BannerQuote() {
    return (
        <section className="relative w-full h-[500px] overflow-hidden group">
            <img alt="Trator no campo ao pôr do sol" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_vk5I3Mkiw94CWChOQG3daPMCjIE4VDqPA_jBIYnuZ4nMGrMx47V8EzJ1i9Q3t4Ak5YS3XlUfloZGEiSOqwGuY1Z7LQbGPjy6QrcNzuvgN3yWPf_z5MXksMUplydcfBtYryo2JisOyyf-He_GEMUWpH4NVpIYPrTQrRy4iN9kjlY7zCoyopGLH3y8INGAkb3HTBBGI3ZArFq5BbG9vEaX5J6rvDLOcX3kNVE5ZtRiryZLy2KdWjuZtAnXrjsLDa7S68GZFsIQw3U" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-16 left-6 md:left-20 max-w-3xl pr-6">
                <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-lg">
                    O CAMPO PRECISA DE QUEM <br /> <span className="text-accent">ACREDITA</span> E <span className="text-accent">PERMANECE</span>.
                </h2>
                <p className="text-gray-200 text-lg mb-8 max-w-xl">
                    Liderança autêntica construída com anos de dedicação ao solo e às pessoas que o cultivam.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all transform hover:translate-x-1 border border-accent/30">
                    CONHEÇA MARCO ELÍSIO
                    <span className="material-icons text-sm bg-accent text-primary rounded-full p-1">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}
