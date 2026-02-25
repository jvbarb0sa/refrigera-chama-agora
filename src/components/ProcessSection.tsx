const steps = [
  { num: "01", title: "Contato", desc: "Você nos chama pelo WhatsApp ou telefone." },
  { num: "02", title: "Diagnóstico", desc: "Avaliação completa do equipamento." },
  { num: "03", title: "Orçamento", desc: "Valor claro antes de qualquer serviço." },
  { num: "04", title: "Reparo + Garantia", desc: "Execução técnica com garantia emitida." },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="container">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Como funciona
        </span>
        <h2 className="mt-3 text-[32px] font-semibold leading-tight tracking-tight text-foreground">
          Do contato à garantia.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <span className="text-5xl font-bold text-border">{step.num}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 w-8 border-t border-border translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
