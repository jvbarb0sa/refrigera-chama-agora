import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface UseGsapFadeOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  blur?: number;
  ease?: string;
  start?: string;
  /** CSS selector for children to stagger (if omitted, animates the container itself) */
  children?: string;
}

export function useGsapFade<T extends HTMLElement = HTMLDivElement>(
  opts: UseGsapFadeOptions = {}
) {
  const ref = useRef<T>(null);
  const { y = 24, duration = 0.8, stagger = 0.08, blur = 0, children, ease = "power3.out", start = "top 85%" } = opts;
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const targets = children ? el.querySelectorAll(children) : el;

    const fromVars: gsap.TweenVars = { y, opacity: 0, willChange: "transform, opacity" };
    if (blur > 0) fromVars.filter = `blur(${blur}px)`;

    const toVars: gsap.TweenVars = {
      y: 0,
      opacity: 1,
      duration,
      stagger: children ? stagger : 0,
      ease,
      onComplete() {
        gsap.set(targets, { willChange: "auto" });
      },
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    };
    if (blur > 0) toVars.filter = "blur(0px)";

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, toVars);
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, blur, children, reduced, ease, start]);

  return ref;
}
