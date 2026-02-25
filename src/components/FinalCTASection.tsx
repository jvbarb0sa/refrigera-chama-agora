import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY, EMAIL } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  const ref = useGsapFade<HTMLDivElement>({ y: 16 });

  return (
    <>
      <section id="contato" className="py-14 md:py-20 bg-foreground">
        <div ref={ref} className="container">
          <div className="max-w-xl">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-primary-foreground">
              Equipamento parado custa dinheiro.
            </h2>
            <p className="mt-3 text-[15px] text-primary-foreground/55 max-w-md leading-relaxed">
              Técnicos especializados, orçamento transparente e garantia real.
              Fale agora e resolva hoje.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-3">
              <Button asChild variant="strong" size="lg" className="h-12 px-7 text-[15px]">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappLink("Olá, vim pelo site. Quero resolver um problema.")}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </motion.a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-7 text-[15px] border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/8 hover:text-primary-foreground"
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
          </div>
        </div>
      </section>

      <footer className="py-10 bg-foreground border-t border-primary-foreground/8">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-primary-foreground/45">
            <div>
              <p className="font-semibold text-primary-foreground text-[15px] mb-1.5">Refrigeração Taboado</p>
              <p className="text-[13px] leading-relaxed">Refrigeração comercial e linha branca.<br />Três Lagoas — MS.</p>
            </div>
            <div className="space-y-1.5 text-[13px]">
              <div className="flex items-center gap-2">
                <MessageCircle size={13} className="shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="shrink-0" />
                <span>{EMAIL}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-[13px]">
              <Clock size={13} className="shrink-0 mt-0.5" />
              <div>
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-[13px]">
              <MapPin size={13} className="shrink-0 mt-0.5" />
              <p>Três Lagoas — MS e região</p>
            </div>
          </div>
          <p className="mt-8 text-center text-[11px] text-primary-foreground/20">
            © {new Date().getFullYear()} Refrigeração Taboado
          </p>
        </div>
      </footer>
    </>
  );
}
