"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="w-full max-[500px]:min-h-screen sm:h-[646px] pt-28 bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <div className="w-full max-w-2xl text-center">
        {/* Título */}
        <h1 className="playfair-display-font text-3xl md:text-5xl text-white mb-3">
          AC DIVERSITY
        </h1>

        {/* Subtítulo */}
        <h2 className="font-[montserrat] text-sm md:text-base text-white">
          Joias e bijuterias para quem busca elegância e sofisticação em cada detalhe.
        </h2>

        {/* Botão */}
        <div className="w-full flex justify-center">
          <a
            href="https://www.instagram.com/ac.diversity/"
            target="_blank"
            className="w-full max-w-xs md:max-w-md px-5 py-3 mt-5 text-sm md:text-base text-[#1E1E1E] shadow-md bg-white hover:bg-gray-300 transition-all"
          >
            CONHEÇA NOSSOS PRODUTOS
          </a>
        </div>
      </div>
    </div>
  );
}
