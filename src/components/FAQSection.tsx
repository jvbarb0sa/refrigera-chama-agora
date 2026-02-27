import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

const faqs = [
{ q: "Tem garantia?", a: "Sim, todos os nossos serviços e peças substituídas contam com garantia formalizada, garantindo a segurança e o funcionamento do seu equipamento." },
{ q: "Cobra visita?", a: "A taxa de visita técnica é isenta caso o orçamento seja aprovado e o serviço executado com a nossa equipe." },
{ q: "Trabalha com peça original?", a: "Priorizamos sempre peças originais de fábrica para garantir a maior durabilidade e performance do seu sistema de refrigeração." },
{ q: "Atende no mesmo dia?", a: "Para casos de urgência comercial (câmaras frias e expositores parados), possuímos plantão de atendimento para solucionar o problema o mais rápido possível." },
{ q: "Faz orçamento pelo WhatsApp?", a: "Sim, você pode nos enviar fotos e relatar o problema pelo WhatsApp para um pré-orçamento rápido e agendamento da visita técnica." }];


export default function FAQSection() {
  return (
    <section id="faq" data-reveal style={{ visibility: "hidden" }} className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
          {/* Left column */}
          <div className="flex flex-col space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50">
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">Dúvidas</span>
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Perguntas frequentes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Tire suas dúvidas sobre nossos serviços de refrigeração,
                manutenção e atendimento técnico.
              </p>
            </div>
            <div>
              <Button asChild variant="default" size="lg" className="gap-2">
                <a
                  href={whatsappLink("Olá, tenho uma dúvida sobre o serviço.")}
                  target="_blank"
                  rel="noopener" className="bg-gradient-to-r from-[#FF8B52] to-[#EB7543]">

                  <WhatsAppIcon size={16} />
                  Fale conosco!
                </a>
              </Button>
            </div>
          </div>

          {/* Right column */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) =>
            <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground transition-colors hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>
    </section>);

}