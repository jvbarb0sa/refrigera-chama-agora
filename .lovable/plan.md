

# H1 "Dor do cliente" + SEO local

## Mudança

**Arquivo: `src/components/HeroSection.tsx`**

### H1
Substituir o H1 atual por:

**"Seu equipamento parou? A gente diagnostica e resolve com transparência."**

A palavra "Três Lagoas" precisa aparecer para SEO local. Como o H1 escolhido não a contém, ela será inserida na primeira linha do parágrafo de apoio (que já contém o badge "Três Lagoas · MS" acima do H1, mas o parágrafo reforça para crawlers).

### Parágrafo de apoio (sub)
Trocar para:

**"Refrigeração comercial, industrial e residencial em Três Lagoas e região. Diagnóstico técnico, orçamento claro e garantia de serviço."**

Isso garante "Três Lagoas" no primeiro `<p>` logo abaixo do `<h1>`, cobrindo a regra de SEO local.

### Destaque visual
Aplicar `text-primary` em "diagnostica e resolve" para manter o padrão de destaque que já existe no H1 atual.

### Correção de bug
O H1 atual tem um ponto duplicado (`.</span>.`) que será corrigido.

## Arquivos

| Arquivo | Mudança |
|---|---|
| `src/components/HeroSection.tsx` | Novo H1, novo parágrafo de apoio, correção do ponto duplicado |

