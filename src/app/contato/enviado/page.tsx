import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NomeObrigado } from "./NomeObrigado";

export const metadata: Metadata = {
  title: "Mensagem enviada | A.E.C. Morada Nova",
  robots: { index: false },
};

export default function Enviado() {

  return (
    <section className="min-h-[85vh] flex items-center bg-noite text-white pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto w-full">
        <div className="h-16 w-16 bg-secondary grid place-items-center mb-8" aria-hidden="true">
          <Check className="w-9 h-9" strokeWidth={3} />
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black">
          Mensagem<br />enviada
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
          <NomeObrigado />
          Recebemos sua proposta de parceria. Vamos responder pelo e-mail ou WhatsApp que você informou.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="bg-secondary px-7 py-3.5 font-bold uppercase tracking-wide hover:brightness-110 transition">
            Voltar ao início
          </Link>
          <Link href="/historia" className="border-2 border-white px-7 py-3.5 font-bold uppercase tracking-wide hover:bg-white hover:text-noite transition">
            Conheça nossa história
          </Link>
        </div>
      </div>
    </section>
  );
}
