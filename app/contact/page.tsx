import type { Metadata } from "next";
import Inquiry from "@/components/Inquiry";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Almoo Studio. Start your project with a Bangladesh-based digital agency building websites, web apps, and growth strategies.",
  alternates: {
    canonical: "https://almoo.pro.bd/contact",
  },
  openGraph: {
    title: "Contact | Almoo Studio",
    description:
      "Get in touch with Almoo Studio. Start your project with a Bangladesh-based digital agency.",
    url: "https://almoo.pro.bd/contact",
  },
};

export default function ContactPage() {
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
          Get in Touch
        </p>

        <h1
          className="display-lg"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Let's build<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

        <p
          className="body-text"
          style={{ marginBottom: "var(--space-2xl)", maxWidth: "48ch" }}
        >
          Have an idea, a business, or a digital experience that needs to exist?
          Let's turn it into something useful, thoughtful, and built around you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-xl)",
            marginBottom: "var(--space-4xl)",
            padding: "var(--space-2xl)",
            border: "1px solid var(--color-rule)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "var(--space-xs)",
              }}
            >
              Email
            </p>
            <a
              href="mailto:almoo.agency@gmail.com"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-ink)",
                textDecoration: "none",
              }}
            >
              almoo.agency@gmail.com
            </a>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "var(--space-xs)",
              }}
            >
              WhatsApp
            </p>
            <a
              href="https://wa.me/8801882030873"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-ink)",
                textDecoration: "none",
              }}
            >
              +880 1882-030873
            </a>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "var(--space-xs)",
              }}
            >
              Location
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-ink)",
              }}
            >
              Bangladesh
            </p>
          </div>
        </div>

        <Inquiry />
      </div>
    </section>
  );
}
