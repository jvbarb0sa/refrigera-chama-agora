

# Animação de contagem nos números da StatsSection com GSAP

## Arquivo: `src/components/StatsSection.tsx`

### Mudanças

1. Importar `useRef`, `useLayoutEffect` do React, `gsap` e `ScrollTrigger` de `@/lib/gsap`, e `usePrefersReducedMotion`.

2. Separar cada stat em `{ prefix, end, suffix }` para poder animar o número:
   - `"+400"` → prefix `"+"`, end `400`, suffix `""`
   - `"+8"` → prefix `"+"`, end `8`, suffix `""`
   - `"100%"` → prefix `""`, end `100`, suffix `"%"`
   - `"98%"` → prefix `""`, end `98`, suffix `"%"`

3. Criar refs para cada elemento de número. Usar `ScrollTrigger` com `once: true` para disparar um `gsap.to` com um objeto proxy `{ val: 0 }` até `{ val: end }`, atualizando o `textContent` do elemento a cada frame com `onUpdate`. Duração ~1.5s, ease `power2.out`.

4. Manter o fade-in existente via `useGsapFade` — a contagem roda em paralelo quando a seção entra na viewport.

