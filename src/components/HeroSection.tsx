import { CalendarCheck, CheckCircle } from "lucide-react";
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
          "[data-hero='image']",
          { autoAlpha: 0, y: 24, scale: 0.97 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero='float-card']",
          { autoAlpha: 0, y: 16, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3"
        );
    },
    [reduced]
  );

  return (
    <section className="bg-[hsl(var(--onyx))] w-full min-h-[85vh] flex items-center pt-24 pb-16">
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Text column */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start gap-6 z-10">
          <div
            data-hero="kicker"
            style={{ visibility: "hidden" }}
            className="px-4 py-1.5 rounded-[6px] border border-[#C7CCD7]/30 bg-[#C7CCD7]/10 text-[#D6D6DA] text-sm font-medium tracking-wide flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--french-blue))] animate-pulse" />
            Três Lagoas · MS e Região
          </div>

          <h1
            data-hero="h1"
            style={{ visibility: "hidden" }}
            className="text-5xl lg:text-7xl font-bold text-[#D6D6DA] leading-[1.1] tracking-tight"
          >
            Seu equipamento
            <br className="hidden lg:block" /> parou? A gente{" "}
            <span className="text-[hsl(var(--spicy-paprika))]">resolve.</span>
          </h1>

          <p
            data-hero="sub"
            style={{ visibility: "hidden" }}
            className="text-xl text-[#C7CCD7] max-w-2xl leading-relaxed mt-2"
          >
            Diagnóstico preciso e manutenção em refrigeração comercial e
            industrial. Sem enrolação, direto ao ponto.
          </p>

          <div
            data-hero="ctas"
            style={{ visibility: "hidden" }}
            className="flex flex-col gap-2 w-full sm:w-auto mt-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="strong"
                size="lg"
                className="text-base px-8 h-14 bg-[hsl(var(--spicy-paprika))] hover:bg-[hsl(var(--spicy-paprika))]/90 text-white shadow-lg shadow-[hsl(var(--spicy-paprika))]/20 border-0 hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-150"
                onClick={() => setModalOpen(true)}
              >
                <WhatsAppIcon size={20} />
                Falar com técnico agora
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-14 bg-transparent border border-[#C7CCD7]/40 hover:bg-[#C7CCD7]/10 text-[#D6D6DA] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-150"
              >
                <a href="#contato">
                  <CalendarCheck size={20} />
                  Solicitar visita técnica
                </a>
              </Button>
            </div>
            <span className="text-sm text-[#C7CCD7]/60 pl-1">
              Resposta média em menos de 10 minutos pelo WhatsApp.
            </span>
          </div>
        </div>

        {/* Image column */}
        <div className="col-span-1 lg:col-span-5 relative hidden lg:block">
          <div
            data-hero="image"
            style={{ visibility: "hidden" }}
            className="relative rounded-[6px] overflow-hidden aspect-[4/5] border border-[#C7CCD7]/20 shadow-2xl"
          >
            <img
              src={heroTechnician}
              alt="Técnico especializado em refrigeração"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            data-hero="float-card"
            style={{ visibility: "hidden" }}
            className="absolute -bottom-8 -left-8 bg-[#D6D6DA] text-[hsl(var(--onyx))] p-5 rounded-[6px] shadow-xl border border-white flex items-center gap-4"
          >
            <div className="bg-[hsl(var(--french-blue))] rounded-full p-3 text-white">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="font-bold text-lg leading-none">+400</p>
              <p className="text-sm font-medium opacity-80">
                Atendimentos reais
              </p>
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
