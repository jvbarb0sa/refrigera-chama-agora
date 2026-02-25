import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Tem garantia?", a: "Sim. Todo serviço sai com garantia emitida por escrito. Se der problema dentro do prazo, voltamos sem custo adicional." },
  { q: "Cobra visita?", a: "A visita técnica tem um valor simbólico que é abatido do serviço se você aprovar o orçamento." },
  { q: "Trabalha com peça original?", a: "Sempre que disponível, usamos peças originais ou equivalentes de qualidade comprovada." },
  { q: "Atende no mesmo dia?", a: "Dependendo do horário e da agenda, sim. Urgências comerciais têm prioridade." },
  { q: "Faz orçamento pelo WhatsApp?", a: "Podemos dar uma orientação inicial pelo WhatsApp. Para orçamento preciso, avaliamos o equipamento presencialmente." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Dúvidas
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline hover:text-primary py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
