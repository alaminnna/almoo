import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and perspectives on web design, web development, AI automation, and digital growth from Almoo Studio.",
  alternates: {
    canonical: "https://almoo.pro.bd/blog",
  },
  openGraph: {
    title: "Blog | Almoo Studio",
    description:
      "Insights, guides, and perspectives on web design, web development, AI automation, and digital growth.",
    url: "https://almoo.pro.bd/blog",
  },
};

export default function BlogPage() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        padding: "var(--space-4xl) clamp(1.25rem, 5vw, 4rem)",
        background: "var(--color-paper)",
      }}
    >
      <div className="container-narrow">
        <p
          className="label"
          style={{ marginBottom: "var(--space-lg)", color: "var(--color-accent)" }}
        >
          Blog
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Insights &
          <br />
          perspectives<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "48ch" }}
        >
          Thoughts on web design, development, AI, and digital growth from the
          Almoo Studio team.
        </p>

        <div
          style={{
            padding: "var(--space-4xl)",
            border: "1px solid var(--color-rule)",
            borderRadius: "var(--radius-md)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--text-xl)",
              color: "var(--color-ink)",
              marginBottom: "var(--space-md)",
            }}
          >
            Coming soon
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              color: "var(--color-ink-2)",
              maxWidth: "40ch",
              marginInline: "auto",
            }}
          >
            We're working on creating valuable content about web design,
            development, and digital growth. Check back soon for articles and
            guides.
          </p>
        </div>
      </div>
    </section>
  );
}
