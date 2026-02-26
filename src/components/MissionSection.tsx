import { useGsapFade } from "@/hooks/use-gsap-fade";

export default function MissionSection() {
  const containerRef = useGsapFade<HTMLDivElement>();

  return (
    <section id="sobre" className="py-16 md:py-24">
      <div ref={containerRef} className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Sobre a empresa
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px] max-w-lg">
              Profissionalismo e responsabilidade técnica
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
              A Refrigeração Taboado atua com foco em confiança, competência e
              segurança nos serviços prestados. Trabalhamos com manutenção e
              instalação em sistemas de refrigeração comercial, residencial e
              elétrica, sempre priorizando diagnóstico preciso e qualidade na
              execução.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center">
            <span className="text-sm text-muted-foreground">
              Foto do ambiente de trabalho
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
