import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

export default function CommerceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 to-background p-8 md:p-14 max-w-3xl">
          <h2 className="font-heading text-3xl font-900 tracking-tight text-primary-foreground md:text-5xl">
            Comércio não pode <span className="text-primary">parar.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Intervenção rápida em balcões, cervejeiras, expositores e freezers. 
            Mercado, conveniência ou sorveteria — a gente entende a urgência.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2 px-8 py-6 text-lg font-semibold">
            <a href={whatsappLink("Urgência comercial — equipamento parou. Preciso de atendimento rápido.")} target="_blank" rel="noopener">
              <MessageCircle size={20} />
              Prioridade para urgência comercial
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
