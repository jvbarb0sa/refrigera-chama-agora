import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    label: "Não gela",
    cause: "Pode ser falta de gás, compressor travado ou termostato com defeito.",
    tip: "Verifique se a borracha da porta está vedando. Se ressecou, pode ser a causa.",
    whatsappMsg: "Meu equipamento não gela. Pode me orientar?",
  },
  {
    label: "Não liga",
    cause: "Pode ser problema elétrico, placa queimada ou protetor térmico.",
    tip: "Teste a tomada com outro aparelho antes de ligar na força.",
    whatsappMsg: "Meu equipamento não liga. Pode ajudar?",
  },
  {
    label: "Faz barulho",
    cause: "Motor forçando, ventilador travado ou peça solta. Precisa de avaliação.",
    tip: "Se o barulho coincide com o compressor ligando, avise o técnico.",
    whatsappMsg: "Meu equipamento está fazendo barulho estranho. Pode avaliar?",
  },
];

export default function TriageSection() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useGsapFade<HTMLDivElement>();

  return (
    <section className="py-14 md:py-20 bg-muted">
      <div ref={sectionRef} className="container">
        <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-primary">
          Triagem rápida
        </span>
        <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
          Qual o problema do seu equipamento?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          Selecione o sintoma. A gente orienta e, se precisar, já chama pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-3">
          {items.map((item, i) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`rounded-lg border px-5 py-3 text-left text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="mt-4 rounded-lg border border-border bg-card p-5 border-l-4 border-l-primary"
            >
              <p className="font-semibold text-foreground text-sm">{items[active].cause}</p>
              <p className="mt-1 text-[13px] text-muted-foreground">{items[active].tip}</p>
              <Button asChild variant="strong" size="sm" className="mt-4 gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappLink(items[active].whatsappMsg)}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={14} />
                  Chamar no WhatsApp
                </motion.a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
