"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function MaskReveal({
  children,
  direction = "up",
  duration = 0.9,
  delay = 0,
  className,
  once = true,
  amount = 0.2,
}: MaskRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: "hidden" }}
    >
      <motion.div
        initial={{ y: direction === "up" ? "100%" : "-100%", opacity: 0 }}
        animate={
          isInView
            ? { y: "0%", opacity: 1 }
            : { y: direction === "up" ? "100%" : "-100%", opacity: 0 }
        }
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
