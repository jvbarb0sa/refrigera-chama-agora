import { MapPin, CheckCircle, ShieldCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary hidden md:block">
      <div className="container flex h-10 items-center justify-center gap-6 text-[13px] text-primary-foreground">
        <span className="flex items-center gap-1.5"><MapPin size={14} strokeWidth={2} /> Aparecida do Taboado – MS</span>
        <span className="text-primary-foreground/30">|</span>
        <span className="flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={2} /> Atendimento residencial, comercial e industrial</span>
        <span className="text-primary-foreground/30">|</span>
        <span className="flex items-center gap-1.5"><ShieldCheck size={14} strokeWidth={2} /> Diagnóstico + orçamento com transparência</span>
      </div>
    </div>
  );
}
