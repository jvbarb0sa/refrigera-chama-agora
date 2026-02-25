import { MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 10, duration: 0.4 })
        .from(".hero-h1", { opacity: 0, y: 18, duration: 0.5 }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 14, duration: 0.4 }, "-=0.2")
        .from(".hero-ctas", { opacity: 0, y: 14, duration: 0.4 }, "-=0.15")
        .from(".hero-proof", { opacity: 0, y: 10, duration: 0.4 }, "-=0.1");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-16 bg-foreground overflow-hidden">
      <div ref={heroRef} className="container py-16 md:py-28">
        <div className="max-w-2xl">
          <span className="hero-badge inline-block text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
            Três Lagoas · MS
          </span>

          <h1 className="hero-h1 mt-5 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-primary-foreground">
            Seu equipamento parou.{" "}
            <span className="text-primary">A gente resolve hoje.</span>
          </h1>

          <p className="hero-sub mt-5 text-base leading-relaxed text-muted-foreground/70 max-w-md">
            Refrigeração comercial, linha branca e climatização.
            Diagnóstico técnico, orçamento antes de mexer e garantia por escrito.
          </p>

          <div className="hero-ctas mt-8 flex flex-col gap-3 sm:flex-row sm:gap-3">
            <Button asChild variant="strong" size="lg" className="h-13 px-7 text-[15px]">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappLink("Olá, vim pelo site. Preciso de atendimento técnico.")}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle size={18} />
                Solicitar orçamento
              </motion.a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-13 px-7 text-[15px] border-muted-foreground/20 text-primary-foreground hover:bg-primary-foreground/8 hover:text-primary-foreground"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={phoneLink()}
              >
                <Phone size={18} />
                Ligar agora
              </motion.a>
            </Button>
          </div>

          <div className="hero-proof mt-10 flex flex-wrap items-center gap-5 border-t border-primary-foreground/8 pt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-accent text-accent" />
              ))}
              <span className="ml-1.5 text-[13px] text-muted-foreground/60">Google</span>
            </div>
            <span className="text-primary-foreground/15">|</span>
            <p className="text-[13px] text-muted-foreground/60">
              <span className="font-semibold text-primary-foreground/80">500+</span>{" "}
              atendimentos realizados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
