

# Sobre a Empresa — Redesign com Feature Component

## Visão geral

Substituir o `MissionSection` atual (layout simples de 2 colunas com placeholder de imagem) pelo layout do componente `Feature` fornecido: texto à esquerda com lista de diferenciais (checkmarks) e imagem à direita.

## Dependências

Todas já instaladas: `lucide-react`, `class-variance-authority`, `Badge` component. Nenhuma instalação necessária.

## Arquivos

### 1. `src/components/ui/feature.tsx` — NÃO será criado separadamente

O componente `Feature` é genérico demais. Vamos integrar o layout diretamente no `MissionSection` adaptado ao conteúdo da empresa.

### 2. `src/components/MissionSection.tsx` (reescrita)

Adaptar o layout do `Feature` component ao conteúdo existente da Refrigeração Taboado:

**Layout**: Grid de 2 colunas (lg), coluna esquerda com texto + lista, coluna direita com imagem.

**Coluna esquerda**:
- Badge: "Sobre a empresa"
- H2: "Profissionalismo e responsabilidade técnica"
- Parágrafo descritivo (texto atual)
- 3 itens com ícone Check (verde) + título + descrição:
  1. **Diagnóstico preciso** — "Avaliação técnica detalhada antes de qualquer intervenção."
  2. **Equipe qualificada** — "Profissionais com experiência em refrigeração comercial e residencial."
  3. **Compromisso com o cliente** — "Transparência no orçamento e cumprimento de prazos."

**Coluna direita**:
- Imagem com `rounded-2xl` ocupando o espaço — usar imagem de Unsplash de técnico HVAC ou ambiente de trabalho: `https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop` (HVAC technician)

**Animação**: Manter `useGsapFade` no container.

**Responsivo**: Stack vertical no mobile (imagem abaixo do texto).

### Estrutura visual

```text
+----------------------------------+------------------+
| [Sobre a empresa]  (badge)       |                  |
|                                  |                  |
| Profissionalismo e               |    [Imagem]      |
| responsabilidade técnica         |                  |
|                                  |                  |
| Texto descritivo...              |                  |
|                                  |                  |
| ✓ Diagnóstico preciso            |                  |
|   Avaliação técnica detalhada... |                  |
|                                  |                  |
| ✓ Equipe qualificada             |                  |
|   Profissionais com experiência..|                  |
|                                  |                  |
| ✓ Compromisso com o cliente      |                  |
|   Transparência no orçamento...  |                  |
+----------------------------------+------------------+
```

## Nenhum outro arquivo alterado

