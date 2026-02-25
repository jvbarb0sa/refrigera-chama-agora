import { MapPin } from "lucide-react";

export default function ServiceAreaSection() {
  return (
    <section className="py-8 md:py-10 border-t border-border">
      <div className="container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Três Lagoas e região</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Atendemos Três Lagoas, Ilha Solteira, Selvíria, Brasilândia e cidades próximas.
          </p>
        </div>
        <a
          href="https://www.google.com/maps/search/Refrigera%C3%A7%C3%A3o+Taboado+Tr%C3%AAs+Lagoas+MS"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors shrink-0"
        >
          <MapPin size={16} />
          Ver no mapa →
        </a>
      </div>
    </section>
  );
}
