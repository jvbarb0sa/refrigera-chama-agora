

# Substituir emojis por ícones Lucide no TopBar

## Problema
O `TopBar.tsx` usa emojis (📍, ✅, 🛡️) que quebram a consistência visual do design system. A biblioteca de ícones do projeto é Lucide React (estilo Apple SF Symbols — traços finos, cantos arredondados).

## Mudança

**Arquivo: `src/components/TopBar.tsx`**

Substituir os 3 emojis por ícones Lucide equivalentes:

| Emoji | Ícone Lucide | Significado |
|---|---|---|
| 📍 | `MapPin` | Localização |
| ✅ | `CheckCircle` | Atendimento confirmado |
| 🛡️ | `ShieldCheck` | Transparência / garantia |

Cada `<span>` passa a usar `flex items-center gap-1.5` com o ícone inline (`size={14}`, `strokeWidth={2}`). Cor dos ícones herda `text-muted-foreground` do pai, mantendo coerência com o DS.

Importar `MapPin`, `CheckCircle`, `ShieldCheck` de `lucide-react`.

## Arquivos

| Arquivo | Mudança |
|---|---|
| `src/components/TopBar.tsx` | Trocar emojis por ícones Lucide |

