import { MessageCircle, Thermometer, Snowflake, WashingMachine, Wind, Zap, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function ServicesSection() {
  const gridRef = useGsapFade<HTMLDivElement>({ children: ".bento-card", stagger: 0.08 });

  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Especialidades
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          O que a gente faz — e faz bem.
        </h2>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto_auto]"
        >
          {/* DOMINANT — Refrigeração Comercial */}
          <MotionDiv
            whileHover={{ y: -2 }}
            className="bento-card md:col-span-7 md:row-span-2 rounded-xl border border-border bg-foreground p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <Badge className="bg-primary/20 text-primary border-0 mb-4">Comercial</Badge>
              <Snowflake size={28} className="text-primary-foreground/60 mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                Refrigeração Comercial
              </h3>
              <p className="mt-3 text-primary-foreground/60 leading-relaxed max-w-sm">
                Balcão parou no sábado? Câmara desligou de noite? A gente resolve no mesmo dia.
                Cervejeiras, expositores, máquinas de gelo — todas as marcas.
              </p>
            </div>
            <Button asChild variant="strong" size="lg" className="mt-6 w-fit gap-2">
              <a href={whatsappLink("Urgência comercial — equipamento parou. Preciso de visita técnica.")} target="_blank" rel="noopener">
                <MessageCircle size={18} />
                Solicitar visita técnica
              </a>
            </Button>
          </MotionDiv>

          {/* MEDIUM — Câmaras Frias */}
          <MotionDiv
            whileHover={{ y: -2 }}
            className="bento-card md:col-span-5 rounded-xl border border-border bg-card p-6 flex flex-col justify-between"
          >
            <div>
              <Badge className="mb-3">Comercial</Badge>
              <Thermometer size={22} className="text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground">Câmaras Frias</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Instalação, manutenção e reparo. Frigoríficas e câmaras de resfriamento.
              </p>
            </div>
            <a
              href={whatsappLink("Preciso de diagnóstico na câmara fria.")}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <MessageCircle size={14} />
              Pedir diagnóstico →
            </a>
          </MotionDiv>

          {/* MEDIUM — Geladeiras & Freezers */}
          <MotionDiv
            whileHover={{ y: -2 }}
            className="bento-card md:col-span-5 rounded-xl border border-border bg-card p-6 flex flex-col justify-between"
          >
            <div>
              <Badge variant="secondary" className="mb-3">Residencial</Badge>
              <Snowflake size={22} className="text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground">Geladeiras e Freezers</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Compressor, termostato, gás, vedação. Todas as marcas.
              </p>
            </div>
            <a
              href={whatsappLink("Minha geladeira/freezer está com problema. Pode atender?")}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <MessageCircle size={14} />
              Agendar reparo →
            </a>
          </MotionDiv>

          {/* HORIZONTAL STRIP — Contrato / Urgência */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-12 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-primary shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Manutenção preventiva para empresas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Contrato mensal com visitas programadas. Seu equipamento nunca mais para de surpresa.
                </p>
              </div>
            </div>
            <a
              href={whatsappLink("Quero saber sobre contrato de manutenção preventiva.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle size={14} />
              Falar sobre contrato →
            </a>
          </MotionDiv>

          {/* COMPACT — Lavadoras */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-4 rounded-xl border border-border bg-card p-5"
          >
            <WashingMachine size={20} className="text-primary mb-2" />
            <h3 className="text-base font-semibold text-foreground">Lavadoras</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Placa, motor, bomba. Diagnóstico técnico real.
            </p>
            <a
              href={whatsappLink("Minha lavadora está com defeito. Pode verificar?")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-foreground transition-colors"
            >
              Chamar técnico →
            </a>
          </MotionDiv>

          {/* COMPACT — Ar Condicionado */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-4 rounded-xl border border-border bg-card p-5"
          >
            <Wind size={20} className="text-primary mb-2" />
            <h3 className="text-base font-semibold text-foreground">Ar Condicionado</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Limpeza, recarga de gás e manutenção de split.
            </p>
            <a
              href={whatsappLink("Preciso de manutenção no ar condicionado.")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-foreground transition-colors"
            >
              Pedir orçamento →
            </a>
          </MotionDiv>

          {/* COMPACT — Microondas */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-4 rounded-xl border border-border bg-card p-5"
          >
            <Zap size={20} className="text-primary mb-2" />
            <h3 className="text-base font-semibold text-foreground">Microondas</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Magnetron, componentes elétricos, reparo geral.
            </p>
            <a
              href={whatsappLink("Meu microondas não está funcionando. Pode ajudar?")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-foreground transition-colors"
            >
              Ver atendimento →
            </a>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
