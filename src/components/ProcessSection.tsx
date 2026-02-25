const steps = [
  {
    num: "01",
    title: "Contato",
    desc: "Você chama pelo WhatsApp ou telefone. Sem burocracia.",
  },
  {
    num: "02",
    title: "Diagnóstico",
    desc: "Avaliação técnica no local. Identificamos a causa real.",
  },
  {
    num: "03",
    title: "Orçamento",
    desc: "Valor claro antes de qualquer serviço. Sem surpresa.",
  },
  {
    num: "04",
    title: "Reparo + Garantia",
    desc: "Execução técnica com garantia emitida por escrito.",
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Como funciona
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Do contato à garantia — 4 passos.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative p-6 lg:p-8">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full border-t border-dashed border-border -z-0" />
              )}
              <span className="relative text-4xl font-bold text-primary/20">{step.num}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
