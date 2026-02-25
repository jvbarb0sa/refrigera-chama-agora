

# Polimento de UI/UX — Plano de Implementação

## Diagnóstico do estado atual

O site já está funcional e bem estruturado (hero escuro, bento nos serviços, triagem, processo, provas, comercial, FAQ, CTA final). Os problemas são de **refinamento**, não de estrutura:

1. **Navbar/Header** — Já funciona bem. Menu mobile já tem full-screen com contatos e WhatsApp. Sem mudanças grandes necessárias.
2. **Botões** — CTAs já variam por contexto ("Solicitar orçamento comercial", "Pedir diagnóstico", "Chamar técnico", etc.). Bom. Precisa apenas de ajuste de estados hover/active mais visíveis.
3. **Cards** — Bento já existe (7 col comercial + 5 col residencial). Mas os 4 cards residenciais são visualmente idênticos. Precisa de variação: 2 médios + 2 compactos.
4. **Ritmo entre seções** — Alternância de fundos existe (branco → muted → branco → muted → primary → etc.) mas sem variação de densidade. Todas as seções têm a mesma estrutura (label + h2 + grid).
5. **Motion** — `animate-fade-up` existe mas não está sendo usada em nenhuma seção. Precisa de IntersectionObserver para ativar fade-in ao scroll.
6. **Testimonials** — 3 cards iguais (cara de template). Precisa de variação visual.
7. **Galeria antes/depois** — Placeholders genéricos sem identidade.

---

## Mudanças planejadas

### 1. Cards de serviço residencial — variação de formato
**Arquivo:** `src/components/ServicesSection.tsx`

Atualmente 4 cards idênticos em `lg:grid-cols-1`. Mudar para:
- **2 cards médios** (Geladeiras + Lavadoras) — lado a lado em `sm:grid-cols-2`, com padding maior e CTA botão
- **2 cards compactos** (Microondas + Ar Condicionado) — formato de lista horizontal, sem card border, apenas border-bottom e link inline

Isso quebra a repetição mecânica e cria hierarquia dentro do bloco secundário.

### 2. Ritmo e densidade entre seções
**Arquivos:** Múltiplos componentes

Alternar a "densidade visual" entre seções:
- **Serviços** → visual (bento, cards, chips) ✓ já está
- **Triagem** → interativa (chips + painel expandido) ✓ já está
- **Processo** → stepper minimalista, mais compacto (reduzir padding vertical)
- **Provas** → visual + texto (mesclar testimonials com galeria, não separar)
- **Comercial** → faixa de impacto (full-width dark) ✓ já está
- **Área atendida** → faixa compacta ✓ já está
- **FAQ** → textual, centrado ✓ já está
- **CTA final** → impacto ✓ já está

Ajuste concreto: reduzir padding do ProcessSection e ServiceAreaSection (que estão com muito espaço). Aumentar padding do CommerceSection para dar peso.

### 3. Testimonials — quebrar uniformidade
**Arquivo:** `src/components/TestimonialsSection.tsx`

Em vez de 3 cards iguais em grid uniforme:
- Card 1 (comercial, Marcos): maior, com destaque visual (border-left azul, padding maior)
- Card 2 e 3 (residenciais): menores, layout mais compacto, lado a lado
- Remover galeria "Antes e depois" com placeholders vazios (não agrega sem fotos reais)

### 4. Motion com IntersectionObserver
**Arquivo:** Criar `src/hooks/use-fade-in.ts` + aplicar nas seções

Hook simples que adiciona `.animate-fade-up` quando o elemento entra no viewport. Aplicar apenas em:
- Títulos de seção (h2)
- Blocos de cards (como grupo, não individualmente)
- CTA final

Não aplicar em: navbar, hero (já visível), footer. Sem bounce, sem delay escalonado excessivo.

### 5. Ajustes de tipografia e contraste
**Arquivos:** Componentes diversos

- Hero H1: verificar que está com `font-bold` e tamanho correto (52px desktop, 36px mobile) ✓ já está
- Labels de seção ("ESPECIALIDADES", "COMO FUNCIONA"): garantir que estão com `tracking-[0.2em]` e cor `text-primary` ✓ já estão
- Muted foreground: verificar contraste mínimo — o `215 8% 46%` atual (~#6B7280) está ok para WCAG AA

### 6. Botões — estados mais visíveis
**Arquivo:** `src/components/ui/button.tsx`

- Adicionar `active:scale-[0.98]` no base do cva para feedback tátil
- Variant `strong`: hover com `brightness` mais escuro em vez de `bg-foreground` (que faz o botão virar preto, perdendo identidade)
- Variant `outline` no hero: hover mais visível (não apenas `bg-primary-foreground/5`)

### 7. Navbar — ativo state
**Arquivo:** `src/components/Navbar.tsx`

Não há indicação visual de qual seção está ativa no scroll. Adicionar um hook simples de IntersectionObserver para destacar o link ativo na navbar (underline ou cor mais forte).

---

## Resumo de arquivos a editar

| Arquivo | O que muda |
|---|---|
| `src/hooks/use-fade-in.ts` | **Novo** — hook de fade-in com IntersectionObserver |
| `src/components/ui/button.tsx` | Active state, hover do strong |
| `src/components/ServicesSection.tsx` | Cards residenciais com 2 formatos (médio + compacto) |
| `src/components/ProcessSection.tsx` | Padding reduzido, layout mais compacto |
| `src/components/TestimonialsSection.tsx` | Layout assimétrico, remover galeria vazia |
| `src/components/CommerceSection.tsx` | Padding maior para peso visual |
| `src/pages/Index.tsx` | Wrapper de fade-in nas seções |

## O que NÃO muda
- Navbar (já funciona bem, menu mobile já está completo)
- Hero (já está correto)
- Triagem (já está interativa e diferenciada)
- FAQ (já está limpo e centrado)
- CTA Final + Footer (já está funcional)
- WhatsApp sticky (já está correto)
- Paleta de cores e tipografia (já foram definidas)

