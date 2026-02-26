import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhatsAppSticky() {
  return (
    <motion.a
      href={whatsappLink("Olá, vim pelo site. Preciso de ajuda.")}
      target="_blank"
      rel="noopener"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
      style={{ backgroundColor: "#25D366" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      <WhatsAppIcon size={28} className="text-white" />
    </motion.a>
  );
}
