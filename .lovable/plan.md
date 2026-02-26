

# Bloco 5 — CTAs com roteamento Técnico/Loja

## Contexto

O briefing tem dois números de WhatsApp distintos: Técnico (`WHATSAPP_NUMBER` — 98109-7179) e Loja (`PHONE_NUMBER` — 99259-7710). Hoje ambos os CTAs do Hero apontam para o mesmo número. Precisamos:

1. Trocar os textos e ícones dos CTAs
2. O CTA primário ("Falar com técnico agora") abre um modal perguntando "Técnico ou Loja?" antes de redirecionar ao WhatsApp correto
3. O CTA secundário ("Solicitar visita técnica") rola para a seção de contato (ou abre modal de formulário se existir)
4. Adicionar microcopy abaixo do CTA primário

## Arquivos e mudanças

### 1. `src/lib/constants.ts`
- Adicionar segundo número de WhatsApp para a Loja e uma função `whatsappLinkLoja`
- Ou renomear para deixar claro qual é qual:
  - `WHATSAPP_TECNICO` = `5567981097179`
  - `WHATSAPP_LOJA` = `5567992597710`
  - `whatsappLink(number, message?)` aceita o número como parâmetro

### 2. Novo: `src/components/WhatsAppRouterModal.tsx`
Modal simples usando o componente `Dialog` existente:
- Título: "Com quem você quer falar?"
- Duas opções (radio ou botões lado a lado):
  - **Técnico** — ícone de ferramenta + "Suporte e manutenção" → abre `wa.me/WHATSAPP_TECNICO`
  - **Loja** — ícone de loja + "Orçamentos e peças" → abre `wa.me/WHATSAPP_LOJA`
- Cada opção é um `<a>` que abre o WhatsApp correto em nova aba
- Estilo consistente com o DS (Dialog + Button)

### 3. `src/components/HeroSection.tsx`

**CTA Primário** (era "Solicitar atendimento técnico"):
- Texto: **"Falar com técnico agora"**
- Ícone: `WhatsAppIcon` (SVG oficial, conforme memory/style/icons)
- Variante: `strong` (laranja/accent — já mapeado)
- Altura: `h-14` (56px, já aplicado)
- Hover: `translateY(-1px)` + shadow via framer-motion `whileHover`
- onClick: abre o `WhatsAppRouterModal` em vez de navegar direto
- Microcopy abaixo: `<span>` com "Resposta mais rápida por WhatsApp." em `text-xs text-muted-foreground`

**CTA Secundário** (era "Falar no WhatsApp"):
- Texto: **"Solicitar visita técnica"**
- Ícone: `MessageCircle` ou `CalendarCheck` (Lucide)
- Variante: `outline`
- `href="#contato"` (rola para seção de contato/formulário)
- Sem modal

**Imports**: adicionar `WhatsAppIcon`, `useState`; remover `MessageCircle` do CTA primário

### 4. `src/components/Navbar.tsx`
- O botão "Solicitar visita técnica" da navbar também pode usar o mesmo modal para consistência (opcional — pode ser feito depois)

## Estrutura do modal

```text
┌──────────────────────────────────┐
│  Com quem você quer falar?       │
│                                  │
│  ┌─────────────┐ ┌────────────┐ │
│  │ 🔧 Técnico  │ │ 🏪 Loja    │ │
│  │ Suporte e   │ │ Orçamentos │ │
│  │ manutenção  │ │ e peças    │ │
│  └─────────────┘ └────────────┘ │
└──────────────────────────────────┘
```

Cada card é um `<a target="_blank">` estilizado como botão, que fecha o modal ao clicar.

## Detalhes técnicos

- O `variant="strong"` já mapeia para `bg-accent` (spicy-paprika / laranja) com `text-accent-foreground` (branco) — contraste adequado
- Hover com `whileHover={{ y: -1, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}` via framer-motion
- O modal usa `Dialog` + `DialogContent` do Radix já instalado
- Nenhuma dependência nova necessária

