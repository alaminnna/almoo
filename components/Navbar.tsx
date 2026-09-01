"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "About", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);

      if (currentY < 10) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: open ? 210 : 200,
          transition: "background 350ms ease, transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled
            ? "rgba(245, 241, 235, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <nav
          className="flex items-center justify-between"
          style={{
            padding: "0 clamp(1.5rem, 5vw, 5rem)",
            height: "72px",
            maxWidth: "88rem",
            marginInline: "auto",
          }}
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
              textDecoration: "none",
            }}
          >
            almoo<span style={{ color: "var(--color-accent)" }}>.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: "var(--space-2xl)" }}>
            <ul
              className="flex items-center"
              style={{
                gap: "var(--space-2xl)",
                listStyle: "none",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                letterSpacing: "0.01em",
                margin: 0,
                padding: 0,
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link-editorial"
                    style={{
                      color: "var(--color-ink-2)",
                      textDecoration: "none",
                      position: "relative",
                      paddingBottom: "2px",
                      transition: "color 250ms ease",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#inquiry"
              className="nav-cta-editorial"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.625rem 1.5rem",
                border: "1px solid var(--color-rule)",
                borderRadius: "9999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 350ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Start a Project
              <span className="nav-cta-arrow-editorial" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-xs)",
              color: "var(--color-ink)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="15" y2="16" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 205,
              background: "rgba(245, 241, 235, 0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <nav
              aria-label="Mobile navigation"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-2xl)",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-2xl)",
                }}
              >
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "var(--text-3xl)",
                        color: "var(--color-ink)",
                        textDecoration: "none",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#inquiry"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: NAV_LINKS.length * 0.06,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
                  marginTop: "var(--space-lg)",
                }}
              >
                Start a Project <span aria-hidden="true">→</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-editorial::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--color-accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link-editorial:hover {
          color: var(--color-ink) !important;
        }
        .nav-link-editorial:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-cta-editorial:hover {
          background: var(--color-ink);
          color: var(--color-paper) !important;
          border-color: var(--color-ink);
        }
        .nav-cta-editorial:hover .nav-cta-arrow-editorial {
          transform: translateX(3px);
        }
        .nav-cta-arrow-editorial {
          display: inline-block;
          transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link-editorial:focus-visible,
        .nav-cta-editorial:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link-editorial::after,
          .nav-cta-editorial,
          .nav-cta-arrow-editorial {
            transition: none !important;
          }
          .nav-cta-editorial:hover .nav-cta-arrow-editorial {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}
