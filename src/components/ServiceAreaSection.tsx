import { MapPin, Factory, Home, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { useGsapFade } from "@/hooks/use-gsap-fade";

const serviceAreas = [
{ icon: MapPin, text: "Aparecida do Taboado · MS e Região" },
{ icon: Factory, text: "Comércio & Indústria" },
{ icon: Home, text: "Residencial" }];


export default function ServiceAreaSection() {
  const leftRef = useGsapFade<HTMLDivElement>({ y: 16, duration: 0.8 });
  const rightRef = useGsapFade<HTMLDivElement>({ y: 0, duration: 0.6 });

  return (
    <section data-reveal style={{ visibility: "hidden" }} className="w-full bg-background py-16 md:py-24 border-t border-primary-foreground">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column */}
          <div ref={leftRef} className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50">
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">Área de Atendimento</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight leading-tight text-foreground sm:text-4xl">
                Atendimento local
              </h2>

              <p className="max-w-[500px] text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
                Atuamos em Aparecida do Taboado e região, com atendimento especializado para
                comércios, indústrias alimentícias e residências.
              </p>
            </div>

            {/* Structured List */}
            <ul className="flex flex-col space-y-4">
              {serviceAreas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[hsl(var(--pale-slate))] bg-muted shadow-sm">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </li>);

              })}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={whatsappLink("Olá, gostaria de informações sobre atendimento na minha região.", "loja")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-[6px] px-6 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group w-fit bg-[#eb7542] text-primary-foreground">

                Fale com a gente
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div ref={rightRef} className="relative w-full">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] overflow-hidden rounded-[6px] border border-[hsl(var(--pale-slate))] bg-muted shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5!2d-51.0908!3d-20.0868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sAv.+Orlando+Mascarenhas+Pereira%2C+1841+-+Jardim+Jerusa%2C+Aparecida+do+Taboado+-+MS%2C+79570-000!5e0!3m2!1spt-BR!2sbr"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da área de atendimento em Aparecida do Taboado" />

            </div>
          </div>
        </div>
      </div>
    </section>);

}