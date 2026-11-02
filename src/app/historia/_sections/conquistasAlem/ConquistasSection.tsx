import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
export function ConquistasSection() {
  return (
    <Section className="mt-14 pt-16 pb-16">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div>
          <SectionTitle className="pl-4 border-l-8 border-secondary mb-8">
            O CRESCIMENTO E SUPERAÇÃO
          </SectionTitle>
          <p>
            Nossa verdadeira vitória não se mede apenas nas vitrines de troféus. O maior legado da AEC Morada Nova é a formação de cidadãos. Ao longo de anos de atuação, vimos com orgulho nossos jovens atletas se tornarem profissionais respeitados, pais de família e líderes positivos em sua comunidade.
          </p>
          
        </div>
        <div>
          <figure><img src="/fotos/diretoria.png" alt="Diretoria atual da A.E.C. Morada Nova" className="rounded-xl w-full lg:w-[450px]" /><figcaption className="text-sm text-muted-foreground pt-2">Diretoria atual</figcaption></figure>
        </div>
      </div>
    </Section>
  );
}
