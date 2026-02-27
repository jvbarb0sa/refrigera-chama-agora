

# Motion Design de alto padrão com GSAP

## Visao geral

O projeto já usa GSAP com ScrollTrigger e tem hooks (`useGsapContext`, `useGsapFade`, `usePrefersReducedMotion`). A ideia é elevar as animações existentes conforme solicitado, sem instalar `@gsap/react` (desnecessário — os hooks atuais já fazem o papel do `useGSAP`).

---

## 1. Hero Animation — `src/components/HeroSection.tsx`

Substituir a timeline atual por valores mais expressivos conforme pedido:
- **H1, parágrafo, CTAs**: `gsap.from()` com `y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'`
- **Imagem (card)**: `gsap.from()` com `scale: 1.05, opacity: 0, duration: 1.5, ease: 'power2.out'`
- Manter stars e kicker com animação mais leve antes do bloco principal
- Continuar usando `autoAlpha` + `visibility: hidden` para evitar flash
- Checar `reduced` antes de rodar

## 2. Scroll Animation nos Cards — `src/components/ServicesSection.tsx` e `src/components/ProblemsSection.tsx`

Atualizar o `useGsapFade` usado nesses componentes para os valores solicitados:
- `y: 50, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)'`, `start: 'top 80%'`
- Na prática, basta passar os novos parâmetros no call do hook. Mas o hook atual não aceita `ease` customizado, então:

**Opção**: Adicionar prop `ease` ao hook `useGsapFade` e usá-la nos dois componentes.

### Arquivo: `src/hooks/use-gsap-fade.ts`
- Adicionar `ease?: string` à interface `UseGsapFadeOptions` (default `'power3.out'`)
- Adicionar `start?: string` (default `'top 85%'`)
- Usar nos `toVars`

### Arquivo: `src/components/ServicesSection.tsx`
```ts
const gridRef = useGsapFade<HTMLDivElement>({
  children: ".service-card",
  stagger: 0.1,
  y: 50,
  duration: 0.8,
  ease: "back.out(1.7)",
  start: "top 80%",
});
```

### Arquivo: `src/components/ProblemsSection.tsx`
```ts
const ref = useGsapFade<HTMLDivElement>({
  children: ".problem-item",
  stagger: 0.1,
  y: 50,
  duration: 0.8,
  ease: "back.out(1.7)",
  start: "top 80%",
});
```

## 3. Contador nos Números — `src/components/StatsSection.tsx`

Reescrever com animação de contagem usando `gsap.to()` com `innerText` + `snap`:
- Separar dados em `{ prefix, end, suffix }`
- Usar refs para cada número
- `gsap.to(el, { innerText: end, duration: 2, snap: { innerText: 1 }, scrollTrigger: { trigger, start: 'top 85%', once: true } })`
- Montar o texto final com prefix/suffix via `onUpdate`
- Checar `usePrefersReducedMotion`

## 4. Acessibilidade

Todas as animações já usam `usePrefersReducedMotion`. Mantemos o padrão: se `reduced === true`, os elementos ficam visíveis sem animação.

---

## Arquivos modificados

| Arquivo | Mudança |
|---|---|
| `src/hooks/use-gsap-fade.ts` | Adicionar props `ease` e `start` |
| `src/components/HeroSection.tsx` | Refazer timeline com valores solicitados |
| `src/components/ServicesSection.tsx` | Passar novos params ao hook |
| `src/components/ProblemsSection.tsx` | Passar novos params ao hook |
| `src/components/StatsSection.tsx` | Animação de contagem com innerText |

