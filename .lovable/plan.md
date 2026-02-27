

# Hero com imagem de fundo + gradiente azul escuro

## Mudanças em `src/components/HeroSection.tsx`

### 1. Copiar nova imagem
- `user-uploads://Photorealistic_editorial_photo_brazilian_male_tech_delpmaspu-3.png` → `src/assets/hero-bg.jpg`

### 2. Reestruturar a Hero
- Usar a nova imagem como **background** full-width da section (via `<img>` absoluto ou `style backgroundImage`)
- Adicionar overlay gradiente: `bg-gradient-to-r from-[#0b1622]/95 via-[#0b1622]/70 to-transparent` — escuro à esquerda, transparente à direita revelando o técnico
- Remover a coluna da imagem (o grid `lg:grid-cols-5` vira layout de coluna única com `max-w-2xl`)
- Trocar todas as cores de texto para branco/claro: `text-white`, `text-white/70` para muted
- Badge de localização: `border border-white/20 bg-white/10 text-white/80 px-3 py-1 rounded-full`
- H1: `text-white`, span primary mantém `text-primary` (cerulean)
- Subtítulo: `text-white/70`
- Social proof border: `border-white/15`, text `text-white/60`, stars mantêm amber
- Botão outline: `border-white/30 text-white hover:bg-white/10`
- Remover `rounded-2xl` da section — hero full-bleed sem bordas arredondadas
- Manter animações GSAP (remover `.hero-image` do timeline)

### Arquivos
1. Copiar imagem → `src/assets/hero-bg.jpg`
2. `src/components/HeroSection.tsx` — rewrite layout

