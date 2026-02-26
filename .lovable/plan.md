

# Update CSS tokens and Tailwind config to new palette

## Changes

### 1. `src/index.css` — Replace `:root` block

Replace the entire `:root` with the user's exact token set (hex values). Keep the existing shadcn semantic variables but remap them to the new tokens. Since we're switching from HSL to hex, all `hsl()` wrappers in Tailwind must change to `var()` directly.

New `:root`:
- Core palette: `--pale-slate`, `--spicy-paprika`, `--french-blue`, `--onyx`, `--alabaster-grey` (hex)
- Surface tokens: `--surface-page`, `--surface-section`, `--surface-card` (hex)
- Text tokens: `--text-primary`, `--text-secondary`, `--text-muted`, `--text-on-dark`, `--text-on-brand` (hex)
- Action tokens: `--action-primary`, `--action-primary-hover`, `--action-strong`, `--action-strong-hover` (hex)
- Remap existing shadcn vars (`--foreground`, `--primary`, `--background`, `--card`, `--muted`, `--accent`, `--border`, etc.) to use the new hex tokens so existing components don't break

### 2. `tailwind.config.ts` — Add new color utilities

Add new color entries under `theme.extend.colors` that reference the new CSS variables directly (no `hsl()` wrapper since values are hex):

```ts
surface: {
  page: "var(--surface-page)",
  section: "var(--surface-section)",
  card: "var(--surface-card)",
},
text: {
  primary: "var(--text-primary)",
  secondary: "var(--text-secondary)",
  muted: "var(--text-muted)",
  "on-dark": "var(--text-on-dark)",
  "on-brand": "var(--text-on-brand)",
},
action: {
  primary: "var(--action-primary)",
  "primary-hover": "var(--action-primary-hover)",
  strong: "var(--action-strong)",
  "strong-hover": "var(--action-strong-hover)",
},
```

Also update the existing shadcn color entries from `hsl(var(...))` to `var(...)` since the underlying values are now hex, not HSL channels.

