import type { Metadata } from "next";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const services: Record<
  string,
  {
    title: string;
    description: string;
    metaDescription: string;
    h1: string;
    intro: string;
    includes: string[];
    forWho: string[];
    problems: string[];
    approach: string[];
    technologies: string[];
  }
> = {
  "web-design": {
    title: "Web Design",
    description:
      "Custom website design that communicates clearly, looks credible, and converts visitors into customers.",
    metaDescription:
      "Almoo Studio creates custom website designs for businesses in Bangladesh. We build responsive, conversion-focused websites that communicate your brand effectively.",
    h1: "Web Design that converts",
    intro:
      "Your website is often the first impression customers have of your business. We design websites that not only look great but also communicate clearly and drive results. Every design decision is made with your business goals in mind.",
    includes: [
      "Custom visual design aligned with your brand",
      "Responsive design for all devices",
      "Conversion-focused layout and CTAs",
      "Accessibility-first approach",
      "Performance-optimized design",
      "SEO-friendly structure",
    ],
    forWho: [
      "Businesses needing a new website",
      "Companies looking to redesign their existing site",
      "Startups building their online presence",
      "Organizations wanting to improve conversions",
    ],
    problems: [
      "Outdated or unprofessional website design",
      "Poor mobile experience",
      "Low conversion rates",
      "Difficulty communicating value proposition",
      "Inconsistent brand presentation online",
    ],
    approach: [
      "Discovery and research phase",
      "Wireframing and prototyping",
      "Visual design creation",
      "Client review and refinement",
      "Development-ready handoff",
      "Post-launch support",
    ],
    technologies: [
      "Figma",
      "Adobe Creative Suite",
      "Tailwind CSS",
      "Next.js",
      "React",
      "WordPress",
    ],
  },
  "web-development": {
    title: "Web Development",
    description:
      "Full-stack web development using modern technologies to build fast, scalable, and maintainable websites.",
    metaDescription:
      "Almoo Studio provides full-stack web development services in Bangladesh. We build fast, scalable websites using Next.js, React, and modern technologies.",
    h1: "Web Development that scales",
    intro:
      "We build websites that are fast, secure, and built to grow with your business. Using modern technologies and best practices, we ensure your website performs at its best across all devices and traffic conditions.",
    includes: [
      "Custom web development",
      "Responsive implementation",
      "Performance optimization",
      "SEO technical implementation",
      "CMS integration",
      "Analytics setup",
    ],
    forWho: [
      "Businesses needing custom website functionality",
      "Companies requiring performance optimization",
      "Organizations with specific technical requirements",
      "Businesses scaling their digital presence",
    ],
    problems: [
      "Slow website performance",
      "Poor search engine rankings",
      "Security vulnerabilities",
      "Difficulty managing content",
      "Scalability limitations",
    ],
    approach: [
      "Technical architecture planning",
      "Frontend development",
      "Backend development",
      "Testing and quality assurance",
      "Deployment and launch",
      "Ongoing maintenance and support",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Vercel",
    ],
  },
  "web-applications": {
    title: "Web Applications",
    description:
      "Custom digital products, dashboards, and platforms built for businesses that need more than off-the-shelf software.",
    metaDescription:
      "Almoo Studio builds custom web applications, SaaS platforms, and digital products for businesses in Bangladesh. Tailored solutions for your specific needs.",
    h1: "Web Applications built for you",
    intro:
      "When off-the-shelf software doesn't fit your workflow, we build custom web applications that do. From internal dashboards to customer-facing platforms, we create solutions that streamline your operations and serve your users.",
    includes: [
      "Custom web application development",
      "SaaS platform development",
      "Dashboard and admin panels",
      "API development and integration",
      "Real-time features",
      "User authentication and authorization",
    ],
    forWho: [
      "Businesses with unique workflow requirements",
      "Startups building SaaS products",
      "Companies needing custom dashboards",
      "Organizations automating internal processes",
    ],
    problems: [
      "Off-the-shelf software doesn't fit your workflow",
      "Need for custom business logic",
      "Data management challenges",
      "Process automation needs",
      "Scalability limitations of existing tools",
    ],
    approach: [
      "Requirements gathering",
      "Architecture design",
      "Iterative development",
      "User testing and feedback",
      "Deployment and scaling",
      "Ongoing support and updates",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and effective digital experiences.",
    metaDescription:
      "Almoo Studio provides UI/UX design services for businesses in Bangladesh. We create intuitive, engaging digital experiences that users love.",
    h1: "UI/UX Design that delights",
    intro:
      "Great design is invisible — it just works. We create user interfaces that are intuitive, engaging, and effective. Our design process focuses on understanding your users and creating experiences that meet their needs while achieving your business goals.",
    includes: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing",
      "Design system creation",
    ],
    forWho: [
      "Products needing better user experience",
      "Apps with complex user flows",
      "Businesses wanting to improve user satisfaction",
      "Startups building their first product",
    ],
    problems: [
      "High user drop-off rates",
      "Confusing navigation or workflows",
      "Low user engagement",
      "Poor accessibility",
      "Inconsistent user experience",
    ],
    approach: [
      "User research and persona creation",
      "Information architecture planning",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing and iteration",
      "Design system documentation",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Maze",
      "Hotjar",
    ],
  },
  "ai-automation": {
    title: "AI Automation",
    description:
      "Intelligent automation solutions that streamline operations and unlock new possibilities for businesses.",
    metaDescription:
      "Almoo Studio provides AI automation solutions for businesses in Bangladesh. Streamline operations with intelligent automation, chatbots, and AI-powered tools.",
    h1: "AI Automation that works",
    intro:
      "Artificial intelligence isn't just for tech giants. We help businesses leverage AI to automate repetitive tasks, gain insights from data, and create smarter workflows. Our AI solutions are practical, accessible, and designed to deliver real business value.",
    includes: [
      "AI chatbot development",
      "Process automation",
      "Data analysis and insights",
      "Document processing automation",
      "Recommendation systems",
      "Custom AI solutions",
    ],
    forWho: [
      "Businesses with repetitive manual tasks",
      "Companies wanting to leverage their data",
      "Organizations looking to improve efficiency",
      "Businesses exploring AI for the first time",
    ],
    problems: [
      "Time-consuming manual processes",
      "Difficulty scaling operations",
      "Missed insights from data",
      "Inconsistent service delivery",
      "High operational costs",
    ],
    approach: [
      "Process analysis and opportunity identification",
      "Solution design and planning",
      "AI model development",
      "Integration and testing",
      "Deployment and monitoring",
      "Continuous improvement",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "OpenAI API",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
    ],
  },
  "digital-growth": {
    title: "Digital Growth",
    description:
      "Strategic digital growth solutions including SEO, analytics, and conversion optimization.",
    metaDescription:
      "Almoo Studio provides digital growth services for businesses in Bangladesh. SEO, analytics, conversion optimization, and data-driven strategies to grow your business.",
    h1: "Digital Growth that compounds",
    intro:
      "Having a great website is just the beginning. We help businesses grow their digital presence through strategic SEO, analytics, and conversion optimization. Our data-driven approach ensures every decision is backed by evidence.",
    includes: [
      "SEO strategy and implementation",
      "Analytics setup and reporting",
      "Conversion rate optimization",
      "Content strategy",
      "Performance monitoring",
      "A/B testing",
    ],
    forWho: [
      "Businesses wanting to increase organic traffic",
      "Companies looking to improve conversions",
      "Organizations needing better data insights",
      "Businesses scaling their digital marketing",
    ],
    problems: [
      "Low organic search traffic",
      "Poor conversion rates",
      "Difficulty measuring digital performance",
      "Inconsistent lead generation",
      "High customer acquisition costs",
    ],
    approach: [
      "Audit and analysis",
      "Strategy development",
      "Implementation",
      "Monitoring and reporting",
      "Optimization and iteration",
      "Long-term growth planning",
    ],
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Hotjar",
      "Google Optimize",
    ],
  },
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `https://almoo.pro.bd/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Almoo Studio`,
      description: service.metaDescription,
      url: `https://almoo.pro.bd/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
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
            Service not found
          </h1>
          <Link
            href="/services"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              color: "var(--color-accent)",
              textDecoration: "none",
            }}
          >
            ← Back to services
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
          href="/services"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--color-muted)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "var(--space-2xl)",
          }}
        >
          ← All services
        </Link>

        <p
          className="label"
          style={{
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
          }}
        >
          {service.title}
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          {service.h1}
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-4xl)", maxWidth: "52ch" }}
        >
          {service.intro}
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
              What this includes
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {service.includes.map((item) => (
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
              Who this is for
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {service.forWho.map((item) => (
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
              Problems we solve
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {service.problems.map((item) => (
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
              Our approach
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {service.approach.map((item) => (
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
            Technologies we use
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
            {service.technologies.map((tech) => (
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
            Ready to get started?
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
