# Almoo Studio — Website Audit & Implementation Specification

**Audit type:** Conversion-focused UX / strategy / design / frontend audit
**Project:** Almoo Studio agency website (single-page Next.js site)
**Stack audited:** Next.js 15.1, React 19, TypeScript 5.7, Tailwind 4, GSAP 3.15, Motion 13.1, custom `tokens.css` design system
**Date:** 2026-08-19
**Deliverable:** This document. No production code was changed during the audit.

> **Reading guide.** Sections 1–6 establish *what exists and what is wrong*. Sections 7–16 are the audit and strategy. Sections 17–23 are implementation-ready specs (copy, UI, responsive, motion, conversion, final journey, build spec). Section 24 is the prioritised roadmap. Anything that requires real business data is flagged `NEEDS REAL BUSINESS DATA`.

---

## 1. Executive Summary

Visually, Almoo Studio's site is far above the typical agency template — it has a genuinely art-directed editorial system: warm off-white `#F5F1EB` base, Bricolage Grotesque display type, a restrained coral accent, a consistent easing/motion language, and thoughtful `prefers-reduced-motion` fallbacks. **The problem is not design quality. The problem is conversion architecture.**

As a first-time visitor who has never heard of Almoo Studio, the site does **not** clearly answer the five questions that buy decisions rest on:

1. *Who is this for?* — Unclear. "Websites, web apps, digital growth" is a category list, not a target.
2. *What specific problem does Almoo solve?* — Unclear. Everything says "custom / built around your business", nothing says *the pain* (templates, broken UX, no growth, unclear ownership).
3. *Why should I trust Almoo?* — Weak. The Work section shows mostly empty "Concept Project" placeholders; there is one real project link. No client logos, no results, no testimonials, no case-study narrative.
4. *How do I know this will work?* — Missing. No process, no deliverables, no FAQ, no objection handling.
5. *What happens next?* — Weak. **Every single CTA is a `mailto:` link.** There is no form, no project-inquiry path, no booking, no WhatsApp primary path. The site *cannot* capture a lead in-page.

Compounding this, the final third of the page spends itself on **two identical free-audit offers back-to-back** (`AuditCTA` dark 80vh section, then `Contact` repeats the same dark "Already have a website?" audit card), followed by a full-viewport cinematic footer. The site does not end on a decision; it ends on repetitive atmosphere.

### The three highest-leverage fixes (detail in §24)

| # | Fix | Why it matters |
|---|-----|----------------|
| 1 | **Reposition the hero** around a clear client + concrete outcome, with one primary conversion path | First impression decides everything; today it's a premise with no proof and no "who/what/why us" |
| 2 | **Replace the double audit-CTA ending** with a single strong conversion section + a real project-inquiry form (in-page, not just `mailto`) | Captures leads; removes redundancy; gives the visitor a clear next step |
| 3 | **Add a trust layer:** a real case study section (from the existing jackpot project + **NEEDS REAL BUSINESS DATA**), a concrete process, an FAQ | Converts "nice design studio" into "credible vendor we'd hire" |

**Priority lens used throughout:** Conversion > Understanding > Trust > Navigation > Visual Hierarchy > Accessibility > Performance > Polish.

<!-- @@NEXT@@ -->