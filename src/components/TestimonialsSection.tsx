import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    text: "Explicou direitinho o que era antes de mexer. Orçamento justo e geladeira funcionando até hoje.",
    initials: "DM",
  },
  {
    name: "Roberto S.",
    context: "Sorveteria — Expositor",
    text: "Expositor parou no sábado. Vieram no mesmo dia e resolveram sem enrolação.",
    initials: "RS",
  },
  {
    name: "Ana Paula",
    context: "Residencial — Lavadora",
    text: "Lavadora travava na centrifugação. Diagnóstico rápido e conserto no mesmo dia.",
    initials: "AP",
  },
  {
    name: "João Pedro",
    context: "Padaria — Balcão refrigerado",
    text: "Manutenção preventiva todo mês. Nunca mais tive problema com o balcão.",
    initials: "JP",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useGsapFade<HTMLDivElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section id="provas" className="py-14 md:py-20 bg-muted">
      <div ref={sectionRef} className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-primary">
              Quem já chamou
            </span>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Trabalho limpo, orçamento claro, garantia.
            </h2>
          </div>
          <div className="hidden sm:flex gap-1.5">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30"
              aria-label="Anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30"
              aria-label="Próximo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div ref={emblaRef}>
            <div className="flex gap-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[260px] flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] rounded-xl border border-border bg-card p-5"
                >
                  <p className="text-xl leading-none text-primary/15 select-none">"</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                    {t.text}
                  </p>
                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-none">{t.name}</p>
                      <p className="text-[12px] text-muted-foreground mt-0.5">{t.context}</p>
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
