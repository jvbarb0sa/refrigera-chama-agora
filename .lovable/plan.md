

# Prova Social e FAQ — Refinamento visual

## 1. Cards de Depoimento (testimonials-columns-1.tsx)

Aplicar o mesmo padrão tátil dos cards de serviço: trocar `rounded-2xl shadow-md hover:shadow-lg` por `rounded-[6px] ring-1 ring-slate-200/50 shadow-none hover:ring-slate-300 hover:shadow-sm transition-all duration-200`.

**Linha 42** — substituir classes do card:
- De: `rounded-2xl bg-card p-7 shadow-md transition-shadow duration-300 hover:shadow-lg`
- Para: `rounded-[6px] bg-card p-7 ring-1 ring-slate-200/50 shadow-none hover:ring-slate-300 hover:shadow-sm transition-all duration-200`

## 2. FAQ Accordion (FAQSection.tsx)

O accordion já usa `border-b border-border` via AccordionItem (padrão Radix). Está correto e limpo. Apenas garantir que não haja caixas fechadas — trocar a classe do AccordionItem para usar `border-slate-200` em vez do genérico `border-border` para consistência com o tom visual slate.

**Linha 55** — AccordionItem:
- De: `className="border-border"`
- Para: `className="border-slate-200"`

## 3. AccordionTrigger — remover hover:underline padrão

O componente base (`accordion.tsx`, linha 30) tem `hover:underline` no trigger. O FAQ já faz override com `hover:no-underline`, então está OK — nenhuma mudança necessária no componente base.

## Resumo de arquivos editados
- `src/components/ui/testimonials-columns-1.tsx` — cards com ring tátil + radius 6px
- `src/components/FAQSection.tsx` — border-slate-200 no accordion

