"use client";

import { Button } from "./Button";
import { FadeIn, MaskReveal, BlurReveal } from "./ui/motion";

/* Hallmark · component: CTA section · genre: editorial · theme: existing tokens
 * states: default · hover · focus · active
 * contrast: pass (46–50)
 */

const HEADING_WORDS = "Let\u2019s find what could be better.".split(" ");

export default function AuditCTA() {
  return (
    <>
      <style>{`
        .audit-cta-heading {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3rem, 6.5vw, 7rem);
          line-height: 0.95;
          letter-spacing: -0.035em;
          color: var(--color-dark-ink);
          max-width: 14ch;
        }

        .audit-cta-word {
          display: inline-block;
          will-change: transform, opacity, filter;
        }

        .audit-cta-btn:hover {
          transform: scale(1.03) translateY(-2px) !important;
          box-shadow: 0 0 32px oklch(68% 0.120 40 / 0.25);
        }
        .audit-cta-btn:active {
          transform: scale(0.98) translateY(0) !important;
        }

        .audit-rule {
          width: 48px;
          height: 1px;
          background: var(--color-accent);
          margin: 0 auto var(--space-2xl);
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .audit-cta-heading {
            font-size: clamp(2.5rem, 5.5vw, 5rem);
          }
        }

        @media (max-width: 768px) {
          .audit-cta-heading {
            font-size: clamp(2.25rem, 8vw, 3.5rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .audit-cta-btn:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      <section
        id="audit"
        className="grain relative"
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBlock: "var(--space-4xl)",
          background: "var(--color-dark)",
          overflow: "hidden",
        }}
      >
        <div
          className="container-narrow"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {/* ── Eyebrow ── */}
          <FadeIn direction="up" distance={10} duration={0.6} delay={0}>
            <p
              className="label"
              style={{
                color: "var(--color-accent)",
                letterSpacing: "0.18em",
                marginBottom: "var(--space-lg)",
              }}
            >
              ALREADY HAVE A WEBSITE?
            </p>
          </FadeIn>

          {/* ── Accent rule ── */}
          <FadeIn direction="up" distance={6} duration={0.5} delay={0.1}>
            <div className="audit-rule" />
          </FadeIn>

          {/* ── Main heading — word-by-word blur reveal ── */}
          <MaskReveal direction="up" duration={0.9} delay={0.15}>
            <h2 className="audit-cta-heading" style={{ marginInline: "auto" }}>
              {HEADING_WORDS.map((word, i) => (
                <span
                  key={i}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  <span className="audit-cta-word">{word}</span>
                  {i < HEADING_WORDS.length - 1 && " "}
                </span>
              ))}
            </h2>
          </MaskReveal>

          {/* ── Supporting text ── */}
          <BlurReveal duration={0.7} delay={0.4} blur={4} y={12}>
            <p
              className="body-text"
              style={{
                color: "var(--color-paper-3)",
                maxWidth: "44ch",
                marginInline: "auto",
                marginTop: "var(--space-xl)",
                marginBottom: "var(--space-2xl)",
                textAlign: "center",
              }}
            >
              Let us find the areas that could be improved&mdash;from UX and
              performance to SEO and conversion.
            </p>
          </BlurReveal>

          {/* ── CTA ── */}
          <FadeIn direction="up" distance={12} duration={0.6} delay={0.5}>
            <Button
              as="a"
              href="mailto:almoo.agency@gmail.com?subject=Free%20Audit%20Request"
              variant="primary"
              size="lg"
              magnetic
              className="audit-cta-btn"
            >
              Get a free audit <span className="almoo-arrow">&rarr;</span>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
