

# Atualizar Design System — Nova paleta de cores

## Cores atuais vs. novas

| Papel | Atual (HSL) | Nova (HSL) | Hex |
|---|---|---|---|
| pale-slate | 222 11% 81% | 240 2% 84% | #D7D7D9 |
| french-blue (dark) | — (novo) | 219 67% 26% | #163573 |
| french-blue | 221 67% 32% | 220 66% 32% | #1C418C |
| cerulean (novo) | — | 203 85% 45% | #118CD9 |
| spicy-paprika | 18 63% 54% | 16 54% 48% | #BF5D39 |

## Mapeamento semântico

- `--pale-slate`: 240 2% 84%
- `--french-blue`: 220 66% 32% (primary — headings, nav)
- `--french-blue-dark`: 219 67% 26% (reserva para hovers ou TopBar)
- `--cerulean`: 203 85% 45% (nova cor para botões CTA — `--accent`)
- `--spicy-paprika`: 16 54% 48% (mantém como destaque secundário, não mais o CTA principal)

**Mudança principal**: O botão CTA (`variant="strong"`) passa a usar `--cerulean` (#118CD9) em vez de `--spicy-paprika`.

## Arquivo alterado

### `src/index.css` (variáveis CSS)

Atualizar as variáveis core e remapear `--accent` para a nova cor cerulean:

```css
/* Core palette (HSL) */
--onyx: 210 5% 8%;
--french-blue: 220 66% 32%;
--french-blue-dark: 219 67% 26%;
--cerulean: 203 85% 45%;
--spicy-paprika: 16 54% 48%;
--pale-slate: 240 2% 84%;
--alabaster-grey: 240 3% 94%;

/* Semantic: Actions */
--accent: var(--cerulean);        /* botões CTA agora em #118CD9 */
--accent-foreground: 0 0% 100%;
--ring: var(--cerulean);          /* ring segue o CTA */
```

Todas as demais variáveis semânticas (`--primary`, `--foreground`, etc.) permanecem iguais, apenas com o valor do `--french-blue` levemente ajustado.

### Nenhum outro arquivo precisa ser alterado

Os botões `variant="strong"` já usam `bg-accent`, então automaticamente herdam a nova cor. O `--ring` também acompanha.

