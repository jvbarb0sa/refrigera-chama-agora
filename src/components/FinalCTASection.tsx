import { Phone, Mail, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { whatsappLink, PHONE_DISPLAY, WHATSAPP_DISPLAY, EMAIL } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  const ref = useGsapFade<HTMLDivElement>({ y: 20 });

  return (
    <>
      <section id="contato" className="py-16 md:py-24 bg-muted">
        <div ref={ref} className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[40px]">
            Precisa de assistência técnica especializada?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Entre em contato e solicite atendimento.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild variant="strong" size="lg" className="h-14 px-8 text-base">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink("Olá, vim pelo site. Gostaria de solicitar um atendimento.")}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={20} />
                Solicitar atendimento
              </motion.a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={20} />
                Falar no WhatsApp
              </motion.a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground border-t border-primary-foreground/10">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-primary-foreground/50">
            <div>
              <p className="font-semibold text-primary-foreground mb-2">Refrigeração Taboado</p>
              <p>Técnicos autorizados.<br />Refrigeração comercial e linha branca.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <WhatsAppIcon size={14} className="shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <span>{PHONE_DISPLAY}</span>
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
          <p className="mt-10 text-center text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Refrigeração Taboado. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-center text-xs text-primary-foreground/30">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/message/FTL5XC4CK32JM1"
              target="_blank"
              rel="noopener"
              className="text-primary-foreground underline hover:text-primary-foreground/80 transition-colors"
            >
              FCS-STUDIO
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
