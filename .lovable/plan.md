

# Redesign Navbar — Conversion-Focused Utility Header

## File: `src/components/Navbar.tsx` — full rewrite

Remove all navigation links, hamburger menu, and mobile full-screen menu. Replace with a simple conversion bar.

### Structure

**Wrapper**: `fixed top-0 md:top-10 left-0 right-0 z-50 bg-background border-b border-[hsl(var(--pale-slate))]`

**Desktop layout** (`container flex h-16 items-center justify-between`):

- **Left**: `<a>` with text `Refrigeração` + `TABOADO` in `text-2xl font-bold text-[hsl(var(--french-blue))]`
- **Right** (`hidden md:flex items-center gap-6`):
  - Phone icon + `Técnico: (67) 98109-7179` — `text-sm text-foreground`
  - Phone icon + `Loja: (67) 99259-7710` — `text-sm text-foreground`
  - Separator `h-5 w-px bg-border`
  - CTA button: `bg-[hsl(var(--spicy-paprika))] text-[hsl(var(--alabaster-grey))] shadow-lg rounded-md h-11 px-6 font-semibold` with WhatsApp icon + "Orçamento via WhatsApp". Links to `whatsappLink("Olá, gostaria de um orçamento.")`.

**Mobile layout**:
- Left: Same logo
- Right: Compact WhatsApp button — just the WhatsApp icon + short text or icon-only, same terracotta bg, `rounded-md`

### Removed
- `links` array, `useActiveSection`, hamburger button, `AnimatePresence` mobile menu, `open` state, `onMenuToggle` prop, body scroll lock

## File: `src/pages/Index.tsx` — minor update

Remove `mobileMenuOpen` state and `onMenuToggle` prop from `<Navbar>`. Update `<WhatsAppSticky hidden={false} />` (no longer toggled by menu).

## File: `src/components/Navbar.tsx` — imports cleanup

Remove `Menu`, `X`, `motion`, `AnimatePresence`, `useActiveSection`, `Button`. Keep `Phone` from lucide, `WhatsAppIcon`, constants.

