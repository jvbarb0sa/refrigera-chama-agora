import { Search, FileText, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <Search size={28} />,
    title: "Diagnóstico e teste",
    desc: "Avaliação completa do equipamento antes de qualquer intervenção.",
  },
  {
    icon: <FileText size={28} />,
    title: "Orçamento claro",
    desc: "Sem surpresa. Você aprova antes de começar.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Reparo técnico",
    desc: "Execução com peças de qualidade e procedimento correto.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Garantia",
    desc: "Serviço entregue com garantia. Se voltar, a gente resolve.",
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-heading text-3xl font-800 tracking-tight text-primary-foreground md:text-4xl">
          Como <span className="text-primary">trabalhamos</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-start">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                  {step.icon}
                </span>
                <span className="font-heading text-4xl font-900 text-border">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-700 text-primary-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
