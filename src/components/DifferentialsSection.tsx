import { Eye, ShieldCheck, Wrench, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const diffs: { id: string; icon: LucideIcon; title: string; desc: string }[] = [
  { id: "01", icon: Eye, title: "Transparência", desc: "Diagnóstico claro e explicação técnica detalhada antes da execução de qualquer serviço." },
  { id: "02", icon: ShieldCheck, title: "Segurança", desc: "Procedimentos adequados e responsabilidade técnica em cada detalhe do seu equipamento." },
  { id: "03", icon: Wrench, title: "Competência", desc: "Peças de alta qualidade e manutenção executada com máxima eficiência e precisão." },
  { id: "04", icon: Handshake, title: "Honestidade", desc: "Pontualidade, respeito ao prazo estabelecido e preço justo, sem surpresas no final." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="relative py-20 md:py-28 bg-[hsl(var(--onyx))] overflow-hidden">
      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none bg-[hsl(var(--french-blue))]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[200px] opacity-10 pointer-events-none bg-[hsl(var(--spicy-paprika))]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left — Heading */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--spicy-paprika))] animate-pulse" />
              <span className="text-xs font-semibold text-[hsl(var(--pale-slate))] tracking-widest uppercase">
                Diferenciais
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Por que escolher a{" "}
              <span className="text-[hsl(var(--pale-slate))]">Refrigeração Taboado?</span>
            </h2>

            <p className="text-base text-[hsl(var(--pale-slate))]/80 leading-relaxed font-medium border-l-2 border-[hsl(var(--spicy-paprika))]/50 pl-4">
              Atendimento técnico focado na necessidade real do seu comércio. Unimos responsabilidade, transparência e agilidade para o seu negócio nunca parar.
            </p>
          </div>

          {/* Right — Card grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:pl-12"
          >
            {diffs.map((d) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.id}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[6px] bg-white/5 border border-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_hsl(var(--spicy-paprika)/0.1)]"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[hsl(var(--spicy-paprika))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Watermark */}
                  <span className="absolute -bottom-6 -right-2 text-[8rem] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 pointer-events-none select-none leading-none">
                    {d.id}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-[6px] bg-[hsl(var(--french-blue))]/40 border border-white/10 flex items-center justify-center text-[hsl(var(--spicy-paprika))] group-hover:scale-110 group-hover:bg-[hsl(var(--spicy-paprika))]/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-[hsl(var(--pale-slate))]/40 font-mono">
                        {d.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{d.title}</h3>
                    <p className="text-[hsl(var(--pale-slate))]/70 text-sm leading-relaxed group-hover:text-[hsl(var(--pale-slate))]/90 transition-colors duration-300">
                      {d.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
