import { useGsapFade } from "@/hooks/use-gsap-fade";

const steps = [
  {
    num: "01",
    label: "Primeiro passo",
    title: "Contato e triagem",
    desc: "Você entra em contato pelo WhatsApp ou telefone. Fazemos uma triagem rápida para entender a urgência e agendar a visita técnica.",
  },
  {
    num: "02",
    label: "Avaliação",
    title: "Diagnóstico no local",
    desc: "O técnico vai até o equipamento, identifica o problema real e explica o que precisa ser feito, sem trocar peça sem necessidade.",
  },
  {
    num: "03",
    label: "Aprovação",
    title: "Orçamento claro",
    desc: "Você recebe o orçamento detalhado antes de qualquer serviço. Sem surpresas, sem custo escondido. Aprovou? A gente executa.",
  },
  {
    num: "04",
    label: "Finalização",
    title: "Execução e garantia",
    desc: "Serviço executado com peças de qualidade e garantia emitida por escrito. Se der problema dentro do prazo, voltamos sem custo.",
  },
];

export default function ProcessSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".step-item", stagger: 0.15, y: 20 });

  return (
    <section id="processo" className="py-14 md:py-20">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Como funciona
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Do contato à garantia: 4 passos.
        </h2>

        <div ref={ref} className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="step-item flex gap-6 md:gap-8">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {step.num}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {step.label}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
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
