import { useGsapFade } from "@/hooks/use-gsap-fade";

const pillars = [
  {
    title: "Diagnóstico preciso",
    desc: "Identificamos o problema real antes de trocar qualquer peça.",
  },
  {
    title: "Atendimento rápido",
    desc: "Prioridade para quem não pode esperar. Comercial ou residencial.",
  },
  {
    title: "Garantia formal",
    desc: "Todo serviço sai com garantia por escrito. Sem surpresas.",
  },
];

const marqueeItems = [
  "Refrigeração Comercial",
  "Câmaras Frias",
  "Geladeiras",
  "Freezers",
  "Lavadoras",
  "Ar Condicionado",
  "Microondas",
  "Balcões Refrigerados",
  "Cervejeiras",
  "Máquinas de Gelo",
];

export default function MissionSection() {
  const pillarsRef = useGsapFade<HTMLDivElement>({ children: ".pillar", stagger: 0.12 });

  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Nossa missão
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px] max-w-lg">
          Equipamentos param. Negócios não podem.
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
          Existimos para resolver problemas de refrigeração e linha branca com
          honestidade, velocidade e garantia técnica real.
        </p>

        <div ref={pillarsRef} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="pillar border-t-2 border-primary pt-4">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 overflow-hidden border-t border-b border-border py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-4 text-sm font-medium text-muted-foreground"
            >
              {item}
              <span className="ml-4 text-border">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
