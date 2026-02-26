

# Melhorar UI do Footer (CTA + Footer)

## Problemas identificados

1. **CTA Banner**: Padding excessivo, botões sem refinamento visual, layout genérico
2. **Footer dark**: Grid sem respiro, ícones pequenos demais, hierarquia visual fraca entre colunas
3. **Sub-footer**: Muito comprimido, crédito developer sem destaque

## Mudanças em `src/components/FinalCTASection.tsx`

### CTA Banner
- Reduzir padding vertical para `py-16 md:py-20` (mais contido)
- H2: aumentar para `text-4xl md:text-5xl` com `font-extrabold` para impacto
- Linha "Não espere até amanhã." quebrada naturalmente com `block` no span accent
- Sub texto com `text-base` e `max-w-md`
- Botões: aumentar para `h-12` com `rounded-xl`, ícones `size={16}`; o botão outline ganha `border-border/60 bg-white shadow-sm` para parecer elevado; o strong mantém `variant="strong"` com `shadow-md`
- Gap entre texto e botões: `gap-12` no desktop para dar respiro

### Footer principal
- Aumentar padding: `pt-20 pb-12`
- Nome da marca: `text-xl font-extrabold` para mais presença
- Descrição: `text-primary-foreground/40` (mais sutil) com `max-w-xs`
- Ícones de contato: `size={15}` com `text-accent` (sem opacidade, mais visível)
- Títulos de coluna (SERVIÇOS, EMPRESA): adicionar `after:` underline decorativa em accent com 24px de largura
- Links: `text-primary-foreground/60` base (mais legível), `hover:text-accent` em vez de hover branco
- Espaçamento entre items: `space-y-3` para mais respiro

### Sub-footer
- `mt-16 pt-8` para mais separação
- Crédito FCS-STUDIO: `text-primary-foreground/30` com hover para `/50`

### Detalhe técnico
- Arquivo único alterado: `src/components/FinalCTASection.tsx`
- Todos os tokens do DS mantidos (semantic colors, font-family, radius)
- Sem dependências novas

