import Image from "next/image";
import { NoticiasSecundariasDados} from "@/src/app/_sections/noticias/dados/NoticiasSecundarias";


export function NoticiaSecundaria() {
  return (
    <>
    
    {NoticiasSecundariasDados.map((noticia,index)=>(
        
           <div key={index} className="flex flex-col sm:flex-row bg-card border-t-4 border-secondary w-full overflow-hidden group">
      <Image
        src={noticia.imagem ?? "/hero-logo.jpeg"}
        alt={noticia.imagem ? "Obra do muro da Arena Morada Nova" : "imagem do time"}
        width={300}
        height={200}
        className="w-full sm:w-2/5 h-48 sm:h-auto object-cover object-center"
      />
      <div className="flex flex-col gap-2 p-5 w-full sm:w-3/5 justify-center">
        <p className="text-sm font-semibold text-muted-foreground">{noticia.data}</p>
        <h2 className="text-2xl font-extrabold text-brand">
          {noticia.titulo}
        </h2>
      </div>
    </div>
        
  ))}
   
  </>);

}
