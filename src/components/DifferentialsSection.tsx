import { useGsapFade } from "@/hooks/use-gsap-fade";

const diffs = [
  {
    title: "Diagnóstico antes de trocar",
    desc: "A gente identifica o problema real antes de mexer em qualquer coisa. Sem peça trocada à toa.",
  },
  {
    title: "Garantia por escrito",
    desc: "Se der problema dentro do prazo, voltamos sem custo. Garantia emitida e documentada.",
  },
  {
    title: "Técnicos com nome e experiência",
    desc: "Não mandamos qualquer pessoa. Nossos técnicos trabalham com refrigeração comercial e linha branca há anos.",
  },
  {
    title: "Resposta no mesmo dia",
    desc: "Urgência comercial tem prioridade. Residencial a gente encaixa rápido também.",
  },
];

export default function DifferentialsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".diff-item", stagger: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-muted">
      <div className="container">
        <div ref={ref} className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Por que escolher a gente
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            O que nos diferencia.
          </h2>

          <div className="mt-10 space-y-6">
            {diffs.map((d, i) => (
              <div key={d.title} className="diff-item flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
