import { Eye, ShieldCheck, Award, Clock } from "lucide-react";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import type { LucideIcon } from "lucide-react";

const diffs: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Eye, title: "Transparência", desc: "Diagnóstico claro e explicação técnica antes de qualquer serviço." },
  { icon: ShieldCheck, title: "Segurança", desc: "Procedimentos adequados e responsabilidade técnica em cada etapa." },
  { icon: Award, title: "Qualidade", desc: "Peças adequadas e manutenção executada com eficiência." },
  { icon: Clock, title: "Compromisso", desc: "Pontualidade, respeito ao prazo e acompanhamento pós-serviço." },
];

export default function DifferentialsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".diff-card", stagger: 0.1 });

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            Por que escolher a Refrigeração Taboado
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {diffs.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="diff-card rounded-2xl bg-card p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
