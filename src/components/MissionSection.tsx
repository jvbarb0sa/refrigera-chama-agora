import { useGsapFade } from "@/hooks/use-gsap-fade";

export default function MissionSection() {
  const containerRef = useGsapFade<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24">
      <div ref={containerRef} className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Sobre a empresa
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px] max-w-lg">
          Profissionalismo e responsabilidade técnica
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
          A Refrigeração Taboado atua com foco em qualidade, transparência e
          segurança nos serviços prestados. Trabalhamos com diagnóstico preciso,
          peças adequadas e compromisso com o cliente.
        </p>
      </div>
    </section>
  );
}
