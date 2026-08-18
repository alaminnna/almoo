"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export interface Card {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCardsProps {
  items: Card[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const getDirection = (direction: "left" | "right") => {
  switch (direction) {
    case "left":
      return "forwards";
    case "right":
      return "reverse";
  }
};

const getSpeed = (speed: "fast" | "normal" | "slow", direction: "left" | "right") => {
  switch (speed) {
    case "fast":
      return "20s";
    case "normal":
      return "35s";
    case "slow":
      return "55s";
  }
};

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleAnimationStart = () => {
      setStart(true);
    };

    container.addEventListener("animationstart", handleAnimationStart);

    return () => {
      container.removeEventListener("animationstart", handleAnimationStart);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "almoo-infinite-scroll-container",
        className
      )}
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        className={cn(
          "almoo-infinite-scroll",
          "flex w-max gap-6",
          pauseOnHover && "almoo-scroll-pause"
        )}
        style={{
          animation: `almoo-scroll ${getSpeed(speed, direction)} linear infinite`,
          animationDirection: getDirection(direction),
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <CardItem key={idx} item={item} />
        ))}
      </div>

      <style>{`
        .almoo-scroll-pause:hover .almoo-infinite-scroll {
          animation-play-state: paused;
        }

        @keyframes almoo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .almoo-infinite-scroll {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function CardItem({ item }: { item: Card }) {
  return (
    <div
      className="almoo-card-item group"
      style={{
        background: "var(--color-paper)",
        border: "1px solid var(--color-rule)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-xl) var(--space-2xl)",
        minWidth: "clamp(280px, 30vw, 420px)",
        maxWidth: "clamp(280px, 30vw, 420px)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-lg)",
        transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-md)",
          fontWeight: 500,
          lineHeight: 1.5,
          color: "var(--color-ink)",
          letterSpacing: "-0.01em",
        }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-sm)",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            width: "24px",
            height: "1px",
            background: "var(--color-accent)",
          }}
        />
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-ink)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              color: "var(--color-muted)",
              letterSpacing: "0.05em",
            }}
          >
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}
