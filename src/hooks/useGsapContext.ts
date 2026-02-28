import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useGsapContext(
  scopeRef: React.RefObject<HTMLElement>,
  fn: (ctx: gsap.Context) => void,
  deps: any[] = []
) {
  useEffect(() => {
    if (!scopeRef.current) return;
    let ctx: gsap.Context;
    ctx = gsap.context(() => fn(ctx), scopeRef.current);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
