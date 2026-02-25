import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink } from "@/lib/constants";

const proofs = [
  "Diagnóstico antes de trocar",
  "Orçamento claro",
  "Garantia emitida",
];

export default function HeroSection() {
  return (
    <section className="relative pt-16 bg-foreground">
      <div className="container py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Três Lagoas · MS
          </span>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-[52px] md:leading-[1.1]">
            Refrigeração e climatização com quem você pode confiar.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
            Diagnóstico, orçamento e reparo com garantia. Atendimento residencial e comercial em Três Lagoas e região.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild variant="strong" size="lg" className="text-base px-8 h-14">
              <a href={whatsappLink("Olá, vim pelo site. Preciso de atendimento técnico.")} target="_blank" rel="noopener">
                <MessageCircle size={20} />
                Solicitar orçamento
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 border-muted-foreground text-primary-foreground hover:bg-muted/10 hover:text-primary-foreground">
              <a href={phoneLink()}>
                <Phone size={20} />
                Ligar agora
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-8">
            {proofs.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
