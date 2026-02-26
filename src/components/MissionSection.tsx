import { useGsapFade } from "@/hooks/use-gsap-fade";

const items = [
  {
    title: "Diagnóstico preciso",
    desc: "Avaliação técnica detalhada antes de qualquer intervenção.",
  },
  {
    title: "Equipe qualificada",
    desc: "Profissionais com experiência em refrigeração comercial e residencial.",
  },
  {
    title: "Compromisso com o cliente",
    desc: "Transparência no orçamento e cumprimento de prazos.",
  },
];

export default function MissionSection() {
  const containerRef = useGsapFade<HTMLDivElement>();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div ref={containerRef} className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4A9EE0]">
                Sobre a empresa
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl max-w-lg">
                Profissionalismo e responsabilidade técnica
              </h2>
              <p className="text-[15px] text-[#4B5563] leading-[1.7] max-w-lg">
                A Refrigeração Taboado atua com foco em confiança, competência e
                segurança nos serviços prestados. Trabalhamos com manutenção e
                instalação em sistemas de refrigeração comercial, residencial e
                elétrica, sempre priorizando diagnóstico preciso e qualidade na
                execução.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              {items.map((item) => (
                <div key={item.title} className="border-l-2 border-[#4A9EE0] pl-4">
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-[#6B7280] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-[#e5e7eb]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
              alt="Técnico de refrigeração em ambiente de trabalho"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
