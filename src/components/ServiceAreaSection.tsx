import { MapPin } from "lucide-react";
import { useGsapFade } from "@/hooks/use-gsap-fade";

export default function ServiceAreaSection() {
  const ref = useGsapFade<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="container">
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={18} className="text-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Área de atendimento
          </span>
        </div>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
          Atendimento local
        </h2>
        <p className="mt-2 text-muted-foreground max-w-lg">
          Atuamos em Três Lagoas e região, com atendimento para comércios,
          indústrias alimentícias e residências.
        </p>

        <div className="mt-10 rounded-xl overflow-hidden border border-border">
          <iframe
            title="Localização Três Lagoas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118889.7!2d-51.73!3d-20.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e4f4c4c4c4c1%3A0x1!2sTr%C3%AAs%20Lagoas%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
