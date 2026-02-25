import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const tags = ["Mercados", "Conveniências", "Sorveterias", "Indústrias alimentícias"];

export default function CommerceSection() {
  return (
    <section id="comercial" className="py-20 md:py-28" style={{ backgroundColor: "hsl(221, 67%, 32%)" }}>
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Comércio não pode parar.
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Intervenção rápida em balcões, cervejeiras, expositores e freezers.
            Priorizamos urgência comercial para manter sua operação rodando.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <Button asChild size="lg" className="mt-8 h-14 px-8 text-base">
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
