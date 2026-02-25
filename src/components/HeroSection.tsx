import { MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative pt-16 bg-foreground overflow-hidden">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          {/* Text — 60% */}
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Três Lagoas · MS
            </span>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-primary-foreground md:text-[52px] md:leading-[1.1]">
              Especialistas em{" "}
              <span className="text-primary">refrigeração comercial</span> e{" "}
              <span className="text-primary">linha branca</span>.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-md">
              Diagnóstico técnico, orçamento antes de mexer e garantia de
              serviço. Residencial e comercial.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                variant="strong"
                size="lg"
                className="text-base px-8 h-14"
              >
                <a
                  href={whatsappLink(
                    "Olá, vim pelo site. Preciso de atendimento técnico."
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={20} />
                  Solicitar orçamento
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-14 border-muted-foreground/30 text-primary-foreground hover:bg-primary-foreground/5 hover:text-primary-foreground"
              >
                <a href={phoneLink()}>
                  <Phone size={20} />
                  Ligar agora
                </a>
              </Button>
            </div>

            {/* Social proof strip */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-primary-foreground/10 pt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  Google
                </span>
              </div>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-foreground bg-muted-foreground/30"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary-foreground">
                  500+
                </span>{" "}
                atendimentos realizados
              </p>
            </div>
          </div>

          {/* Image placeholder — 40% */}
          <div className="hidden lg:col-span-2 lg:block">
            <div className="aspect-[3/4] rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Foto do técnico / equipe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
