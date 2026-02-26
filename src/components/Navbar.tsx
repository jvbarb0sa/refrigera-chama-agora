import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink, WHATSAPP_DISPLAY_TECNICO, PHONE_DISPLAY } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 md:top-10 left-0 right-0 z-50 bg-background border-b border-[hsl(var(--pale-slate))]">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[hsl(var(--french-blue))]">
          Refrigeração <span className="uppercase">Taboado</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-sm text-foreground">
            <Phone size={15} strokeWidth={2} />
            Técnico: {WHATSAPP_DISPLAY_TECNICO}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-foreground">
            <Phone size={15} strokeWidth={2} />
            Loja: {PHONE_DISPLAY}
          </span>
          <span className="h-5 w-px bg-border" />
          <a
            href={whatsappLink("Olá, gostaria de um orçamento.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-11 px-6 bg-[hsl(var(--spicy-paprika))] text-[hsl(var(--alabaster-grey))] shadow-lg rounded-md font-semibold text-sm transition-colors hover:opacity-90"
          >
            <WhatsAppIcon size={18} />
            Orçamento via WhatsApp
          </a>
        </div>

        {/* Mobile */}
        <a
          href={whatsappLink("Olá, gostaria de um orçamento.")}
          target="_blank"
          rel="noopener"
          className="md:hidden inline-flex items-center gap-2 h-10 px-4 bg-[hsl(var(--spicy-paprika))] text-[hsl(var(--alabaster-grey))] shadow-lg rounded-md font-semibold text-sm"
        >
          <WhatsAppIcon size={18} />
          <span className="hidden min-[400px]:inline">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
