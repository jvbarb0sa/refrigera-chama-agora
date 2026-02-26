

# Fix StatsSection rendering

The StatsSection code and placement in Index.tsx are already correct. The likely issue is that GSAP's `fromTo` sets initial `opacity: 0`, and since StatsSection is right below the Hero (already in viewport on load), the ScrollTrigger with `start: "top 85%"` may not fire properly, leaving stats invisible.

## Fix

### `src/components/StatsSection.tsx`
- Remove the `useGsapFade` hook dependency
- Use a simpler CSS-based fade-in or set GSAP ScrollTrigger start to `"top 95%"` so it triggers immediately when barely in view
- Alternatively, since this section is directly below the hero and likely in the viewport on load, just remove the animation entirely and let it render immediately — matching the reference image which shows no animation, just static stats

### Changes
1. **`src/components/StatsSection.tsx`**: Remove `useGsapFade` import and usage. Remove `ref` from the grid div. Remove `stat-item` class from children. The section renders immediately without animation, matching the clean static look from the reference.

