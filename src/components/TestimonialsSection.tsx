import { MapPin, Star } from "lucide-react";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const row1 = [
  {
    name: "Marcos",
    context: "Mercado Central — Câmara fria",
    text: "Câmara fria desligou numa sexta à noite. Atenderam rápido e salvaram nossa mercadoria.",
    initials: "MC",
  },
  {
    name: "Carlos M.",
    context: "Residencial — Freezer",
    text: "Chamei de manhã, à tarde já estava resolvido. Freezer voltou a funcionar sem trocar peça.",
    initials: "CM",
  },
  {
    name: "Dona Maria",
    context: "Residencial — Geladeira",
    text: "O Vagner explicou direitinho o que era antes de mexer. Orçamento justo e geladeira funcionando até hoje.",
    initials: "DM",
  },
  {
    name: "Roberto S.",
    context: "Sorveteria — Expositor",
    text: "Expositor parou no sábado. Vieram no mesmo dia e resolveram sem enrolação. Recomendo demais.",
    initials: "RS",
  },
  {
    name: "Ana Paula",
    context: "Residencial — Lavadora",
    text: "Lavadora travava na centrifugação. Diagnóstico rápido e conserto no mesmo dia. Muito profissional.",
    initials: "AP",
  },
  {
    name: "João Pedro",
    context: "Padaria — Balcão refrigerado",
    text: "Manutenção preventiva todo mês. Nunca mais tive problema com o balcão. Serviço sério.",
    initials: "JP",
  },
];

const row2 = [
  {
    name: "Fernanda L.",
    context: "Restaurante — Ar-condicionado",
    text: "Ar do salão parou no meio do almoço. Vieram em menos de 2 horas e resolveram na hora.",
    initials: "FL",
  },
  {
    name: "Sérgio R.",
    context: "Açougue — Câmara fria",
    text: "Fazem manutenção preventiva mensal. Zero surpresas desde então. Confiança total.",
    initials: "SR",
  },
  {
    name: "Luciana T.",
    context: "Residencial — Ar-condicionado inverter",
    text: "Instalação limpa, sem bagunça. Funcionou perfeito de primeira. Super atenciosos.",
    initials: "LT",
  },
  {
    name: "Eduardo K.",
    context: "Supermercado — Balcão refrigerado",
    text: "Consertaram o balcão sem precisar desligar os outros equipamentos. Profissionais de verdade.",
    initials: "EK",
  },
  {
    name: "Patrícia N.",
    context: "Residencial — Geladeira",
    text: "Geladeira de 15 anos, achei que ia ter que trocar. Consertaram e ficou nova.",
    initials: "PN",
  },
  {
    name: "Thiago M.",
    context: "Farmácia — Refrigerador de medicamentos",
    text: "Equipamento crítico para vacinas. Atenderam com urgência real. Nota 10.",
    initials: "TM",
  },
];

const FiveStars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

interface TestimonialCardProps {
  name: string;
  context: string;
  text: string;
  initials: string;
}

function TestimonialCard({ name, context, text, initials }: TestimonialCardProps) {
  return (
    <div className="min-w-[320px] flex-shrink-0 rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
      <FiveStars />
      <p className="mt-4 text-sm leading-relaxed text-foreground">{text}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/20 bg-primary text-xs font-bold text-primary-foreground">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{context}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted to-transparent" />

      <div
        className={`marquee-track flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.initials}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useGsapFade<HTMLDivElement>();

  return (
    <section id="provas" className="py-16 md:py-24 bg-muted" aria-label="Depoimentos de clientes">
      <div ref={sectionRef} className="container">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Prova social
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            Quem já confiou no nosso trabalho
          </h2>
        </div>

        {/* Bloco de credibilidade */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Star size={24} className="fill-amber-400 text-amber-400" />
              <div>
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <p className="text-sm text-muted-foreground">no Google</p>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div>
              <span className="text-2xl font-bold text-foreground">50+</span>
              <p className="text-sm text-muted-foreground">avaliações reais</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Atendimento local</p>
                <p className="text-xs text-muted-foreground">Três Lagoas e região</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee rows — full width */}
      <div className="mt-10 space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
