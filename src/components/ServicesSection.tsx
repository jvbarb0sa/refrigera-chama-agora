import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const ref = useGsapFade<HTMLDivElement>({ children: ".svc-card", stagger: 0.07 });

  return (
    <section id="servicos" className="py-14 md:py-20">
      <div className="container">
        <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-primary">
          O que fazemos
        </span>
        <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
          Cada equipamento tem um jeito de quebrar. A gente conhece todos.
        </h2>

        <div ref={ref} className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-12">
          {/* DOMINANT — Refrigeração Comercial */}
          <motion.div
            whileHover={{ y: -2 }}
            className="svc-card md:col-span-8 md:row-span-2 rounded-xl bg-foreground p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary/70">
                Prioridade comercial
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-primary-foreground md:text-[28px] leading-tight">
                Refrigeração comercial
              </h3>
              <p className="mt-3 text-[15px] text-primary-foreground/55 leading-relaxed max-w-sm">
                Balcão parou no sábado? Câmara desligou de noite?
                Cervejeiras, expositores, máquinas de gelo — a gente resolve no mesmo dia.
              </p>
            </div>
            <Button asChild variant="strong" size="default" className="mt-6 w-fit gap-2">
              <a href={whatsappLink("Urgência comercial — equipamento parou.")} target="_blank" rel="noopener">
                <MessageCircle size={16} />
                Solicitar visita técnica
              </a>
            </Button>
          </motion.div>

          {/* SECONDARY — Câmaras Frias */}
          <motion.div
            whileHover={{ y: -2 }}
            className="svc-card md:col-span-4 rounded-xl border border-border p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">Câmaras frias</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Instalação, manutenção e reparo. Frigoríficas e de resfriamento.
              </p>
            </div>
            <a
              href={whatsappLink("Preciso de diagnóstico na câmara fria.")}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-foreground transition-colors"
            >
              Pedir diagnóstico →
            </a>
          </motion.div>

          {/* SECONDARY — Geladeiras & Freezers */}
          <motion.div
            whileHover={{ y: -2 }}
            className="svc-card md:col-span-4 rounded-xl border border-border p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">Geladeiras e freezers</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Compressor, termostato, gás, vedação. Todas as marcas.
              </p>
            </div>
            <a
              href={whatsappLink("Minha geladeira está com problema.")}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-foreground transition-colors"
            >
              Agendar reparo →
            </a>
          </motion.div>

          {/* HORIZONTAL STRIP — Preventiva */}
          <motion.div
            whileHover={{ y: -1 }}
            className="svc-card md:col-span-12 rounded-xl border border-primary/15 bg-primary/4 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Manutenção preventiva para empresas
              </h3>
              <p className="text-[13px] text-muted-foreground">
                Contrato mensal com visitas programadas. Sem paradas de surpresa.
              </p>
            </div>
            <a
              href={whatsappLink("Quero saber sobre contrato de manutenção preventiva.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-foreground transition-colors whitespace-nowrap shrink-0"
            >
              Falar sobre contrato →
            </a>
          </motion.div>

          {/* COMPACT — Lavadoras */}
          <motion.div
            whileHover={{ y: -1 }}
            className="svc-card md:col-span-4 rounded-xl border border-border p-5"
          >
            <h3 className="text-sm font-semibold text-foreground">Lavadoras</h3>
            <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
              Placa, motor, bomba e centrifugação. Diagnóstico sem achismo.
            </p>
            <a
              href={whatsappLink("Minha lavadora está com defeito.")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:text-foreground transition-colors"
            >
              Chamar técnico →
            </a>
          </motion.div>

          {/* COMPACT — Ar Condicionado */}
          <motion.div
            whileHover={{ y: -1 }}
            className="svc-card md:col-span-4 rounded-xl border border-border p-5"
          >
            <h3 className="text-sm font-semibold text-foreground">Ar condicionado</h3>
            <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
              Limpeza, recarga de gás, instalação e manutenção de split.
            </p>
            <a
              href={whatsappLink("Preciso de manutenção no ar condicionado.")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:text-foreground transition-colors"
            >
              Pedir orçamento →
            </a>
          </motion.div>

          {/* COMPACT — Microondas */}
          <motion.div
            whileHover={{ y: -1 }}
            className="svc-card md:col-span-4 rounded-xl border border-border p-5"
          >
            <h3 className="text-sm font-semibold text-foreground">Microondas</h3>
            <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
              Magnetron, placa e reparo geral.
            </p>
            <a
              href={whatsappLink("Meu microondas não funciona.")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:text-foreground transition-colors"
            >
              Ver atendimento →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
