import { HeroSection } from "../historia/_sections/hero/HeroSection";
import { IntroducaoSection } from "./_sections/introducao/IntroducaoSection";
import { CrescimentoSection } from "./_sections/crescimento/CrescimentoSection";
import { ConquistasSection } from "./_sections/conquistasAlem/ConquistasSection";
import { MarcosSection } from "./_sections/marcos/MarcosSection";
import { ArenaSection } from "./_sections/arena/ArenaSection";
import { Fundador } from "./_sections/fundador/Fundador";
import { Galeria } from "./_sections/galeria/GaleriaSection";
import { Convite } from "./_sections/convite/ConviteSection";
export default function Historia() {
  return (
    <>
      <HeroSection />
      <IntroducaoSection />
      <CrescimentoSection />
      <ConquistasSection />
      <MarcosSection />
      <ArenaSection />
      <Fundador/>
      <Galeria/>
      <Convite/>
    </>
  );
}
