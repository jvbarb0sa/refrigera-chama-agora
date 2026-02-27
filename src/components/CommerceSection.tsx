import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const tags = ["Mercados", "Conveniências", "Sorveterias", "Indústrias alimentícias"];

export default function CommerceSection() {
  return (
    <section id="comercial" data-reveal style={{ visibility: "hidden" }} className="py-20 md:py-32 bg-primary">
      <div className="container">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-primary-foreground/20 bg-primary-foreground/10">
            <span className="text-xs font-semibold text-primary-foreground tracking-wide uppercase">Atendimento comercial</span>
          </div>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-[40px]">
            Comércio não pode parar.
          </h2>
          <p className="mt-4 text-base text-primary-foreground/70 leading-relaxed max-w-md">
            Equipamento parou? A gente prioriza. Balcões, cervejeiras, expositores e freezers: atendimento com urgência pra manter sua operação rodando.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium text-primary-foreground/80">
                {tag}
              </span>
            ))}
          </div>

          <Button asChild variant="strong" size="lg" className="mt-8 h-14 px-8 text-base">
            <a href={whatsappLink("Urgência comercial: equipamento parou. Preciso de atendimento rápido.")} target="_blank" rel="noopener">
              <WhatsAppIcon size={20} />
              Solicitar prioridade comercial
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
