

# WhatsApp icon oficial + Biblioteca de ícones

## Diagnóstico

### Ícone WhatsApp
Todos os botões e links de WhatsApp usam `MessageCircle` do lucide-react — um ícone genérico de balão de chat. O correto é usar o logo oficial do WhatsApp (SVG).

Arquivos afetados:
- `WhatsAppSticky.tsx` — botão flutuante verde
- `Navbar.tsx` — CTA desktop + menu mobile (3 usos)
- `HeroSection.tsx` — 2 botões CTA
- `ProblemsSection.tsx` — botão CTA
- `FinalCTASection.tsx` — 2 botões CTA + footer (1 info)
- `CommerceSection.tsx` — botão CTA (não está no Index mas arquivo existe)
- `FAQSection.tsx` — botão CTA (não está no Index mas arquivo existe)

Total: ~12 ocorrências de `MessageCircle` representando WhatsApp.

### SF Symbols
SF Symbols é a biblioteca de ícones da Apple. Ela **não existe como pacote web/npm**. É proprietária do ecossistema Apple (iOS/macOS). Não há equivalente direto para React.

**Porém**: o lucide-react já segue a mesma linguagem visual do SF Symbols — traços finos (stroke 2px), cantos arredondados, formas minimalistas. É a biblioteca web mais próxima do estilo SF Symbols. Trocar por outra (Heroicons, Phosphor, etc.) não traria benefício e exigiria refatorar todos os componentes UI (shadcn/ui depende de lucide-react internamente).

**Recomendação**: Manter lucide-react (já é SF Symbol-like) e criar apenas o ícone customizado do WhatsApp.

---

## Plano de execução

### 1. Criar componente `src/components/icons/WhatsAppIcon.tsx`
SVG inline do logo oficial do WhatsApp. Props: `size`, `className`. Reutilizável em todo o projeto.

### 2. Substituir `MessageCircle` por `WhatsAppIcon` em todos os contextos de WhatsApp

| Arquivo | Onde | Mudança |
|---|---|---|
| `WhatsAppSticky.tsx` | Botão flutuante | `MessageCircle` → `WhatsAppIcon` |
| `Navbar.tsx` | CTA desktop (linha 53) | `MessageCircle` → `WhatsAppIcon` |
| `Navbar.tsx` | Info mobile (linha 110) | `MessageCircle` → `WhatsAppIcon` |
| `Navbar.tsx` | Botão mobile (linha 115) | `MessageCircle` → `WhatsAppIcon` |
| `HeroSection.tsx` | Botão 1 (linha 72) | `MessageCircle` → `WhatsAppIcon` |
| `HeroSection.tsx` | Botão 2 (linha 89) | `MessageCircle` → `WhatsAppIcon` |
| `ProblemsSection.tsx` | Botão CTA (linha 43) | `MessageCircle` → `WhatsAppIcon` |
| `FinalCTASection.tsx` | Botão 1 (linha 30) | `MessageCircle` → `WhatsAppIcon` |
| `FinalCTASection.tsx` | Botão 2 (linha 42) | `MessageCircle` → `WhatsAppIcon` |
| `FinalCTASection.tsx` | Footer info (linha 59) | `MessageCircle` → `WhatsAppIcon` |

### 3. Manter lucide-react
- `Phone`, `Mail`, `Clock`, `MapPin`, `Check`, `Star`, `ChevronLeft`, `ChevronRight`, `Menu`, `X` — todos continuam do lucide-react
- shadcn/ui components internamente usam lucide-react — não alterar

### O que NÃO muda
- Nenhuma outra biblioteca de ícones será instalada
- Nenhum componente shadcn/ui será alterado
- Lucide-react continua para todos os ícones que não são WhatsApp

