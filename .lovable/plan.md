

# Refinamento tipográfico — tracking e leading

O projeto já usa Inter e aplica `tracking-tight` na maioria dos títulos. Faltam pequenos ajustes de consistência.

## Alterações

1. **DifferentialsSection.tsx** (linha 32) — h2: adicionar `tracking-tight` (atualmente só tem `leading-tight`).

2. **FinalCTASection.tsx** (linha 27) — parágrafo de apoio: adicionar `leading-relaxed` (atualmente sem line-height explícito).

3. **MissionSection.tsx** (linha 31) — h2: adicionar `leading-tight` (atualmente só tem `tracking-tight`).

4. **ServiceAreaSection.tsx** (linha 26) — h2: adicionar `leading-tight` (atualmente só tem `tracking-tight`).

5. **tailwind.config.ts** — Ajustar a fonte para **Plus Jakarta Sans** como opção principal (mais geométrica e moderna que Inter) em `fontFamily.heading` e `fontFamily.body`, adicionando o Google Font no `index.html`.

> **Nota:** Todos os demais títulos e parágrafos já estão corretos.

