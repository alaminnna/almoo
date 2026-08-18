"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  blur?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function BlurReveal({
  children,
  duration = 0.8,
  delay = 0,
  blur = 8,
  y = 15,
  className,
  once = true,
  amount = 0.2,
}: BlurRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: `blur(${blur}px)`, y }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : { opacity: 0, filter: `blur(${blur}px)`, y }
      }
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
