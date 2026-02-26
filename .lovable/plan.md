

# Redesign ServicesSection + ProblemsSection

## ServicesSection — full redesign to match reference

**Layout**: 3-column grid (`md:grid-cols-3`), 2 rows, 6 service cards total.

**Header area**: Split layout — left side has badge "ESPECIALIDADES" + H2 "Soluções técnicas para quem não pode parar." (with "não pode parar." in muted color). Right side has a short paragraph.

**Each card**:
- Icon in a circle (`w-12 h-12 rounded-full bg-muted flex items-center justify-center`) using Lucide icons
- Category badge top-right (outline pill, uppercase, small text)
- Title (`text-lg font-semibold`)
- Description (`text-sm text-muted-foreground`)
- CTA link at bottom (`text-sm font-semibold text-primary` + ArrowRight icon), linking to WhatsApp
- Border, padding, no border-radius (angular per style guide)
- Last card (bottom-right) gets dark navy background (`bg-[#0b1622]`) with light text

**6 services** (adapted to this business):
1. Refrigeração Comercial · COMERCIAL · Thermometer icon
2. Refrigeração Residencial · RESIDENCIAL · Home icon
3. Manutenção Preventiva · PREVENTIVA · Settings icon
4. Instalação & Regularização · INSTALAÇÃO · Wrench icon
5. Diagnóstico Técnico · DIAGNÓSTICO · Search icon
6. Contratos para Empresas · CORPORATIVO · Building icon (dark card)

## ProblemsSection — refinement

Keep the current 40/60 split layout but improve card styling to match the elevated quality: add slightly more spacing, refine typography, ensure consistency with the new ServicesSection visual language.

## Files changed
1. `src/components/ServicesSection.tsx` — rewrite with new 3x2 card grid
2. `src/components/ProblemsSection.tsx` — minor visual polish

