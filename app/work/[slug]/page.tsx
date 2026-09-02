import type { Metadata } from "next";
import Link from "next/link";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

const projects: Record<
  string,
  {
    title: string;
    category: string;
    year: string;
    description: string;
    metaDescription: string;
    isConcept: boolean;
    overview: string;
    problem: string;
    objective: string;
    approach: string[];
    technologies: string[];
  }
> = {
  "immersive-web-concept": {
    title: "Immersive Web Concept",
    category: "Digital Experience",
    year: "2026",
    description:
      "An experimental web experience exploring interactive storytelling and motion design.",
    metaDescription:
      "Explore Almoo Studio's immersive web concept — an experimental digital experience showcasing interactive storytelling and motion design.",
    isConcept: true,
    overview:
      "An experimental web experience that pushes the boundaries of what's possible on the web. This concept explores interactive storytelling, motion design, and immersive user experiences.",
    problem:
      "Traditional websites often fail to engage users emotionally. We wanted to explore how motion, interaction, and storytelling can create a more memorable and engaging digital experience.",
    objective:
      "Create an experimental web experience that demonstrates the possibilities of modern web technologies while maintaining performance and accessibility.",
    approach: [
      "Conceptualize interactive narrative structure",
      "Design motion-first user experience",
      "Implement custom animations and transitions",
      "Optimize for performance across devices",
      "Ensure accessibility without compromising creativity",
    ],
    technologies: ["Next.js", "React", "GSAP", "Three.js", "Tailwind CSS"],
  },
  "treactly-saas-platform": {
    title: "Treactly — SaaS Platform",
    category: "Web Application",
    year: "2026",
    description:
      "A modern SaaS landing page with real-time tracking, analytics dashboard, and seamless user experience.",
    metaDescription:
      "Explore Almoo Studio's Treactly SaaS platform concept — featuring real-time tracking, analytics dashboard, and seamless user experience.",
    isConcept: true,
    overview:
      "A modern SaaS platform concept designed to showcase how a tracking and analytics product should look and feel. The design focuses on clarity, trust, and ease of use.",
    problem:
      "Many SaaS landing pages fail to communicate value clearly or overwhelm users with information. We wanted to create a clean, focused experience that guides users toward conversion.",
    objective:
      "Design a SaaS landing page that communicates value clearly, builds trust, and drives conversions through a seamless user experience.",
    approach: [
      "Research SaaS landing page best practices",
      "Design clear value proposition hierarchy",
      "Create trust-building social proof sections",
      "Implement smooth scrolling and transitions",
      "Optimize for conversion at every touchpoint",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  "jackpot-brand-system": {
    title: "Jackpot Brand System",
    category: "Brand System",
    year: "2026",
    description:
      "A complete visual identity system from logo to digital touchpoints for a casino brand.",
    metaDescription:
      "Explore Almoo Studio's Jackpot brand system — a complete visual identity from logo to digital touchpoints for a casino brand.",
    isConcept: false,
    overview:
      "A complete brand system for Jackpot, a casino brand. The project encompassed logo design, color palette, typography, and application across digital and physical touchpoints.",
    problem:
      "The casino industry often relies on generic, flashy visuals that fail to differentiate brands. We wanted to create a sophisticated, memorable identity that stands out.",
    objective:
      "Develop a distinctive brand identity that communicates luxury, excitement, and trust while maintaining consistency across all touchpoints.",
    approach: [
      "Research casino brand landscape",
      "Develop brand strategy and positioning",
      "Create logo and visual identity system",
      "Design application guidelines",
      "Implement across digital touchpoints",
      "Create brand guidelines documentation",
    ],
    technologies: ["Figma", "Adobe Illustrator", "After Effects", "Next.js"],
  },
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.metaDescription,
    alternates: {
      canonical: `https://almoo.pro.bd/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Almoo Studio`,
      description: project.metaDescription,
      url: `https://almoo.pro.bd/work/${slug}`,
    },
  };
}

export default async function WorkProjectPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-4xl) clamp(1.25rem, 5vw, 4rem)",
          background: "var(--color-paper)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 className="display-md" style={{ marginBottom: "var(--space-xl)" }}>
            Project not found
          </h1>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              color: "var(--color-accent)",
              textDecoration: "none",
            }}
          >
            ← Back to work
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        minHeight: "100dvh",
        padding: "var(--space-4xl) clamp(1.25rem, 5vw, 4rem)",
        background: "var(--color-paper)",
      }}
    >
      <div className="container-narrow">
        <Link
          href="/work"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--color-muted)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "var(--space-2xl)",
          }}
        >
          ← All work
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "var(--space-md)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <p
            className="label"
            style={{ color: "var(--color-accent)" }}
          >
            {project.category}
          </p>
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
              Concept Project
            </span>
          )}
        </div>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          {project.title.toLowerCase()}
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "52ch" }}
        >
          {project.overview}
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
              The problem
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
              }}
            >
              {project.problem}
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
              The objective
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
              }}
            >
              {project.objective}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "var(--space-4xl)" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--text-xl)",
              letterSpacing: "-0.01em",
              marginBottom: "var(--space-lg)",
            }}
          >
            Our approach
          </h2>
          <ol
            style={{
              listStyle: "decimal",
              padding: "0 0 0 var(--space-xl)",
              margin: 0,
            }}
          >
            {project.approach.map((step) => (
              <li
                key={step}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-ink-2)",
                  padding: "var(--space-sm) 0",
                  lineHeight: 1.65,
                }}
              >
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div style={{ marginBottom: "var(--space-4xl)" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--text-xl)",
              letterSpacing: "-0.01em",
              marginBottom: "var(--space-lg)",
            }}
          >
            Technologies used
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-2)",
                  padding: "var(--space-xs) var(--space-md)",
                  border: "1px solid var(--color-rule)",
                  borderRadius: "9999px",
                }}
              >
                {tech}
              </span>
            ))}
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
            Like what you see?
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
