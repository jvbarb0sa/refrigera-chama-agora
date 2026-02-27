import { useState, useEffect } from "react";
import logo from "@/assets/logo-vagner.svg";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { whatsappLink, phoneLink, PHONE_DISPLAY, WHATSAPP_DISPLAY_TECNICO } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Especialidades", href: "#servicos", id: "servicos" },
  { label: "Diferenciais", href: "#diferenciais", id: "diferenciais" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Provas", href: "#provas", id: "provas" },
  { label: "Contato", href: "#contato", id: "contato" },
];

interface NavbarProps {
  onMenuToggle?: (open: boolean) => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    onMenuToggle?.(open);
  }, [open, onMenuToggle]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 md:top-10 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="shrink-0">
          <img src={logo} alt="Refrigeração Taboado" className="h-14" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-base font-medium transition-colors ${
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}


          <span className="h-6 w-px bg-border" />


          <Button asChild variant="strong" size="default">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink("Olá, gostaria de solicitar uma visita técnica.")}
              target="_blank"
              rel="noopener"
            >
              Solicitar visita técnica
            </motion.a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 top-20 z-40 flex flex-col bg-background md:hidden md:top-[104px]"
            style={{ height: "calc(100dvh - 5rem)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.3 }}
              className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.3 }}
                  className={`text-2xl font-semibold transition-colors ${
                    active === l.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="border-t border-border px-6 py-6 space-y-4 safe-bottom"
              style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
            >
              <a href={phoneLink()} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={16} className="shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={whatsappLink("Olá, vim pelo site.")}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 w-full h-14 text-base bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-[6px] font-semibold transition-colors"
              >
                <WhatsAppIcon size={20} />
                Chamar no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
