import { useState, useEffect } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppStickyProps {
  hidden?: boolean;
}

export default function WhatsAppSticky({ hidden }: WhatsAppStickyProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Auto-hide tooltip after 8s
  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  const isHidden = hidden || footerVisible;

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-6 md:bottom-6 z-50 flex flex-col items-end gap-3"
        >
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl px-5 py-4 pr-10 shadow-xl max-w-[220px]"
            style={{ backgroundColor: "#003F18" }}
          >
            {/* Speech bubble tail */}
            <div
              className="absolute -bottom-2 right-6 h-4 w-4 rotate-45"
              style={{ backgroundColor: "#003F18" }}
            />
            <button
              onClick={() => { setShowTooltip(false); setDismissed(true); }}
              className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-semibold text-white leading-snug">
              Precisa de atendimento?
            </p>
            <p className="mt-0.5 text-xs text-white/70 leading-snug">
              Resposta imediata no WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink("Olá, vim pelo site. Preciso de ajuda.")}
        target="_blank"
        rel="noopener"
        aria-label="Chamar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: "#25D366" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <WhatsAppIcon size={28} className="text-white" />
      </motion.a>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
