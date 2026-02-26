

# Testimonials Section — Evolução visual premium

## Problemas atuais
- Cards genéricos, sem hierarquia visual forte
- Bloco de credibilidade centralizado parece "solto"
- Gradientes laterais com apenas 80px — pouco impacto
- Falta respiro entre elementos
- Avatar apenas com iniciais — impessoal
- Seção visualmente plana, sem camadas de profundidade

## Mudanças propostas

### 1. Cards — redesign completo
- Largura maior: `min-w-[340px]` para mais presença
- Aspas decorativas (`"`) em texto primary/10 grande (text-4xl) no topo do card como elemento visual
- Remover borda visível → usar apenas `shadow-md` com `hover:shadow-lg transition-shadow`
- Background branco puro `bg-white` (destaca contra bg-muted)
- Padding `p-7` mais generoso
- Texto do depoimento com `text-[15px]` (entre sm e base) para melhor leitura
- Avatar: gradiente sutil no círculo (`bg-gradient-to-br from-primary to-primary/70`)
- Estrelas com `gap-0.5` mais juntas, dourado mais rico

### 2. Gradientes laterais — mais largos e suaves
- De `w-20` (80px) para `w-32` (128px) — fade mais cinematográfico
- Garantir que `from-muted` corresponde ao fundo da seção

### 3. Bloco de credibilidade — integrar melhor
- Remover borda e shadow → fundo transparente, dados inline
- Transformar em uma linha horizontal simples com separadores sutis
- Ícone do Google (estrela) maior e mais proeminente
- Tipografia dos números: `text-3xl font-bold` para impacto
- Subtexto: `text-xs uppercase tracking-wider text-muted-foreground`

### 4. Espaçamento e ritmo
- Gap entre as duas faixas de marquee: `space-y-5` (de 4 para 5)
- Margem entre header e marquee: `mt-12` (de 10)
- Section padding: `py-20 md:py-28` para mais respiro

### 5. Subtítulo da seção
- Adicionar parágrafo descritivo abaixo do H2: "Veja o que nossos clientes dizem sobre a experiência com nosso atendimento."
- `text-muted-foreground max-w-lg mx-auto mt-4`

### 6. Velocidade do marquee
- Row 1: 40s (um pouco mais lento, elegante)
- Row 2: 45s (velocidade diferente cria ritmo visual interessante)
- CSS: criar `animate-marquee-slow` e `animate-marquee-slow-reverse`

## Arquivos alterados
1. `src/components/TestimonialsSection.tsx` — redesign dos cards, bloco de credibilidade, layout
2. `src/index.css` — adicionar variantes de velocidade do marquee, ajustar gradientes

