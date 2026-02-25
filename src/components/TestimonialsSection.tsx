import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Chamei de manhã, à tarde já estava resolvido. Freezer voltou a funcionar sem trocar peça. Recomendo.",
  },
  {
    name: "Dona Maria",
    text: "O Vagner explicou direitinho o que era antes de mexer. Orçamento justo e geladeira funcionando até hoje.",
  },
  {
    name: "Marcos — Mercado Central",
    text: "Câmara fria desligou numa sexta à noite. Atenderam rápido e salvaram nossa mercadoria. Profissional de verdade.",
  },
];

const operationalProofs = [
  "Atendemos comércio e residência",
  "Serviço com garantia emitida",
  "Diagnóstico antes de trocar peça",
];

export default function TestimonialsSection() {
  return (
    <section id="provas" className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <h2 className="font-heading text-3xl font-800 tracking-tight text-primary-foreground md:text-4xl">
          Quem já <span className="text-primary">chamou</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {operationalProofs.map((p) => (
            <div key={p} className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-5 py-2 text-sm text-muted-foreground">
              <CheckCircle2 size={16} className="text-primary shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
