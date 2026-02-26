import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Especialidades", href: "#servicos", id: "servicos" },
  { label: "Diferenciais", href: "#diferenciais", id: "diferenciais" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
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
          <a href={phoneLink()} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone size={14} className="shrink-0" />
            {PHONE_DISPLAY}
          </a>
          <Button asChild variant="strong" size="sm">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink("Olá, vim pelo site.")}
              target="_blank"
              rel="noopener"
            >
              <MessageCircle size={16} />
              Solicitar atendimento
            </motion.a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-background md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-1 flex-col items-center justify-center gap-6"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  className="text-xl font-semibold text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="border-t border-border p-6 space-y-3"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
