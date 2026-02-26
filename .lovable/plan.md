

# Fix: Cards invisíveis na seção Diferenciais

## Problema raiz
O hook `useGsapFade` usa `gsap.from(targets, { opacity: 0, ... })` que **imediatamente** define `opacity: 0` nos cards. O ScrollTrigger deveria animar de volta para `opacity: 1`, mas há um problema de timing: quando o usuário navega via âncora (#diferenciais), a seção já está no viewport quando o ScrollTrigger inicializa, e a animação `once: true` pode não disparar corretamente — os cards ficam permanentemente invisíveis.

## Solução
Alterar `gsap.from` para `gsap.fromTo` no hook `useGsapFade`, garantindo que o estado final (`opacity: 1, y: 0`) seja explícito. Além disso, adicionar `immediateRender: false` para evitar que os elementos fiquem invisíveis antes do ScrollTrigger estar pronto, e usar `toggleActions: "play none none none"` para garantir que a animação rode mesmo quando a seção já está visível.

## Arquivo alterado

### `src/hooks/use-gsap-fade.ts`
Trocar `gsap.from(targets, { y, opacity: 0, ... })` por:
```ts
gsap.fromTo(
  targets,
  { y, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration,
    stagger: children ? stagger : 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  }
);
```

Isso garante que:
1. O estado inicial (`opacity: 0, y: 24`) e final (`opacity: 1, y: 0`) são explícitos
2. `toggleActions` substitui `once: true` de forma mais confiável
3. A animação funciona tanto com scroll normal quanto com navegação por âncora

## Impacto
- Corrige Diferenciais e qualquer outra seção que use `useGsapFade`
- Nenhum outro arquivo precisa ser alterado

