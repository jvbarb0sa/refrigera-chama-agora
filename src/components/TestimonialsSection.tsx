import { MapPin, Star, Quote } from "lucide-react";
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
  <div className="flex gap-0.5">
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
    <div className="min-w-[340px] flex-shrink-0 rounded-2xl bg-card p-7 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <FiveStars />
        <Quote size={20} className="text-primary/15" />
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-foreground">{text}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-border/30 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xs font-bold text-primary-foreground">
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
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-muted to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-muted to-transparent" />

      <div
        className={`marquee-track flex gap-5 ${reverse ? "animate-marquee-slow-reverse" : "animate-marquee-slow"}`}
        style={{ width: "max-content" }}
      >
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
    <section id="provas" className="py-20 md:py-28 bg-muted" aria-label="Depoimentos de clientes">
      <div ref={sectionRef} className="container">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Prova social
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            Quem já confiou no nosso trabalho
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Veja o que nossos clientes dizem sobre a experiência com nosso atendimento.
          </p>
        </div>

        {/* Credibilidade — inline */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Star size={28} className="fill-amber-400 text-amber-400" />
            <div>
              <span className="text-3xl font-bold text-foreground">4.9</span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">no Google</p>
            </div>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <span className="text-3xl font-bold text-foreground">50+</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">avaliações reais</p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="flex items-center gap-3">
            <MapPin size={22} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Atendimento local</p>
              <p className="text-xs text-muted-foreground">Três Lagoas e região</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee rows — full width */}
      <div className="mt-12 space-y-5">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
