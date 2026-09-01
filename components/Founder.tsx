"use client";

import ProfileCard from "./ui/ProfileCard";
import { FadeIn, MaskReveal, BlurReveal, StaggerContainer, StaggerItem } from "./ui/motion";
import { Button } from "./Button";

export default function Founder() {
  return (
    <section
      id="founder"
      className="container-narrow"
      style={{
        paddingBlock: "var(--space-4xl)",
        background: "var(--color-paper)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-4xl)",
          alignItems: "center",
        }}
        className="founder-grid"
      >
        {/* Left — Text content */}
        <div>
          <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
            <p className="label" style={{ marginBottom: "var(--space-lg)" }}>
              THE FOUNDER
            </p>
          </FadeIn>

          <MaskReveal direction="up" duration={0.9} delay={0.1}>
            <h2
              className="display-lg"
              style={{ marginBottom: "var(--space-xl)" }}
            >
              Built with
              <br />
              curiosity<span style={{ color: "var(--color-accent)" }}>.</span>
            </h2>
          </MaskReveal>

          <BlurReveal duration={0.8} delay={0.3} blur={6} y={15}>
            <p
              className="body-text"
              style={{
                maxWidth: "48ch",
                marginBottom: "var(--space-xl)",
              }}
            >
              Driven by technology. Focused on creating thoughtful digital
              experiences, intelligent systems, and products that help
              businesses grow.
            </p>
          </BlurReveal>

          <BlurReveal duration={0.8} delay={0.4} blur={6} y={15}>
            <p
              className="body-text"
              style={{
                maxWidth: "48ch",
                marginBottom: "var(--space-2xl)",
              }}
            >
              Almoo Studio is founded by Al A Min&mdash;an AI Developer, Full
              Stack Web Developer and Open Source Builder focused on building
              thoughtful digital experiences, intelligent systems and products
              that help businesses grow.
            </p>
          </BlurReveal>

          {/* Founder details */}
          <StaggerContainer stagger={0.08} delay={0.5}>
            <StaggerItem direction="up" distance={10}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "var(--text-lg)",
                    color: "var(--color-ink)",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Al A Min
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-ink-2)",
                    margin: 0,
                  }}
                >
                  Founder
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    margin: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  AI &bull; Web &bull; Open Source
                </p>
              </div>
            </StaggerItem>

            <StaggerItem direction="up" distance={10}>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-2xl)",
                }}
              >
                <Button
                  as="a"
                  href="#inquiry"
                  variant="secondary"
                  size="md"
                  magnetic
                >
                  Start a project <span className="almoo-arrow">→</span>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right — ProfileCard */}
        <FadeIn
          direction="up"
          distance={50}
          duration={0.9}
          delay={0.2}
          className="founder-card-wrapper"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfileCard
              name="Al A Min"
              title="Founder"
              handle="almoostudio"
              status="Building Almoo Studio"
              contactText="Let's Talk"
              avatarUrl="/founder.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              onContactClick={() => {
                const inquirySection = document.getElementById("inquiry");
                if (inquirySection) {
                  inquirySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-3xl) !important;
          }
          .founder-card-wrapper {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
