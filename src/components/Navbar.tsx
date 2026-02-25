import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";

const links = [
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Comercial", href: "#comercial", id: "comercial" },
  { label: "Como funciona", href: "#processo", id: "processo" },
  { label: "Provas", href: "#provas", id: "provas" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Refrigeração <span className="text-primary">Taboado</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                active === l.id
                  ? "text-foreground border-b-2 border-primary pb-0.5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="strong" size="sm">
            <a href={whatsappLink("Olá, vim pelo site.")} target="_blank" rel="noopener">
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-background md:hidden">
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
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
          </div>

          <div className="border-t border-border p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="shrink-0" />
              <a href={phoneLink()} className="hover:text-foreground">{PHONE_DISPLAY}</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle size={14} className="shrink-0" />
              <span>{WHATSAPP_DISPLAY}</span>
            </div>
            <Button asChild variant="strong" size="lg" className="w-full mt-2">
              <a href={whatsappLink("Olá, vim pelo site.")} target="_blank" rel="noopener">
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
