

# Badge "Problemas que resolvemos" — estilo sólido

## Alteração em `src/components/ProblemsSection.tsx`

**Linha 28** — substituir classes do badge container:
- De: `inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50`
- Para: `inline-flex items-center gap-2 bg-blue-100 text-blue-800 uppercase tracking-wider text-xs font-bold px-3 py-1 rounded-full border-none`

Remover também o `<span>` interno redundante (linha 29) que aplica `text-xs font-semibold text-primary tracking-wide uppercase` — essas classes agora estão na div pai. O texto fica direto dentro da div.

