

# Fix Hero: Contraste, Hierarquia de CTAs e Badge

## Mudanças

### 1. `src/components/HeroSection.tsx`

**Headline — contraste do destaque:**
- Trocar `text-primary` do span "diagnostica e resolve" por cor Spicy Paprika: `text-[hsl(var(--spicy-paprika))]`
- Trocar `font-bold` do h1 por `font-semibold` (regra de tipografia do projeto)

**Botão primário (WhatsApp):**
- Já usa `variant="strong"` (cerulean). Precisa mudar para Spicy Paprika.
- Adicionar classes override: `bg-[hsl(var(--spicy-paprika))] hover:bg-[hsl(var(--spicy-paprika))]/90 text-white shadow-lg border-0`

**Botão secundário (Solicitar visita):**
- Trocar `variant="outline"` + classes de override por `variant="secondary"` 
- Classes: `bg-[#D6D6DA] text-[hsl(var(--onyx))] hover:bg-[#C7CCD7]` — fundo Alabaster Grey, texto Onyx
- Remover `border-white/30 text-white hover:bg-white/10`

**Badge (kicker):**
- Trocar `rounded-full` por `rounded-[6px]` (padrão UI do projeto)
- Trocar `border border-white/20 bg-white/10` por `border border-white/15 bg-white/10 backdrop-blur-sm`

### Arquivos
1. `src/components/HeroSection.tsx` — 3 ajustes (headline span, botões, badge)

