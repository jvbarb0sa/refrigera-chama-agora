import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Depoimentos", href: "#provas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-lg font-800 tracking-tight text-primary-foreground">
          Refrigeração <span className="text-primary">Taboado</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={whatsappLink("Olá, vim pelo site. Preciso de ajuda.")}>Fale conosco</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild className="w-full" size="sm">
              <a href={whatsappLink("Olá, vim pelo site. Preciso de ajuda.")}>Fale conosco</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
