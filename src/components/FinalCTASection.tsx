import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY, EMAIL } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-card/50">
      <div className="container">
        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-900 tracking-tight text-primary-foreground md:text-5xl">
            Chama agora.{" "}
            <span className="text-primary">A gente te orienta e resolve.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild size="lg" className="gap-2 px-8 py-6 text-lg font-semibold">
              <a href={whatsappLink("Olá, vim pelo site. Quero resolver um problema.")} target="_blank" rel="noopener">
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 px-8 py-6 text-lg font-semibold border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground">
              <a href={phoneLink()}>
                <Phone size={20} />
                Ligar agora
              </a>
            </Button>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-16 border-t border-border pt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-heading font-700 text-primary-foreground mb-2">Refrigeração Taboado</h4>
              <p>Conserto e manutenção de refrigeração comercial e linha branca.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-primary shrink-0" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <span>Telefone: {PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <span>{EMAIL}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
              <p>Três Lagoas — MS e região</p>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Refrigeração Taboado. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </section>
  );
}
