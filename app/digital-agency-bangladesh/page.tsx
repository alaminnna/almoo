import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Agency in Bangladesh",
  description:
    "Almoo Studio is a digital agency based in Bangladesh building websites, web apps, AI automation, and digital growth solutions for businesses in Bangladesh and worldwide.",
  alternates: {
    canonical: "https://almoo.pro.bd/digital-agency-bangladesh",
  },
  openGraph: {
    title: "Digital Agency in Bangladesh | Almoo Studio",
    description:
      "Almoo Studio is a digital agency based in Bangladesh building websites, web apps, AI automation, and digital growth solutions.",
    url: "https://almoo.pro.bd/digital-agency-bangladesh",
  },
};

export default function DigitalAgencyBangladeshPage() {
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
          Bangladesh
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Digital agency in
          <br />
          Bangladesh<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "52ch" }}
        >
          Almoo Studio is a Bangladesh-based digital agency building websites,
          web applications, AI automation systems, and digital growth solutions
          for businesses in Bangladesh and worldwide. We focus on creating
          thoughtful digital experiences, intelligent systems, and products that
          help businesses grow.
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
              Web design & development
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
                marginBottom: "var(--space-lg)",
              }}
            >
              Custom website design and development for businesses that need a
              website that communicates clearly, looks credible, and converts
              visitors into customers.
            </p>
            <Link
              href="/services/web-design"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Learn more →
            </Link>
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
              Web applications
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
                marginBottom: "var(--space-lg)",
              }}
            >
              Custom digital products, dashboards, and platforms built for
              businesses that need more than off-the-shelf software.
            </p>
            <Link
              href="/services/web-applications"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Learn more →
            </Link>
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
              AI automation
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
                marginBottom: "var(--space-lg)",
              }}
            >
              Intelligent automation solutions that streamline operations and
              unlock new possibilities for businesses.
            </p>
            <Link
              href="/services/ai-automation"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Learn more →
            </Link>
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
              Digital growth
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
                marginBottom: "var(--space-lg)",
              }}
            >
              Strategic digital growth solutions including SEO, analytics, and
              conversion optimization.
            </p>
            <Link
              href="/services/digital-growth"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Learn more →
            </Link>
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
              Why choose Almoo Studio
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Bangladesh-based with international standards",
                "Custom solutions, no templates",
                "Modern technologies and best practices",
                "Focus on results and ROI",
                "Transparent communication",
                "Long-term partnerships",
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
              Industries we serve
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "E-commerce and retail",
                "Technology and SaaS",
                "Healthcare",
                "Education",
                "Finance and banking",
                "Real estate",
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
            Ready to start your project?
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
