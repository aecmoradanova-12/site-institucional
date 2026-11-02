import { SectionTitle } from "@/src/components/shared/SectionTitle";
import { Section } from "@/src/components/shared/Section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { NoticiaPrincipal } from "@/src/components/shared/NoticiaPrincipal";
import { NoticiaSecundaria } from "@/src/components/shared/NoticiaSecundaria";

export function NoticiasSection() {
  return (
    <Section className="mt-10 mb-20">
      <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
        <div>
          <SectionTitle>ÚLTIMOS RESULTADOS & NOTÍCIAS</SectionTitle>
        </div>
        
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-start w-full">
        
        <NoticiaPrincipal/>

        
        <div className="flex flex-col gap-6 w-full">
          <NoticiaSecundaria/>
        </div>
      </div>
    </Section>
  );
}
