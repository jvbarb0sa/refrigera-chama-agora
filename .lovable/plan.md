

# Depoimentos — Fix mobile layout

## Problema
No mobile, duas colunas de depoimentos aparecem lado a lado, resultando em cards estreitos (~160px cada) com texto espremido e difícil de ler. A terceira coluna já está escondida com `hidden md:block`, mas as duas primeiras continuam visíveis em telas pequenas.

## Solução
Mostrar apenas **1 coluna** no mobile, **2 no tablet (md)** e **3 no desktop (lg)**.

## Mudanças

### `src/components/TestimonialsSection.tsx` (linhas 128-136)

**Container das colunas** (linha 128):
- De: `flex justify-center gap-6`
- Para: `flex justify-center gap-6` (sem mudança no container)

**Coluna 1** (linha 133): visível sempre — sem mudança.

**Coluna 2** (linha 134):
- Adicionar `hidden md:block` para escondê-la no mobile
- De: `className="max-w-[340px] flex-1"`
- Para: `className="hidden max-w-[340px] flex-1 md:block"`

**Coluna 3** (linha 135):
- Mudar breakpoint de `md` para `lg`
- De: `className="hidden max-w-[340px] flex-1 md:block"`
- Para: `className="hidden max-w-[340px] flex-1 lg:block"`

**Coluna 1** — aumentar `max-w` no mobile para ocupar mais espaço:
- De: `className="max-w-[340px] flex-1"`
- Para: `className="max-w-full md:max-w-[340px] flex-1"`

### Redistribuir depoimentos para coluna única ter mais conteúdo
No mobile, apenas a coluna 1 será visível (4 depoimentos). Para garantir variedade, redistribuir para 6/3/3 em vez de 4/4/4:
- `firstColumn = testimonials.slice(0, 6)` — coluna mobile terá 6 depoimentos
- `secondColumn = testimonials.slice(6, 9)`
- `thirdColumn = testimonials.slice(9, 12)`

### Reduzir `maxHeight` no mobile
Adicionar responsividade à altura: `style` fixo de 600px funciona no desktop, mas no mobile com 1 coluna é excessivo. Trocar para classe Tailwind:
- Container: `max-h-[450px] md:max-h-[600px]`

## Resultado
- **Mobile**: 1 coluna centralizada com 6 depoimentos, altura 450px
- **Tablet (md+)**: 2 colunas lado a lado
- **Desktop (lg+)**: 3 colunas lado a lado

