import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";

const titulos = [
  { cat: "Sub-17", texto: "Campeão do Campeonato Municipal de Macaíba", foto: "/fotos/sub17-campeao.png", alt: "Elenco Sub-17 campeão" },
  { cat: "Sub-15", texto: "Campeão do Campeonato Municipal de Macaíba", foto: "/fotos/sub15-campeao.png", alt: "Comissão e atleta Sub-15 com o troféu de campeão" },
];

export function CategoriasSection() {
  return (
    <Section className="bg-brand/5">
      <SectionTitle className="mb-10">DUAS CATEGORIAS, DOIS TÍTULOS</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {titulos.map((t) => (
          <article key={t.cat} data-reveal className="relative overflow-hidden h-[420px] md:h-[560px] group">
            <img src={t.foto} alt={t.alt} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-noite to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-6xl md:text-7xl font-black">{t.cat}</h3>
              <p className="mt-2 text-blue-50/90">{t.texto}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
