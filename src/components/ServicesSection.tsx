import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { useFadeIn } from "@/hooks/use-fade-in";

const comercial = {
  title: "Refrigeração Comercial",
  desc: "Câmara fria, balcões refrigerados, cervejeiras, máquina de gelo e expositores. Atendimento prioritário para comércios que não podem parar.",
  cta: "Solicitar orçamento comercial",
  ctaMsg: "Preciso de orçamento para refrigeração comercial.",
  items: ["Câmara fria", "Máquina de gelo", "Balcão refrigerado", "Cervejeira"],
};

const medium = [
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
];

const compact = [
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

        <div ref={fadeRef} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
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

          {/* Bloco secundário: Residencial */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* 2 cards médios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {medium.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  <Button asChild variant="ghost" size="sm" className="mt-4 -ml-2 text-primary">
                    <a href={whatsappLink(s.ctaMsg)} target="_blank" rel="noopener">
                      {s.cta} →
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* 2 itens compactos */}
            <div className="space-y-0">
              {compact.map((s) => (
                <div key={s.title} className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                  <a
                    href={whatsappLink(s.ctaMsg)}
                    target="_blank"
                    rel="noopener"
                    className="shrink-0 ml-4 text-sm font-semibold text-primary hover:text-foreground transition-colors"
                  >
                    {s.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
