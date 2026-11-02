export function HeroSection() {
  return (
    <section
      className="w-full h-[50vh] flex items-center justify-start"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(10, 37, 79, 0.95)), url('/logo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="border-l-8 border-secondary w-2xl p-4 ml-8">
          <h1 className="text-brand-foreground text-6xl font-bold">
            O FUTURO COMEÇA AQUI
          </h1>
          <p className="text-brand-foreground">
            Conheça nossas categorias de base, onde o talento é lapidado com os
            valores e a tradição do Morada Nova.
          </p>
        </div>
      </div>
    </section>
  );
}
