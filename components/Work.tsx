"use client";

import { Button } from "./Button";
import { FadeIn, MaskReveal, ScaleReveal, StaggerContainer, StaggerItem } from "./ui/motion";
import MorphSlider from "./ui/morph-slider";
import type { MorphItem } from "./ui/morph-slider";

const projects = [
  {
    num: "01",
    category: "Digital Experience",
    title: "Experimental Concept",
    year: "2026",
    desc: "An experimental web experience exploring interactive storytelling and motion design.",
    image: null,
    images: null,
    link: null,
    isConcept: true,
  },
  {
    num: "02",
    category: "Web Application",
    title: "Experimental Concept",
    year: "2026",
    desc: "A custom dashboard platform built for data-driven decision making.",
    image: null,
    images: null,
    link: null,
    isConcept: true,
  },
  {
    num: "03",
    category: "Brand System",
    title: "Jackpot Brand System",
    year: "2026",
    desc: "A complete visual identity system from logo to digital touchpoints for a casino brand.",
    image: null,
    images: [
      { image: "/jackpot-brand.png", caption: "Home Page" },
      { image: "/jackpot-brand-2.png", caption: "Intro System" },
      { image: "/jackpot-brand-3.png", caption: "About" },
      { image: "/jackpot-brand-4.png", caption: "Menu" },
      { image: "/jackpot-brand-5.png", caption: "Branches" },
      { image: "/jackpot-brand-6.png", caption: "Real reviwes" },
    ] as MorphItem[],
    link: "https://jackpotbd.vercel.app/",
    isConcept: false,
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="container-narrow"
      style={{ paddingBlock: "var(--space-4xl)" }}
    >
      <MaskReveal direction="up" duration={0.9} delay={0}>
        <h2 className="display-md" style={{ marginBottom: "var(--space-3xl)" }}>
          Selected work<span style={{ color: "var(--color-accent)" }}>.</span>
        </h2>
      </MaskReveal>

      <StaggerContainer
        stagger={0.15}
        delay={0.1}
        className="flex flex-col"
        style={{ gap: "var(--space-3xl)" }}
      >
        {projects.map((p, i) => (
          <StaggerItem key={p.num} direction="up" distance={30}>
            <article
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "var(--space-xl)",
                alignItems: "start",
              }}
            >
              {/* Number + category */}
              <div style={{ paddingTop: "var(--space-xs)" }}>
                <FadeIn direction="up" distance={10} duration={0.5} delay={0.1}>
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
                    {p.num}
                  </span>
                </FadeIn>
                <FadeIn direction="up" distance={8} duration={0.5} delay={0.15}>
                  <p
                    className="label"
                    style={{
                      marginTop: "var(--space-2xs)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {p.category}
                  </p>
                </FadeIn>
              </div>

              {/* Content */}
              <div>
                {/* Project image placeholder */}
                <ScaleReveal from={1.05} to={1} duration={0.9} delay={0.05}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      borderRadius: "var(--radius-md)",
                      marginBottom: "var(--space-lg)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {p.images ? (
                      <MorphSlider
                        items={p.images}
                        transition="melt"
                        duration={1.1}
                        autoplay
                        autoplayDelay={4}
                        loop
                        radius={16}
                        showControls
                        showIndicators
                        showCaptions
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.category} project`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "var(--radius-md)",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: `linear-gradient(135deg, var(--color-paper-3) 0%, var(--color-paper-2) 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "var(--text-3xl)",
                            color: "var(--color-rule)",
                            letterSpacing: "-0.02em",
                            textTransform: "lowercase",
                          }}
                        >
                          {p.category.toLowerCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </ScaleReveal>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "var(--space-md)",
                    flexWrap: "wrap",
                  }}
                >
                  <FadeIn direction="up" distance={15} duration={0.6} delay={0.1}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "var(--text-2xl)",
                        letterSpacing: "-0.02em",
                        textTransform: "lowercase",
                      }}
                    >
                      {p.title}
                      {p.isConcept && (
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "var(--text-xs)",
                            color: "var(--color-muted)",
                            textTransform: "none",
                            letterSpacing: "0.06em",
                            marginLeft: "var(--space-sm)",
                            verticalAlign: "middle",
                            border: "1px solid var(--color-rule)",
                            borderRadius: "9999px",
                            padding: "2px 8px",
                          }}
                        >
                          Concept
                        </span>
                      )}
                    </h3>
                  </FadeIn>
                  <FadeIn direction="up" distance={10} duration={0.5} delay={0.15}>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "var(--text-sm)",
                        color: "var(--color-muted)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {p.year}
                    </span>
                  </FadeIn>
                </div>

                <FadeIn direction="up" distance={12} duration={0.6} delay={0.2}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.5,
                      marginTop: "var(--space-sm)",
                      maxWidth: "52ch",
                    }}
                  >
                    {p.desc}
                  </p>
                </FadeIn>

                <FadeIn direction="up" distance={10} duration={0.5} delay={0.25}>
                  {p.link ? (
                    <Button
                      as="a"
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      size="sm"
                      className="mt-4"
                    >
                      View project <span className="almoo-arrow">→</span>
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      size="sm"
                      className="mt-4"
                    >
                      View project <span className="almoo-arrow">→</span>
                    </Button>
                  )}
                </FadeIn>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
