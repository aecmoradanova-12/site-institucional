import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";

const obras = [
  { src: "/fotos/arena-muro.png", legenda: "Construção do muro da Arena Morada Nova" },
  { src: "/fotos/arena-banco.png", legenda: "Construção do banco de reservas" },
];

export function ArenaSection() {
  return (
    <Section className="bg-muted">
      <SectionTitle className="mb-4">ARENA MORADA NOVA</SectionTitle>
      <p className="max-w-2xl text-muted-foreground mb-10">
        Nossa casa está sendo construída aos poucos, com o apoio da comunidade: muro, banco de reservas e a estrutura para receber os atletas da base.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {obras.map((o) => (
          <figure key={o.src} data-reveal>
            <img src={o.src} alt={o.legenda} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <figcaption className="text-sm text-muted-foreground pt-2">{o.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
