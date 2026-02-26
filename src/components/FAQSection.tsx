import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const faqs = [
  { q: "Tem garantia?", a: "Sim. Todo serviço sai com garantia emitida por escrito. Se der problema dentro do prazo, voltamos sem custo adicional." },
  { q: "Cobra visita?", a: "A visita técnica tem um valor simbólico que é abatido do serviço se você aprovar o orçamento." },
  { q: "Trabalha com peça original?", a: "Sempre que disponível, usamos peças originais ou equivalentes de qualidade comprovada." },
  { q: "Atende no mesmo dia?", a: "Dependendo do horário e da agenda, sim. Urgências comerciais têm prioridade." },
  { q: "Faz orçamento pelo WhatsApp?", a: "Podemos dar uma orientação inicial pelo WhatsApp. Para orçamento preciso, avaliamos o equipamento presencialmente." },
];

export default function FAQSection() {
  const ref = useGsapFade<HTMLDivElement>();

  return (
    <section id="faq" className="py-16 md:py-24">
      <div ref={ref} className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
            <div>
              <Badge variant="outline">Dúvidas</Badge>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tire suas dúvidas sobre nossos serviços de refrigeração,
              manutenção e atendimento técnico.
            </p>
            <div className="mt-2">
              <Button asChild variant="strong" size="default" className="gap-2">
                <a
                  href={whatsappLink("Olá, tenho uma dúvida sobre o serviço.")}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon size={16} />
                  Alguma dúvida? Fale conosco
                </a>
              </Button>
            </div>
          </div>

          {/* Right column */}
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
