import { Wrench, Store } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface WhatsAppRouterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message?: string;
}

const options = [
  {
    target: "tecnico" as const,
    icon: Wrench,
    label: "Técnico",
    description: "Suporte e manutenção",
  },
  {
    target: "loja" as const,
    icon: Store,
    label: "Loja",
    description: "Orçamentos e peças",
  },
];

export default function WhatsAppRouterModal({
  open,
  onOpenChange,
  message = "Olá, vim pelo site.",
}: WhatsAppRouterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Com quem você quer falar?</DialogTitle>
          <DialogDescription>
            Escolha o setor para ser atendido pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {options.map((opt) => (
            <a
              key={opt.target}
              href={whatsappLink(message, opt.target)}
              target="_blank"
              rel="noopener"
              onClick={() => onOpenChange(false)}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/40 p-5 text-center transition-all hover:border-primary hover:shadow-md"
            >
              <opt.icon size={28} className="text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {opt.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {opt.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white">
                <WhatsAppIcon size={14} />
                Abrir WhatsApp
              </span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
