import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const problems = [
{ label: "Geladeira não gela", id: "01" },
{ label: "Freezer com falha", id: "02" },
{ label: "Câmara fria com oscilação", id: "03" },
{ label: "Ar inverter com erro na placa", id: "04" },
{ label: "Máquina de lavar com defeito", id: "05" },
{ label: "Problemas elétricos em sistemas", id: "06" }];


export default function ProblemsSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".problem-item", stagger: 0.08 });

  return (
    <section data-reveal style={{ visibility: "hidden" }} className="border-t border-border py-20 bg-background">
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
              className="mt-8 text-accent-foreground h-14 px-8 text-base font-semibold inline-flex items-center gap-2 hover:brightness-90 transition-all rounded-[6px] bg-emerald-600">

              <WhatsAppIcon size={20} />
              Agendar avaliação técnica
            </a>
          </div>

          {/* Right column — bento grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p) =>
            <div
              key={p.id}
              className="problem-item group relative overflow-hidden rounded-[6px] border border-border bg-card p-5 transition-colors hover:border-primary/30">

                {/* Watermark */}
                <span className="absolute -bottom-3 -right-1 text-[5rem] font-semibold text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-500 pointer-events-none select-none leading-none">
                  {p.id}
                </span>

                <div className="relative z-10">
                  <span className="text-xs font-semibold text-muted-foreground/60 font-mono">{p.id}</span>
                  <p className="mt-2 text-[15px] font-medium text-foreground group-hover:text-primary transition-colors">
                    {p.label}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}