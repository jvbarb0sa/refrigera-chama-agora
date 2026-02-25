import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const comercial = {
  title: "Refrigeração Comercial",
  desc: "Câmara fria, balcões refrigerados, cervejeiras, máquina de gelo e expositores. Atendimento prioritário para comércios que não podem parar.",
  cta: "Solicitar orçamento comercial",
  ctaMsg: "Preciso de orçamento para refrigeração comercial.",
  items: ["Câmara fria", "Máquina de gelo", "Balcão refrigerado", "Cervejeira"],
};

const residencial = [
  {
    title: "Geladeiras e Freezers",
    desc: "Compressor, termostato, gás e vedação.",
    cta: "Pedir diagnóstico",
    ctaMsg: "Minha geladeira/freezer está com problema. Pode atender?",
  },
  {
    title: "Lavadoras",
    desc: "Placa, motor, bomba e centrifugação.",
    cta: "Chamar técnico",
    ctaMsg: "Minha lavadora está com defeito. Pode verificar?",
  },
  {
    title: "Microondas",
    desc: "Magnetron e componentes elétricos.",
    cta: "Ver atendimento",
    ctaMsg: "Meu microondas não está funcionando. Pode ajudar?",
  },
  {
    title: "Ar Condicionado",
    desc: "Limpeza, gás e manutenção de split.",
    cta: "Pedir orçamento",
    ctaMsg: "Preciso de manutenção no ar condicionado.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Especialidades
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          O que a gente faz — e faz bem.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Bloco dominante: Comercial */}
          <div className="lg:col-span-7 rounded-xl border border-border bg-muted p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Comercial
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{comercial.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">
                {comercial.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {comercial.items.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild variant="strong" size="default" className="mt-8 self-start">
              <a href={whatsappLink(comercial.ctaMsg)} target="_blank" rel="noopener">
                <MessageCircle size={16} />
                {comercial.cta}
              </a>
            </Button>
          </div>

          {/* Cards secundários: Residencial */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {residencial.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                <a
                  href={whatsappLink(s.ctaMsg)}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:text-foreground transition-colors"
                >
                  {s.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
