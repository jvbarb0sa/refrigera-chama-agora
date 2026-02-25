import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Tem garantia?",
    a: "Sim. Todo serviço sai com garantia emitida. Se der problema dentro do prazo, voltamos sem custo adicional.",
  },
  {
    q: "Cobra visita?",
    a: "A visita técnica tem um valor simbólico que é abatido do serviço se você aprovar o orçamento.",
  },
  {
    q: "Trabalha com peça original?",
    a: "Sempre que disponível, usamos peças originais ou equivalentes de qualidade comprovada. Nada genérico.",
  },
  {
    q: "Atende no mesmo dia?",
    a: "Dependendo do horário e da agenda, sim. Urgências comerciais têm prioridade no atendimento.",
  },
  {
    q: "Faz orçamento pelo WhatsApp?",
    a: "Podemos dar uma orientação inicial pelo WhatsApp com base na sua descrição. Para orçamento preciso, precisamos avaliar o equipamento.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <h2 className="font-heading text-3xl font-800 tracking-tight text-primary-foreground md:text-4xl text-center">
          Perguntas <span className="text-primary">frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-primary-foreground hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
