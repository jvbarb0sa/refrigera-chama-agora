import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="text-[15px] font-bold tracking-tight text-foreground">
          Refrigeração <span className="text-primary">Taboado</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors ${
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="strong" size="sm" className="h-8 text-[13px] px-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink("Olá, vim pelo site.")}
              target="_blank"
              rel="noopener"
            >
              <MessageCircle size={14} />
              WhatsApp
            </motion.a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-14 z-40 flex flex-col bg-background md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.25 }}
              className="flex flex-1 flex-col items-center justify-center gap-5"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  className="text-xl font-semibold text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.25 }}
              className="border-t border-border p-6 space-y-2"
            >
              <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <Phone size={13} className="shrink-0" />
                <a href={phoneLink()} className="hover:text-foreground">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <MessageCircle size={13} className="shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
              <Button asChild variant="strong" size="lg" className="w-full mt-3 h-12">
                <a href={whatsappLink("Olá, vim pelo site.")} target="_blank" rel="noopener">
                  <MessageCircle size={18} />
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
