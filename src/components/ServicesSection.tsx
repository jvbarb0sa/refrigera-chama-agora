import { Snowflake, Wind, WashingMachine, Microwave, ThermometerSnowflake, Beer } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

const services = [
  {
    title: "Refrigeração Comercial",
    desc: "Câmara fria, máquina de gelo e sistemas de refrigeração para comércio e indústria.",
    cta: "Solicitar orçamento",
    ctaMsg: "Preciso de orçamento para refrigeração comercial.",
    icon: <ThermometerSnowflake size={24} />,
  },
  {
    title: "Cervejeiras e Balcões",
    desc: "Reparo e manutenção de cervejeiras, balcões refrigerados e expositores.",
    cta: "Falar com técnico",
    ctaMsg: "Minha cervejeira não está gelando. Pode avaliar?",
    icon: <Beer size={24} />,
  },
  {
    title: "Geladeiras e Freezers",
    desc: "Diagnóstico e reparo de compressor, termostato, gás e vedação.",
    cta: "Pedir diagnóstico",
    ctaMsg: "Minha geladeira/freezer está com problema. Pode atender?",
    icon: <Snowflake size={24} />,
  },
  {
    title: "Lavadoras",
    desc: "Reparo de placa, motor, bomba de drenagem e centrifugação.",
    cta: "Chamar técnico",
    ctaMsg: "Minha lavadora está com defeito. Pode verificar?",
    icon: <WashingMachine size={24} />,
  },
  {
    title: "Microondas",
    desc: "Troca de magnetron e reparo de componentes elétricos.",
    cta: "Ver atendimento",
    ctaMsg: "Meu microondas não está funcionando. Pode ajudar?",
    icon: <Microwave size={24} />,
  },
  {
    title: "Ar Condicionado",
    desc: "Limpeza, recarga de gás e manutenção de split e cassete.",
    cta: "Pedir orçamento",
    ctaMsg: "Preciso de manutenção no ar condicionado.",
    icon: <Wind size={24} />,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Especialidades
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground">
          Soluções técnicas para cada necessidade.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="inline-flex rounded-lg bg-muted p-3 text-primary">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary">{s.desc}</p>
              <a
                href={whatsappLink(s.ctaMsg)}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-foreground transition-colors"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
