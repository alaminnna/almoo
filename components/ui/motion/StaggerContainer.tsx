"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode, CSSProperties } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  stagger = 0.08,
  delay = 0,
  className,
  style,
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
