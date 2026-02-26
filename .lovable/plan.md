

# Diferenciais — 4 colunas técnicas, sem inflação

## Diagnóstico

Layout atual: 2 colunas — lista numerada à esquerda + placeholder de foto à direita. Problemas:
- Layout assimétrico com placeholder vazio ("Foto da equipe ou atendimento") — peso morto
- Títulos genéricos ("Diagnóstico Transparente", "Garantia Técnica Real") não refletem os 4 pilares do briefing
- Números em círculos coloridos — decorativo demais
- Copy aceitável mas não alinhada ao briefing (Honestidade, Competência, Transparência, Segurança)
- Label "Por que escolher a gente" — informal
- H2 "O que nos diferencia." — vago

## Mudança

Substituir o layout 2-col + placeholder por um grid horizontal de 4 colunas iguais, cada uma representando um pilar real do briefing.

### Header
- Label: `DIFERENCIAIS`
- H2: `Por que escolher a Refrigeração Taboado`
- Sem subtítulo (o título já é direto)

### Grid: 4 colunas uniformes (`md:grid-cols-2 lg:grid-cols-4`)

Cada coluna:
- Número discreto (`01`–`04`) em `text-muted-foreground/40`
- Título em `font-semibold`
- Descrição curta em `text-muted-foreground`, 1–2 frases diretas
- Sem borda, sem card, sem fundo — apenas texto sobre `bg-muted`
- Classe `.diff-item` para GSAP stagger

**Colunas:**

1. **Atendimento transparente** — "Você sabe o que tem antes de aprovar. Diagnóstico detalhado, sem peça trocada sem necessidade."
2. **Diagnóstico técnico preciso** — "Identificamos a causa real do problema. Sem tentativa e erro, sem cobranças desnecessárias."
3. **Segurança na execução** — "Garantia por escrito em todo serviço. Se der problema no prazo, voltamos sem custo."
4. **Compromisso com prazo** — "Atendimento no mesmo dia para urgências comerciais. Priorizamos quem não pode parar."

### Removidos
- Placeholder de foto ("Foto da equipe ou atendimento")
- Layout 2 colunas (`lg:grid-cols-2`)
- Números em círculos coloridos (`bg-primary rounded-full`)
- H2 "O que nos diferencia."
- Label "Por que escolher a gente"

### Mantido
- GSAP fade com stagger (`.diff-item`)
- `bg-muted` na section
- Posição no Index.tsx

```text
┌───────────────┬───────────────┬───────────────┬───────────────┐
│ 01            │ 02            │ 03            │ 04            │
│ Atendimento   │ Diagnóstico   │ Segurança     │ Compromisso   │
│ transparente  │ técnico       │ na execução   │ com prazo     │
│               │ preciso       │               │               │
│ desc...       │ desc...       │ desc...       │ desc...       │
└───────────────┴───────────────┴───────────────┴───────────────┘
```

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/DifferentialsSection.tsx` | Reescrita: grid 4-col, copy alinhada ao briefing, sem placeholder, sem decoração |

