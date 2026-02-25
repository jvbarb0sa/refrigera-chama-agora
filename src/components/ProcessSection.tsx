import { useGsapFade } from "@/hooks/use-gsap-fade";

const steps = [
  {
    num: "01",
    label: "Primeiro passo",
    title: "Contato e triagem",
    desc: "Você fala com a gente pelo WhatsApp ou telefone. Entendemos a urgência e agendamos a visita.",
  },
  {
    num: "02",
    label: "Avaliação",
    title: "Diagnóstico no local",
    desc: "O técnico vai até o equipamento, identifica o problema real e explica o que precisa ser feito.",
  },
  {
    num: "03",
    label: "Aprovação",
    title: "Orçamento claro",
    desc: "Você recebe o orçamento detalhado antes de qualquer serviço. Sem surpresas. Aprovou? A gente executa.",
  },
  {
    num: "04",
    label: "Finalização",
    title: "Execução e garantia",
    desc: "Serviço feito com peças de qualidade e garantia por escrito. Deu problema? Voltamos sem custo.",
  },
];

export default function ProcessSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".step-item", stagger: 0.12, y: 16 });

  return (
    <section id="processo" className="py-14 md:py-20">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Como funciona
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Do contato à garantia — 4 passos.
        </h2>

        <div ref={ref} className="mt-10 relative">
          <div className="absolute left-[17px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step) => (
              <div key={step.num} className="step-item flex gap-5 md:gap-7">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.num}
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {step.label}
                  </span>
                  <h3 className="mt-0.5 text-base font-semibold text-foreground">
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
