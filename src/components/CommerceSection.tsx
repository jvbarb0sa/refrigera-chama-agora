import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { motion } from "framer-motion";

const tags = ["Mercados", "Conveniências", "Sorveterias", "Padarias", "Indústrias alimentícias"];

export default function CommerceSection() {
  const ref = useGsapFade<HTMLDivElement>({ y: 18 });

  return (
    <section id="comercial" className="py-14 md:py-20 bg-primary">
      <div ref={ref} className="container">
        <div className="max-w-xl">
          <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-primary-foreground/50">
            Atendimento comercial
          </span>
          <h2 className="mt-2 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-primary-foreground">
            Comércio não pode parar.
          </h2>
          <p className="mt-3 text-[15px] text-primary-foreground/60 leading-relaxed max-w-md">
            Equipamento parou? A gente prioriza. Balcões, cervejeiras, expositores e freezers — atendimento com urgência.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary-foreground/15 px-3.5 py-1 text-[12px] font-medium text-primary-foreground/70">
                {tag}
              </span>
            ))}
          </div>

          <Button asChild variant="strong" size="lg" className="mt-7 h-12 px-7 text-[15px]">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink("Urgência comercial — equipamento parou. Preciso de atendimento rápido.")}
              target="_blank"
              rel="noopener"
            >
              <MessageCircle size={18} />
              Solicitar prioridade comercial
            </motion.a>
          </Button>
        </div>
      </div>
    </section>
  );
}
