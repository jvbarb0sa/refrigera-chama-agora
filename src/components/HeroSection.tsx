import { Star, Users, MapPin, CalendarCheck, ArrowRight, Headphones } from "lucide-react";
import heroTechnician from "@/assets/hero-technician.png";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import WhatsAppRouterModal from "@/components/WhatsAppRouterModal";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useGsapContext(
    heroRef,
    () => {
      if (reduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero='stars']",
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          "[data-hero='kicker']",
          { autoAlpha: 0, y: 10, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          "[data-hero='h1']",
          { autoAlpha: 0, y: 18, filter: "blur(10px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          "-=0.25"
        )
        .fromTo(
          "[data-hero='sub']",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero='ctas']",
          { autoAlpha: 0, y: 14, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          "[data-hero='stats'] > *",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 },
          "-=0.15"
        )
        .fromTo(
          "[data-hero='card']",
          { autoAlpha: 0, x: 40, scale: 0.97 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
    },
    [reduced]
  );

  return (
    <section className="relative pt-20 md:pt-[120px] bg-white">
      <div ref={heroRef} className="container py-16 md:py-20">
        <div className="grid gap-[30px] lg:grid-cols-2 lg:gap-10 items-center">
          {/* Left column — Content */}
          <div className="max-w-xl">
            {/* Social proof stars */}
            <div
              data-hero="stars"
              style={{ visibility: "hidden" }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4,9 · Baseado em 50+ avaliações
              </span>
            </div>

            {/* Kicker badge */}
            <span
              data-hero="kicker"
              style={{ visibility: "hidden" }}
              className="inline-block text-xs font-semibold uppercase tracking-wide text-primary border border-border bg-muted/50 px-3 py-1 rounded-[6px] mb-5"
            >
              Três Lagoas · MS
            </span>

            {/* H1 */}
            <h1
              data-hero="h1"
              style={{ visibility: "hidden" }}
              className="text-4xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-[48px] md:leading-[1.1]"
            >
              Seu equipamento parou? A gente{" "}
              <span className="text-[hsl(var(--spicy-paprika))]">
                diagnostica e resolve
              </span>{" "}
              com transparência.
            </h1>

            {/* Subtitle */}
            <p
              data-hero="sub"
              style={{ visibility: "hidden" }}
              className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-md"
            >
              Atendimento especializado em refrigeração, climatização e elétrica
              com segurança e garantia.
            </p>

            {/* CTAs */}
            <div
              data-hero="ctas"
              style={{ visibility: "hidden" }}
              className="mt-[70px] flex flex-col gap-1 sm:gap-2"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  variant="strong"
                  size="lg"
                  className="text-base px-8 h-14 bg-gradient-to-r from-[#FF8B52] to-[#EB7543] hover:brightness-90 text-white shadow-lg border-0 hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-150"
                  onClick={() => setModalOpen(true)}
                >
                  <WhatsAppIcon size={20} />
                  Falar com técnico agora
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-base px-8 h-14 bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-none"
                >
                  <a href="#contato">
                    <CalendarCheck size={20} />
                    Solicitar visita técnica
                  </a>
                </Button>
              </div>
              <span className="text-xs text-muted-foreground pl-1">
                Resposta mais rápida por WhatsApp.
              </span>
            </div>

            {/* Stats row */}
            <div
              data-hero="stats"
              style={{ visibility: "hidden" }}
              className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 border-t border-border pt-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-[6px] bg-primary/10 shrink-0">
                  <Headphones size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Suporte Local
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Atendimento rápido em Três Lagoas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-[6px] bg-[hsl(var(--spicy-paprika))]/10 shrink-0">
                  <Star size={20} className="text-[hsl(var(--spicy-paprika))]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    4,9 Estrelas
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Avaliação no Google
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Technician card */}
          <div
            data-hero="card"
            style={{ visibility: "hidden" }}
            className="relative rounded-[6px] overflow-hidden aspect-[4/5] lg:aspect-[3/4] max-h-[560px] mx-auto lg:mx-0 w-full max-w-md lg:max-w-none"
          >
            <img
              src={heroTechnician}
              alt="Técnico especializado em refrigeração e climatização"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[hsl(var(--onyx))]/90 to-transparent" />

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-[6px]">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                Técnico Especializado
              </span>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div>
                <p className="text-white font-semibold text-base">
                  Refrigeração · Climatização · Elétrica
                </p>
                <p className="text-white/70 text-sm mt-1">
                  Três Lagoas e região
                </p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#FF8B52] to-[#EB7543] text-white shadow-lg hover:brightness-110 active:scale-95 transition-all duration-150 shrink-0"
                aria-label="Falar com técnico"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppRouterModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        message="Olá, preciso de atendimento técnico."
      />
    </section>
  );
}
