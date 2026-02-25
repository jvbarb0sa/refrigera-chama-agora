import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY, EMAIL } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <>
      {/* CTA */}
      <section id="contato" className="py-20 md:py-28" style={{ backgroundColor: "hsl(216, 50%, 8%)" }}>
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Chama agora. A gente resolve.
          </h2>
          <p className="mt-4 text-white/60">
            WhatsApp ou ligação. Resposta rápida.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <a href={whatsappLink("Olá, vim pelo site. Quero resolver um problema.")} target="_blank" rel="noopener">
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
              <a href={phoneLink()}>
                <Phone size={20} />
                Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "hsl(216, 50%, 6%)" }}>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/50">
            <div>
              <p className="font-semibold text-white mb-2">Refrigeração Taboado</p>
              <p>Técnicos autorizados. Refrigeração comercial e linha branca.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="shrink-0" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <span>Telefone: {PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <span>{EMAIL}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={14} className="shrink-0 mt-0.5" />
              <div>
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 mt-0.5" />
              <p>Três Lagoas — MS e região</p>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-white/30">
            © {new Date().getFullYear()} Refrigeração Taboado. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
