import { motion } from "framer-motion";

const features = [
  {
    title: "Diagnóstico preciso",
    description:
      "Avaliação técnica detalhada antes de qualquer intervenção, garantindo precisão.",
  },
  {
    title: "Equipe qualificada",
    description:
      "Profissionais com vasta experiência em refrigeração comercial e residencial.",
  },
  {
    title: "Compromisso com o cliente",
    description:
      "Transparência no orçamento e cumprimento rigoroso de prazos estabelecidos.",
  },
];

export default function MissionSection() {
  return (
    <section id="sobre" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50">
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">Sobre a empresa</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Profissionalismo e <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--french-blue))] to-foreground">
                  responsabilidade técnica
                </span>
              </h2>

              <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-medium">
                A Refrigeração Taboado atua com foco em confiança, competência e
                segurança nos serviços prestados. Trabalhamos com manutenção e
                instalação em sistemas de refrigeração comercial, residencial e
                elétrica, sempre priorizando diagnóstico preciso e qualidade na
                execução.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col space-y-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary before:rounded-full"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:h-full"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-[6px] border border-[hsl(var(--pale-slate))] bg-muted shadow-sm">
              <video
                src="/videos/about.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
