import { Snowflake, Wind, WashingMachine, Microwave, ThermometerSnowflake, Beer, GlassWater } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

interface ServiceCard {
  title: string;
  symptom: string;
  solution: string;
  cta: string;
  ctaMsg: string;
  icon: React.ReactNode;
  className: string;
}

const services: ServiceCard[] = [
  {
    title: "Refrigeração Comercial",
    symptom: "Câmara fria perdendo temperatura? Máquina de gelo parou?",
    solution: "Diagnóstico técnico com teste de pressão e recarga de gás.",
    cta: "Solicitar orçamento",
    ctaMsg: "Preciso de orçamento para refrigeração comercial.",
    icon: <ThermometerSnowflake size={28} />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Cervejeiras e Balcões",
    symptom: "Cervejeira não gela o suficiente?",
    solution: "Verificação de termostato e sistema de refrigeração.",
    cta: "Falar com técnico",
    ctaMsg: "Minha cervejeira não está gelando. Pode avaliar?",
    icon: <Beer size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Freezers",
    symptom: "Freezer acumulando gelo ou não ligando?",
    solution: "Reparo de timer, resistência e vedação.",
    cta: "Pedir diagnóstico",
    ctaMsg: "Meu freezer está com problema. Pode me orientar?",
    icon: <Snowflake size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Geladeiras",
    symptom: "Geladeira fazendo barulho ou não gelando?",
    solution: "Teste completo de compressor, gás e componentes.",
    cta: "Chamar técnico",
    ctaMsg: "Minha geladeira parou de gelar. Pode atender?",
    icon: <GlassWater size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Lavadoras",
    symptom: "Lavadora não centrifuga ou não drena?",
    solution: "Reparo de placa, motor e bomba de drenagem.",
    cta: "Solicitar visita",
    ctaMsg: "Minha lavadora está com defeito. Pode verificar?",
    icon: <WashingMachine size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Microondas",
    symptom: "Microondas não aquece ou faz faísca?",
    solution: "Troca de magnetron e reparo de componentes.",
    cta: "Falar com técnico",
    ctaMsg: "Meu microondas não está funcionando. Pode ajudar?",
    icon: <Microwave size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Ar Condicionado",
    symptom: "Ar condicionado pingando ou não gelando?",
    solution: "Limpeza, recarga de gás e reparo de placa.",
    cta: "Pedir orçamento",
    ctaMsg: "Preciso de manutenção no ar condicionado.",
    icon: <Wind size={24} />,
    className: "md:col-span-1",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-heading text-3xl font-800 tracking-tight text-primary-foreground md:text-4xl">
          O que a gente <span className="text-primary">conserta</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg">
          Veja se o seu equipamento está aqui. Se não achar, manda um WhatsApp que a gente te orienta.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${s.className}`}
            >
              <div className="mb-4 inline-flex rounded-lg bg-secondary/20 p-3 text-secondary">
                {s.icon}
              </div>
              <h3 className="font-heading text-lg font-700 text-primary-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.symptom}</p>
              <p className="mt-1 text-sm text-foreground">{s.solution}</p>
              <a
                href={whatsappLink(s.ctaMsg)}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
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
