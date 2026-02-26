

# Topbar de Confiança + Header com Contatos

## O que muda

### 1. Novo componente: `TopBar.tsx`

Barra fina acima do header (36-40px), fundo `bg-primary/5` (azul bem claro, seguindo a paleta French Blue). Conteúdo em linha única com separadores visuais:

- 📍 Três Lagoas – MS e região
- ✅ Atendimento comercial, industrial e residencial  
- 🛡️ Diagnóstico + orçamento com transparência

Tipografia: `text-[13px]` ou `text-sm`, cor `text-muted-foreground`. Itens em `flex` horizontal no desktop, escondidos no mobile (ou mostra apenas o primeiro item). Emojis como ícones inline.

### 2. Header (`Navbar.tsx`) — Adicionar telefone, WhatsApp e CTA

O header atual tem apenas links de navegação + 1 botão "Solicitar atendimento". Precisa exibir os 2 números de contato e trocar o CTA.

**Desktop (direita do header):**
- Telefone: ícone Phone + `(67) 99259-7710` (link `tel:`)
- WhatsApp: ícone WhatsApp + `(67) 98109-7179` (link `wa.me`)
- Separador vertical `|`
- Botão CTA: **"Solicitar visita técnica"** (variant `strong`, cor Spicy Paprika)

Os links de navegação continuam no centro.

**Mobile:** Sem alteração na topbar (esconde). Menu mobile já tem telefone e WhatsApp.

### 3. Ajuste de posicionamento

A `TopBar` fica fixa acima do `Navbar`. O `Navbar` muda de `top-0` para `top-[40px]` (altura da topbar). O `HeroSection` muda `pt-16` para `pt-[104px]` (64px header + 40px topbar) para compensar.

No scroll, ambas ficam fixas (topbar + navbar).

### 4. Importações em `constants.ts`

Já existem: `WHATSAPP_DISPLAY`, `PHONE_DISPLAY`, `phoneLink()`, `whatsappLink()`. Nenhuma mudança necessária.

## Arquivos

| Arquivo | Mudança |
|---|---|
| `src/components/TopBar.tsx` | **Novo** — barra de confiança |
| `src/components/Navbar.tsx` | Adicionar telefone + WhatsApp + trocar label do CTA para "Solicitar visita técnica", ajustar `top` |
| `src/components/HeroSection.tsx` | Ajustar `pt-16` → `pt-[104px]` |
| `src/pages/Index.tsx` | Importar e renderizar `TopBar` acima do `Navbar` |

