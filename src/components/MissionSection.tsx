import { Target, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Diagnóstico preciso",
    description:
      "Avaliação técnica detalhada antes de qualquer intervenção, garantindo precisão.",
    icon: Target,
  },
  {
    title: "Equipe qualificada",
    description:
      "Profissionais com vasta experiência em refrigeração comercial, industrial e residencial.",
    icon: Award,
  },
  {
    title: "Compromisso com o cliente",
    description:
      "Transparência no orçamento e cumprimento rigoroso de prazos estabelecidos.",
    icon: ShieldCheck,
  },
];

export default function MissionSection() {
  return (
    <section id="sobre" data-reveal style={{ visibility: "hidden" }} className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border-none">
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Sobre a empresa</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight leading-tight text-foreground sm:text-4xl md:text-5xl">
                Profissionalismo e <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--french-blue))] to-foreground">
                  responsabilidade técnica
                </span>
              </h2>

              <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-medium mb-8">
                A Refrigeração Taboado atua com foco em confiança, competência e
                segurança nos serviços prestados. Trabalhamos com manutenção e
                instalação em sistemas de refrigeração e climatização comercial,
                industrial e residencial, sempre priorizando diagnóstico preciso
                e qualidade na execução.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col mt-[30px]">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 mb-6"
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative flex items-center justify-center lg:h-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-[6px] border border-[hsl(var(--pale-slate))] bg-muted shadow-sm">
              <img
                src="/images/about.png"
                alt="Equipe Refrigeração Taboado"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
