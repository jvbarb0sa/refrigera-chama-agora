import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Comercial", href: "#comercial" },
  { label: "Como funciona", href: "#processo" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Refrigeração <span className="text-primary">Taboado</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={whatsappLink("Olá, vim pelo site.")} target="_blank" rel="noopener">
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-6 bg-background md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xl font-semibold text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-4 w-64">
            <a href={whatsappLink("Olá, vim pelo site.")} target="_blank" rel="noopener">
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
