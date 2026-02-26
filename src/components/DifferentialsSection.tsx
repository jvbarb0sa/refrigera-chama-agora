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
          <p className="text-muted-foreground max-w-lg mx-auto mt-4">
            Atendimento técnico com responsabilidade, transparência e foco no resultado.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {diffs.map((d, i) => {
            const Icon = d.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={d.title}
                className="diff-card relative overflow-hidden rounded-2xl bg-card border-l-4 border-accent p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute top-4 right-6 text-6xl font-black text-primary/[0.04] select-none">
                  {num}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{d.title}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}