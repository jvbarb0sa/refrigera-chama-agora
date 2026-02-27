

# Fix modal horizontal breathing room

## Arquivo: `src/components/ui/dialog.tsx`

### DialogContent (linha 39)
The `mx-4` class has no effect because the element uses `fixed` + `left-[50%] translate-x-[-50%]` positioning. Fix by replacing `w-full max-w-sm md:max-w-md mx-4 md:mx-auto` with `w-[calc(100%-2rem)] max-w-sm md:max-w-md` — this ensures 1rem (16px) of breathing room on each side on mobile.

