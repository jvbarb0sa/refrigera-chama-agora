

## Alterar botões do CTA final para usar número da loja

**Arquivo:** `src/components/FinalCTASection.tsx`

1. **Linha 35** — Alterar `href="tel:+5567992599771"` para `href="tel:+5567999259771"` (número da loja correto)
2. **Linha 41** — Alterar `href={whatsappLink("Olá, vim pelo site. Preciso de atendimento urgente.")}` para `href={whatsappLink("Olá, vim pelo site. Preciso de atendimento urgente.", "loja")}`

