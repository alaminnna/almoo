"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

// -------------------------------------------------------------------------
// TYPES
// -------------------------------------------------------------------------
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary" | "ghost" | "text" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  as?: React.ElementType;
  magnetic?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

// -------------------------------------------------------------------------
// STYLES
// -------------------------------------------------------------------------
const STYLES = `
.almoo-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Sizes */
.almoo-btn--sm {
  height: 2.25rem;
  padding: 0 1rem;
  font-size: var(--text-sm);
}

.almoo-btn--md {
  height: 2.75rem;
  padding: 0 1.5rem;
  font-size: var(--text-sm);
}

.almoo-btn--lg {
  height: 3.25rem;
  padding: 0 2rem;
  font-size: var(--text-base);
}

.almoo-btn--icon {
  height: 2.75rem;
  width: 2.75rem;
  padding: 0;
}

/* Primary — warm orange, black text */
.almoo-btn--primary {
  background: var(--color-accent);
  color: var(--color-ink);
  border-radius: 9999px;
}

.almoo-btn--primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

.almoo-btn--primary:active {
  transform: translateY(0) scale(0.97);
}

/* Secondary — transparent, dark text, thin border */
.almoo-btn--secondary {
  background: transparent;
  color: var(--color-ink);
  border: 1px solid var(--color-rule);
  border-radius: 9999px;
}

.almoo-btn--secondary:hover {
  background: var(--color-ink);
  color: var(--color-paper);
  border-color: var(--color-ink);
  transform: translateY(-2px);
}

.almoo-btn--secondary:active {
  transform: translateY(0) scale(0.97);
}

/* Ghost — transparent, no border */
.almoo-btn--ghost {
  background: transparent;
  color: var(--color-ink);
  border-radius: 9999px;
}

.almoo-btn--ghost:hover {
  background: rgba(0, 0, 0, 0.04);
}

/* Text — minimal, no container */
.almoo-btn--text {
  background: transparent;
  color: var(--color-ink-2);
  padding: 0;
  height: auto;
  font-weight: 500;
}

.almoo-btn--text:hover {
  color: var(--color-ink);
}

.almoo-btn--text .almoo-arrow {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.almoo-btn--text:hover .almoo-arrow {
  transform: translateX(3px);
}

/* Icon */
.almoo-btn--icon {
  background: transparent;
  color: var(--color-ink);
  border: 1px solid var(--color-rule);
  border-radius: 9999px;
}

.almoo-btn--icon:hover {
  background: var(--color-ink);
  color: var(--color-paper);
  border-color: var(--color-ink);
}

/* Focus ring */
.almoo-btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

/* Disabled */
.almoo-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Arrow animation */
.almoo-arrow {
  display: inline-flex;
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.almoo-btn--primary:hover .almoo-arrow,
.almoo-btn--secondary:hover .almoo-arrow {
  transform: translateX(3px);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .almoo-btn {
    transition: none !important;
  }
  .almoo-btn:hover {
    transform: none !important;
  }
  .almoo-btn:active {
    transform: none !important;
  }
  .almoo-arrow {
    transition: none !important;
  }
}
`;

// -------------------------------------------------------------------------
// MAGNETIC HOOK
// -------------------------------------------------------------------------
function useMagnetic(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const h = rect.width / 2;
        const w = rect.height / 2;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - w;

        gsap.to(element, {
          x: x * 0.4,
          y: y * 0.4,
          rotationX: -y * 0.15,
          rotationY: x * 0.15,
          scale: 1.05,
          ease: "power2.out",
          duration: 0.4,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 1.2,
        });
      };

      element.addEventListener("mousemove", handleMouseMove as EventListener);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove as EventListener);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, element);

    return () => ctx.revert();
  }, [ref, enabled]);
}

// -------------------------------------------------------------------------
// COMPONENT
// -------------------------------------------------------------------------
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      magnetic = false,
      children,
      as: Component = "button",
      ...props
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLButtonElement>(null);
    useMagnetic(localRef as React.RefObject<HTMLElement | null>, magnetic);

    const isIcon = variant === "icon" || size === "icon";
    const resolvedSize = isIcon ? "icon" : size;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
        <Component
          ref={(node: HTMLButtonElement) => {
            (localRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
            if (typeof forwardedRef === "function") forwardedRef(node);
            else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }}
          className={cn(
            "almoo-btn",
            `almoo-btn--${variant}`,
            `almoo-btn--${resolvedSize}`,
            className
          )}
          {...props}
        >
          {children}
        </Component>
      </>
    );
  }
);
Button.displayName = "Button";
