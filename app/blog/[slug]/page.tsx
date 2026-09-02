import type { Metadata } from "next";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: `Read about ${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} on the Almoo Studio blog.`,
    alternates: {
      canonical: `https://almoo.pro.bd/blog/${slug}`,
    },
    openGraph: {
      title: `${slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} | Almoo Studio Blog`,
      description: `Read about ${slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} on the Almoo Studio blog.`,
      url: `https://almoo.pro.bd/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

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
          href="/blog"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--color-muted)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "var(--space-2xl)",
          }}
        >
          ← All articles
        </Link>

        <p
          className="label"
          style={{
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
          }}
        >
          Blog
        </p>

        <h1
          className="display-md"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>

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
            Article coming soon
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
            This article is currently being written. Check back soon for the
            full content.
          </p>
        </div>
      </div>
    </section>
  );
}
