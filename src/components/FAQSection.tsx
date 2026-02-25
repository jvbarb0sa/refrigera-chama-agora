import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

const faqs = [
  { q: "Tem garantia?", a: "Sim. Todo serviço sai com garantia por escrito. Se der problema dentro do prazo, voltamos sem custo." },
  { q: "Cobra visita?", a: "A visita técnica tem um valor que é abatido do serviço se você aprovar o orçamento." },
  { q: "Trabalha com peça original?", a: "Sempre que disponível, usamos peças originais ou equivalentes de qualidade comprovada." },
  { q: "Atende no mesmo dia?", a: "Dependendo do horário e da agenda, sim. Urgências comerciais têm prioridade." },
  { q: "Faz orçamento pelo WhatsApp?", a: "Podemos dar uma orientação inicial pelo WhatsApp. Para orçamento preciso, avaliamos presencialmente." },
];

export default function FAQSection() {
  const ref = useGsapFade<HTMLDivElement>();

  return (
    <section id="faq" className="py-14 md:py-20">
      <div ref={ref} className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-10">
          <div className="lg:col-span-7">
            <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-primary">
              Dúvidas
            </span>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Perguntas frequentes
            </h2>

            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-muted p-5 space-y-4 sticky top-20">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "500+", label: "Atendimentos" },
                  { value: "98%", label: "Recomendação" },
                  { value: "<2h", label: "Tempo resposta" },
                  { value: "8+", label: "Anos atuando" },
                ].map((s) => (
                  <div key={s.label} className="text-center py-2">
                    <p className="text-xl font-bold text-primary">{s.value}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="strong" size="default" className="w-full">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappLink("Olá, tenho uma dúvida sobre o serviço.")}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={16} />
                  Tirar dúvida
                </motion.a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
