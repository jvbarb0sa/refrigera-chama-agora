import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const testimonials = [
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

export default function TestimonialsSection() {
  const sectionRef = useGsapFade<HTMLDivElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section id="provas" className="py-16 md:py-24 bg-muted">
      <div ref={sectionRef} className="container">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Prova social
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
              Quem já confiou no nosso trabalho
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Bloco de credibilidade */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-2">
            <Star size={20} className="fill-primary text-primary" />
            <div>
              <span className="text-2xl font-bold text-foreground">4.9</span>
              <p className="text-sm text-muted-foreground">no Google</p>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold text-foreground">50+</span>
            <p className="text-sm text-muted-foreground">avaliações reais</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Atendimento local</p>
              <p className="text-xs text-muted-foreground">Três Lagoas e região</p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[280px] flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] rounded-xl border border-border bg-card p-6"
                >
                  <p className="text-2xl leading-none text-primary/20 select-none">"</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {t.text}
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
