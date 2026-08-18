"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

type SlideDirection = "up" | "down" | "left" | "right";

interface SlideInProps {
  children: ReactNode;
  direction?: SlideDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function SlideIn({
  children,
  direction = "left",
  distance = 30,
  duration = 0.7,
  delay = 0,
  className,
  once = true,
  amount = 0.2,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitial()}
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
