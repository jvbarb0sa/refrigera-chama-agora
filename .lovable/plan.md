

# Reestruturar wireframe para espelhar a referência RB Refrigeração

## Análise comparativa

A referência RB tem uma estrutura editorial com blocos bem definidos e hierarquia forte. O site atual do Taboado tem os conteúdos certos mas a organização e o wireframe são diferentes. Abaixo, as mudanças necessárias para alinhar.

```text
RB REFERÊNCIA                          TABOADO ATUAL
─────────────────────────────────────────────────────────
1. Header (logo + nav + CTA)           ✓ Similar
2. Hero (foto direita + social proof)  ✗ Sem foto, sem proof
3. Stats animados (4 contadores)       ✗ Não existe
4. Missão + marquee de serviços        ✗ Não existe
5. Diferenciais (lista + foto)         ✗ Não existe
6. Processo (4 steps detalhados)       ~ Existe mas minimal
7. Serviços (grid 3x2 com badges)     ✗ Bento assimétrico
8. Testimonials (carousel scroll)      ~ Cards estáticos
9. FAQ (accordion + stats sidebar)     ~ Accordion simples
10. CTA Final (forte + stats)          ~ Existe básico
11. Footer                             ✓ Similar
```

## Plano de implementação

### 1. `HeroSection.tsx` — Hero com imagem e social proof
- Layout 2 colunas: texto esquerda (60%), imagem placeholder direita (40%)
- Manter badge "TRÊS LAGOAS · MS", H1, sub, 2 CTAs
- Headline: destaque em azul para "refrigeração comercial e manutenção preventiva"
- Adicionar strip de social proof no bottom do hero: estrelas Google + avatar stack + "+X atendimentos"
- Imagem: div com bg-gray placeholder (aspect ratio 4:3) com rounded corners e overlay sutil

### 2. Novo `StatsSection.tsx` — Contadores animados
- Faixa logo abaixo do hero, fundo branco, border top/bottom
- 4 colunas com números grandes em azul: "Atendimentos realizados", "Anos de experiência", "Cobertura local", "Taxa de recomendação"
- Números estáticos (sem inventar dados falsos — usar placeholders editáveis)
- Separadores verticais entre colunas no desktop

### 3. Novo `MissionSection.tsx` — Missão + marquee
- Seção fundo branco
- Label "NOSSA MISSÃO" uppercase
- H2: "Equipamentos param. Negócios não podem." (adaptado para Taboado)
- Parágrafo curto sobre a razão de existir
- 3 pilares lado a lado: "Diagnóstico preciso", "Atendimento rápido", "Garantia formal" — cada com título bold + 1 linha de descrição
- Marquee horizontal de serviços (faixa scrollante com tags: "Refrigeração Comercial", "Câmaras Frias", "Geladeiras", etc.)

### 4. Novo `DifferentialsSection.tsx` — Diferenciais com imagem
- Layout 2 colunas: lista de 4 diferenciais à esquerda, imagem placeholder à direita
- Cada diferencial: título semibold + parágrafo curto
- Diferenciais: "Diagnóstico Transparente", "Garantia Técnica Real", "Equipe Qualificada", "Resposta Rápida"
- Imagem: div placeholder com bg muted, rounded

### 5. `ProcessSection.tsx` — Processo detalhado vertical
- Mudar de stepper horizontal minimalista para layout vertical com mais conteúdo (como a RB)
- Cada step: número grande azul + label pequeno + título H3 + parágrafo descritivo
- 4 steps: Diagnóstico → Plano & Orçamento → Execução → Validação & Garantia
- Linha vertical conectora entre steps no desktop

### 6. `ServicesSection.tsx` — Grid uniforme 3x2 com badges
- Trocar bento assimétrico por grid 3 colunas (2 linhas)
- Cada card: badge no topo (ex: "Comercial", "Residencial", "Preventiva"), título H3, 1 linha descrição, link CTA específico
- Cards com border, hover border-primary, padding uniforme
- 6 serviços: Refrigeração Comercial, Refrigeração Residencial, Câmaras Frias, Geladeiras e Freezers, Lavadoras, Ar Condicionado
- CTAs variados por card: "Solicitar visita técnica", "Agendar reparo", "Pedir diagnóstico", etc.

### 7. `TestimonialsSection.tsx` — Carousel horizontal
- Trocar cards estáticos por carousel horizontal (usar embla-carousel-react, já instalado)
- 6 testimonials com auto-scroll
- Cada card: aspas, texto, iniciais em circle + nome + cargo/contexto
- Controles prev/next discretos

### 8. `FAQSection.tsx` — Accordion + sidebar de stats
- Layout 2 colunas no desktop: accordion à esquerda (70%), sidebar de stats à direita (30%)
- Sidebar: 4 mini-stats empilhados (atendimentos, recomendação, tempo resposta, anos atuando) + CTA "Falar com especialista"
- Mobile: stats acima do accordion

### 9. `FinalCTASection.tsx` — CTA mais impactante
- Headline mais forte: "Equipamento parado custa dinheiro. Nós resolvemos."
- Parágrafo de autoridade
- 2 CTAs (WhatsApp + Orçamento)
- Strip de mini-stats abaixo dos botões
- Footer mantém igual

### 10. `TriageSection.tsx` — Manter (diferencial)
- A triagem rápida não existe na RB, mas é um diferencial real. Manter na posição entre Diferenciais e Processo.

### 11. `CommerceSection.tsx` — Mover para depois dos Serviços
- Manter conteúdo, posicionar após a grid de serviços como uma faixa de impacto

### 12. `Index.tsx` — Nova ordem de seções

```text
1. Navbar
2. Hero (com foto + social proof)
3. Stats (contadores)
4. Mission (missão + marquee)
5. Differentials (lista + foto)
6. Triage (diagnóstico rápido)
7. Process (4 steps detalhados)
8. Services (grid 3x2)
9. Commerce (faixa azul)
10. Testimonials (carousel)
11. FAQ (accordion + stats)
12. Final CTA + Footer
```

## Arquivos a criar/editar

| Arquivo | Ação |
|---|---|
| `src/components/StatsSection.tsx` | **Novo** |
| `src/components/MissionSection.tsx` | **Novo** |
| `src/components/DifferentialsSection.tsx` | **Novo** |
| `src/components/HeroSection.tsx` | Refatorar (2 cols + social proof) |
| `src/components/ProcessSection.tsx` | Refatorar (vertical detalhado) |
| `src/components/ServicesSection.tsx` | Refatorar (grid 3x2 uniforme) |
| `src/components/TestimonialsSection.tsx` | Refatorar (carousel embla) |
| `src/components/FAQSection.tsx` | Refatorar (accordion + stats sidebar) |
| `src/components/FinalCTASection.tsx` | Refatorar (mais impactante) |
| `src/pages/Index.tsx` | Nova ordem de seções |

## O que NÃO muda
- Paleta de cores, tipografia, tokens CSS
- Navbar (já funciona bem)
- WhatsApp sticky
- Constants (telefones, links)
- Triagem rápida (diferencial, mantém)

