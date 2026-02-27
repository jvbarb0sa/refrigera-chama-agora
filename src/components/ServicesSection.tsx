import { Thermometer, Home, Settings, Wrench, Search, Building2, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const services = [
  {
    icon: Thermometer,
    badge: "COMERCIAL",
    title: "Refrigeração Comercial",
    desc: "Câmaras frias, balcões expositores e sistemas completos para mercados, conveniências e indústrias alimentícias.",
    msg: "Preciso de assistência em refrigeração comercial.",
  },
  {
    icon: Home,
    badge: "RESIDENCIAL",
    title: "Refrigeração Residencial",
    desc: "Geladeiras, freezers, cervejeiras e equipamentos inverter com diagnóstico técnico especializado.",
    msg: "Preciso de assistência em refrigeração residencial.",
  },
  {
    icon: Settings,
    badge: "PREVENTIVA",
    title: "Manutenção Preventiva",
    desc: "Planos de manutenção programada para evitar paradas e prolongar a vida útil dos equipamentos.",
    msg: "Quero saber sobre manutenção preventiva.",
  },
  {
    icon: Wrench,
    badge: "INSTALAÇÃO",
    title: "Instalação & Regularização",
    desc: "Instalação técnica de equipamentos com laudo, ART e adequação às normas vigentes.",
    msg: "Preciso de instalação ou regularização.",
  },
  {
    icon: Search,
    badge: "DIAGNÓSTICO",
    title: "Diagnóstico Técnico",
    desc: "Avaliação completa com instrumentação profissional para identificar falhas com precisão.",
    msg: "Preciso de um diagnóstico técnico.",
  },
  {
    icon: Building2,
    badge: "CORPORATIVO",
    title: "Contratos para Empresas",
    desc: "Atendimento prioritário com SLA, visitas programadas e suporte técnico dedicado para sua operação.",
    msg: "Quero saber sobre contratos corporativos.",
    dark: true,
  },
];

export default function ServicesSection() {
  const gridRef = useGsapFade<HTMLDivElement>({ children: ".service-card", stagger: 0.08 });

  return (
    <section id="servicos" data-reveal style={{ visibility: "hidden" }} className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50">
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Especialidades</span>
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
              Soluções técnicas para quem{" "}
              <span className="text-muted-foreground">não pode parar.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm md:text-right leading-relaxed">
            Atendimento completo em refrigeração e elétrica para comércios e residências na região de Dourados · MS.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            const isDark = s.dark;
            return (
              <a
                key={s.title}
                href={whatsappLink(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`service-card group relative flex flex-col justify-between rounded-[6px] border p-6 md:p-8 transition-colors ${
                  isDark
                    ? "bg-[hsl(var(--onyx))] border-[hsl(var(--onyx))] text-[hsl(var(--primary-foreground))]"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {/* Top row: icon + badge */}
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDark ? "bg-white/10" : "bg-muted"
                      }`}
                    >
                      <Icon size={22} className={isDark ? "text-white" : "text-primary"} />
                    </div>
                    <span
                      className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-[6px] border ${
                        isDark
                          ? "border-white/20 text-white/70"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-foreground"}`}>
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isDark ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-1.5">
                  <span
                    className={`text-sm font-semibold ${
                      isDark ? "text-white" : "text-primary"
                    } group-hover:underline underline-offset-4`}
                  >
                    Solicitar orçamento
                  </span>
                  <ArrowRight
                    size={14}
                    className={`transition-transform group-hover:translate-x-1 ${
                      isDark ? "text-white" : "text-primary"
                    }`}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
