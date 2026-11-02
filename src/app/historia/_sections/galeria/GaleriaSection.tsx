import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";

const fotos = [
  { src: "/fotos/sub17-2022.png", legenda: "Time Sub-17 campeão municipal de Macaíba em 2022" },
  { src: "/fotos/sub17-campeao.png", legenda: "Sub-17 campeão do Municipal de Macaíba" },
  { src: "/fotos/sub15-campeao.png", legenda: "Sub-15 campeão do Municipal de Macaíba" },
  { src: "/fotos/sub17-final.png", legenda: "Sub-17 na final do Municipal de Macaíba" },
  { src: "/fotos/sub15-final.png", legenda: "Sub-15 na final do Municipal de Macaíba" },
  { src: "/fotos/sub17-luiz.png", legenda: "Luiz, atleta do Sub-17, com a medalha" },
  { src: "/fotos/sub15-time.png", legenda: "Time Sub-15, campeão municipal" },
  { src: "/fotos/sub15-adryan.png", legenda: "Adryan, atleta do Sub-15, com a medalha" },
  { src: "/fotos/sub15-diretoria.png", legenda: "Diretoria com o troféu do Sub-15", recorte: true },
  { src: "/fotos/sub17-roda.png", legenda: "Roda do Sub-17 antes da partida" },
];

export function Galeria() {
  return (
    <Section>
      <SectionTitle className="mb-10">GALERIA</SectionTitle>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>figure]:mb-5">
        {fotos.map((f) => (
          <figure key={f.src} data-reveal className="break-inside-avoid overflow-hidden rounded-xl">
            <img src={f.src} alt={f.legenda} loading="lazy" className={`w-full ${f.recorte ? "aspect-[4/5] object-cover object-[50%_42%]" : ""}`} />
            <figcaption className="text-sm text-muted-foreground pt-2">{f.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
