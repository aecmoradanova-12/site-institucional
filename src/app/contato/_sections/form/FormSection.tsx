import { Section } from "@/src/components/shared/Section";
import Image from "next/image";
import { CopyButton } from "@/src/components/shared/CopyButton";
import { FormularioContato } from "./FormularioContato";

const QrCodePath = "/hero-logo.jpeg";

export function FormSection() {
  const chavePix = "00.000.000/0001-00";

  return (
    <Section>
      
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
        
        
        <div className="flex flex-col gap-6 w-full">
          
          
           {/* {<div className="bg-brand text-brand-foreground flex flex-col items-center justify-center text-center p-8 rounded-lg">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-3">
              Doação Instantânea (PIX)
            </h2>
            <p className="text-xs opacity-90 leading-relaxed mb-6">
              Qualquer valor ajuda a custear uniformes, inscrições em campeonatos
              e lanches para nossos atletas da base.
            </p>

            
            <div className="bg-card p-3 rounded-md mb-6">
              <Image
                src={QrCodePath}
                alt="QR Code para doação (PIX)"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <p className="text-[10px] uppercase font-semibold tracking-wider opacity-80 mb-2">
              Chave PIX (CNPJ)
            </p>

            
            <div className="bg-footer/50 w-full py-2.5 px-4 mb-3 rounded-md text-center">
              <span className="font-mono text-sm tracking-widest font-bold text-brand-foreground">
                {chavePix}
              </span>
            </div>

            
            <CopyButton 
              className="text-xs uppercase tracking-wider font-semibold text-brand-foreground hover:opacity-80 transition-opacity" 
              textToCopy={chavePix} 
            />
          </div>} */}

          
          <div className="border border-brand flex flex-col bg-card rounded-lg overflow-hidden">
            
            <div className="relative w-full h-[220px] bg-muted">
              <Image
                src={QrCodePath}
                alt="Manto Oficial"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col items-start gap-3">
              
              <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
                Manto Oficial
              </span>

              <h2 className="text-brand font-extrabold text-xl uppercase tracking-tight leading-tight">
                Vista as cores do Morada
              </h2>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Ao adquirir o uniforme oficial, 100% do lucro é revertido para os projetos sociais do clube.
              </p>

              
              <p className="text-secondary">PARA MAIS INFORMAÇÕES ENTRE EM CONTATO</p>
            </div>
          </div>

        </div>

        
        <div className="bg-muted p-8 lg:p-10 rounded-xl flex flex-col justify-between h-full border border-border" id="form">
          <div>
            <h2 className="text-brand font-extrabold text-2xl uppercase tracking-wide mb-3">
              Sua Empresa no Time
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-8">
              Buscamos parceiros locais que acreditem no poder transformador do esporte. 
              Torne-se um patrocinador oficial e vincule sua marca a um projeto de impacto social real.
            </p>

            <FormularioContato />
          </div>
        </div>

      </div>
    </Section>
  );
}