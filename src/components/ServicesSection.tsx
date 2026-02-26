import { useGsapFade } from "@/hooks/use-gsap-fade";

const services = [
  { num: "01", title: "Refrigeração Comercial", desc: "Câmaras frias, balcões expositores, sistemas para mercados, conveniências e indústrias alimentícias." },
  { num: "02", title: "Refrigeração Residencial", desc: "Geladeiras, freezers e equipamentos inverter." },
  { num: "03", title: "Máquinas e Eletrodomésticos", desc: "Lavadoras, micro-ondas e máquinas de gelo." },
  { num: "04", title: "Sistemas Especiais", desc: "Sistemas em amônia, freon, painéis elétricos e automação." },
];

export default function ServicesSection() {
  const gridRef = useGsapFade<HTMLDivElement>({ children: ".bento-card", stagger: 0.08 });

  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Especialidades técnicas
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Especialidades técnicas
        </h2>
        <p className="mt-2 text-muted-foreground max-w-lg">
          Atendimento completo em refrigeração e elétrica para comércios e residências.
        </p>

        <div ref={gridRef} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.num}
              className="bento-card rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <span className="text-sm font-medium text-muted-foreground/40">{s.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
