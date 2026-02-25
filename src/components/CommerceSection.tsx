import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const tags = ["Mercados", "Conveniências", "Sorveterias", "Indústrias alimentícias"];

export default function CommerceSection() {
  return (
    <section id="comercial" className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-[40px]">
            Comércio não pode parar.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Intervenção rápida em balcões, cervejeiras, expositores e freezers.
            Priorizamos urgência comercial para manter sua operação rodando.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-muted-foreground px-4 py-1.5 text-xs font-medium text-primary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <Button asChild variant="strong" size="lg" className="mt-8 h-14 px-8 text-base">
            <a href={whatsappLink("Urgência comercial — equipamento parou. Preciso de atendimento rápido.")} target="_blank" rel="noopener">
              <MessageCircle size={20} />
              Solicitar prioridade comercial
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
