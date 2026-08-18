"use client";

import { InfiniteMovingCards, Card } from "./ui/infinite-moving-cards";
import { FadeIn, MaskReveal } from "./ui/motion";

const almooPrinciples: Card[] = [
  {
    quote: "Every business has a different problem. We start there.",
    name: "Custom by default",
    title: "Strategy",
  },
  {
    quote: "A website should do more than look good. It should move the business forward.",
    name: "Built for purpose",
    title: "Digital Experience",
  },
  {
    quote: "We design around the people who will actually use it.",
    name: "Human first",
    title: "UI / UX",
  },
  {
    quote: "Technology should make growth easier, not more complicated.",
    name: "Growth minded",
    title: "Digital Growth",
  },
  {
    quote: "From first idea to final launch, every detail has a reason.",
    name: "Thoughtful execution",
    title: "Almoo Studio",
  },
];

export default function AlmooApproach() {
  return (
    <section
      style={{
        paddingBlock: "var(--space-4xl)",
        background: "var(--color-paper)",
        overflow: "hidden",
      }}
    >
      <div className="container-narrow" style={{ marginBottom: "var(--space-2xl)" }}>
        <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
          <p
            className="label"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            BUILT AROUND YOU
          </p>
        </FadeIn>

        <MaskReveal direction="up" duration={0.9} delay={0.1}>
          <h2
            className="display-md"
            style={{ maxWidth: "20ch" }}
          >
            Different businesses
            <br />
            different digital needs
            <span style={{ color: "var(--color-accent)" }}>.</span>
          </h2>
        </MaskReveal>
      </div>

      <InfiniteMovingCards
        items={almooPrinciples}
        direction="left"
        speed="slow"
        pauseOnHover
      />
    </section>
  );
}
