import { Phone, Mail, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY_TECNICO, EMAIL } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  const ref = useGsapFade<HTMLDivElement>({ y: 20 });

  return (
    <>
      {/* CTA Banner */}
      <section id="contato" className="py-16 md:py-20 bg-foreground">
        <div ref={ref} className="container">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-[40px]">
                Equipamento parado?{" "}
                <span className="text-accent">Não espere até amanhã.</span>
              </h2>
              <p className="mt-3 text-primary-foreground/60">
                Cada hora sem refrigeração é perda de produto e cliente. Fale agora.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 shrink-0">
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={phoneLink()}
                >
                  <Phone size={20} />
                  Ligar agora
                </motion.a>
              </Button>
              <Button asChild variant="strong" size="lg" className="h-14 px-8 text-base">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink("Olá, vim pelo site. Preciso de atendimento urgente.")}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon size={20} />
                  Chamar no WhatsApp
                </motion.a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer principal */}
      <footer className="py-14 bg-foreground border-t border-primary-foreground/10">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
            {/* Coluna 1 — Identidade */}
            <div>
              <p className="text-xl font-bold text-primary-foreground">
                Refrigeração <span className="text-accent">TABOADO</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/50">
                Especialistas em refrigeração comercial, câmaras frias e climatização há mais de 12 anos em Três Lagoas — MS. Técnicos certificados, garantia documentada.
              </p>
              <div className="mt-6 space-y-3 text-sm text-primary-foreground/50">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="shrink-0 text-accent" />
                  <span>Três Lagoas — MS e região</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-accent" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <WhatsAppIcon size={14} className="shrink-0 text-accent" />
                  <span>{WHATSAPP_DISPLAY_TECNICO}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0 text-accent" />
                  <span>{EMAIL}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="shrink-0 mt-0.5 text-accent" />
                  <div>
                    <p>Seg a Sex: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2 — Serviços */}
            <div>
              <p className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Serviços</p>
              <ul className="space-y-2.5 text-sm text-primary-foreground/50">
                {[
                  "Refrigeração Comercial",
                  "Câmaras Frias",
                  "Climatização",
                  "Manutenção Preventiva",
                  "Urgência 24h",
                ].map((item) => (
                  <li key={item}>
                    <a href="#servicos" className="hover:text-primary-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Empresa */}
            <div>
              <p className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Empresa</p>
              <ul className="space-y-2.5 text-sm text-primary-foreground/50">
                <li><a href="#diferenciais" className="hover:text-primary-foreground transition-colors">Diferenciais</a></li>
                <li><a href="#depoimentos" className="hover:text-primary-foreground transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-primary-foreground transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Orçamento Grátis</a></li>
              </ul>
            </div>
          </div>

          {/* Rodapé inferior */}
          <div className="mt-12 pt-6 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between text-xs text-primary-foreground/30">
              <p>© {new Date().getFullYear()} Refrigeração Taboado. Todos os direitos reservados.</p>
              <p>Três Lagoas — MS e região</p>
            </div>
            <p className="mt-3 text-center text-xs text-primary-foreground/30">
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
        </div>
      </footer>
    </>
  );
}
