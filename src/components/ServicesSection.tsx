import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { useFadeIn } from "@/hooks/use-fade-in";

const services = [
  {
    badge: "Comercial",
    title: "Refrigeração Comercial",
    desc: "Balcões refrigerados, cervejeiras, expositores e máquinas de gelo.",
    cta: "Solicitar visita técnica",
    ctaMsg: "Preciso de visita técnica para refrigeração comercial.",
  },
  {
    badge: "Comercial",
    title: "Câmaras Frias",
    desc: "Instalação, manutenção e reparo de câmaras frias e frigoríficas.",
    cta: "Pedir diagnóstico",
    ctaMsg: "Preciso de diagnóstico na câmara fria.",
  },
  {
    badge: "Residencial",
    title: "Geladeiras e Freezers",
    desc: "Compressor, termostato, gás e vedação. Todas as marcas.",
    cta: "Agendar reparo",
    ctaMsg: "Minha geladeira/freezer está com problema. Pode atender?",
  },
  {
    badge: "Residencial",
    title: "Lavadoras",
    desc: "Placa, motor, bomba e centrifugação. Diagnóstico técnico.",
    cta: "Chamar técnico",
    ctaMsg: "Minha lavadora está com defeito. Pode verificar?",
  },
  {
    badge: "Preventiva",
    title: "Ar Condicionado",
    desc: "Limpeza, recarga de gás e manutenção preventiva de split.",
    cta: "Pedir orçamento",
    ctaMsg: "Preciso de manutenção no ar condicionado.",
  },
  {
    badge: "Residencial",
    title: "Microondas",
    desc: "Magnetron, componentes elétricos e reparo geral.",
    cta: "Ver atendimento",
    ctaMsg: "Meu microondas não está funcionando. Pode ajudar?",
  },
];

export default function ServicesSection() {
  const fadeRef = useFadeIn<HTMLDivElement>();

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
          ref={fadeRef}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <Badge
                variant={s.badge === "Comercial" ? "default" : "secondary"}
                className="mb-4"
              >
                {s.badge}
              </Badge>
              <h3 className="text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <a
                href={whatsappLink(s.ctaMsg)}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
              >
                <MessageCircle size={14} />
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
