import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { toast } from "sonner";
import { Send } from "lucide-react";

const EQUIPAMENTOS = [
  "Geladeira",
  "Freezer",
  "Câmara fria",
  "Ar-condicionado",
  "Máquina de gelo",
  "Outro",
];

export default function HeroQuickForm() {
  const [equipamento, setEquipamento] = useState("");
  const [bairro, setBairro] = useState("");
  const [isEmpresa, setIsEmpresa] = useState(false);
  const [errors, setErrors] = useState<{ equipamento?: string; bairro?: string }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!equipamento) newErrors.equipamento = "Selecione o equipamento";
    if (!bairro.trim()) newErrors.bairro = "Informe o bairro ou empresa";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const tipo = isEmpresa ? "Empresa" : "Residência";
    const msg = `Olá! Gostaria de solicitar um retorno.\n\n📋 Equipamento: ${equipamento}\n📍 Local: ${bairro.trim()}\n🏢 Tipo: ${tipo}`;

    window.open(whatsappLink(msg, "tecnico"), "_blank");
    toast.success("Redirecionando para o WhatsApp…");

    setEquipamento("");
    setBairro("");
    setIsEmpresa(false);
    setErrors({});
  }

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground">Solicite um retorno</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-5">
          Sem compromisso. Respondemos em até 2h.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="equipamento">Equipamento</Label>
            <Select value={equipamento} onValueChange={(v) => { setEquipamento(v); setErrors((e) => ({ ...e, equipamento: undefined })); }}>
              <SelectTrigger id="equipamento">
                <SelectValue placeholder="Selecione…" />
              </SelectTrigger>
              <SelectContent>
                {EQUIPAMENTOS.map((eq) => (
                  <SelectItem key={eq} value={eq}>{eq}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.equipamento && <p className="text-xs text-destructive">{errors.equipamento}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="bairro">Bairro ou empresa</Label>
            <Input
              id="bairro"
              value={bairro}
              onChange={(e) => { setBairro(e.target.value); setErrors((er) => ({ ...er, bairro: undefined })); }}
              placeholder="Ex: Centro, Frigorífico ABC…"
              maxLength={100}
            />
            {errors.bairro && <p className="text-xs text-destructive">{errors.bairro}</p>}
          </div>

          <div className="flex items-center gap-2">
            <Switch id="empresa" checked={isEmpresa} onCheckedChange={setIsEmpresa} />
            <Label htmlFor="empresa" className="text-sm cursor-pointer">Sou empresa</Label>
          </div>

          <Button type="submit" variant="strong" className="w-full">
            <Send size={16} />
            Enviar e pedir retorno
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
