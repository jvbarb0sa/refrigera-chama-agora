

# Testimonials Section — Marquee duplo nível Apple

## Conceito

Substituir o carrossel Embla por duas faixas de marquee infinito (CSS animation), uma movendo para a esquerda e outra para a direita. Gradientes laterais criam efeito de fade nas bordas. Sem controles manuais — movimento contínuo e fluido.

## Mudanças em `src/components/TestimonialsSection.tsx`

### Dados — expandir para 12 depoimentos
Adicionar 6 novos depoimentos realistas (mix residencial/comercial), totalizando 12. Dividir em dois arrays de 6 para as duas faixas.

Novos depoimentos:
- **Fernanda L.** — Restaurante — Ar-condicionado: "Ar do salão parou no meio do almoço. Vieram em menos de 2 horas."
- **Sérgio R.** — Açougue — Câmara fria: "Fazem manutenção preventiva mensal. Zero surpresas desde então."
- **Luciana T.** — Residencial — Ar-condicionado inverter: "Instalação limpa, sem bagunça. Funcionou perfeito de primeira."
- **Eduardo K.** — Supermercado — Balcão refrigerado: "Consertaram o balcão sem precisar desligar os outros equipamentos."
- **Patrícia N.** — Residencial — Geladeira: "Geladeira de 15 anos, achei que ia ter que trocar. Consertaram e ficou nova."
- **Thiago M.** — Farmácia — Refrigerador de medicamentos: "Equipamento crítico para vacinas. Atenderam com urgência real."

### Layout — marquee duplo
- Remover Embla carousel, botões prev/next
- Criar componente `MarqueeRow` que duplica os cards e anima com CSS `@keyframes`
- Faixa 1: move para a esquerda (padrão)
- Faixa 2: move para a direita (`animation-direction: reverse`)
- Velocidade: ~35s por ciclo (lento, elegante)
- `pause` no hover da faixa (CSS `hover:animation-play-state: paused`)

### Gradientes laterais
- Container `relative overflow-hidden`
- Pseudo-elements via divs absolutas nos lados:
  - Esquerda: `bg-gradient-to-r from-muted to-transparent` — largura `80px`
  - Direita: `bg-gradient-to-l from-muted to-transparent` — largura `80px`
  - `z-10 pointer-events-none` para não bloquear interação

### Cards — refinamento visual
- `min-w-[320px]` para mais presença
- `rounded-2xl` (consistente com 12px dos botões)
- `shadow-sm` sutil para profundidade
- `border border-border/50` mais suave
- Padding `p-6`
- Stars `size={13}` e `gap-1`

### Bloco de credibilidade
- Manter acima das faixas
- `rounded-2xl` para consistência
- Adicionar `shadow-sm`

### CSS necessário em `src/index.css`
- Keyframes `marquee-left` (translateX(0) → translateX(-50%))
- Já existe `animate-marquee`, reutilizar/ajustar
- Adicionar classe `animate-marquee-reverse` com `direction: reverse`
- Hover pause: `.marquee-track:hover { animation-play-state: paused }`

### Acessibilidade
- `prefers-reduced-motion: reduce` → desabilitar animação (CSS media query)
- `aria-label` na section

## Arquivos alterados
1. `src/components/TestimonialsSection.tsx` — reescrita completa
2. `src/index.css` — adicionar keyframes marquee e hover pause

