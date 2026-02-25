import { MapPin } from "lucide-react";

export default function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Área de atendimento
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground">
          Três Lagoas e região.
        </h2>
        <p className="mt-3 text-primary max-w-lg">
          Atendemos Três Lagoas, Ilha Solteira, Selvíria, Brasilândia e cidades próximas.
        </p>

        <a
          href="https://www.google.com/maps/search/Refrigera%C3%A7%C3%A3o+Taboado+Tr%C3%AAs+Lagoas+MS"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
        >
          <MapPin size={16} />
          Abrir no Google Maps →
        </a>
      </div>
    </section>
  );
}
