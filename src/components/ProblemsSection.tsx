import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const problems = [
  "Geladeira não gela",
  "Freezer com falha",
  "Câmara fria com oscilação",
  "Ar inverter com erro na placa",
  "Máquina de lavar com defeito",
];

export default function ProblemsSection() {
  const listRef = useGsapFade<HTMLDivElement>({ children: ".problem-item", stagger: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div ref={listRef} className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Problemas que resolvemos
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            Seu equipamento parou?
          </h2>

          <ul className="mt-10 space-y-4">
            {problems.map((p) => (
              <li key={p} className="problem-item flex items-center gap-3">
                <Check size={14} className="shrink-0 text-primary" />
                <span className="text-base text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="strong" size="lg" className="problem-item mt-10 h-14 px-8 text-base">
            <a href={whatsappLink("Preciso de uma avaliação técnica no meu equipamento.")} target="_blank" rel="noopener">
              <MessageCircle size={20} />
              Agendar avaliação técnica
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
