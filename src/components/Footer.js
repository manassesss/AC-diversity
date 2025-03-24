import { RiInstagramFill } from "react-icons/ri";
import { TbBrandWhatsappFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full bg-[#BEBEBE] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-6">
        
        {/* Links e Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          
          {/* Links de produtos */}
          <div className="font-[montserrat] flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
            <p>ANÉIS</p>
            <p>BRINCOS</p>
            <p>BRACELETES</p>
            <p>COLARES</p>
            <p>PRENDEDORES</p>
          </div>

          {/* Ícones de redes sociais */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://www.instagram.com/ac.diversity/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform"
            >
              <RiInstagramFill className="text-3xl" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=559881230852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform"
            >
              <TbBrandWhatsappFilled className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Nome da marca gigante */}
        <div className="playfair-display-font border-t border-white pt-6 text-center text-4xl md:text-6xl lg:text-[120px] leading-none tracking-wide">
          AC DIVERSITY
        </div>

        {/* Créditos finais */}
        <div className="font-[montserrat] border-t border-white pt-6 text-center text-xs md:text-sm">
          © {new Date().getFullYear()} AC Diversity. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
