const testimonials = [
  {
    name: "Carlos M.",
    context: "Residencial",
    text: "Chamei de manhã, à tarde já estava resolvido. Freezer voltou a funcionar sem trocar peça.",
  },
  {
    name: "Dona Maria",
    context: "Residencial",
    text: "O Vagner explicou direitinho o que era antes de mexer. Orçamento justo e geladeira funcionando até hoje.",
  },
  {
    name: "Marcos",
    context: "Mercado Central",
    text: "Câmara fria desligou numa sexta à noite. Atenderam rápido e salvaram nossa mercadoria.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="provas" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Depoimentos
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground">
          Quem já chamou, recomenda.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-8">
              <p className="text-3xl leading-none text-border">"</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{t.text}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
