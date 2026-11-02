import { Section } from "@/src/components/shared/Section";
import Image from "next/image";
import Treze from "./assets/Treze.png";
import moradaLogo from "./assets/Morada-logo.png";
import { X } from "lucide-react";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
const jogos = [
  {
    data: "23/8/26",
    key: "1",
    hora: "8:15",
    categoria: "40+",
    casa: "TREZE DAS MARIAS",
    fora: "MORADA NOVA",
    campeonato: "Grupo C",
    lugar: "CAMPO DA VILA OLIMPICA 03",
    color: "secondary",
    casaImagePath: Treze,
    casaNome: "TREZE DAS MARIAS",
    foraImagePath: moradaLogo,
    foraNome: "MORADA NOVA",
  },
  {
    data: "30/8/26",
    key: "2",
    hora: "13:45",
    categoria: "SUB-15",
    casa: "MORADA NOVA",
    fora: "ABC DE MACAÍBA",
    campeonato: "Final",
    lugar: ".",
    color: "secondary",
    casaImagePath: moradaLogo,
    casaNome: "MORADA NOVA",
    foraImagePath: Treze,
    foraNome: "ABC DE MACAÍBA",
  },
  {
    data: "30/8/26",
    key: "3",
    hora: "15:15",
    categoria: "SUB-17",
    casa: "MORADA NOVA",
    fora: "MENINOS DO VILAR",
    campeonato: "Final",
    lugar: ".",
    color: "secondary",
    casaImagePath: moradaLogo,
    foraImagePath: Treze,
    foraNome: "MENINOS DO VILAR",
  },
];

export function JogosSection() {
  return (
    <Section containerClassName="flex flex-col gap-15 mb-0 pb-0">
      <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
        <div>
          <SectionTitle>PRÓXIMOS JOGOS DO MORADA</SectionTitle>
        </div>
      </div>
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8">
        {jogos.map((jogo) => {
          return (
            <div
              key={jogo.key}
              className="w-full h-full border-l-8 border-brand overflow-hidden bg-card transition-colors duration-300 hover:border-secondary"
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-start justify-center pl-4 py-2">
                  <p className="text-brand font-bold text-sm">{`${jogo.data}`}</p>
                  <p className="text-muted-foreground text-xs font-semibold">{`${jogo.hora}`}</p>
                </div>
                <div className="px-4 py-1.5 bg-brand text-brand-foreground font-bold text-xs tracking-wider uppercase">
                  <p>{`${jogo.categoria}`}</p>
                </div>
              </div>

              <div className="flex items-center justify-around py-8 px-4">
                <div className="flex flex-col items-center gap-2 text-center max-w-[110px]">
                  <div className="transition-transform duration-300 hover:scale-110">
                    <Image
                      height={jogo.casaImagePath === moradaLogo ? 200 : 80}
                      width={jogo.casaImagePath === moradaLogo ? 200 : 55}
                      alt="logo do time da casa"
                      src={jogo.casaImagePath}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold leading-snug">{`${jogo.casaNome}`}</p>
                </div>
                <div className="text-muted-foreground/60 font-medium">
                  <X className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center gap-2 text-center max-w-[110px]">
                  <div className="transition-transform duration-300 hover:scale-110">
                    <Image
                      height={jogo.foraImagePath === moradaLogo ? 200 : 55}
                      width={jogo.foraImagePath === moradaLogo ? 200 : 55}
                      alt="logo do time visitante"
                      src={jogo.foraImagePath}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold leading-snug">{`${jogo.foraNome}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
