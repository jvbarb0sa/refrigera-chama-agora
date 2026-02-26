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
      <section id="contato" className="py-16 md:py-20 bg-muted">
        <div ref={ref} className="container">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                Equipamento parado?{" "}
                <span className="block text-accent">Não espere até amanhã.</span>
              </h2>
              <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
                Cada hora sem refrigeração é perda de produto e cliente. Fale agora com um técnico.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 shrink-0">
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-xl border-border/60 bg-background shadow-sm">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={phoneLink()}
                >
                  <Phone size={16} />
                  Ligar agora
                </motion.a>
              </Button>
              <Button asChild variant="strong" size="lg" className="h-12 px-8 text-base rounded-xl shadow-md">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink("Olá, vim pelo site. Preciso de atendimento urgente.")}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon size={16} />
                  Chamar no WhatsApp
                </motion.a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer principal — dark */}
      <footer className="bg-foreground pt-20 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Coluna 1 — Identidade */}
            <div className="sm:col-span-2 lg:col-span-2">
              <p className="text-xl font-extrabold tracking-tight text-primary-foreground">
                Refrigeração <span className="text-accent">TABOADO</span>
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/40">
                Especialistas em refrigeração comercial, câmaras frias e climatização há mais de 12 anos em Três Lagoas — MS. Técnicos certificados, garantia documentada.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-primary-foreground/50">
                <li className="flex items-center gap-2">
                  <MapPin size={15} className="shrink-0 text-accent" />
                  Três Lagoas — MS e região
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={15} className="shrink-0 text-accent" />
                  {PHONE_DISPLAY}
                </li>
                <li className="flex items-center gap-2">
                  <WhatsAppIcon size={15} className="shrink-0 text-accent" />
                  {WHATSAPP_DISPLAY_TECNICO}
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={15} className="shrink-0 text-accent" />
                  {EMAIL}
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={15} className="shrink-0 mt-0.5 text-accent" />
                  <span>Seg–Sex 8h–18h · Sáb 8h–12h</span>
                </li>
              </ul>
            </div>

            {/* Coluna 2 — Serviços */}
            <div>
              <p className="relative text-xs font-semibold uppercase tracking-widest text-accent mb-5 pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-6 after:bg-accent after:rounded-full">
                Serviços
              </p>
              <ul className="space-y-3 text-sm text-primary-foreground/60">
                {["Refrigeração Comercial", "Câmaras Frias", "Climatização", "Manutenção Preventiva", "Urgência 24h"].map((item) => (
                  <li key={item}>
                    <a href="#servicos" className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Empresa */}
            <div>
              <p className="relative text-xs font-semibold uppercase tracking-widest text-accent mb-5 pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-6 after:bg-accent after:rounded-full">
                Empresa
              </p>
              <ul className="space-y-3 text-sm text-primary-foreground/60">
                <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a></li>
                <li><a href="#depoimentos" className="hover:text-accent transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#contato" className="hover:text-accent transition-colors">Orçamento Grátis</a></li>
              </ul>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-primary-foreground/30">
              © {new Date().getFullYear()} Refrigeração Taboado. Todos os direitos reservados.
            </p>
            <p className="text-xs text-primary-foreground/30">
              Três Lagoas — MS e região
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-primary-foreground/25">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/message/FTL5XC4CK32JM1"
              target="_blank"
              rel="noopener"
              className="text-primary-foreground/30 underline hover:text-primary-foreground/50 transition-colors"
            >
              FCS-STUDIO
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
