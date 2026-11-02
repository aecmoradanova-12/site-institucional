import { Section } from "@/src/components/shared/Section";
import Image from "next/image";
import { title } from "process";

const marcos = [
  {
    year: "2012",
    title: "FUNDAÇÃO",
    description:
      "Nasce a Associação Esportiva e Cultural Morada Nova, em Macaíba (RN).",
    image: "/fotos/escudo.png",
    isGreen: true,
  },
  {
    year: "2014",
    title: "TRANSFORMAÇÃO NO CAMPO",
    description:
      "São intensifcadas as obras no campo: colocação dos pneus e plantação do gramado. Tudo feito à mão om muita dedicação",
    image: "/fotos/2015.png",
    isGreen: false,
  },
  {
    year:"2019",
    title: "NOVA FASE DO MORADA",
    description:
        "Com o gramado em melhor condições e com o campo cercado, em 2019 começaram os treinamentos no formato atual com as categorias de base",
    image:"/fotos/2019.png"
  },
  {
    year: "2020",
    title: "MUDANÇAS NA PANDEMIA",
    description:
      "Com as restrições impostas na pandemia o projeto parou e mais obras foram feitas no gramado.",
    image: "/fotos/2020.png",
    isGreen: true,
  },
  {
    year: "2022",
    title: "SUB-17 CAMPEÃO MUNICIPAL",
    description:
      "Título do Campeonato Municipal de Macaíba em 2022, na categoria Sub-17.",
    image: "/fotos/sub17-2022.png",
    isGreen: false,
  },
  {
    year: "2026",
    title: "CAMPEÃO MUNICIPAL",
    description:
      "Título do Campeonato Municipal de Macaíba na categoria Sub-15.",
    image: "/fotos/sub15-final.png",
    isGreen: false,
  },
  {
    year: "2026",
    title: "CAMPEÃO MUNICIPAL",
    description:
      "Título do Campeonato Municipal de Macaíba na categoria Sub-17.",
    image: "/fotos/sub17-campeao.png",
    isGreen: true,
  },
];

export function MarcosSection() {
  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-brand mb-20 uppercase tracking-wide">
          Marcos Históricos
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-brand -translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-0">
            {marcos.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full md:mb-16 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center min-w-12 h-12 px-2 rounded-full text-white font-bold text-xs border-4 border-muted ${
                      item.isGreen ? "bg-secondary" : "bg-brand"
                    }`}
                  >
                    {item.year}
                  </div>

                  <div
                    className={`w-full md:w-5/12 flex flex-col px-4 mb-6 md:mb-0 text-center ${
                      isEven
                        ? "md:items-end md:text-right"
                        : "md:items-start md:text-left"
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-brand mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-full md:w-5/12 px-4">
                    <div className="relative w-full aspect-video shadow-md border-2 border-transparent hover:border-[#144B9E] transition-colors duration-300">
                      <Image
                        src={item.image}
                        sizes="(min-width: 768px) 40vw, 100vw"
                        alt={`Imagem representando o marco: ${item.title}`}
                        fill
                        className="object-cover object-[center_25%]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
