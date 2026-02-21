import React from 'react';

export default function AboutSection() {
    return (
        <section
            className="relative w-full py-32 px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 bg-cover bg-top md:bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/03/bg-bottom-ethos-web.webp')" }}
            id="sobre"
        >
            {/* Container Principal */}
            <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                {/* Lado Esquerdo - Icon Box */}
                <div className="flex flex-col md:items-start items-center text-center md:text-left w-full max-w-[420px]">
                    <img
                        src="https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/03/logo-ethos-vetor.svg"
                        alt="Logo Ethos Company"
                        className="w-[183px] mb-6 object-contain"
                    />
                    <h3 className="text-white text-4xl md:text-[53px] font-medium leading-[1.2] font-['Clash_Display',sans-serif]">
                        Conheça a Ethos Company
                    </h3>
                </div>

                {/* Lado Direito - Text Box */}
                <div className="bg-white rounded-[12px] border border-[#FF005B] p-8 md:p-16 w-full max-w-[560px] shadow-2xl">
                    <p className="text-black text-base md:text-lg font-light font-['Plus_Jakarta_Sans',sans-serif] leading-[1.5]">
                        <span className="font-semibold text-[#FF005B]">A Ethos Company</span> é uma empresa especializada em infoprodutos e referência em estruturação de funis de vendas e infraestrutura.
                        <br /><br />
                        Trabalhamos em parceria com experts e empreendedores, dos gigantes aos pequenos, proporcionando uma estratégia coerente, abrangente e eficaz.
                        <br /><br />
                        Nosso compromisso é entregar soluções personalizadas que atendam às necessidades específicas de cada cliente, garantindo resultados sólidos e duradouros.
                        <br /><br />
                        Lançamentos, perpétuos, high tickets e prestação de serviço são apenas “moldes” diferentes que se adequam a nossa especialidade: vender mais de forma íntegra e ética.
                    </p>
                </div>

            </div>
        </section>
    );
}
