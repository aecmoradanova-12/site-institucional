import { HeroSection } from "@/src/app/contato/_sections/hero/HeroSection"
import { DadosSection } from "./_sections/dados/DadosSection"
import { FormSection } from "./_sections/form/FormSection"
import { PatrocinadoresSection } from "./_sections/patrocinadores/PatrocinadoresSection"
export default function Contato(){
  return(
    <div>
      <HeroSection/>
      <DadosSection/>
      <FormSection/>
      <PatrocinadoresSection/>
    </div>
  )
}