"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface LineRevealProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function LineReveal({
  children,
  duration = 0.8,
  delay = 0,
  y = 100,
  className,
  once = true,
  amount = 0.2,
}: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: "hidden" }}
    >
      <motion.div
        initial={{ y, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y, opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
