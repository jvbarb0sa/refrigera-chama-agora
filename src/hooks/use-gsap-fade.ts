import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapFadeOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  /** CSS selector for children to stagger (if omitted, animates the container itself) */
  children?: string;
}

export function useGsapFade<T extends HTMLElement = HTMLDivElement>(
  opts: UseGsapFadeOptions = {}
) {
  const ref = useRef<T>(null);
  const { y = 24, duration = 0.7, stagger = 0.1, children } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const targets = children ? el.querySelectorAll(children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger: children ? stagger : 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, children]);

  return ref;
}
