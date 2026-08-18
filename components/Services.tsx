"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem, MaskReveal } from "./ui/motion";

const services = [
  {
    num: "01",
    title: "Web",
    desc: "Custom websites, web applications, and platforms built around your business.",
  },
  {
    num: "02",
    title: "App",
    desc: "Native and cross-platform mobile applications designed for your users.",
  },
  {
    num: "03",
    title: "Digital Growth",
    desc: "SEO, strategy, and digital solutions that help your business reach further.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        paddingBlock: "var(--space-4xl)",
        background: "var(--color-paper)",
      }}
    >
      <div className="container-narrow">
        <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
          <p className="label" style={{ marginBottom: "var(--space-2xl)" }}>
            What We Build
          </p>
        </FadeIn>

        <StaggerContainer
          stagger={0.12}
          delay={0.1}
          className="flex flex-col"
          style={{ gap: "var(--space-3xl)" }}
        >
          {services.map((s, i) => (
            <StaggerItem key={s.num} direction="up" distance={25}>
              <a
                href="#audit"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "var(--color-ink)",
                  borderBottom: "1px solid var(--color-rule)",
                  paddingBottom: "var(--space-xl)",
                  transition: "padding var(--dur-short) var(--ease-out)",
                  paddingLeft:
                    hovered === i ? "var(--space-md)" : "var(--space-3xs)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--space-lg)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "var(--text-sm)",
                      color: "var(--color-muted)",
                      letterSpacing: "0.08em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {s.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(2.5rem, 5vw + 1rem, 5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      textTransform: "lowercase",
                      transition:
                        "color var(--dur-short) var(--ease-out)",
                      color:
                        hovered === i
                          ? "var(--color-ink)"
                          : "var(--color-ink)",
                    }}
                  >
                    {s.title}
                  </h3>
                </div>

                <div
                  style={{
                    marginTop: "var(--space-sm)",
                    marginLeft: "calc(var(--text-sm) + var(--space-lg))",
                    maxHeight: hovered === i ? "80px" : "0",
                    overflow: "hidden",
                    opacity: hovered === i ? 1 : 0,
                    transition:
                      "max-height var(--dur-long) var(--ease-out), opacity var(--dur-short) var(--ease-out)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.5,
                      maxWidth: "48ch",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
