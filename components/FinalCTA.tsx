"use client";

import { Button } from "./Button";
import { MaskReveal, FadeIn } from "./ui/motion";

export default function FinalCTA() {
  return (
    <section
      className="container-narrow"
      style={{
        paddingBlock: "var(--space-4xl)",
        textAlign: "center",
        background: "var(--color-paper)",
      }}
    >
      <MaskReveal direction="up" duration={1.0} delay={0}>
        <h2
          className="display-xl"
          style={{
            maxWidth: "20ch",
            marginInline: "auto",
            textTransform: "lowercase",
          }}
        >
          let&rsquo;s build
          <br />
          something custom
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </h2>
      </MaskReveal>

      <FadeIn direction="up" distance={10} duration={0.6} delay={0.2}>
        <p
          className="label"
          style={{
            marginTop: "var(--space-xl)",
            color: "var(--color-accent)",
            letterSpacing: "0.18em",
          }}
        >
          We Build. You Grow.
        </p>
      </FadeIn>

      <FadeIn direction="up" distance={15} duration={0.7} delay={0.3}>
        <Button
          as="a"
          href="mailto:almoo.agency@gmail.com?subject=Free%20Audit%20Request"
          variant="primary"
          size="lg"
          magnetic
          className="mt-8"
        >
          Get a free audit <span className="almoo-arrow">→</span>
        </Button>
      </FadeIn>
    </section>
  );
}
