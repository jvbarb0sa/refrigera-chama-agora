

# Upgrade Hero para data-attributes + adicionar RevealsWrapper global

## Mudanças

### 1. `src/components/HeroSection.tsx` — Migrar para `data-hero` + `useGsapContext`
- Trocar classes `.hero-badge`, `.hero-h1`, `.hero-sub`, `.hero-ctas`, `.hero-proof` por `data-hero="kicker"`, `data-hero="h1"`, `data-hero="sub"`, `data-hero="ctas"`, `data-hero="proof"`
- Usar `useGsapContext(heroRef, ...)` em vez de `useLayoutEffect` manual
- Usar `autoAlpha` em vez de `opacity` (visibility automático — previne FOUC melhor)
- Adicionar `visibility: hidden` inline nos elementos animados (para autoAlpha funcionar)
- Timeline ajustada conforme o padrão do usuário: blur no kicker (6px) e h1 (10px), scale 0.98 nos CTAs
- Remover import de `useLayoutEffect`

### 2. Criar `src/components/RevealsWrapper.tsx`
- Componente wrapper que aplica scroll reveal em qualquer `[data-reveal]` dentro dele
- Usa `useGsapContext` + `usePrefersReducedMotion`
- `gsap.fromTo` com `autoAlpha`, `y: 18`, `duration: 0.8`, `ease: power3.out`
- ScrollTrigger: `start: "top 85%"`, `toggleActions: "play none none reverse"`

### 3. `src/pages/Index.tsx` — Envolver `<main>` com `RevealsWrapper`
- Importar `RevealsWrapper`
- Envolver o conteúdo do `<main>` com `<RevealsWrapper>`

### 4. Seções que já usam `useGsapFade` — Adicionar `data-reveal` e remover hook individual
- `StatsSection`, `ServicesSection`, `ProblemsSection`, `DifferentialsSection`, `MissionSection`, `FAQSection`, `ServiceAreaSection`, `CommerceSection`, `ProcessSection`, `FinalCTASection`
- Cada section ganha `data-reveal` no elemento raiz
- Seções com stagger de filhos internos **mantêm** `useGsapFade` para o stagger dos cards/items (o `data-reveal` no wrapper cuida do fade da seção inteira)
- Seções sem stagger interno (MissionSection, FAQSection, CommerceSection) removem `useGsapFade` e usam apenas `data-reveal`

### Arquivos
1. `src/components/HeroSection.tsx` — refactor data-hero + useGsapContext
2. `src/components/RevealsWrapper.tsx` — novo
3. `src/pages/Index.tsx` — envolver com RevealsWrapper
4. `src/components/MissionSection.tsx` — remover useGsapFade, adicionar data-reveal
5. `src/components/FAQSection.tsx` — remover useGsapFade, adicionar data-reveal
6. `src/components/CommerceSection.tsx` — remover useGsapFade, adicionar data-reveal

