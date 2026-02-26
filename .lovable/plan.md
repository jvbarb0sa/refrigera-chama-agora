

# Novo Bloco — Problemas que Resolve

## Posição

Inserir entre `ServicesSection` e `CommerceSection` no `Index.tsx`. Faz sentido narrativo: depois de mostrar as especialidades, mostrar os problemas concretos que resolve — e converter.

## Novo componente: `ProblemsSection.tsx`

### Header
- Label: `PROBLEMAS QUE RESOLVEMOS`
- H2: `Seu equipamento parou?`
- Sem subtítulo longo — o título já é direto e gera identificação

### Lista de problemas
Lista vertical simples com check ou bullet discreto (ícone `Check` do Lucide, `text-primary`, 14px):

- Geladeira não gela
- Freezer com falha
- Câmara fria com oscilação
- Ar inverter com erro na placa
- Máquina de lavar com defeito

Cada item: `text-foreground`, `text-base`, sem card, sem fundo — apenas lista limpa sobre `bg-background`.

### CTA
Logo abaixo da lista, botão `variant="strong"` com ícone `MessageCircle`:
- Texto: `Agendar avaliação técnica`
- Link: WhatsApp com mensagem pré-preenchida

### Visual
- `bg-background` (fundo padrão, sem cor especial)
- Layout single-column, `max-w-xl`
- GSAP fade com stagger nos itens da lista (`.problem-item`)
- Sem borda, sem card, sem decoração

```text
PROBLEMAS QUE RESOLVEMOS

Seu equipamento parou?

✓ Geladeira não gela
✓ Freezer com falha
✓ Câmara fria com oscilação
✓ Ar inverter com erro na placa
✓ Máquina de lavar com defeito

[ Agendar avaliação técnica ]
```

## Arquivos editados

| Arquivo | O que muda |
|---|---|
| `src/components/ProblemsSection.tsx` | Novo componente |
| `src/pages/Index.tsx` | Import + inserir `<ProblemsSection />` entre `ServicesSection` e `CommerceSection` |

