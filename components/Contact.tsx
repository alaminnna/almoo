"use client";

import { Button } from "./Button";
import { FadeIn, MaskReveal, BlurReveal } from "./ui/motion";

const SERVICES = [
  "Website development",
  "UI/UX design",
  "AI solutions",
  "Automation",
  "SEO & optimization",
  "Custom digital products",
];

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          align-items: start;
        }

        .contact-services {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-top: var(--space-xl);
        }

        .contact-service-tag {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--color-ink-2);
          padding: var(--space-xs) var(--space-md);
          border: 1px solid var(--color-rule);
          border-radius: 9999px;
          transition: all 300ms var(--ease-out);
          white-space: nowrap;
        }

        .contact-service-tag:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .contact-audit-block {
          background: var(--color-dark);
          border-radius: var(--radius-md);
          padding: var(--space-2xl);
          position: relative;
          overflow: hidden;
        }

        .contact-audit-block::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
          pointer-events: none;
          border-radius: var(--radius-md);
        }

        .contact-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-lg);
          margin-top: var(--space-2xl);
        }

        .contact-divider {
          width: 100%;
          height: 1px;
          background: var(--color-rule);
          opacity: 0.4;
          margin: var(--space-3xl) 0;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--space-3xl);
          }
        }

        @media (max-width: 768px) {
          .contact-audit-block {
            padding: var(--space-xl);
          }
          .contact-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .contact-cta-row .almoo-btn {
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-service-tag {
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
        }}
      >
        {/* ── Heading area ── */}
        <div className="contact-grid">
          {/* Left — Main content */}
          <div>
            <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
              <p
                className="label"
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                GET IN TOUCH
              </p>
            </FadeIn>

            <MaskReveal direction="up" duration={0.9} delay={0.1}>
              <h2
                className="display-lg"
                style={{ marginBottom: "var(--space-xl)" }}
              >
                Let&rsquo;s build
                <br />
                something meaningful
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </h2>
            </MaskReveal>

            <BlurReveal duration={0.8} delay={0.3} blur={6} y={15}>
              <p
                className="body-text"
                style={{
                  maxWidth: "48ch",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Whether you need a new website, a product redesign, AI
                integration, or a full digital strategy&mdash;we&rsquo;re here
                to build it with you.
              </p>
            </BlurReveal>

            <BlurReveal duration={0.8} delay={0.4} blur={6} y={15}>
              <p
                className="body-text"
                style={{
                  maxWidth: "48ch",
                  color: "var(--color-muted)",
                  fontSize: "var(--text-sm)",
                }}
              >
                We work with startups, agencies, and established businesses
                across Bangladesh and internationally.
              </p>
            </BlurReveal>

            {/* ── Services tags ── */}
            <FadeIn direction="up" distance={12} duration={0.6} delay={0.5}>
              <div className="contact-services">
                {SERVICES.map((service) => (
                  <span key={service} className="contact-service-tag">
                    {service}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* ── Primary CTAs ── */}
            <FadeIn direction="up" distance={15} duration={0.7} delay={0.6}>
              <div className="contact-cta-row">
                <Button
                  as="a"
                  href="mailto:almoo.agency@gmail.com?subject=Let's%20build%20something"
                  variant="primary"
                  size="lg"
                  magnetic
                >
                  Start a project <span className="almoo-arrow">&rarr;</span>
                </Button>
                <Button
                  as="a"
                  href="mailto:almoo.agency@gmail.com?subject=Free%20Audit%20Request"
                  variant="secondary"
                  size="lg"
                  magnetic
                >
                  Get a free audit <span className="almoo-arrow">&rarr;</span>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right — Audit CTA block */}
          <FadeIn direction="up" distance={40} duration={0.9} delay={0.3}>
            <div className="contact-audit-block">
              <p
                className="label"
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "var(--space-lg)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                FREE AUDIT
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "var(--text-2xl)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--color-dark-ink)",
                  marginBottom: "var(--space-lg)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Already have
                <br />
                a website?
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  lineHeight: 1.65,
                  color: "var(--color-paper-3)",
                  maxWidth: "36ch",
                  marginBottom: "var(--space-xl)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Let us find the areas that could be improved&mdash;from UX and
                performance to SEO and conversion.
              </p>

              <div style={{ position: "relative", zIndex: 2 }}>
                <Button
                  as="a"
                  href="mailto:almoo.agency@gmail.com?subject=Free%20Audit%20Request"
                  variant="primary"
                  size="lg"
                  magnetic
                >
                  Get a free audit <span className="almoo-arrow">&rarr;</span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Bottom divider ── */}
        <FadeIn direction="up" distance={8} duration={0.6} delay={0.7}>
          <div className="contact-divider" />
        </FadeIn>

        {/* ── Bottom note ── */}
        <FadeIn direction="up" distance={10} duration={0.6} delay={0.8}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-muted)",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            almoo.agency@gmail.com &bull; WhatsApp: 01882030873
          </p>
        </FadeIn>
      </section>
    </>
  );
}
