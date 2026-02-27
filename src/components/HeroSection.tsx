import { Star, Users, CheckCircle, Shield, Zap } from "lucide-react";
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
        "[data-hero='badge']",
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
          "[data-hero='trust'] > *",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 },
          "-=0.15"
        )
        .fromTo(
          "[data-hero='image']",
          { autoAlpha: 0, x: 40, scale: 0.97 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          "[data-hero='float-card']",
          { autoAlpha: 0, y: 20, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.4"
        );
    },
    [reduced]
  );

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16 lg:pt-0 bg-muted">
      {/* Subtle radial glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,_hsl(var(--pale-slate))_0%,_transparent_70%)] opacity-50 blur-3xl pointer-events-none" />

      <div
        ref={heroRef}
        className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
      >
        {/* ── Left Column: Content ── */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-start space-y-8">
          {/* Social proof badge */}
          <div
            data-hero="badge"
            style={{ visibility: "hidden" }}
            className="inline-flex items-center gap-4 bg-background/60 backdrop-blur-sm border border-background/40 px-4 py-2 rounded-[6px] shadow-sm"
          >
            <div className="flex -space-x-2">
              <img className="w-7 h-7 rounded-full border-2 border-muted object-cover" src="https://i.pravatar.cc/100?img=11" alt="Cliente" />
              <img className="w-7 h-7 rounded-full border-2 border-muted object-cover" src="https://i.pravatar.cc/100?img=12" alt="Cliente" />
              <img className="w-7 h-7 rounded-full border-2 border-muted object-cover" src="https://i.pravatar.cc/100?img=13" alt="Cliente" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[hsl(var(--spicy-paprika))]">
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <span className="text-foreground text-xs font-semibold ml-1">4.9/5</span>
              </div>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">+400 Atendimentos</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1
              data-hero="h1"
              style={{ visibility: "hidden" }}
              className="text-[3.25rem] md:text-6xl lg:text-[4.5rem] font-semibold text-foreground leading-[1.05] tracking-tight"
            >
              Seu equipamento parou?{" "}
              <br className="hidden sm:block" />
              <span className="text-primary relative inline-block">
                Nós resolvemos.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p
              data-hero="sub"
              style={{ visibility: "hidden" }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Engenharia térmica de precisão para comércios e indústrias. Transparência total do diagnóstico à execução.
            </p>
          </div>

          {/* CTAs */}
          <div
            data-hero="ctas"
            style={{ visibility: "hidden" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2"
          >
            <Button
              variant="strong"
              size="lg"
              className="text-base px-8 h-14 bg-[hsl(var(--spicy-paprika))] hover:bg-[hsl(var(--spicy-paprika))]/90 text-white shadow-[0_8px_30px_rgb(211,109,62,0.3)] border-0 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150"
              onClick={() => setModalOpen(true)}
            >
              <WhatsAppIcon size={20} />
              Falar com Técnico
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 h-14 border-2 border-primary/20 hover:border-primary text-foreground bg-transparent hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150"
            >
              <a href="#servicos">
                Ver Serviços
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            data-hero="trust"
            style={{ visibility: "hidden" }}
            className="flex items-center gap-6 md:gap-10 pt-6 border-t border-foreground/10 w-full"
          >
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle size={18} className="text-primary" />
              <span className="text-sm font-semibold">Urgência Comercial</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield size={18} className="text-primary" />
              <span className="text-sm font-semibold">Garantia em Contrato</span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Image ── */}
        <div className="col-span-1 lg:col-span-6 relative w-full mt-12 lg:mt-0 flex justify-end items-center h-[500px] lg:h-[650px]">
          {/* Decorative rotated background */}
          <div className="absolute top-10 right-0 w-[85%] h-[90%] bg-[hsl(var(--pale-slate))] rounded-[6px] rotate-3 opacity-60 transition-transform hover:rotate-6 duration-700" />

          {/* Main image card */}
          <div
            data-hero="image"
            style={{ visibility: "hidden" }}
            className="relative w-[90%] h-full rounded-[6px] overflow-hidden shadow-2xl border-4 border-background z-10"
          >
            <img
              src={heroTechnician}
              alt="Especialista em Refrigeração"
              className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
            />

            {/* Floating status card */}
            <div
              data-hero="float-card"
              style={{ visibility: "hidden" }}
              className="absolute bottom-6 left-[-2rem] md:left-[-3rem] lg:left-[-4rem] bg-background/80 backdrop-blur-md border border-background p-4 rounded-[6px] shadow-2xl flex items-center gap-4 z-20 w-[240px]"
            >
              <div className="relative flex h-12 w-12 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--spicy-paprika))] opacity-20" />
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[hsl(var(--spicy-paprika))] text-white">
                  <Zap size={20} />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">Status</p>
                <p className="text-[15px] font-semibold text-foreground leading-tight">Plantão Ativo</p>
                <p className="text-xs font-semibold text-primary">Disponível Agora</p>
              </div>
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
