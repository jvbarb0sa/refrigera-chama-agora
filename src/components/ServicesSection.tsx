import { MessageCircle, ShieldCheck } from "lucide-react";
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
          Áreas de atuação
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Refrigeração comercial, residencial e climatização.
        </h2>
        <p className="mt-2 text-muted-foreground max-w-lg">
          Diagnóstico, reparo e manutenção com peças de qualidade e garantia de serviço.
        </p>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12"
        >
          {/* DOMINANT — Refrigeração Comercial */}
          <MotionDiv
            whileHover={{ y: -2 }}
            className="bento-card md:col-span-7 md:row-span-2 rounded-xl border border-border bg-muted p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <Badge variant="outline" className="mb-4">Comercial</Badge>
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                Refrigeração Comercial
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-sm">
                Cervejeiras, balcões, expositores, máquinas de gelo. Atendimento no mesmo dia para comércios de Três Lagoas.
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
              <Badge variant="outline" className="mb-3">Comercial</Badge>
              <h3 className="text-lg font-semibold text-foreground">Câmaras Frias</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Câmaras frigoríficas e de resfriamento. Instalação, reparo de compressor e recarga de gás.
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
              <Badge variant="outline" className="mb-3">Residencial</Badge>
              <h3 className="text-lg font-semibold text-foreground">Geladeiras e Freezers</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Troca de compressor, termostato, vedação e recarga. Todas as marcas, peças com garantia.
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

          {/* HORIZONTAL STRIP — Contrato / Manutenção */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-12 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-primary shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Contrato de manutenção preventiva
                </h3>
                <p className="text-sm text-muted-foreground">
                  Visitas programadas para que seu equipamento nunca pare de surpresa.
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
              Saber mais sobre contratos →
            </a>
          </MotionDiv>

          {/* COMPACT — Ar Condicionado */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-6 rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-base font-semibold text-foreground">Ar Condicionado</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Limpeza, recarga de gás e manutenção de split. Residencial e comercial.
            </p>
            <a
              href={whatsappLink("Preciso de manutenção no ar condicionado.")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <MessageCircle size={14} />
              Pedir orçamento →
            </a>
          </MotionDiv>

          {/* COMPACT — Lavadoras & Eletrodomésticos */}
          <MotionDiv
            whileHover={{ y: -1 }}
            className="bento-card md:col-span-6 rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-base font-semibold text-foreground">Lavadoras e Eletrodomésticos</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Lavadoras, microondas e pequenos eletrodomésticos. Placa, motor, bomba — diagnóstico técnico completo.
            </p>
            <a
              href={whatsappLink("Minha lavadora está com defeito. Pode verificar?")}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <MessageCircle size={14} />
              Chamar técnico →
            </a>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
