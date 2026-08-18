"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface WordRevealProps {
  children: ReactNode;
  text: string;
  duration?: number;
  staggerChildren?: number;
  delay?: number;
  blur?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function WordReveal({
  text,
  duration = 0.5,
  staggerChildren = 0.06,
  delay = 0,
  blur = 8,
  y = 20,
  className,
  once = true,
  amount = 0.2,
}: WordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delay,
            staggerChildren,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", whiteSpace: "pre" }}>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                opacity: 0,
                filter: `blur(${blur}px)`,
                y,
              },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  duration,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.div>
  );
}
