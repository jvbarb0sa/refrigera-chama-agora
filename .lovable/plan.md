

# TestimonialsSection — Prova social completa

## Diagnóstico

A seção atual tem depoimentos no carousel, mas falta peso de prova social. Problemas:
- Sem indicador de avaliação (estrelas, nota do Google)
- Sem selo de confiança ("Atendimento local", região)
- Sem resumo numérico visível (quantidade de avaliações, nota média)
- Label "Quem já chamou" e H2 "Trabalho limpo, orçamento claro, garantia." — genéricos
- Cards funcionais mas sem diferenciação visual de credibilidade

## Mudança

Adicionar bloco de credibilidade acima do carousel e selo de atendimento local. Manter o carousel existente intacto.

### Header atualizado
- Label: `PROVA SOCIAL`
- H2: `Quem confia, recomenda.`

### Bloco de credibilidade (acima do carousel, abaixo do header)

Faixa horizontal com 3 indicadores lado a lado (`flex gap-8`):

1. **Nota Google** — `★ 4.9` em `text-2xl font-bold` + "no Google" em `text-muted-foreground text-sm`
2. **Avaliações** — `50+` em `text-2xl font-bold` + "avaliações reais" em `text-muted-foreground text-sm`
3. **Selo** — ícone `MapPin` + "Atendimento local — Três Lagoas e região" em `text-sm font-medium`

Sem card, sem borda — apenas texto alinhado horizontalmente. Em mobile, empilha vertical (`flex-col`).

### Carousel
Mantido como está — mesmos depoimentos, mesma lógica Embla, mesmo autoplay.

### Resultado visual

```text
PROVA SOCIAL

Quem confia, recomenda.

★ 4.9          50+                  📍 Atendimento local
no Google      avaliações reais     Três Lagoas e região

┌─────────┐ ┌─────────┐ ┌─────────┐
│ Card 1  │ │ Card 2  │ │ Card 3  │  ← carousel existente
└─────────┘ └─────────┘ └─────────┘
```

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/TestimonialsSection.tsx` | Header atualizado + bloco de credibilidade com nota Google, contagem de avaliações e selo de atendimento local |

