"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 50s linear infinite;
}

/* Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, oklch(100% 0 0 / 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, oklch(100% 0 0 / 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    oklch(68% 0.180 40 / 0.15) 0%, 
    oklch(65% 0.200 25 / 0.1) 40%, 
    transparent 70%
  );
}

/* Giant Background Text */
.footer-giant-bg-text {
  font-size: 28vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px oklch(100% 0 0 / 0.05);
  background: linear-gradient(180deg, oklch(100% 0 0 / 0.1) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, var(--color-dark-ink) 0%, oklch(94% 0.006 80 / 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px oklch(68% 0.180 40 / 0.2));
}

/* Footer Button Overrides */
.footer-btn-primary {
  background: oklch(100% 0 0 / 0.9);
  color: var(--color-dark);
}

.footer-btn-primary:hover {
  background: oklch(100% 0 0);
  box-shadow: 0 10px 30px -10px oklch(0% 0 0 / 0.3);
}

.footer-btn-secondary {
  background: transparent !important;
  color: oklch(94% 0.006 80) !important;
  border: 1px solid oklch(100% 0 0 / 0.2) !important;
  font-weight: 500;
}

.footer-btn-secondary:hover {
  background: oklch(100% 0 0 / 0.1) !important;
  border-color: oklch(100% 0 0 / 0.35) !important;
}

.footer-btn-icon {
  background: oklch(100% 0 0 / 0.08) !important;
  color: oklch(94% 0.006 80) !important;
  border: 1px solid oklch(100% 0 0 / 0.15) !important;
}

.footer-btn-icon:hover {
  background: oklch(100% 0 0 / 0.15) !important;
  border-color: oklch(100% 0 0 / 0.25) !important;
}

.footer-btn-icon svg {
  color: oklch(94% 0.006 80) !important;
}

/* Grain overlay for footer */
.footer-grain::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
  pointer-events: none;
  z-index: 1;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-footer-breathe,
  .animate-footer-scroll-marquee {
    animation: none !important;
  }
}
`;

// -------------------------------------------------------------------------
// SOCIAL LINKS CONFIGURATION
// -------------------------------------------------------------------------
const ALMOO_SOCIALS = {
  instagram: "",
  facebook: "",
  tiktok: "",
  x: "",
  youtube: "",
};

// -------------------------------------------------------------------------
// MARQUEE ITEM
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>ALMOO STUDIO</span> <span className="text-[var(--color-accent)]">✦</span>
    <span>WEB</span> <span className="text-[var(--color-accent-2)]">✦</span>
    <span>APP</span> <span className="text-[var(--color-accent)]">✦</span>
    <span>DIGITAL GROWTH</span> <span className="text-[var(--color-accent-2)]">✦</span>
    <span>CUSTOM DIGITAL EXPERIENCES</span> <span className="text-[var(--color-accent)]">✦</span>
    <span>ALMOO STUDIO</span> <span className="text-[var(--color-accent-2)]">✦</span>
  </div>
);

// -------------------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[var(--color-dark)] text-[var(--color-dark-ink)] footer-grain">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            ALMOO.
          </div>

          {/* 1. Diagonal Marquee */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-[var(--color-rule)]/20 bg-[var(--color-dark)]/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-[var(--color-neutral)] uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-8 text-center font-[var(--font-display)]"
            >
              let's build.
            </h2>

            <p className="text-[var(--color-neutral)] text-center max-w-md mb-12 text-sm md:text-base font-[var(--font-body)]">
              Have an idea, a business, or a digital experience that needs to exist?
              <br />
              Let's turn it into something useful, thoughtful, and built around you.
            </p>

            {/* Interactive Magnetic Links */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary CTA */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <Button
                  as="a"
                  href="#inquiry"
                  variant="primary"
                  size="lg"
                  magnetic
                  className="footer-btn-primary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Start a project <span className="almoo-arrow">→</span>
                </Button>
                
                <Button
                  as="a"
                  href="https://wa.me/8801882030873"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  magnetic
                  className="footer-btn-primary"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp <span className="almoo-arrow">→</span>
                </Button>
              </div>

              {/* Secondary Navigation */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <Button
                  as="a"
                  href="#work"
                  variant="ghost"
                  size="md"
                  className="footer-btn-secondary"
                >
                  Work
                </Button>
                <Button
                  as="a"
                  href="#services"
                  variant="ghost"
                  size="md"
                  className="footer-btn-secondary"
                >
                  Services
                </Button>
                <Button
                  as="a"
                  href="#philosophy"
                  variant="ghost"
                  size="md"
                  className="footer-btn-secondary"
                >
                  About
                </Button>
                <Button
                  as="a"
                  href="#inquiry"
                  variant="ghost"
                  size="md"
                  className="footer-btn-secondary"
                >
                  Contact
                </Button>
              </div>

              {/* Email */}
              <a href="mailto:almoo.agency@gmail.com" className="text-[var(--color-neutral)] text-xs md:text-sm font-medium tracking-wider hover:text-[var(--color-accent)] transition-colors mt-4">
                almoo.agency@gmail.com
              </a>

              {/* Social Links */}
              {Object.entries(ALMOO_SOCIALS).filter(([, url]) => url).length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {Object.entries(ALMOO_SOCIALS).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <Button
                        key={platform}
                        as="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                        className="footer-btn-secondary capitalize"
                      >
                        {platform}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* 3. Bottom Bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-[var(--color-neutral)] text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © 2026 Almoo Studio. All rights reserved.
            </div>

            {/* Brand Mark */}
            <div className="text-[var(--color-dark-ink)] font-[var(--font-display)] font-black text-lg md:text-xl tracking-tight order-1 md:order-2">
              Almoo<span className="text-[var(--color-accent)]">.</span>
            </div>

            {/* Tagline */}
            <div className="text-[var(--color-neutral)] text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-3">
              We Build. You Grow.
            </div>

            {/* Back to top */}
            <Button
              variant="icon"
              size="icon"
              onClick={scrollToTop}
              className="footer-btn-icon order-3 md:order-4"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </Button>

          </div>
        </footer>
      </div>
    </>
  );
}
