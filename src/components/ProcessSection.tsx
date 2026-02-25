import { useFadeIn } from "@/hooks/use-fade-in";

const steps = [
  { num: "01", title: "Contato", desc: "WhatsApp ou telefone. Sem burocracia." },
  { num: "02", title: "Diagnóstico", desc: "Avaliação técnica no local." },
  { num: "03", title: "Orçamento", desc: "Valor claro antes de qualquer serviço." },
  { num: "04", title: "Reparo + Garantia", desc: "Execução com garantia por escrito." },
];

export default function ProcessSection() {
  const fadeRef = useFadeIn<HTMLDivElement>();

  return (
    <section id="processo" className="py-10 md:py-14">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Como funciona
        </span>
        <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-[28px]">
          Do contato à garantia — 4 passos.
        </h2>

        <div ref={fadeRef} className="mt-8 grid grid-cols-2 gap-px lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative p-5 lg:p-6">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full border-t border-dashed border-border -z-0" />
              )}
              <span className="relative text-3xl font-bold text-primary/20">{step.num}</span>
              <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
