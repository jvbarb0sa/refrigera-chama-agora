import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    <section id="sobre" className="py-16 md:py-24">
      <div ref={containerRef} className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">Sobre a empresa</Badge>
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px] max-w-lg">
                Profissionalismo e responsabilidade técnica
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                A Refrigeração Taboado atua com foco em confiança, competência e
                segurança nos serviços prestados. Trabalhamos com manutenção e
                instalação em sistemas de refrigeração comercial, residencial e
                elétrica, sempre priorizando diagnóstico preciso e qualidade na
                execução.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
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
