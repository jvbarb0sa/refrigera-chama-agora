import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

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

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Triagem rápida
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Qual o problema do seu equipamento?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-lg">
          Selecione o sintoma. A gente orienta e, se precisar, já chama pelo WhatsApp com a mensagem pronta.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActive(active === i ? null : i)}
              className={`rounded-lg border px-6 py-4 text-left text-base font-semibold transition-all ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {active !== null && (
          <div className="mt-6 rounded-lg border border-border bg-card p-6 border-l-4 border-l-primary animate-fade-up">
            <p className="font-semibold text-foreground text-sm">{items[active].cause}</p>
            <p className="mt-2 text-sm text-muted-foreground">{items[active].tip}</p>
            <Button asChild variant="strong" size="sm" className="mt-5 gap-2">
              <a href={whatsappLink(items[active].whatsappMsg)} target="_blank" rel="noopener">
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
