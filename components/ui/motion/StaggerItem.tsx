"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
  blur?: boolean;
  blurAmount?: number;
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 20,
  className,
  blur = false,
  blurAmount = 4,
}: StaggerItemProps) {
  const getInitial = () => {
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

  return (
    <motion.div
      className={className}
      variants={{
        hidden: getInitial(),
        visible: {
          opacity: 1,
          filter: blur ? "blur(0px)" : undefined,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
