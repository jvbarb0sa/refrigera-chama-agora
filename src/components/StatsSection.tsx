import { useGsapFade } from "@/hooks/use-gsap-fade";

const stats = [
  { value: "+500", label: "Atendimentos realizados", sublabel: "em Três Lagoas e região" },
  { value: "+8", label: "Anos de experiência", sublabel: "em refrigeração comercial" },
  { value: "100%", label: "Cobertura local", sublabel: "em Três Lagoas e região" },
  { value: "98%", label: "Taxa de recomendação", sublabel: "pelos nossos clientes" },
];

export default function StatsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".stat-item", stagger: 0.12 });

  return (
    <section className="bg-muted/30 py-14 md:py-16 border-t border-b border-border">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item text-center px-4 md:px-6 ${
                i >= 2 ? "border-t border-border pt-8 md:border-t-0 md:pt-0" : ""
              }`}
            >
              <p className="text-4xl md:text-5xl font-semibold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
