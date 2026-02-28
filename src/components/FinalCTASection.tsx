import { Phone, Mail, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY_TECNICO, EMAIL } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import logoWhite from "@/assets/logo-vagner-branca.svg";


export default function FinalCTASection() {
  const ref = useGsapFade<HTMLDivElement>({ y: 20 });

  return (
    <>
      {/* CTA Banner */}
      <section id="contato" data-reveal style={{ visibility: "hidden" }} className="bg-[#163573] border-l-4 border-ring">
        <div ref={ref} className="container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 items-center">
            {/* Left column */}
            <div className="lg:col-span-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-400">
                Atendimento emergencial
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Equipamento parado?{" "}
                <span className="block text-accent">Não espere até amanhã.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#D7D7D9] max-w-md">
                Cada hora sem refrigeração é perda de produto e cliente. Fale agora com um técnico.
              </p>
            </div>

            {/* Right column — buttons */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-3 lg:justify-end w-full">
              <a
                href={phoneLink()}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium bg-white text-[#163573] hover:bg-[#D7D7D9] rounded-[6px] hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150">
                <Phone size={16} />
                Ligar agora
              </a>
              <a
                href={whatsappLink("Olá, vim pelo site. Preciso de atendimento urgente.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium text-white rounded-[6px] hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 bg-[#42ae5d]">
                <WhatsAppIcon size={16} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer principal — dark */}
      <footer className="bg-foreground pt-20 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Coluna 1 — Identidade */}
            <div className="sm:col-span-2 lg:col-span-2 my-0 py-0">
              <img src={logoWhite} alt="Refrigeração Taboado" className="h-16" width={113} height={64} />
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400 py-[14px] my-[31px]">
                Especialistas em refrigeração comercial, industrial e residencial há 12 anos em Aparecida do Taboado, MS e região. Técnicos certificados, garantia documentada.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <MapPin size={15} className="shrink-0 text-accent" />
                  Av. Orlando Mascarenhas Pereira, 1841 – Jd. Jerusa, Aparecida do Taboado – MS
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
                  <span>Seg–Sex 8h–18h · Sáb, Dom e Feriados: urgências (mercados, indústrias, conveniências e clientes com contrato)</span>
                </li>
              </ul>
            </div>

            {/* Coluna 2 — Serviços */}
            <div>
              <p className="relative text-xs font-semibold uppercase tracking-widest text-accent mb-5 pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-6 after:bg-accent after:rounded-full">
                Serviços
              </p>
              <ul className="space-y-3 text-sm text-slate-400">
                {["Refrigeração Comercial", "Câmaras Frias", "Climatização", "Manutenção Preventiva", "Urgência 24h"].map((item) =>
                <li key={item}>
                    <a href="#servicos" className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Coluna 3 — Empresa */}
            <div>
              <p className="relative text-xs font-semibold uppercase tracking-widest text-accent mb-5 pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-6 after:bg-accent after:rounded-full">
                Empresa
              </p>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a></li>
                <li><a href="#depoimentos" className="hover:text-accent transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#contato" className="hover:text-accent transition-colors">Orçamento Grátis</a></li>
              </ul>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:justify-between items-center gap-[30px] text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-1">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Refrigeração Taboado.
              </p>
              <p className="text-sm text-slate-400">
                CNPJ: 64.699.140/0001-82
              </p>
            </div>
            <p className="text-sm text-slate-400">
              Desenvolvido por{" "}
              <a
                href="https://wa.me/message/FTL5XC4CK32JM1"
                target="_blank"
                rel="noopener"
                className="text-primary-foreground font-semibold hover:text-primary-foreground/80 transition-colors">
                FCS-STUDIO &amp; Co.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>);

}