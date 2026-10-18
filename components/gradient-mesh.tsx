"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

/**
 * Two blurred fields — red accent and cool grey — that drift toward the cursor.
 * Transform-only, so the effect stays on the compositor.
 */
export function GradientMesh() {
  const reduced = useReducedMotion();

  const config = { stiffness: 42, damping: 22, mass: 1.1 };
  const x = useSpring(0, config);
  const y = useSpring(0, config);

  useEffect(() => {
    if (reduced) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        x.set((event.clientX / window.innerWidth - 0.5) * 2);
        y.set((event.clientY / window.innerHeight - 0.5) * 2);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, x, y]);

  const redX = useTransform(x, (v) => v * 56);
  const redY = useTransform(y, (v) => v * 40);
  const greyX = useTransform(x, (v) => v * -32);
  const greyY = useTransform(y, (v) => v * -24);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={reduced ? undefined : { x: redX, y: redY }}
        className="absolute -top-[22%] -left-[10%] size-[46rem] max-w-[120vw] rounded-full blur-[90px]"
      >
        <div className="size-full rounded-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_62%)] opacity-40 dark:opacity-35" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { x: greyX, y: greyY }}
        className="absolute top-[8%] -right-[18%] size-[40rem] max-w-[120vw] rounded-full blur-[110px]"
      >
        <div className="size-full rounded-full bg-[radial-gradient(circle_at_center,#737373_0%,transparent_60%)] opacity-30 dark:opacity-25" />
      </motion.div>
    </div>
  );
}
