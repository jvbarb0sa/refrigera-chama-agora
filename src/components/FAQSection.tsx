import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const faqs = [
  { q: "Tem garantia?", a: "Sim. Todo serviço sai com garantia emitida por escrito. Se der problema dentro do prazo, voltamos sem custo adicional." },
  { q: "Cobra visita?", a: "A visita técnica tem um valor simbólico que é abatido do serviço se você aprovar o orçamento." },
  { q: "Trabalha com peça original?", a: "Sempre que disponível, usamos peças originais ou equivalentes de qualidade comprovada." },
  { q: "Atende no mesmo dia?", a: "Dependendo do horário e da agenda, sim. Urgências comerciais têm prioridade." },
  { q: "Faz orçamento pelo WhatsApp?", a: "Podemos dar uma orientação inicial pelo WhatsApp. Para orçamento preciso, avaliamos o equipamento presencialmente." },
];

const sideStats = [
  { value: "500+", label: "Atendimentos" },
  { value: "98%", label: "Recomendação" },
  { value: "<2h", label: "Tempo resposta" },
  { value: "8+", label: "Anos atuando" },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Dúvidas
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Perguntas frequentes
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-10">
          {/* Accordion — 70% */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible>
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

          {/* Sidebar stats — 30% */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-muted p-6 space-y-5">
              {sideStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
              <Button asChild variant="strong" size="default" className="w-full mt-4">
                <a
                  href={whatsappLink("Olá, tenho uma dúvida sobre o serviço.")}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={16} />
                  Falar com especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
