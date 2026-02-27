

# Hero CTA — Ghost Button secundário

## Alteração

**HeroSection.tsx (linhas 144-148)** — Botão "Solicitar visita técnica": trocar `variant="secondary"` por `variant="ghost"` e aplicar classes de ghost button institucional:

```
bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-none
```

Classes finais: `"text-base px-8 h-14 bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-none"`

Isso remove o fundo cinza e cria hierarquia visual clara — o olho vai direto ao botão laranja.

