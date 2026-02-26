

# Hero Section — Reestruturação Institucional

## Problema

O hero atual tem fundo escuro (`bg-foreground` / onyx), headline genérica ("Especialistas em refrigeração comercial e linha branca"), subheadline vaga, CTAs repetitivos ("Solicitar orçamento" / "Ligar agora"), e provas sociais fracas (avatar circles vazios). Parece landing page de IA.

## Mudanças

### 1. Fundo branco (não escuro)

Trocar `bg-foreground` por `bg-background` (branco). Isso elimina o visual "tech/SaaS" e alinha com o briefing institucional. Toda a tipografia passa para cores escuras (`text-foreground`), com destaques em `text-primary` (azul).

### 2. Copy reescrita (técnica e específica)

**Headline:**
> Assistência técnica especializada em refrigeração comercial e residencial.

**Subheadline:**
> Instalação e manutenção de geladeiras, freezers, câmaras frias e sistemas inverter com atendimento rápido e técnico certificado.

Sem "linha branca", sem "excelência", sem "soluções". Direto ao serviço.

### 3. Provas factuais (não social proof genérica)

Substituir estrelas Google + avatares vazios por 3 bullets factuais em linha:

- Atendimento em Três Lagoas e região
- Técnicos com experiência comprovada
- Peças e componentes de qualidade

Formato: texto simples com bullet ou check, sem cards, sem ícones elaborados.

### 4. CTAs com intenção diferenciada

- **Primário (strong):** "Solicitar atendimento técnico" → WhatsApp com mensagem "Olá, preciso de atendimento técnico."
- **Secundário (outline):** "Falar no WhatsApp" → WhatsApp com mensagem genérica

Ambos apontam para WhatsApp, mas com copy e hierarquia visual diferentes. Remover o "Ligar agora" do hero (está na navbar e no sticky).

### 5. Layout

- Manter 2 colunas no desktop (texto esquerda 60%, imagem direita 40%)
- Texto com `max-w-[720px]`, alinhado à esquerda
- Imagem placeholder mantém aspect-ratio mas com fundo `bg-muted` e texto "Foto do técnico em atendimento"
- Mobile: coluna única, imagem oculta (já é assim)

### 6. GSAP

Manter a timeline existente, apenas ajustar classes de cor. Sem mudança de lógica de animação.

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/HeroSection.tsx` | Fundo branco, copy reescrita, provas factuais, CTAs diferenciados, cores de texto ajustadas |

## O que NÃO muda
- Estrutura de grid (já 2 colunas)
- GSAP timeline (já funciona)
- Framer Motion nos botões (já funciona)
- Navbar, demais seções, constants

