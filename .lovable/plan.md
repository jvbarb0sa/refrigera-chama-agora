

# Redesign da Hero: Layout Split Grid com Imagem à Direita

## Resumo
Reescrever a Hero Section para um layout de grid dividido (texto 7 colunas + imagem 5 colunas) com fundo sólido Onyx, imagem do técnico em card à direita, badge com dot pulsante, copy atualizado e card flutuante de social proof.

## Mudanças

### `src/components/HeroSection.tsx` — Reescrita completa do layout

**Estrutura:**
- Fundo sólido `bg-[#151617]` em vez de imagem full-bleed com gradient overlay
- Grid `grid-cols-1 lg:grid-cols-12` com texto em `lg:col-span-7` e imagem em `lg:col-span-5`
- `min-h-[85vh]` com `flex items-center` para centralização vertical
- Padding top adequado para TopBar + Navbar (`pt-24 pb-16`)

**Badge (kicker):**
- Trocar de uppercase/tracking-wide para `text-sm font-medium tracking-wide`
- Adicionar dot pulsante (`w-2 h-2 rounded-full bg-[hsl(var(--french-blue))] animate-pulse`)
- Manter `rounded-[6px]` (padrão UI), `border border-[#C7CCD7]/30 bg-[#C7CCD7]/10`
- Texto: "Três Lagoas · MS e Região"

**Headline:**
- Aumentar para `text-5xl lg:text-7xl font-bold` com `leading-[1.1]`
- Copy: "Seu equipamento parou? A gente **resolve.**" (span Spicy Paprika)
- Quebra de linha com `<br className="hidden lg:block" />`

**Subtítulo:**
- `text-xl text-[#C7CCD7] leading-relaxed`
- Copy: "Diagnóstico preciso e manutenção em refrigeração comercial e industrial. Sem enrolação, direto ao ponto."

**CTAs:**
- Botão primário: manter `bg-[hsl(var(--spicy-paprika))]` com `shadow-lg shadow-[hsl(var(--spicy-paprika))]/20`, `px-8 py-4`
- Botão secundário: trocar para outline/transparent — `bg-transparent border border-[#C7CCD7]/40 hover:bg-[#C7CCD7]/10 text-[#D6D6DA]`
- Manter WhatsAppIcon e CalendarCheck icons
- Manter WhatsAppRouterModal

**Microcopy:**
- Atualizar para "Resposta média em menos de 10 minutos pelo WhatsApp."

**Imagem à direita (lg only):**
- Usar `hero-technician.png` no card com `rounded-[6px] overflow-hidden aspect-[4/5] border border-[#C7CCD7]/20 shadow-2xl`
- Card flutuante sobreposto (`absolute -bottom-8 -left-8`) com stats: "+400 Atendimentos reais"
- Card usa `bg-[#D6D6DA] text-[#151617] rounded-[6px]` com ícone CheckCircle em fundo `bg-[hsl(var(--french-blue))]`

**Proof bar (social proof):**
- Remover a `<ul>` de proof (4.9 Google, 50+ avaliações, etc) — substituída pelo card flutuante

**Animações GSAP:**
- Manter timeline existente com `data-hero` attributes
- Adicionar `data-hero='image'` para fade-in da imagem (delay maior)
- Adicionar `data-hero='float-card'` para o card flutuante (último na timeline)

### Arquivos
1. `src/components/HeroSection.tsx` — reescrita do JSX e ajuste na timeline GSAP

