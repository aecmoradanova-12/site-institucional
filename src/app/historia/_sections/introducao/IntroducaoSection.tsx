import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
export function IntroducaoSection() {
  return (
    <Section className="mt-14 pt-16 pb-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div>
          <SectionTitle className="pl-4 border-l-8 border-secondary mb-8">
            O COMEÇO DE UM SONHO
          </SectionTitle>
          <p>
            Com desejo de ajudar a comunidade através do esporte, a
            Associação Esportiva e Cultural Morada Nova não é apenas um clube de
            futebol. É um pilar de esperança e desenvolvimento humano que atende
            crianças e adolescentes de todas as categorias, do sub-8 ao sub-20.
          </p>
          <p className="mt-4">
            Desde os primeiros treinos em campos de terra até a estrutura de
            hoje, nossa trajetória é marcada pela inclusão. Cada drible, cada
            gol e cada vitória foram construídos com o suor de quem acredita que
            o esporte é a maior ferramenta de transformação social para a nossa
            juventude.
          </p>
        </div>
        <div>
          <img src="/fotos/sub15-time.png" alt="Time Sub-15 posado em campo" className="w-full lg:w-[450px] aspect-[4/5] object-cover object-top" />
        </div>
      </div>
    </Section>
  );
}
