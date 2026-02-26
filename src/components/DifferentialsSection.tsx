import { useGsapFade } from "@/hooks/use-gsap-fade";

const diffs = [
  { num: "01", title: "Transparência no atendimento", desc: "Diagnóstico claro e explicação técnica do serviço." },
  { num: "02", title: "Segurança na execução", desc: "Procedimentos adequados e responsabilidade técnica." },
  { num: "03", title: "Qualidade no serviço", desc: "Peças adequadas e manutenção eficiente." },
  { num: "04", title: "Compromisso com o cliente", desc: "Pontualidade e respeito ao prazo." },
];

export default function DifferentialsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".diff-item", stagger: 0.1 });

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Diferenciais
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Por que escolher a Refrigeração Taboado
        </h2>

        <div ref={ref} className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d) => (
            <div key={d.num} className="diff-item">
              <span className="text-sm font-medium text-muted-foreground/40">{d.num}</span>
              <h3 className="mt-2 text-base font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
