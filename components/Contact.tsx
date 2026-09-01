"use client";

import { Button } from "./Button";
import { FadeIn, MaskReveal, BlurReveal } from "./ui/motion";

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-final-heading {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: "var(--color-ink)";
          max-width: 16ch;
        }

        .contact-final-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-lg);
          margin-top: var(--space-2xl);
        }

        .contact-trust-note {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          color: var(--color-muted);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .contact-final-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .contact-final-cta-row .almoo-btn {
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-final-cta-row {
            transition: none;
          }
        }
      `}</style>

      <section
        id="contact"
        className="container-narrow"
        style={{
          paddingBlock: "var(--space-4xl)",
          background: "var(--color-paper)",
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
              marginBottom: "var(--space-xl)",
            }}
          >
            Ready to start?
          </p>
        </FadeIn>

        {/* ── Heading ── */}
        <MaskReveal direction="up" duration={0.9} delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              maxWidth: "16ch",
              marginInline: "auto",
              marginBottom: "var(--space-xl)",
            }}
          >
            Have a project
            <br />
            in mind<span style={{ color: "var(--color-accent)" }}>.</span>
          </h2>
        </MaskReveal>

        {/* ── Supporting copy ── */}
        <BlurReveal duration={0.8} delay={0.3} blur={6} y={15}>
          <p
            className="body-text"
            style={{
              maxWidth: "44ch",
              marginInline: "auto",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Tell us about your project and we&rsquo;ll get back to you within
            24&ndash;48 hours with next steps. No pressure, no obligation.
          </p>
        </BlurReveal>

        {/* ── CTAs ── */}
        <FadeIn direction="up" distance={15} duration={0.7} delay={0.4}>
          <div className="contact-final-cta-row" style={{ justifyContent: "center" }}>
            <Button
              as="a"
              href="#inquiry"
              variant="primary"
              size="lg"
              magnetic
            >
              Start a project <span className="almoo-arrow">&rarr;</span>
            </Button>
            <Button
              as="a"
              href="#work"
              variant="secondary"
              size="lg"
              magnetic
            >
              View our work <span className="almoo-arrow">&rarr;</span>
            </Button>
          </div>
        </FadeIn>

        {/* ── Trust note ── */}
        <FadeIn direction="up" distance={8} duration={0.6} delay={0.6}>
          <p
            className="contact-trust-note"
            style={{
              marginTop: "var(--space-3xl)",
            }}
          >
            almoo.agency@gmail.com &bull; WhatsApp: 01882030873
          </p>
        </FadeIn>
      </section>
    </>
  );
}
