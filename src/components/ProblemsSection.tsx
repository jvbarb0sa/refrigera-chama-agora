import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
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
    <section className="border-t border-border py-20 bg-background">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-2 problem-item">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50">
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Problemas que resolvemos</span>
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
              className="mt-8 text-accent-foreground h-14 px-8 text-base font-semibold inline-flex items-center gap-2 hover:brightness-90 transition-all rounded-[6px] bg-accent"
            >
              <WhatsAppIcon size={20} />
              Agendar avaliação técnica
            </a>
          </div>

          {/* Right column — diagnostic grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
            {problems.map((p) => (
              <div
                key={p}
                className="problem-item border-t border-border pt-5 pb-5 hover:border-primary transition-colors group"
              >
                <p className="text-[15px] font-medium text-foreground group-hover:text-primary transition-colors">
                  <span className="text-accent mr-2">·</span>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
