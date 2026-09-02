import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Almoo Studio — a Bangladesh-based digital agency building websites, web apps, and growth strategies for businesses worldwide.",
  alternates: {
    canonical: "https://almoo.pro.bd/about",
  },
  openGraph: {
    title: "About | Almoo Studio",
    description:
      "Learn about Almoo Studio — a Bangladesh-based digital agency building websites, web apps, and growth strategies.",
    url: "https://almoo.pro.bd/about",
  },
};

export default function AboutPage() {
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
          About Us
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Built with
          <br />
          curiosity<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "52ch" }}
        >
          Almoo Studio is a Bangladesh-based digital agency that builds websites,
          web applications, and growth strategies for businesses in Bangladesh
          and worldwide. We focus on creating thoughtful digital experiences,
          intelligent systems, and products that help businesses grow.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-3xl)",
            marginBottom: "var(--space-4xl)",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "var(--text-xl)",
                letterSpacing: "-0.01em",
                marginBottom: "var(--space-lg)",
              }}
            >
              What we do
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Custom website design and development",
                "Web application development",
                "UI/UX design",
                "AI automation solutions",
                "Digital growth strategies",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-ink-2)",
                    padding: "var(--space-sm) 0",
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "var(--text-xl)",
                letterSpacing: "-0.01em",
                marginBottom: "var(--space-lg)",
              }}
            >
              How we work
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Discovery-first approach",
                "Transparent communication",
                "Quality over speed",
                "Long-term partnerships",
                "Continuous improvement",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-ink-2)",
                    padding: "var(--space-sm) 0",
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-3xl)",
            marginBottom: "var(--space-4xl)",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "var(--text-xl)",
                letterSpacing: "-0.01em",
                marginBottom: "var(--space-lg)",
              }}
            >
              The founder
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "var(--text-lg)",
                color: "var(--color-ink)",
                marginBottom: "var(--space-xs)",
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
                marginBottom: "var(--space-sm)",
              }}
            >
              Founder
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                letterSpacing: "0.05em",
                marginBottom: "var(--space-lg)",
              }}
            >
              AI &bull; Web &bull; Open Source
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
                maxWidth: "48ch",
              }}
            >
              Driven by technology. Focused on creating thoughtful digital
              experiences, intelligent systems, and products that help businesses
              grow.
            </p>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "var(--text-xl)",
                letterSpacing: "-0.01em",
                marginBottom: "var(--space-lg)",
              }}
            >
              Our scope
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Bangladesh-based",
                "International clients",
                "Startups to enterprises",
                "Custom solutions only",
                "No templates",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-ink-2)",
                    padding: "var(--space-sm) 0",
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            padding: "var(--space-3xl)",
            border: "1px solid var(--color-rule)",
            borderRadius: "var(--radius-md)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "var(--text-3xl)",
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-lg)",
            }}
          >
            Ready to work together?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              color: "var(--color-ink-2)",
              marginBottom: "var(--space-xl)",
              maxWidth: "48ch",
              marginInline: "auto",
            }}
          >
            Let's discuss your project and see how we can help you achieve your
            goals.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              color: "var(--color-paper)",
              background: "var(--color-ink)",
              padding: "var(--space-sm) var(--space-xl)",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Start a project <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
