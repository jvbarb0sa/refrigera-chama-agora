

# Setup GSAP padrão: plugin registry centralizado + hooks utilitários

## Mudanças

### 1. Criar `src/lib/gsap.ts` — Registry centralizado
- Registrar `ScrollTrigger` uma única vez
- Exportar `gsap` e `ScrollTrigger` daqui (todos os imports passam a usar este arquivo)

### 2. Criar `src/hooks/usePrefersReducedMotion.ts`
- Hook reativo que escuta `prefers-reduced-motion` via `matchMedia`
- Retorna `boolean` atualizado em tempo real (listener no `change`)

### 3. Criar `src/hooks/useGsapContext.ts`
- Wrapper para `gsap.context` com `useLayoutEffect`
- Recebe `scopeRef`, callback e deps
- Cleanup automático via `ctx.revert()`

### 4. Atualizar `src/hooks/use-gsap-fade.ts`
- Trocar imports de `gsap` e `ScrollTrigger` para `@/lib/gsap`
- Usar `usePrefersReducedMotion()` (reativo) em vez de check estático `window.matchMedia`
- Trocar `useEffect` por `useLayoutEffect` (prevenir flash)

### 5. Atualizar `src/components/HeroSection.tsx`
- Trocar `import gsap from "gsap"` por `import { gsap } from "@/lib/gsap"`
- Usar `usePrefersReducedMotion()` em vez de check inline
- Trocar `useEffect` por `useLayoutEffect`

### Arquivos
1. `src/lib/gsap.ts` (novo)
2. `src/hooks/usePrefersReducedMotion.ts` (novo)
3. `src/hooks/useGsapContext.ts` (novo)
4. `src/hooks/use-gsap-fade.ts` (atualizar imports + useLayoutEffect + hook reativo)
5. `src/components/HeroSection.tsx` (atualizar imports + useLayoutEffect + hook reativo)

