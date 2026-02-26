

# Bloco 6 — Quick Form de captura no Hero

## Contexto

Adicionar um mini-formulário de captura de lead para quem prefere não usar WhatsApp no primeiro contato, especialmente B2B. O form ficará na coluna direita do Hero (desktop) substituindo o placeholder de imagem, e abaixo dos CTAs no mobile.

## Arquivos e mudanças

### 1. Novo: `src/components/HeroQuickForm.tsx`

Componente de formulário compacto dentro de um `Card` com:

**Campos:**
- **Equipamento** (`Select`): Geladeira / Freezer / Câmara fria / Ar-condicionado / Máquina de gelo / Outro
- **Bairro/empresa** (`Input`): texto livre, max 100 chars
- **Toggle "Sou empresa"** (`Switch` + `Label`): alterna flag B2B

**Botão:** "Enviar e pedir retorno" com variante `strong`

**Comportamento ao submeter:**
- Validação client-side com Zod (equipamento obrigatório, bairro obrigatório)
- Monta mensagem formatada e abre WhatsApp (técnico) com os dados preenchidos via `whatsappLink()`
- Toast de confirmação via `sonner`
- Reset do form após envio

**Estilo:**
- `Card` com fundo `bg-card`, borda, sombra leve
- Título curto: "Solicite um retorno" em `text-lg font-semibold`
- Subtítulo: "Sem compromisso. Respondemos em até 2h." em `text-sm text-muted-foreground`
- Usa componentes do DS: `Card`, `Select`, `Input`, `Switch`, `Label`, `Button`

### 2. `src/components/HeroSection.tsx`

- Substituir o placeholder de imagem (div `hero-image`, linhas 110-116) pelo `HeroQuickForm`
- Remover `hidden lg:block` — o form aparece tanto no desktop (coluna 2) quanto no mobile (abaixo dos CTAs)
- No mobile, o form aparece após a proof row com `mt-10`
- Manter a classe `hero-image` para preservar a animação GSAP existente (`opacity:0, x:30`)
- Import do novo componente

### Nenhuma dependência nova — tudo já existe no projeto

| Arquivo | Mudança |
|---|---|
| `src/components/HeroQuickForm.tsx` | Novo componente de formulário rápido |
| `src/components/HeroSection.tsx` | Substituir placeholder de imagem pelo form |

