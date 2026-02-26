

# FinalCTASection — Institucional, fundo branco, sem template

## Diagnóstico

Seção atual:
- Fundo `bg-foreground` (azul marinho pesado) — cara de template genérico
- Headline "Equipamento parado custa dinheiro. Nós resolvemos." — agressiva demais
- Mini-stats redundantes (já existem na StatsSection)
- Texto branco sobre fundo escuro com efeito de peso visual excessivo
- Footer também em fundo escuro — ok, pode manter

## Mudança

### CTA Section (acima do footer)
- Fundo: `bg-background` (branco) — limpo, sem gradiente, sem glow
- Headline: `Precisa de assistência técnica especializada?`
- Sub: `Atendimento profissional em refrigeração e elétrica.`
- Cores do texto: `text-foreground` para H2, `text-muted-foreground` para sub
- Remover mini-stats (redundante)

### Botões
1. **Solicitar atendimento** — `variant="strong"`, link WhatsApp com ícone `MessageCircle`
2. **Falar no WhatsApp** — `variant="outline"`, link WhatsApp (mensagem diferente) com ícone `Phone` trocado por `MessageCircle`

Ambos apontam para WhatsApp (um mais formal, outro direto). Alternativa: manter o segundo como `phoneLink()` com texto "Ligar agora" — faz mais sentido operacionalmente. Vou manter "Falar no WhatsApp" como outline apontando para WhatsApp com mensagem genérica.

### Footer
Mantido como está — fundo escuro faz sentido para separar footer do conteúdo. Sem alteração.

### Resultado visual

```text
─────────────────── bg-background (branco) ───────────────────

    Precisa de assistência técnica especializada?

    Atendimento profissional em refrigeração e elétrica.

    [ Solicitar atendimento ]   [ Falar no WhatsApp ]

─────────────────── footer (bg-foreground, mantido) ──────────
```

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/FinalCTASection.tsx` | CTA: fundo branco, nova headline/sub, remover mini-stats, botões atualizados. Footer intacto. |

