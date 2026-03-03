

## Padronizar eyebrow da seção Parceiros

O eyebrow "ALIANÇA ESTRATÉGICA" na `PartnersSection` usa um estilo diferente (`font-mono text-sm tracking-widest` sem fundo) enquanto as demais seções usam um badge/pill com fundo colorido.

### Padrão das outras seções (light mode)
- `MissionSection`: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50` + `text-xs font-bold text-blue-700 tracking-wider uppercase`
- `ProblemsSection`: `inline-flex items-center gap-2 bg-blue-100 text-blue-800 uppercase tracking-wider text-xs font-bold px-3 py-1 rounded-full`

### Alteração em `src/components/PartnersSection.tsx`

Substituir o eyebrow atual (linhas 12-14) pelo padrão badge/pill:

```tsx
// De:
<div className="flex items-center gap-2 text-sky-600 font-mono text-sm tracking-widest uppercase mb-4">
  <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
  Aliança Estratégica
</div>

// Para:
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border-none mb-4">
  <ShieldCheck className="h-4 w-4 text-blue-700" strokeWidth={1.8} />
  <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">Aliança Estratégica</span>
</div>
```

Usa `font-semibold` (não bold) respeitando a regra de peso máximo 600, e mantém o ícone `ShieldCheck` dentro do badge.

