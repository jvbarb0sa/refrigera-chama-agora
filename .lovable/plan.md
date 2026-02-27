

# Microinterações premium em botões + checklist de performance

## Mudanças

### 1. `src/components/HeroSection.tsx` — Remover Framer Motion dos botões, usar CSS puro
- Remover `motion.span` e `motion.a` dos CTAs
- Substituir `whileHover`/`whileTap` por classes Tailwind: `hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-150`
- Remover import de `framer-motion` e `MotionDiv`

### 2. `src/components/FinalCTASection.tsx` — Remover Framer Motion dos links CTA
- Trocar `motion.a` por `<a>` com classes Tailwind: `hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150`
- Remover import de `framer-motion`

### 3. `src/components/ui/button.tsx` — Adicionar `will-change-transform`
- Adicionar `will-change-transform` na base do `buttonVariants` para otimizar compositing em mobile

### 4. `src/hooks/use-gsap-fade.ts` — Performance: adicionar `will-change` e `once: true`
- Setar `will-change: "transform, opacity"` no `fromVars`
- Adicionar `once: true` no scrollTrigger (elementos não precisam re-animar ao voltar)
- Limpar `will-change` no `onComplete`

### 5. `src/components/RevealsWrapper.tsx` — Performance: `once: true` + `will-change`
- Adicionar `once: true` no scrollTrigger
- Setar `will-change: "transform, opacity"` antes da animação, limpar no `onComplete`

### Arquivos
1. `src/components/HeroSection.tsx`
2. `src/components/FinalCTASection.tsx`
3. `src/components/ui/button.tsx`
4. `src/hooks/use-gsap-fade.ts`
5. `src/components/RevealsWrapper.tsx`

