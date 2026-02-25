const testimonials = [
  {
    name: "Carlos M.",
    context: "Residencial — Freezer",
    text: "Chamei de manhã, à tarde já estava resolvido. Freezer voltou a funcionar sem trocar peça.",
  },
  {
    name: "Dona Maria",
    context: "Residencial — Geladeira",
    text: "O Vagner explicou direitinho o que era antes de mexer. Orçamento justo e geladeira funcionando até hoje.",
  },
  {
    name: "Marcos",
    context: "Mercado Central — Câmara fria",
    text: "Câmara fria desligou numa sexta à noite. Atenderam rápido e salvaram nossa mercadoria.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="provas" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Quem já chamou
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Trabalho limpo, orçamento claro, garantia.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-8">
              <p className="text-4xl leading-none text-primary/20 select-none">"</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{t.text}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Galeria antes/depois placeholder */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">Antes e depois</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-[4/3] rounded-lg bg-border/50 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Foto {n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
