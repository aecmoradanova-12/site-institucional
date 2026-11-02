import Image from "next/image"

import patrocinador1 from "./assets/dody-logo.png"
export function PatrocinadoresSection(){
  return(
    <section className="pt-8 pb-8 flex flex-col gap-8 items-center justify-center">
        <h2 className="text-2xl text-brand">NOSSOS PARCEIROS</h2> 
        <div className="flex flex-wrap items-center gap-8">
          <Image src={patrocinador1} alt={'logo da dody sports'} height={20} width={200} />
          <Image src={patrocinador1} alt={'logo da dody sports'} height={20} width={200} />

        </div>     
    </section>
  )
}