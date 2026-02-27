import { CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroTechnician from "@/assets/hero-technician.png";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import WhatsAppRouterModal from "@/components/WhatsAppRouterModal";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const specialties = ["Chillers", "Câmaras Frias", "VRF", "Split"];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useGsapContext(
    heroRef,
    () => {
      if (reduced) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        "[data-hero='kicker']",
        { autoAlpha: 0, y: 10, filter: "blur(6px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.6 }
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
          "[data-hero='proof'] > *",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 },
          "-=0.15"
        )
        .fromTo(
          "[data-hero='media']",
          { autoAlpha: 0, y: 24, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.0 },
          "-=0.6"
        );
    },
    [reduced]
  );

  return (
    <section className="relative pt-16 md:pt-[104px] overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1622]/95 via-[#0b1622]/70 to-transparent" />

      <div ref={heroRef} className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <span
              data-hero="kicker"
              style={{ visibility: "hidden" }}
              className="inline-block text-xs font-semibold uppercase tracking-wide text-primary border border-white/20 bg-white/10 px-3 py-1 rounded-[6px] mb-6"
            >
              Três Lagoas · MS e Região
            </span>

            <h1
              data-hero="h1"
              style={{ visibility: "hidden" }}
              className="text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-[52px] md:leading-[1.1]"
            >
              Engenharia em Refrigeração que Mantém seu Negócio em{" "}
              <span className="text-accent">Movimento.</span>
            </h1>

            <p
              data-hero="sub"
              style={{ visibility: "hidden" }}
              className="mt-6 text-lg leading-relaxed text-white/70 max-w-md"
            >
              Diagnóstico preciso e manutenção especializada para sistemas comerciais e industriais. Transparência técnica do orçamento à execução.
            </p>

            <div
              data-hero="ctas"
              style={{ visibility: "hidden" }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button
                asChild
                variant="strong"
                size="lg"
                className="text-base px-8 h-14 hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-150"
              >
                <a href="#contato">
                  <CalendarCheck size={20} />
                  Solicitar Visita Técnica
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-14 border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-150"
                onClick={() => setModalOpen(true)}
              >
                <WhatsAppIcon size={20} />
                Falar com Especialista
              </Button>
            </div>

            <div
              data-hero="proof"
              style={{ visibility: "hidden" }}
              className="mt-12 border-t border-white/15 pt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Especialistas em:
              </span>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-semibold text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technician image */}
          <div
            data-hero="media"
            style={{ visibility: "hidden" }}
            className="relative hidden lg:block"
          >
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent rounded-[6px] blur-2xl opacity-20" />
            <div className="relative rounded-[6px] border border-white/10 overflow-hidden shadow-2xl">
              <img
                src={heroTechnician}
                alt="Técnico especializado em refrigeração"
                className="w-[380px] h-[480px] object-cover"
              />
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
