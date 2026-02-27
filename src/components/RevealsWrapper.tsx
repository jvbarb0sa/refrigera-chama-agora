import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function RevealsWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGsapContext(
    ref,
    () => {
      if (reduced) return;

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.set(el, { willChange: "transform, opacity" });
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete() {
              gsap.set(el, { willChange: "auto" });
            },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    },
    [reduced]
  );

  return <div ref={ref}>{children}</div>;
}
