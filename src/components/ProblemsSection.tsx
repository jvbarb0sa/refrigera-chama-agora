import { Wrench } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const problems = [
  "Geladeira não gela",
  "Freezer com falha",
  "Câmara fria com oscilação",
  "Ar inverter com erro na placa",
  "Máquina de lavar com defeito",
  "Problemas elétricos em sistemas",
];

export default function ProblemsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".problem-item", stagger: 0.08 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left column */}
          <div className="problem-item">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Problemas que resolvemos
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
              Seu equipamento parou?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Atendimento técnico para falhas comuns em refrigeração e elétrica. Diagnóstico rápido e solução eficiente.
            </p>
            <Button asChild variant="strong" size="lg" className="mt-8 h-14 px-8 text-base">
              <a href={whatsappLink("Preciso de uma avaliação técnica no meu equipamento.")} target="_blank" rel="noopener">
                <WhatsAppIcon size={20} />
                Agendar avaliação técnica
              </a>
            </Button>
          </div>

          {/* Right column — problem list */}
          <div>
            {problems.map((p, i) => (
              <div
                key={p}
                className={`problem-item flex items-center gap-4 py-4 px-3 -mx-3 rounded-lg hover:bg-muted/50 transition-colors ${
                  i < problems.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <Wrench size={18} className="shrink-0 text-accent" />
                <span className="text-[15px] font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
