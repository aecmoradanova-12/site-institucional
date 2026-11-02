import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
import Image from "next/image";
import FranciscoImage from "@/public/hero-logo.jpeg";

export function Fundador() {
  return (
    <Section className="bg-brand text-brand-foreground"
      containerClassName="flex flex-col md:flex-row gap-10 items-center">
      <Image src={FranciscoImage} height={300} alt="Francisco Ferreira da Fonseca, presidente e fundador" className="w-full md:w-72 h-auto object-cover" />
      <div>
        <p className="text-footerTitle">LIDERANÇA & VISÃO</p>
        <SectionTitle className="text-brand-foreground mt-4 ">TRANSFORMANDO VIDAS ATRAVÉS DO ESPORTE</SectionTitle>
        <div className="flex flex-col gap-4 pt-2 pb-2 mt-5 mb-5 pl-8 border-l-6 border-secondary ">
          <p>
            Nosso trabalho vai além das quatro linhas. Cada criança que entra no
            Morada Nova traz consigo sonhos que merecem ser cultivados com
            disciplina, respeito e amor pelo próximo.
          </p>
          <p>
            Acreditamos que o futebol é o veículo, mas o destino final é a
            formação de cidadãos íntegros para a nossa sociedade.
          </p>
        </div>
        <p className="text-brand-foreground mb-4">Francisco Ferreira da Fonseca</p>
        <p className="text-footerTitle">PRESIDENTE E FUNDADOR</p>
      </div>
    </Section>
  );
}
