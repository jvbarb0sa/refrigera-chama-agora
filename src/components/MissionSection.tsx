import { motion } from "framer-motion";
import { Target, Users, Clock, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Diagnóstico preciso",
    desc: "Avaliação técnica detalhada antes de qualquer intervenção, evitando gastos desnecessários.",
    icon: Target,
  },
  {
    title: "Equipe qualificada",
    desc: "Profissionais com vasta experiência em refrigeração comercial, industrial e elétrica.",
    icon: Users,
  },
  {
    title: "Compromisso e pontualidade",
    desc: "Transparência no orçamento, respeito ao seu comércio e cumprimento rigoroso de prazos.",
    icon: Clock,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function MissionSection() {
  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[120px] opacity-[0.05] pointer-events-none bg-[hsl(var(--french-blue))] -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full blur-[100px] opacity-[0.06] pointer-events-none bg-[hsl(var(--spicy-paprika))] -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Eyebrow badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-white/40 border border-[hsl(var(--pale-slate))] backdrop-blur-md shadow-sm w-fit mb-8"
            >
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Sobre a Empresa
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.15] mb-6 tracking-tight">
                Profissionalismo e{" "}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--french-blue))] to-foreground">
                  responsabilidade técnica
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-10 max-w-lg">
                A Refrigeração Taboado atua com foco em confiança, competência e
                segurança nos serviços prestados. Trabalhamos com manutenção e
                instalação em sistemas de refrigeração comercial, residencial e
                elétrica, sempre priorizando diagnóstico preciso e qualidade na
                execução.
              </p>
            </motion.div>

            {/* Feature cards */}
            <div className="space-y-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.01 }}
                    className="group relative flex items-start gap-5 p-5 rounded-[6px] bg-white/40 border border-white/60 hover:border-[hsl(var(--pale-slate))] hover:bg-white/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_hsl(var(--french-blue)/0.08)] transition-all duration-300 cursor-default"
                  >
                    {/* Animated left border */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[hsl(var(--spicy-paprika))] rounded-r-full group-hover:h-2/3 transition-all duration-300 ease-out" />

                    {/* Icon */}
                    <div className="relative shrink-0 w-12 h-12 rounded-[6px] bg-[hsl(var(--pale-slate))]/30 border border-[hsl(var(--pale-slate))]/50 flex items-center justify-center text-primary group-hover:text-[hsl(var(--spicy-paprika))] group-hover:bg-[hsl(var(--spicy-paprika))]/10 group-hover:border-[hsl(var(--spicy-paprika))]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {f.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right column — Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Main image */}
            <div className="absolute inset-0 rounded-[6px] overflow-hidden shadow-[0_20px_50px_hsl(var(--onyx)/0.12)] border-[8px] border-white/40 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--onyx))/0.6] via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
                alt="Técnico realizando manutenção em painel elétrico"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
            </div>

            {/* Floating trust card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-12 z-20"
            >
              <div className="flex items-center gap-4 p-5 rounded-[6px] bg-[hsl(var(--onyx))]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_hsl(var(--onyx)/0.3)]">
                <div className="relative flex shrink-0 w-14 h-14 rounded-full bg-[hsl(var(--spicy-paprika))] items-center justify-center shadow-[0_0_20px_hsl(var(--spicy-paprika)/0.4)]">
                  <ShieldCheck className="w-7 h-7 text-white" />
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-[hsl(var(--onyx))] animate-pulse" />
                </div>
                <div className="flex flex-col pr-4">
                  <span className="text-white font-bold text-lg leading-tight">
                    Autoridade Técnica
                  </span>
                  <span className="text-[hsl(var(--pale-slate))]/70 text-sm flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--spicy-paprika))]" />
                    Serviço Garantido
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute top-8 -right-6 w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-[6px] border border-white/50 shadow-lg rotate-12 flex items-center justify-center opacity-80 pointer-events-none">
              <Target className="w-10 h-10 text-primary/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
