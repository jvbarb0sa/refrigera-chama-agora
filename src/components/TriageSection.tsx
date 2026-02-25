import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const items = [
  {
    label: "Não gela",
    cause: "Pode ser falta de gás, compressor travado ou termostato com defeito. Um diagnóstico rápido resolve.",
    tip: "Verifique se a borracha da porta está vedando bem. Se estiver ressecada, pode ser a causa.",
    whatsappMsg: "Meu equipamento não gela. Pode me orientar?",
  },
  {
    label: "Não liga",
    cause: "Pode ser problema elétrico, placa queimada ou protetor térmico. Não tente ligar na força.",
    tip: "Confira se a tomada está funcionando testando com outro aparelho.",
    whatsappMsg: "Meu equipamento não liga. Pode ajudar?",
  },
  {
    label: "Faz barulho",
    cause: "Barulho geralmente indica motor forçando, ventilador travado ou peça solta. Precisa de avaliação técnica.",
    tip: "Se o barulho é intermitente, observe se coincide com o compressor ligando.",
    whatsappMsg: "Meu equipamento está fazendo barulho estranho. Pode avaliar?",
  },
];

export default function TriageSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Diagnóstico
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground">
          Qual o problema do seu equipamento?
        </h2>
        <p className="mt-3 text-primary max-w-lg">
          Selecione o sintoma e descubra a possível causa.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActive(active === i ? null : i)}
              className={`rounded-xl border p-6 text-left transition-all text-lg font-semibold ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {active !== null && (
          <div className="mt-6 rounded-xl border border-border bg-card p-6 border-l-4 border-l-primary">
            <p className="font-semibold text-foreground">{items[active].cause}</p>
            <p className="mt-2 text-sm text-primary">{items[active].tip}</p>
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
