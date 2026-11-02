import Image from "next/image";
import { MapPin, MailIcon } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { FacebookIcon } from "./FacebookIcon";
import { YoutubeIcon } from "./YoutubeIcon";

export function Footer() {
  return (
    <footer className="bg-footer text-brand-foreground w-full pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <Image
            src="/logo.webp"
            alt="Logo do Morada Nova"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <h2 className="font-bold text-xl uppercase max-w-md">
            Associação Esportiva e Cultural Morada Nova
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-12 text-sm md:text-base">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-footerTitle font-bold uppercase">
              Sobre o Projeto
            </h3>
            <p className="leading-relaxed opacity-90">
              Transformamos a realidade de jovens em Morada Nova através do
              esporte e da cidadania. Desde 2012, somos referência em formação
              de atletas e seres humanos conscientes.
            </p>
          </div>

          
          <div className="flex flex-col gap-4">
            <h3 className="text-footerTitle font-bold uppercase">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              <a href="/" className="hover:opacity-75 transition-opacity">
                Início
              </a>
              <a href="/historia" className="hover:opacity-75 transition-opacity">
                História
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Base
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Notícias
              </a>
            </nav>
          </div>

          {/* Coluna 3: Contatos */}
          <div className="flex flex-col gap-4">
            <h3 className="text-footerTitle font-bold uppercase">
              Contato e Redes
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-start gap-2 hover:opacity-75 transition-opacity"
              >
                <MapPin className="shrink-0 w-5 h-5 mt-0.5" />
                <span>
                  Av. Benedito Pinheiro Borges, 100 - Bela vista, Macaíba - RN,
                  59280-000
                </span>
              </a>
              <a
                href="mailto:moradanova@gmail.com"
                className="flex items-center gap-2 hover:opacity-75 transition-opacity"
              >
                <MailIcon className="w-5 h-5" />
                moradanova@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-5 mt-2">
              <a href="#" className="hover:scale-110 transition-transform">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-brand-foreground/20 pt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Associação Esportiva e Cultural Morada
          Nova. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
