

# Hero Section "The Engineering Standard" — Redesign

## Visão geral
Redesign da Hero para layout split (texto esquerda + imagem técnico direita) com nova copy focada em engenharia, hierarquia visual clara, e uso da imagem `hero-technician.png` já disponível no projeto.

## Mudanças

### 1. `src/components/HeroSection.tsx` — Reescrever estrutura
- **Layout**: Trocar `max-w-2xl` por grid `lg:grid-cols-[1fr_auto]` com gap, mantendo background full-bleed + gradient overlay
- **Kicker**: Texto "Três Lagoas · MS e Região" com badge padronizado (rounded-[6px], border, bg-white/10)
- **H1**: Nova copy "Engenharia em Refrigeração que Mantém seu Negócio em **Movimento.**" — destaque "Movimento." com `text-accent` (Cerulean, não Spicy Paprika — respeitando paleta de memória onde CTA primário = Cerulean)
- **Peso do H1**: `font-semibold` (memória proíbe bold/extrabold/black — peso máximo é semibold 600)
- **Subtexto**: "Diagnóstico preciso e manutenção especializada para sistemas comerciais e industriais. Transparência técnica do orçamento à execução."
- **CTAs invertidos** conforme proposta:
  - Primário: "Solicitar Visita Técnica" → `variant="strong"` (accent/Cerulean), ícone CalendarCheck, abre `#contato`
  - Secundário: "Falar com Especialista" → `variant="outline"` com WhatsApp icon, abre modal
- **Proof bar**: Trocar lista de stats por faixa "Especialistas em:" com tags (Chillers · Câmaras Frias · VRF · Split) — border-t, text-white/50
- **Imagem direita**: `hero-technician.png` com container rounded-[6px], border white/10, overflow-hidden, sombra sutil. Glow gradient behind (from-primary to-accent, blur, opacity-20)
- **Animação**: Manter timeline GSAP existente com data-hero attrs. Adicionar `data-hero="media"` na imagem com fromTo (autoAlpha, y, scale, expo.out)

### 2. Sem alterações em outros arquivos
- Tokens CSS, button variants, RevealsWrapper, modal — tudo reutilizado como está

### Arquivos
1. `src/components/HeroSection.tsx` — reescrever

