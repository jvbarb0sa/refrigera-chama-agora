import { useGsapFade } from "@/hooks/use-gsap-fade";

const stats = [
  { value: "500+", label: "Atendimentos" },
  { value: "8+", label: "Anos atuando" },
  { value: "100km", label: "Cobertura" },
  { value: "98%", label: "Recomendação" },
];

export default function StatsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".stat-item", stagger: 0.1 });

  return (
    <section className="py-10 md:py-12 border-t border-b border-border">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center md:px-6">
              <p className="text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
