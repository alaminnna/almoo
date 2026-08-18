"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  ease?: number[];
  once?: boolean;
  amount?: number;
  className?: string;
  blur?: boolean;
  blurAmount?: number;
}

export function FadeIn({
  children,
  direction = "up",
  distance = 20,
  duration = 0.7,
  delay = 0,
  ease = [0.16, 1, 0.3, 1],
  once = true,
  amount = 0.2,
  className,
  blur = false,
  blurAmount = 4,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();

  const getInitial = () => {
    if (prefersReducedMotion) {
      return { opacity: 1 };
    }
    const base: Record<string, number | string> = { opacity: 0 };
    if (blur) base.filter = `blur(${blurAmount}px)`;
    switch (direction) {
      case "up":
        return { ...base, y: distance };
      case "down":
        return { ...base, y: -distance };
      case "left":
        return { ...base, x: distance };
      case "right":
        return { ...base, x: -distance };
      default:
        return base;
    }
  };

  const getAnimate = () => {
    if (prefersReducedMotion) {
      return { opacity: 1 };
    }
    const base: Record<string, number | string> = { opacity: 1 };
    if (blur) base.filter = "blur(0px)";
    switch (direction) {
      case "up":
        return { ...base, y: 0 };
      case "down":
        return { ...base, y: 0 };
      case "left":
        return { ...base, x: 0 };
      case "right":
        return { ...base, x: 0 };
      default:
        return base;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: ease as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}
