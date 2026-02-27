

# Padronizar animações GSAP com qualidade profissional

## Problema atual
As animações estão inconsistentes: Hero usa `gsap.from()` (pode causar FOUC), `useGsapFade` já usa `fromTo` corretamente mas com defaults genéricos. Seções como DifferentialsSection, MissionSection, FAQSection, ServiceAreaSection e CommerceSection usam Framer Motion com `y: 20-30` e `spring` — inconsistente com o padrão GSAP. StatsSection não tem animação nenhuma.

## Regras aplicadas
- **Duração**: fade/slide 0.5–0.8s, hover 0.15–0.25s, stagger 0.06–0.12s, scroll reveal 0.6–1.0s
- **Eases**: `power2.out` / `power3.out` padrão, `expo.out` só na Hero
- **Distâncias**: Y 12–24px, scale 0.98–1.0
- **Acessibilidade**: `prefers-reduced-motion` respeitado em TODOS os pontos

## Mudanças

### 1. `src/hooks/use-gsap-fade.ts` — Ajustar defaults
- `duration: 0.7` → `0.8` (mais premium)
- `stagger: 0.1` → `0.08` (dentro da faixa ideal)
- `ease: "power2.out"` → `"power3.out"` (mais suave/caro)
- Adicionar suporte a `blur` opcional (default 0, quando passado usa `filter: blur(Xpx)` no from)

### 2. `src/components/HeroSection.tsx` — Polir timeline
- Trocar `gsap.from()` por `gsap.fromTo()` (prevenir FOUC)
- Ease do timeline: `"expo.out"` (hero premium)
- Durações: badge 0.6s, h1 0.7s, sub 0.6s, ctas 0.6s, proof 0.5s
- Y values: badge 16, h1 20, sub 14, ctas 14, proof 12
- Adicionar blur sutil (6px) no h1 e sub

### 3. `src/components/DifferentialsSection.tsx` — Migrar de Framer para GSAP
- Substituir `containerVariants`/`cardVariants` do Framer Motion por `useGsapFade`
- Cards: `stagger: 0.1`, `y: 16`, `duration: 0.8`, ease `power3.out`
- Manter hover CSS (sem Framer `whileHover`) — ajustar para `hover:-translate-y-1 transition-transform duration-200`
- Remover import de `motion`

### 4. `src/components/MissionSection.tsx` — Migrar de Framer para GSAP
- Left column: `useGsapFade({ y: 20, duration: 0.8 })`
- Right column (vídeo): `useGsapFade({ y: 0, duration: 0.6 })` — fade only, sem translate
- Remover `motion.div` e imports de Framer

### 5. `src/components/FAQSection.tsx` — Migrar de Framer para GSAP
- Container: `useGsapFade({ y: 16, duration: 0.8 })`
- Remover `motion.div` e import

### 6. `src/components/ServiceAreaSection.tsx` — Migrar de Framer para GSAP
- Left column: `useGsapFade({ y: 16, duration: 0.8 })`
- Right column (mapa): `useGsapFade({ y: 0, duration: 0.6 })` — fade only
- Remover Framer imports

### 7. `src/components/StatsSection.tsx` — Adicionar scroll reveal
- Usar `useGsapFade({ children: ".stat-item", stagger: 0.08, y: 16 })`
- Adicionar classe `stat-item` em cada stat div

### 8. `src/components/CommerceSection.tsx` — Adicionar scroll reveal
- Usar `useGsapFade({ y: 20, duration: 0.8 })`

### 9. Padronizar chamadas existentes
- `ProcessSection`: stagger `0.15` → `0.1` (dentro da faixa)
- `ProblemsSection`: já ok (`stagger: 0.08`)
- `ServicesSection`: já ok (`stagger: 0.08`)

### Arquivos modificados
1. `src/hooks/use-gsap-fade.ts`
2. `src/components/HeroSection.tsx`
3. `src/components/DifferentialsSection.tsx`
4. `src/components/MissionSection.tsx`
5. `src/components/FAQSection.tsx`
6. `src/components/ServiceAreaSection.tsx`
7. `src/components/StatsSection.tsx`
8. `src/components/CommerceSection.tsx`
9. `src/components/ProcessSection.tsx`

