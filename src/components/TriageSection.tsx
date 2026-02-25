import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

interface TriageItem {
  label: string;
  cause: string;
  whatsappMsg: string;
}

const items: TriageItem[] = [
  {
    label: "Não gela",
    cause: "Pode ser falta de gás, compressor travado ou termostato com defeito. Um diagnóstico rápido resolve.",
    whatsappMsg: "Meu equipamento não gela. Pode me orientar?",
  },
  {
    label: "Faz barulho",
    cause: "Barulho geralmente indica motor forçando, ventilador travado ou peça solta. Precisa de avaliação técnica.",
    whatsappMsg: "Meu equipamento está fazendo barulho estranho. Pode avaliar?",
  },
  {
    label: "Desarma / não liga",
    cause: "Pode ser problema elétrico, placa queimada ou protetor térmico. Não tente ligar na força — chame um técnico.",
    whatsappMsg: "Meu equipamento não liga ou fica desarmando. Pode ajudar?",
  },
];

export default function TriageSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <h2 className="font-heading text-3xl font-800 tracking-tight text-primary-foreground md:text-4xl">
          Qual é o <span className="text-primary">problema?</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg">
          Clique no sintoma e descubra a possível causa. Depois é só chamar no WhatsApp.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.label} className="flex flex-col">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className={`rounded-xl border p-6 text-left transition-all font-heading text-lg font-700 ${
                  active === i
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-primary-foreground hover:border-primary/40"
                }`}
              >
                {item.label}
              </button>

              {active === i && (
                <div className="mt-3 rounded-xl border border-border bg-card p-5 animate-in fade-in slide-in-from-top-2">
                  <p className="text-sm text-muted-foreground">{item.cause}</p>
                  <Button asChild size="sm" className="mt-4 gap-2">
                    <a href={whatsappLink(item.whatsappMsg)} target="_blank" rel="noopener">
                      <MessageCircle size={16} />
                      Chamar no WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
