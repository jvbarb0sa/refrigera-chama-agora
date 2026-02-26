

# FAQ Section — Redesign com layout de 2 colunas

## Visão geral

Reescrever o `FAQSection.tsx` usando o layout do componente `FAQ` fornecido: coluna esquerda com título, descrição e botão CTA; coluna direita com accordion de perguntas. Manter o conteúdo existente (perguntas da Refrigeração Taboado) e o botão de WhatsApp.

## Dependências

Todas já instaladas: `@radix-ui/react-accordion`, `lucide-react`, `Badge`, `Button`, `Accordion`. Nenhuma instalação necessária.

## Arquivo alterado

### `src/components/FAQSection.tsx` (reescrita)

**Layout**: Grid de 2 colunas (`lg:grid-cols-2`), gap generoso.

**Coluna esquerda** (sticky no desktop):
- Badge: "Dúvidas"
- H2: "Perguntas frequentes"
- Parágrafo: "Tire suas dúvidas sobre nossos serviços de refrigeração, manutenção e atendimento técnico."
- Botão WhatsApp: "Alguma dúvida? Fale conosco" com ícone WhatsApp, usando `whatsappLink`

**Coluna direita**:
- Accordion com as 5 perguntas existentes (mantém conteúdo atual dos `faqs`)
- Estilo do trigger: sem underline no hover, texto à esquerda

**Animação**: Manter `useGsapFade` no container.

**Responsivo**: Stack vertical no mobile (texto acima, accordion abaixo).

### Estrutura visual

```text
+----------------------------------+----------------------------------+
| [Dúvidas] (badge)                | ▸ Tem garantia?                  |
|                                  |   Sim. Todo serviço sai com...   |
| Perguntas frequentes             |                                  |
|                                  | ▸ Cobra visita?                  |
| Tire suas dúvidas sobre          |   A visita técnica tem um...     |
| nossos serviços...               |                                  |
|                                  | ▸ Trabalha com peça original?    |
| [WhatsApp: Fale conosco]         |   Sempre que disponível...       |
|                                  |                                  |
|                                  | ▸ Atende no mesmo dia?           |
|                                  |                                  |
|                                  | ▸ Faz orçamento pelo WhatsApp?   |
+----------------------------------+----------------------------------+
```

### Removido
- Side stats card (500+, 98%, etc.) — não faz parte do novo layout

## Adição ao Index

O `FAQSection` não está no `Index.tsx` atualmente. Adicionar entre `ServiceAreaSection` e `FinalCTASection`:

```
<ServiceAreaSection />
<FAQSection />
<FinalCTASection />
```

## Nenhum outro arquivo alterado

