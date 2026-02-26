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
  const ref = useGsapFade<HTMLDivElement>({ children: ".diff-card", stagger: 0.12 });

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#0b1622]">
      <div className="container">
        <div className="flex items-start gap-6 md:gap-10">
          {/* Vertical rotated label */}
          <span
            className="hidden md:block text-xs font-medium uppercase tracking-[0.25em] text-white/60 shrink-0"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Diferenciais
          </span>

          <div className="flex-1">
            {/* Title block — left-aligned */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl leading-tight tracking-tight">
                Por que escolher a Refrigeração Taboado
              </h2>
              <p className="mt-3 text-sm text-[#9ca3af] max-w-md">
                Atendimento técnico com responsabilidade, transparência e foco no resultado.
              </p>
            </div>

            {/* Industrial grid */}
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {diffs.map((d, i) => {
                const Icon = d.icon;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <div key={d.title} className="diff-card border-t-2 border-[#4A9EE0] pt-6 py-8 px-2">
                    <span className="text-sm font-light text-white/40">{num}</span>
                    <Icon size={24} className="text-white mt-4" />
                    <h3 className="mt-4 text-lg font-bold text-white">{d.title}</h3>
                    <p className="mt-2 text-sm text-[#9ca3af] leading-relaxed line-clamp-2">{d.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
