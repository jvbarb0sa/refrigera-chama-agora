import { useGsapFade } from "@/hooks/use-gsap-fade";

const stats = [
  { value: "500+", label: "Atendimentos realizados" },
  { value: "8+", label: "Anos de experiência" },
  { value: "100km", label: "Cobertura regional" },
  { value: "98%", label: "Taxa de recomendação" },
];

export default function StatsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".stat-item", stagger: 0.12 });

  return (
    <section className="py-12 md:py-16 border-t border-b border-border">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center md:px-6">
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
