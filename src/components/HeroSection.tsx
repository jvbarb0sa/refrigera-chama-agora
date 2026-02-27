import { Star, Users, MapPin, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import WhatsAppRouterModal from "@/components/WhatsAppRouterModal";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const MotionDiv = motion.div;

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
        <div className="max-w-2xl">
          <span
            data-hero="kicker"
            style={{ visibility: "hidden" }}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/80 border border-white/20 bg-white/10 px-3 py-1 rounded-full mb-6"
          >
            Três Lagoas · MS
          </span>

          <h1
            data-hero="h1"
            style={{ visibility: "hidden" }}
            className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-[52px] md:leading-[1.1]"
          >
            Seu equipamento parou? A gente{" "}
            <span className="text-primary">diagnostica e resolve</span> com
            transparência.
          </h1>

          <p
            data-hero="sub"
            style={{ visibility: "hidden" }}
            className="mt-6 text-lg leading-relaxed text-white/70 max-w-md"
          >
            Atendimento especializado em refrigeração, climatização e elétrica com segurança e garantia.
          </p>

          <div
            data-hero="ctas"
            style={{ visibility: "hidden" }}
            className="mt-10 flex flex-col gap-1 sm:gap-2"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                variant="strong"
                size="lg"
                className="text-base px-8 h-14"
                onClick={() => setModalOpen(true)}
              >
                <motion.span
                  className="inline-flex items-center gap-2"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <WhatsAppIcon size={20} />
                  Falar com técnico agora
                </motion.span>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-14 border-white/30 text-white hover:bg-white/10"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contato"
                >
                  <CalendarCheck size={20} />
                  Solicitar visita técnica
                </motion.a>
              </Button>
            </div>
            <span className="text-xs text-white/60 pl-1">
              Resposta mais rápida por WhatsApp.
            </span>
          </div>

          <ul
            data-hero="proof"
            style={{ visibility: "hidden" }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-6 border-t border-white/15 pt-6"
          >
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
              4,9 no Google
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Users size={14} className="text-primary shrink-0" />
              50+ avaliações reais
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <MapPin size={14} className="text-primary shrink-0" />
              Atendimento local rápido
            </li>
          </ul>
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
