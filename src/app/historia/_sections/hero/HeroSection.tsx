export function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-end text-white bg-noite">
      <img src="/fotos/sub17-roda.png" alt="Atletas do Sub-17 reunidos em roda antes da partida" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-noite via-noite/70 to-noite/30" />
      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-16 pt-40 pb-14">
        <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-black">Nossa<br />história</h1>
        <p className="mt-5 text-xl font-semibold text-footerTitle">Tradição, raça e coração</p>
      </div>
    </section>
  );
}
