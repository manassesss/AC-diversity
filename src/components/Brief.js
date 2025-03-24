"use client";
import Image from "next/image";
import "./brief.css"; // vamos criar esse arquivo

export default function Brief() {
    return (
        <div className="relative w-full overflow-hidden py-10">
            {/* Texto em movimento */}
            <div className="absolute inset-0 z-0 flex items-center justify-center whitespace-nowrap animate-slide text-[#BEBEBE] text-6xl md:text-[200px] opacity-50 font-bold playfair-display-font">
                <h1 className="playfair-display-font">
                    AC DIVERSITY AC DIVERSITY AC DIVERSITY AC DIVERSITY AC DIVERSITY AC DIVERSITY
                </h1>
            </div>

            {/* Imagem por cima */}
            <div className="relative z-10 flex justify-center">
                <div className="text-center hidden md:block">
                    <Image
                        src="/brief.svg"
                        width={600}
                        height={644}
                        loading="lazy"
                        className="object-cover"
                        alt="Imagem ilustrativa"
                    />
                </div>
                <div className="text-center md:hidden md:block">
                    <Image
                        src="/brief.svg"
                        width={200}
                        height={244}
                        loading="lazy"
                        className="object-cover"
                        alt="Imagem ilustrativa"
                    />
                </div>
            </div>
        </div>
    );
}
