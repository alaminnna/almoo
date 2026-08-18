"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useReducedMotion } from "motion/react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  staggerChildren?: number;
}

export function TextGenerateEffect({
  words,
  className = "",
  duration = 0.4,
  staggerChildren = 0.04,
}: TextGenerateEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const wordArray = words.split(" ");

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set("visible");
      return;
    }
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
          },
        },
      }}
      aria-label={words}
    >
      {wordArray.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: prefersReducedMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    filter: "blur(8px)",
                    y: 8,
                  },
              visible: {
                opacity: 1,
                filter: prefersReducedMotion ? "blur(0px)" : "blur(0px)",
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
          {i < wordArray.length - 1 && " "}
        </span>
      ))}
    </motion.div>
  );
}
