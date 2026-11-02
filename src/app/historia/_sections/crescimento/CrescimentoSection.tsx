import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
export function CrescimentoSection() {
  return (
    <Section className="mt-14 bg-brand-foreground pt-16 pb-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div>
          <img src="/fotos/sub17-final.png" alt="Time Sub-17 posado antes da final" className="w-full lg:w-[450px] aspect-[4/3] object-cover" />
        </div>
        <div>
          <SectionTitle className="pl-4 border-l-8 border-secondary mb-8">
            OCRESCIMENTO E SUPERAÇÃO
          </SectionTitle>
          <p>
            Com o passar dos anos, o projeto ganhou corpo. As dificuldades
            iniciais forjaram uma identidade resiliente no Morada Nova. Novas
            categorias de base foram criadas, competições regionais começaram a
            ser disputadas, e o nome do clube ecoou cada vez mais forte pelos
            campos da cidade.
          </p>
          <p className="mt-4">
            Essa expansão exigiu sacrifícios. A evolução da estrutura de
            treinamento, a aquisição de materiais adequados e a busca por
            profissionais qualificados foram marcos de uma comunidade que
            abraçou a causa. Cada novo troféu levantado não representava apenas
            uma vitória esportiva, mas a superação de barreiras estruturais e
            financeiras, provando que o talento, aliado à disciplina, alcança o
            impossível.
          </p>
        </div>
      </div>
    </Section>
  );
}
