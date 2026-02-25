import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative pt-16 bg-foreground overflow-hidden">
      <div className="container py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Três Lagoas · MS
          </span>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-primary-foreground md:text-[52px] md:leading-[1.1]">
            Refrigeração e linha branca sem enrolação.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-md">
            Diagnóstico técnico, orçamento antes de mexer e garantia de serviço. Residencial e comercial.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild variant="strong" size="lg" className="text-base px-8 h-14">
              <a href={whatsappLink("Olá, vim pelo site. Preciso de atendimento técnico.")} target="_blank" rel="noopener">
                <MessageCircle size={20} />
                Solicitar orçamento
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 border-muted-foreground/30 text-primary-foreground hover:bg-primary-foreground/5 hover:text-primary-foreground">
              <a href={phoneLink()}>
                <Phone size={20} />
                Ligar agora
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:gap-8">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-semibold">→</span> Diagnóstico antes de trocar
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-semibold">→</span> Orçamento claro
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-semibold">→</span> Garantia emitida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
