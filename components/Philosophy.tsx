"use client";

import { FadeIn, MaskReveal, BlurReveal } from "./ui/motion";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="container-narrow"
      style={{
        paddingBlock: "var(--space-4xl)",
      }}
    >
      <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
        <p className="label" style={{ marginBottom: "var(--space-lg)" }}>
          01 &mdash; The Idea
        </p>
      </FadeIn>

      <MaskReveal direction="up" duration={0.9} delay={0.1}>
        <h2 className="display-lg" style={{ marginBottom: "var(--space-xl)" }}>
          Your business isn&rsquo;t
          <br />
          a template<span style={{ color: "var(--color-accent)" }}>.</span>
        </h2>
      </MaskReveal>

      <BlurReveal duration={0.8} delay={0.3} blur={6} y={15}>
        <p className="body-text" style={{ maxWidth: "50ch" }}>
          We build digital experiences around the way your business actually
          works&mdash;not around a predefined template.
        </p>
      </BlurReveal>
    </section>
  );
}
