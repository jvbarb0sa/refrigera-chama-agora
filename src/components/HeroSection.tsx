import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink } from "@/lib/constants";
import heroBg from "@/assets/hero-bg.jpg";

const proofs = [
  "Diagnóstico antes de trocar",
  "Garantia emitida",
  "Atendimento rápido",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-900 leading-[1.1] tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Parou?{" "}
            <span className="text-primary">A gente resolve.</span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground md:text-xl max-w-md">
            Atendimento técnico em refrigeração e linha branca. Orçamento claro e garantia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="text-base gap-2 px-8 py-6 text-lg font-semibold">
              <a href={whatsappLink("Olá, vim pelo site. Preciso de atendimento técnico.")} target="_blank" rel="noopener">
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base gap-2 px-8 py-6 text-lg font-semibold border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground">
              <a href={phoneLink()}>
                <Phone size={20} />
                Ligar agora
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-6">
            {proofs.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
