import { useFadeIn } from "@/hooks/use-fade-in";

const testimonials = [
  {
    name: "Marcos",
    context: "Mercado Central — Câmara fria",
    text: "Câmara fria desligou numa sexta à noite. Atenderam rápido e salvaram nossa mercadoria.",
    featured: true,
  },
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
];

export default function TestimonialsSection() {
  const fadeRef = useFadeIn<HTMLDivElement>();

  const featured = testimonials.find((t) => t.featured)!;
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section id="provas" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Quem já chamou
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Trabalho limpo, orçamento claro, garantia.
        </h2>

        <div ref={fadeRef} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Featured card — comercial */}
          <div className="lg:col-span-3 rounded-xl border-l-4 border-l-primary border border-border bg-card p-8 md:p-10">
            <p className="text-4xl leading-none text-primary/20 select-none">"</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">{featured.text}</p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground">{featured.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{featured.context}</p>
            </div>
          </div>

          {/* Smaller cards — residenciais */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {others.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-foreground">{t.text}</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
