"use client";
import Image from "next/image";


export default function About() {
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col md:flex-row items-start justify-start px-6 md:px-8 pt-8 md:pt-12 pb-6">
        <div className="w-full md:w-[50%] space-y-6 p-4 ">
          <div className="w-full max-w-2xl text-center md:text-start">
            <h1 className="playfair-display-font text-4xl text-[#D3D3D3] md:text-[160px] mb-6">
              SOBRE<br />NÓS
            </h1>
            <div className="space-y-4">
              <p className="indent-8 font-[montserrat] text-sm md:text-base text-[#1E1E1E]">
                A AC Diversity nasceu do sonho de tornar a elegância acessível a todos. Fundada por Amanda Caldas e Maíra Silva, a marca foi criada para democratizar o acesso a joias e bijuterias sofisticadas, permitindo que cada pessoa encontre peças que combinem com seu estilo, sem abrir mão da qualidade e do bom gosto.
              </p>
              <p className="indent-8 font-[montserrat] text-sm md:text-base text-[#1E1E1E]">
                Nosso compromisso vai além de simplesmente vender acessórios. Cada peça é cuidadosamente selecionada por meio de uma curadoria atenta e criteriosa, garantindo que nossos clientes tenham acesso a produtos que refletem sofisticação, exclusividade e autenticidade. Acreditamos que os detalhes fazem a diferença e que uma joia pode transformar um look, elevar a autoestima e expressar personalidade.
              </p>
              <p className="indent-8 font-[montserrat] text-sm md:text-base text-[#1E1E1E]">
                Na AC Diversity, estilo e acessibilidade caminham juntos. Trabalhamos para oferecer opções que atendam diferentes gostos e ocasiões, sempre mantendo um preço justo e acessível. Queremos que todos possam brilhar, independente do momento ou do orçamento. Afinal, acreditamos que luxo não deve ser um privilégio, mas sim uma escolha disponível para todos.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] md:p-4 space-y-4 md:mt-6 md:mt-0 text-center md:text-start">
          <p className="indent-8 font-[montserrat] text-sm md:text-base text-[#1E1E1E] md:pt-6">
            Nosso catálogo é repleto de peças versáteis, atemporais e modernas. Desde acessórios delicados para o dia a dia até joias marcantes para ocasiões especiais, cada item carrega consigo um toque de sofisticação e requinte. Todas as escolhas são feitas pensando em quem valoriza a elegância e busca transmitir sua essência através de pequenos detalhes. Mais do que uma loja, somos um espaço de valorização da beleza em suas múltiplas formas. Queremos inspirar confiança, autenticidade e permitir que cada cliente se sinta único ao usar nossas peças. Acreditamos que a verdadeira sofisticação está na simplicidade bem escolhida e que um acessório pode ser o toque final perfeito para qualquer produção.
          </p>
          <div className="w-full hidden flex justify-end md:block">
            <Image
              src="/about.svg"
              width={612}
              height={394}
              loading="lazy"
              className="object-cover absolute bottom-0 right-0 object-contain z-10"
              alt="Imagem ilustrativa"
            />
          </div>
          <div className="w-full md:hidden flex justify-center md:justify-end md:block">
            <Image
              src="/about-mobile.svg"
              width={525}
              height={394}
              loading="lazy"
              className="object-cover"
              alt="Imagem ilustrativa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
