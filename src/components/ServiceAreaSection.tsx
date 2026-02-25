import { MapPin } from "lucide-react";

export default function ServiceAreaSection() {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <h2 className="font-heading text-3xl font-800 tracking-tight text-primary-foreground md:text-4xl">
          Área de <span className="text-primary">atendimento</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg">
          Atendemos Três Lagoas, Ilha Solteira, Selvíria, Brasilândia e região. Se tiver dúvida, é só perguntar.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <MapPin size={20} className="text-primary shrink-0" />
          <a
            href="https://www.google.com/maps/search/Refrigera%C3%A7%C3%A3o+Taboado+Tr%C3%AAs+Lagoas+MS"
            target="_blank"
            rel="noopener"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
