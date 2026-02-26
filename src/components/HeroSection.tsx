import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MotionDiv = motion.div;

const proofs = [
"Atendimento local",
"Técnicos experientes",
"Compromisso com qualidade"];


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 12, duration: 0.5 }).
      from(".hero-h1", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3").
      from(".hero-sub", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3").
      from(".hero-ctas", { opacity: 0, y: 16, duration: 0.5 }, "-=0.2").
      from(".hero-proof", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2").
      from(".hero-image", { opacity: 0, x: 30, duration: 0.7 }, "-=0.6");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-16 md:pt-[104px] bg-background overflow-hidden">
      <div ref={heroRef} className="container py-20 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3 max-w-[720px]">
            <span className="hero-badge inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Três Lagoas · MS
            </span>

            <h1 className="hero-h1 text-4xl font-bold leading-[1.15] tracking-tight text-foreground md:text-[52px] md:leading-[1.1]">
              Seu equipamento parou? A gente{" "}
              <span className="text-primary">diagnostica e resolve</span> com
              transparência.
            </h1>

            <p className="hero-sub mt-6 text-lg leading-relaxed text-muted-foreground max-w-md">
              Refrigeração comercial, industrial e residencial em Três Lagoas e
              região. Diagnóstico técnico, orçamento claro e garantia de serviço.
            </p>

            <div className="hero-ctas mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild
              variant="strong"
              size="lg"
              className="text-base px-8 h-14">

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink("Olá, preciso de atendimento técnico.")}
                  target="_blank"
                  rel="noopener">

                  <MessageCircle size={20} />
                  Solicitar atendimento técnico
                </motion.a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-14">

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener">

                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </motion.a>
              </Button>
            </div>

            <ul className="hero-proof mt-12 flex flex-col gap-2 sm:flex-row sm:gap-6 border-t border-border pt-6">
              {proofs.map((text) =>
              <li key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0" />
                  {text}
                </li>
              )}
            </ul>
          </div>

          <div className="hero-image hidden lg:col-span-2 lg:block">
            <div className="aspect-[3/4] rounded-2xl bg-muted flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Foto do técnico em atendimento
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}