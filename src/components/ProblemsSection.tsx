import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { Snowflake, ThermometerSnowflake, Gauge, CircuitBoard, WashingMachine, Zap, type LucideIcon } from "lucide-react";

const problems: { label: string; subtitle: string; id: string; icon: LucideIcon }[] = [
  { label: "Geladeira não gela", subtitle: "Falha no compressor ou gás", id: "01", icon: Snowflake },
  { label: "Freezer com falha", subtitle: "Temperatura irregular ou ruído", id: "02", icon: ThermometerSnowflake },
  { label: "Câmara fria com oscilação", subtitle: "Variação térmica constante", id: "03", icon: Gauge },
  { label: "Ar inverter com erro na placa", subtitle: "Erro eletrônico na placa inverter", id: "04", icon: CircuitBoard },
  { label: "Máquina de lavar com defeito", subtitle: "Motor, bomba ou painel com falha", id: "05", icon: WashingMachine },
  { label: "Problemas elétricos em sistemas", subtitle: "Curto, sobrecarga ou fiação", id: "06", icon: Zap },
];


export default function ProblemsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".problem-item", stagger: 0.08 });

  return (
    <section data-reveal style={{ visibility: "hidden" }} className="border-t border-border py-20 bg-background">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-2 problem-item">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 uppercase tracking-wider text-xs font-bold px-3 py-1 rounded-full border-none">
              Problemas que resolvemos
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-primary tracking-tight">
              Seu equipamento parou?
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              Atendimento técnico para falhas comuns em refrigeração e elétrica. Diagnóstico rápido e solução eficiente.
            </p>
            <a
              href={whatsappLink("Preciso de uma avaliação técnica no meu equipamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-accent-foreground h-14 px-8 text-base font-semibold inline-flex items-center gap-2 hover:brightness-90 transition-all rounded-[6px] bg-emerald-600">

              <WhatsAppIcon size={20} />
              Agendar avaliação técnica
            </a>
          </div>

          {/* Right column — bento grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="problem-item group flex items-center gap-4 rounded-[6px] border border-transparent ring-1 ring-slate-200/50 bg-card p-5 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-foreground group-hover:text-primary transition-colors">
                      {p.label}
                    </p>
                    <p className="text-sm text-slate-500 mt-0.5">{p.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>);

}