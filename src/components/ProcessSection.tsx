import { useGsapFade } from "@/hooks/use-gsap-fade";

const steps = [
  {
    num: "01",
    title: "Contato e triagem",
    desc: "Você fala com a gente pelo WhatsApp ou telefone. Entendemos a urgência e agendamos a visita.",
  },
  {
    num: "02",
    title: "Diagnóstico no local",
    desc: "O técnico vai até o equipamento, identifica o problema real e explica o que precisa ser feito.",
  },
  {
    num: "03",
    title: "Orçamento claro",
    desc: "Você recebe o orçamento detalhado antes de qualquer serviço. Sem surpresas. Aprovou? A gente executa.",
  },
  {
    num: "04",
    title: "Execução e garantia",
    desc: "Serviço feito com peças de qualidade e garantia por escrito. Deu problema? Voltamos sem custo.",
  },
];

export default function ProcessSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".step-item", stagger: 0.1, y: 14 });

  return (
    <section id="processo" className="py-14 md:py-20">
      <div className="container">
        <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-primary">
          Como funciona
        </span>
        <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
          Do contato à garantia — 4 passos.
        </h2>

        <div ref={ref} className="mt-10 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-7 md:space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="step-item flex gap-5">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-md">
                    {step.desc}
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
