import { useRef, useLayoutEffect } from "react";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stats = [
  { prefix: "+", end: 400, suffix: "", label: "Atendimentos", sublabel: "em Três Lagoas e região" },
  { prefix: "+", end: 8, suffix: "", label: "Experiência", sublabel: "em refrigeração comercial" },
  { prefix: "", end: 100, suffix: "%", label: "Cobertura", sublabel: "em Três Lagoas e região" },
  { prefix: "", end: 98, suffix: "%", label: "Recomendação", sublabel: "pelos nossos clientes" },
];

export default function StatsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".stat-item", stagger: 0.08, y: 16 });
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return;
    const els = numRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = els[i];
        if (!el) return;
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: stat.end,
          duration: 2,
          ease: "power2.out",
          snap: { val: 1 },
          onUpdate() {
            el.textContent = `${stat.prefix}${Math.round(proxy.val)}${stat.suffix}`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section data-reveal style={{ visibility: "hidden" }} className="bg-muted/30 py-14 md:py-16 border-t border-b border-border">
      <div className="container">
        <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item text-center px-4 md:px-6">
              <p className="text-4xl md:text-6xl tracking-tight font-semibold text-primary">
                <span ref={(el) => { numRefs.current[i] = el; }}>
                  {stat.prefix}0{stat.suffix}
                </span>
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
