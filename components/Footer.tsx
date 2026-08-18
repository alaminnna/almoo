import TextLoop from "./TextLoop";

const socialLinks = [
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "TikTok", url: "#" },
  { name: "X", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "GitHub", url: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-rule)",
        background: "var(--color-paper)",
      }}
    >
      {/* TextLoop banner */}
      <div
        style={{
          background: "var(--color-dark)",
          overflow: "hidden",
          padding: "var(--space-lg) 0",
        }}
      >
        <TextLoop
          text="ALMOO STUDIO"
          shape="wave"
          speed={90}
          direction="forward"
          separator="✦"
          curviness={90}
          fontSize={46}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="var(--color-accent)"
          ribbonWidth={86}
          pauseOnHover
        />
      </div>

      <div className="container-narrow" style={{ paddingBlock: "var(--space-2xl)" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "var(--space-2xl)",
          }}
        >
          {/* Left: wordmark + tagline */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "var(--text-xl)",
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                textDecoration: "none",
              }}
            >
              almoo<span style={{ color: "var(--color-accent)" }}>.</span>
            </a>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                marginTop: "var(--space-xs)",
              }}
            >
              We Build. You Grow.
            </p>
            <p
              className="label"
              style={{
                marginTop: "var(--space-2xs)",
                color: "var(--color-neutral)",
              }}
            >
              Web &bull; App &bull; Digital Growth
            </p>
          </div>

          {/* Right: links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg)",
              textAlign: "right",
            }}
          >
            {/* Social */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-sm) var(--space-lg)",
                justifyContent: "flex-end",
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-ink-2)",
                    textDecoration: "none",
                    transition: "color var(--dur-short) var(--ease-out)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                lineHeight: 1.6,
              }}
            >
              <p>
                Email:{" "}
                <a
                  href="mailto:almoo.agency@gmail.com"
                  style={{
                    color: "var(--color-ink-2)",
                    textDecoration: "none",
                  }}
                >
                  almoo.agency@gmail.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/8801882030873"
                  style={{
                    color: "var(--color-ink-2)",
                    textDecoration: "none",
                  }}
                >
                  01882030873
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            marginTop: "var(--space-2xl)",
            paddingTop: "var(--space-lg)",
            borderTop: "1px solid var(--color-rule)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-sm)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-neutral)",
            }}
          >
            &copy; {new Date().getFullYear()} Almoo Studio. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-neutral)",
            }}
          >
            @almoostudio
          </span>
        </div>
      </div>
    </footer>
  );
}
