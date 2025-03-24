"use client";

import Image from "next/image";


export default function Products() {
    const products = [
        { src: "/Earrings.jpeg", label: "Brincos" },
        { src: "/Bracelets.jpeg", label: "Braceletes" },
        { src: "/Rings.jpeg", label: "Anéis" },
        { src: "/Necklaces.jpeg", label: "Colares" },
        { src: "/Hair_Clips.jpeg", label: "Prendedores" },
    ];

    return (
        <div className="w-full text-center pt-8 px-6 pb-6 md:pt-12">
            <h1 className="playfair-display-font text-3xl md:text-5xl text-[#BEBEBE] mb-3">NOSSOS PRODUTOS</h1>
            <p className="font-[montserrat] text-sm md:text-base text-[#1e1e1e]">Selecionamos peças únicas que unem estilo, delicadeza e sofisticação para todos os momentos.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:p-10 mt-10 md:mt-0">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image
                            src={product.src}
                            alt={product.label}
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                        <span className="mt-4 text-sm font-[montserrat] text-[#1e1e1e]">{product.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}