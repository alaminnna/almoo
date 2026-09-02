import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Almoo Studio offers web design, web development, web applications, UI/UX design, AI automation, and digital growth solutions for businesses in Bangladesh and worldwide.",
  alternates: {
    canonical: "https://almoo.pro.bd/services",
  },
  openGraph: {
    title: "Services | Almoo Studio",
    description:
      "Almoo Studio offers web design, web development, web applications, UI/UX design, AI automation, and digital growth solutions.",
    url: "https://almoo.pro.bd/services",
  },
};

const services = [
  {
    slug: "web-design",
    title: "Web Design",
    description:
      "Custom website design that communicates clearly, looks credible, and converts visitors into customers.",
    icon: "🎨",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Full-stack web development using modern technologies to build fast, scalable, and maintainable websites.",
    icon: "⚡",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    description:
      "Custom digital products, dashboards, and platforms built for businesses that need more than off-the-shelf software.",
    icon: "🚀",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and effective digital experiences.",
    icon: "✨",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent automation solutions that streamline operations and unlock new possibilities for businesses.",
    icon: "🤖",
  },
  {
    slug: "digital-growth",
    title: "Digital Growth",
    description:
      "Strategic digital growth solutions including SEO, analytics, and conversion optimization.",
    icon: "📈",
  },
];

export default function ServicesPage() {
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
          What We Build
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Our services<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "48ch" }}
        >
          We design and build digital products that help businesses grow. Every
          project is built around your specific needs — no templates, no
          cookie-cutter solutions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              style={{
                display: "block",
                padding: "var(--space-2xl)",
                border: "1px solid var(--color-rule)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--color-ink)",
                transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span style={{ fontSize: "2rem", marginBottom: "var(--space-md)", display: "block" }}>
                {service.icon}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "var(--text-2xl)",
                  letterSpacing: "-0.02em",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.5,
                }}
              >
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
