

## Criar seção "Parceiros" (Aliança Estratégica)

### Arquivo novo: `src/components/PartnersSection.tsx`

Componente seguindo exatamente as especificações fornecidas:
- Container com fundo `bg-slate-50`, grid técnico sutil em overlay, e layout 2 colunas (`lg:grid-cols-2`)
- Coluna esquerda: eyebrow com `ShieldCheck`, H2 tracking-tight, parágrafo descritivo
- Coluna direita: card premium branco com `rounded-3xl`, `shadow-xl`, hover effects (elevação, borda sky, shadow-2xl)
  - Selo `BadgeCheck` verde em `bg-emerald-50`
  - Nome "RB Refrigeração", localização com `MapPin`
  - Botão full-width com `ArrowUpRight`, link externo para `https://rbrefrigeracaodf.com.br`
- Atributo `data-reveal` + `style={{ visibility: "hidden" }}` para animação GSAP consistente com as demais seções
- Font-weight máximo: semibold (600) conforme regra de tipografia do projeto

### Arquivo editado: `src/pages/Index.tsx`

- Importar `PartnersSection`
- Inserir entre `ServiceAreaSection` e `FAQSection` dentro do `RevealsWrapper`

