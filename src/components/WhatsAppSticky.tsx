import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export default function WhatsAppSticky() {
  return (
    <a
      href={whatsappLink("Olá, vim pelo site. Preciso de ajuda.")}
      target="_blank"
      rel="noopener"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle size={28} />
    </a>
  );
}
