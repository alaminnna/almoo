"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "./Button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FadeIn } from "./ui/motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const heroImageInitial = prefersReducedMotion
    ? { opacity: 1, x: 0, scale: 1 }
    : { opacity: 0, x: 40, scale: 0.95 };

  const heroImageAnimate = prefersReducedMotion
    ? { opacity: 1, x: 0, scale: 1 }
    : { opacity: 1, x: 0, scale: 1 };

  const headlineInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0 };

  const headlineAnimate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1 };

  const ctaInitial = prefersReducedMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 15, scale: 0.98 };

  const ctaAnimate = prefersReducedMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  const imageDuration = prefersReducedMotion ? 0 : 1.2;
  const imageDelay = prefersReducedMotion ? 0 : 0.4;
  const headlineDuration = prefersReducedMotion ? 0 : 0.3;
  const headlineDelay = prefersReducedMotion ? 0 : 0.2;
  const ctaDuration = prefersReducedMotion ? 0 : 0.7;
  const ctaDelay = prefersReducedMotion ? 0 : 1.1;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "flex-end",
        padding: "var(--space-4xl) clamp(1.5rem, 5vw, 5rem) var(--space-3xl)",
        background: "var(--color-paper)",
        position: "relative",
      }}
    >
      {/* Visual composition — right side */}
      <div
        className="hero-visual"
        style={{
          position: "absolute",
          top: "50%",
          right: "clamp(0rem, 2vw, 4rem)",
          transform: "translateY(-50%)",
          width: "clamp(280px, 32vw, 480px)",
          height: "clamp(350px, 42vw, 600px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Hero image */}
        <motion.div
          initial={heroImageInitial}
          animate={heroImageAnimate}
          transition={{ duration: imageDuration, ease: [0.16, 1, 0.3, 1], delay: imageDelay }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/hero-image.jpg"
            alt="Almoo Studio"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "var(--radius-md)",
            }}
          />
        </motion.div>

        {/* Subtle grain overlay on visual */}
        <div
          className="grain"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--radius-md)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "55%" }}>
        {/* Eyebrow */}
        <FadeIn
          direction="up"
          distance={12}
          duration={0.7}
          delay={0.1}
        >
          <p
            className="label"
            style={{
              color: "var(--color-accent)",
              letterSpacing: "0.18em",
              marginBottom: "var(--space-xl)",
            }}
          >
            ALMOO STUDIO
          </p>
        </FadeIn>

        {/* Headline — TextGenerateEffect with enhanced settings */}
        <motion.div
          initial={headlineInitial}
          animate={headlineAnimate}
          transition={{ duration: headlineDuration, delay: headlineDelay }}
        >
          <TextGenerateEffect
            words="Digital experiences, built around your business."
            className="hero-headline"
            duration={0.5}
            staggerChildren={0.06}
          />
        </motion.div>

        {/* Supporting copy */}
        <FadeIn
          direction="up"
          distance={15}
          duration={0.8}
          delay={0.9}
          blur
          blurAmount={4}
        >
          <p
            className="body-text"
            style={{
              marginTop: "var(--space-xl)",
              maxWidth: "48ch",
              color: "var(--color-ink-2)",
            }}
          >
            We design and build custom websites, web apps, and digital experiences
            around the way your business actually works.
          </p>
        </FadeIn>

        {/* Service line */}
        <FadeIn
          direction="up"
          distance={10}
          duration={0.6}
          delay={1.0}
        >
          <p
            className="label"
            style={{
              color: "var(--color-accent)",
              marginTop: "var(--space-xl)",
              letterSpacing: "0.18em",
            }}
          >
            Web &bull; App &bull; Digital Growth
          </p>
        </FadeIn>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center"
          initial={ctaInitial}
          animate={ctaAnimate}
          transition={{ duration: ctaDuration, ease: [0.16, 1, 0.3, 1], delay: ctaDelay }}
          style={{
            marginTop: "var(--space-2xl)",
            gap: "var(--space-xl)",
          }}
        >
          <Button
            as="a"
            href="#contact"
            variant="primary"
            size="lg"
            magnetic
          >
            Start a project <span className="almoo-arrow">→</span>
          </Button>

          <Button
            as="a"
            href="#work"
            variant="text"
            size="md"
          >
            Explore our work <span className="almoo-arrow hero-arrow-down">↓</span>
          </Button>
        </motion.div>
      </div>

      <style>{`
        .almoo-btn--text:hover .hero-arrow-down {
          transform: translateY(3px);
        }
        .almoo-btn--text .hero-arrow-down {
          display: inline-block;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 768px) {
          .hero-visual {
            opacity: 0.2;
            right: -4rem;
            width: 280px;
            height: 350px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-visual {
            opacity: 0.35;
            right: 0;
            width: 300px;
            height: 400px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .almoo-btn--text .hero-arrow-down {
            transition: none !important;
          }
          .almoo-btn--text:hover .hero-arrow-down {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
