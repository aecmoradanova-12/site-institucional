import { HeroSection } from "./_sections/hero/HeroSection";
import { NoticiasSection } from "./_sections/noticias/NoticiasSection";
import { CategoriasSection } from "./_sections/categorias/CategoriasSection";
import { JogosSection } from "./_sections/jogos/JogosSection";
import { LocalizacaoSection } from "./_sections/localizacao/LocalizacaoSection";

export default function Home() {
  return (
   <>
    <HeroSection/>
    <NoticiasSection/>
    { //<JogosSection/>
    }
    <CategoriasSection/>
    {//
    }
    <LocalizacaoSection/>
   </>

  );
}
