import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Almoo Studio's portfolio of web design, web development, and digital product projects for businesses in Bangladesh and worldwide.",
  alternates: {
    canonical: "https://almoo.pro.bd/work",
  },
  openGraph: {
    title: "Work | Almoo Studio",
    description:
      "Explore Almoo Studio's portfolio of web design, web development, and digital product projects.",
    url: "https://almoo.pro.bd/work",
  },
};

const projects = [
  {
    slug: "immersive-web-concept",
    title: "Immersive Web Concept",
    category: "Digital Experience",
    year: "2026",
    description:
      "An experimental web experience exploring interactive storytelling and motion design.",
    isConcept: true,
  },
  {
    slug: "treactly-saas-platform",
    title: "Treactly — SaaS Platform",
    category: "Web Application",
    year: "2026",
    description:
      "A modern SaaS landing page with real-time tracking, analytics dashboard, and seamless user experience.",
    isConcept: true,
  },
  {
    slug: "jackpot-brand-system",
    title: "Jackpot Brand System",
    category: "Brand System",
    year: "2026",
    description:
      "A complete visual identity system from logo to digital touchpoints for a casino brand.",
    isConcept: false,
  },
];

export default function WorkPage() {
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
          Selected Work
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Our work<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "48ch" }}
        >
          A selection of projects we've worked on — from concept experiments to
          full brand systems.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3xl)",
          }}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              style={{
                display: "block",
                textDecoration: "none",
                color: "var(--color-ink)",
                borderBottom: "1px solid var(--color-rule)",
                paddingBottom: "var(--space-3xl)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-md)" }}>
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
                    {project.category}
                  </span>
                  {project.isConcept && (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "var(--text-xs)",
                        color: "var(--color-muted)",
                        border: "1px solid var(--color-rule)",
                        borderRadius: "9999px",
                        padding: "2px 8px",
                      }}
                    >
                      Concept
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {project.year}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                  textTransform: "lowercase",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.5,
                  maxWidth: "52ch",
                }}
              >
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
