import { useGsapFade } from "@/hooks/use-gsap-fade";

const stats = [
  { value: "+400", label: "Atendimentos", sublabel: "em Três Lagoas e região" },
  { value: "+8", label: "Experiência", sublabel: "em refrigeração comercial" },
  { value: "100%", label: "Cobertura", sublabel: "em Três Lagoas e região" },
  { value: "98%", label: "Recomendação", sublabel: "pelos nossos clientes" },
];

export default function StatsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".stat-item", stagger: 0.08, y: 16 });

  return (
    <section data-reveal style={{ visibility: "hidden" }} className="bg-muted/30 py-14 md:py-16 border-t border-b border-border">
      <div className="container">
        <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item text-center px-4 md:px-6"
            >
              <p className="text-4xl md:text-6xl tracking-tight font-semibold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground hidden md:block">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
