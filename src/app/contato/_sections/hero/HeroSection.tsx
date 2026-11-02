import Link from "next/link";

import { Button } from "@/src/components/shared/Button";
export function HeroSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-center px-6 py-12 text-brand-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(10, 37, 79, 0.95)), url('/fotos/escudo.png')",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold md:text-6xl tracking-tight text-center">
          MAIS QUE FUTEBOL, UM FUTURO
        </h1>
        <p className="text-lg text-blue-100/90 leading-relaxed text-center">
          Sua contribuição transforma vidas através do esporte. No AEC Morada
          Nova, apoiamos o desenvolvimento humano desde a iniciação até o alto
          rendimento, criando cidadãos em todas as categorias.
        </p>
        <div className="flex items-center gap-3">
          <Link href="#form" >
            <Button variant="solidTwo">
              COMEÇAR A APOIAR
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
