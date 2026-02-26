import { Star, Users, MapPin, CalendarCheck, Phone, Wrench, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import WhatsAppRouterModal from "@/components/WhatsAppRouterModal";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { WHATSAPP_DISPLAY_TECNICO } from "@/lib/constants";

const MotionDiv = motion.div;

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-h1", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-sub", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".hero-ctas", { opacity: 0, y: 16, duration: 0.5 }, "-=0.2")
        .from(".hero-proof", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2")
        .from(".hero-card-1", { opacity: 0, x: 30, duration: 0.6 }, "-=0.5")
        .from(".hero-card-2", { opacity: 0, x: 30, duration: 0.5 }, "-=0.3");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-16 md:pt-[104px] bg-background overflow-hidden">
      <div ref={heroRef} className="container py-20 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 max-w-[720px]">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50 mb-6">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Comercial · Industrial · Residencial
              </span>
            </div>

            <h1 className="hero-h1 text-4xl font-bold leading-[1.15] tracking-tight text-foreground md:text-[52px] md:leading-[1.1]">
              Seu equipamento parou? A gente{" "}
              <span className="text-primary">diagnostica e resolve</span> com
              transparência.
            </h1>

            <p className="hero-sub mt-6 text-lg leading-relaxed text-muted-foreground max-w-md">
              Atendemos câmaras frias, freezers, geladeiras, ar-condicionado
              inverter e sistemas especiais (amônia/freon) com execução segura e
              garantia em Três Lagoas e região.
            </p>

            <div className="hero-ctas mt-10 flex flex-col gap-1 sm:gap-2">
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
                  className="text-base px-8 h-14"
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
              <span className="text-xs text-muted-foreground pl-1">
                Resposta mais rápida por WhatsApp.
              </span>
            </div>

            <ul className="hero-proof mt-12 flex flex-col gap-3 sm:flex-row sm:gap-6 border-t border-border pt-6">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
                4,9 no Google
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users size={14} className="text-primary shrink-0" />
                50+ avaliações reais
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary shrink-0" />
                Atendimento local rápido
              </li>
            </ul>
          </div>

          {/* Right Column: Bento Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 mt-10 lg:mt-0">
            {/* Card 1: Urgência Técnica */}
            <div className="hero-card-1 relative overflow-hidden rounded-[6px] bg-muted border border-border p-7 group">
              <div className="flex justify-between items-start mb-5">
                <div className="w-11 h-11 rounded-[6px] bg-accent/10 flex items-center justify-center text-accent">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Plantão
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1.5">Urgência Técnica</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Sua geladeira expositora ou câmara fria parou? Atendimento prioritário para evitar perdas no seu comércio.
              </p>

              <a
                href="tel:+5567981097179"
                className="flex items-center justify-between p-3.5 rounded-[6px] bg-background border border-border hover:border-primary/30 transition-colors group/link"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[6px] bg-primary text-primary-foreground flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Técnico Direto</span>
                    <span className="text-base font-bold text-foreground group-hover/link:text-primary transition-colors">
                      {WHATSAPP_DISPLAY_TECNICO}
                    </span>
                  </div>
                </div>
                <span className="text-muted-foreground group-hover/link:text-primary group-hover/link:translate-x-1 transition-all text-lg">→</span>
              </a>
            </div>

            {/* Card 2: Garantia */}
            <div className="hero-card-2 relative h-44 rounded-[6px] overflow-hidden border border-border group">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt="Equipamentos de Refrigeração Comercial"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end">
                <span className="text-primary-foreground font-semibold text-base leading-tight">
                  Garantia em<br />Peças e Serviço
                </span>
                <ShieldCheck className="w-7 h-7 text-primary-foreground/60" />
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
