"use client";

import { FadeIn, MaskReveal, StaggerContainer, StaggerItem } from "./ui/motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    what: "We clarify your goals, audience, business requirements, and technical constraints.",
    youReceive: "Project direction, requirements document, and defined scope.",
  },
  {
    num: "02",
    title: "Define",
    what: "We create strategy, information architecture, and project structure.",
    youReceive: "Project plan, sitemap, wireframes, and technical approach.",
  },
  {
    num: "03",
    title: "Design",
    what: "We develop the visual system, interaction patterns, and component design.",
    youReceive: "Design system, page designs, and interactive prototype.",
  },
  {
    num: "04",
    title: "Build",
    what: "We implement the production experience with clean, scalable code.",
    youReceive: "Functional build, staging environment, and regular demos.",
  },
  {
    num: "05",
    title: "Launch",
    what: "We test, refine, optimize, and deploy your project.",
    youReceive: "Production deployment, performance optimization, and launch support.",
  },
  {
    num: "06",
    title: "Grow",
    what: "Optional ongoing optimization, updates, and digital growth support.",
    youReceive: "Ongoing partnership, analytics insights, and continuous improvement.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="container-narrow"
      style={{
        paddingBlock: "var(--space-4xl)",
        background: "var(--color-paper)",
      }}
    >
      <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
        <p className="label" style={{ marginBottom: "var(--space-lg)" }}>
          How We Work
        </p>
      </FadeIn>

      <MaskReveal direction="up" duration={0.9} delay={0.1}>
        <h2
          className="display-md"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          From idea to launch
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </h2>
      </MaskReveal>

      <FadeIn direction="up" distance={10} duration={0.6} delay={0.2}>
        <p
          className="body-text"
          style={{
            maxWidth: "48ch",
            marginBottom: "var(--space-3xl)",
          }}
        >
          Every project follows a clear, structured process so you always know
          what&rsquo;s happening and what comes next.
        </p>
      </FadeIn>

      <StaggerContainer
        stagger={0.1}
        delay={0.1}
        className="flex flex-col"
        style={{ gap: "var(--space-2xl)" }}
      >
        {steps.map((step) => (
          <StaggerItem key={step.num} direction="up" distance={20}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "var(--space-xl)",
                alignItems: "start",
                borderBottom: "1px solid var(--color-rule)",
                paddingBottom: "var(--space-2xl)",
              }}
            >
              {/* Number + Title */}
              <div style={{ minWidth: "120px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                    letterSpacing: "0.08em",
                    fontVariantNumeric: "tabular-nums",
                    display: "block",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  {step.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "var(--text-xl)",
                    letterSpacing: "-0.02em",
                    color: "var(--color-ink)",
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Content */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.6,
                    marginBottom: "var(--space-md)",
                  }}
                >
                  {step.what}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-accent)",
                    lineHeight: 1.5,
                  }}
                >
                  You receive: {step.youReceive}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <style>{`
        @media (max-width: 640px) {
          #process [style*="grid-template-columns: auto 1fr"] {
            grid-template-columns: 1fr !important;
          }
          #process [style*="min-width: 120px"] {
            min-width: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
