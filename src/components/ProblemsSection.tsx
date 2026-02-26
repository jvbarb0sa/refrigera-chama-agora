import { Check } from "lucide-react";
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
  const listRef = useGsapFade<HTMLDivElement>({ children: ".problem-item", stagger: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div ref={listRef} className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Problemas que resolvemos
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            Seu equipamento parou?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Atendimento técnico para falhas comuns em refrigeração e elétrica.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p}
                className="problem-item flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>

          <Button asChild variant="strong" size="lg" className="problem-item mt-10 h-14 px-8 text-base">
            <a href={whatsappLink("Preciso de uma avaliação técnica no meu equipamento.")} target="_blank" rel="noopener">
              <WhatsAppIcon size={20} />
              Agendar avaliação técnica
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
