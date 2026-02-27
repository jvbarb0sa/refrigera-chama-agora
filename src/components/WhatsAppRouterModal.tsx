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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Com quem você quer falar?</DialogTitle>
          <DialogDescription>
            Escolha o setor para ser atendido pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 pt-4">
          {options.map((opt) => (
            <a
              key={opt.target}
              href={whatsappLink(message, opt.target)}
              target="_blank"
              rel="noopener"
              onClick={() => onOpenChange(false)}
              className="group w-full flex flex-col items-center p-6 rounded-xl border-2 border-slate-100 bg-white hover:border-green-500 hover:bg-green-50 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <opt.icon size={28} className="text-slate-800" />
              <div className="mt-3 text-center">
                <p className="text-sm font-semibold text-slate-800">
                  {opt.label}
                </p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {opt.description}
                </p>
              </div>
              <span className="flex items-center gap-2 text-sm font-semibold text-green-600 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <WhatsAppIcon size={14} />
                Iniciar conversa
              </span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
