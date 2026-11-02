export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end text-white bg-noite">
      <img src="/fotos/sub17-campeao.png" alt="Time Sub-17 da Morada Nova comemorando o título municipal com troféus e medalhas" className="absolute inset-0 w-full h-full object-cover object-[50%_30%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-noite via-noite/60 to-noite/10" />
      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-16 pt-40 pb-14">
        <h1 className="text-[clamp(3.5rem,13vw,11rem)] font-black">
          Campeões<br />de Macaíba
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl text-white/90">
          Sub-15 e Sub-17 foram Campeões do Campeonato Municipal de Macaíba 2026
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/historia" className="bg-secondary px-7 py-3.5 font-bold uppercase tracking-wide hover:brightness-110 transition">Nossa história</a>
          <a href="/contato" className="border-2 border-white px-7 py-3.5 font-bold uppercase tracking-wide hover:bg-white hover:text-noite transition">Fale conosco</a>
        </div>
      </div>
      <div className="relative grid grid-cols-2 text-center font-heading font-extrabold uppercase text-2xl md:text-4xl">
        <div className="bg-secondary py-4">Sub-15 campeão</div>
        <div className="bg-brand py-4">Sub-17 campeão</div>
      </div>
    </section>
  );
}
