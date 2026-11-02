import Image from "next/image";
import { NoticiaPrincipalDados } from '@/src/app/_sections/noticias/dados/NoticiaPrincipalDados';




export function NoticiaPrincipal() {
  return (
    
      <div className="flex flex-col bg-card border-t-4 border-secondary w-full h-full overflow-hidden group">
        <Image
          src="/fotos/sub17-campeao.png"
          alt="Sub-17 campeão com os troféus"
          width={750}
          height={500}
          className="w-full h-auto aspect-video object-cover object-top"
        />
        <div className="flex flex-col gap-2 mt-4 mb-6 px-5 w-full">
          <p className="text-sm font-semibold text-muted-foreground">{NoticiaPrincipalDados.data}</p>
          <h2 className="text-4xl font-extrabold text-brand">
            {NoticiaPrincipalDados.titulo}
          </h2>
          <p className="opacity-80">
            {NoticiaPrincipalDados.resumo}
          </p>
        </div>
      </div>
    
  );
}
