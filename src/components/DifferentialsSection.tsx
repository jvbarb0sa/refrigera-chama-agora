import { useGsapFade } from "@/hooks/use-gsap-fade";

const diffs = [
  { num: "01", title: "Atendimento transparente", desc: "Você sabe o que tem antes de aprovar. Diagnóstico detalhado, sem peça trocada sem necessidade." },
  { num: "02", title: "Diagnóstico técnico preciso", desc: "Identificamos a causa real do problema. Sem tentativa e erro, sem cobranças desnecessárias." },
  { num: "03", title: "Segurança na execução", desc: "Garantia por escrito em todo serviço. Se der problema no prazo, voltamos sem custo." },
  { num: "04", title: "Compromisso com prazo", desc: "Atendimento no mesmo dia para urgências comerciais. Priorizamos quem não pode parar." },
];

export default function DifferentialsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".diff-item", stagger: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted">
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
