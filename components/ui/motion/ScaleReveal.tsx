"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScaleRevealProps {
  children: ReactNode;
  from?: number;
  to?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function ScaleReveal({
  children,
  from = 1.05,
  to = 1,
  duration = 0.8,
  delay = 0,
  className,
  once = true,
  amount = 0.2,
}: ScaleRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: from, opacity: 0 }}
      animate={isInView ? { scale: to, opacity: 1 } : { scale: from, opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
