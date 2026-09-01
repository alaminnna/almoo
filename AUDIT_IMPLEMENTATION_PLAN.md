# Almoo Studio — Audit Implementation Plan

**Source:** prompt.md (1462-line audit spec)
**Date:** 2026-08-19
**Priority lens:** Conversion > Understanding > Trust > Navigation > Visual Hierarchy > Accessibility > Performance > Polish

---

## A. Current Problems & Solutions

### 1. Hero — Strategically Unclear

| | |
|---|---|
| **Existing behavior** | Headline: "Digital experiences, built around your business." — vague category list. Eyebrow: "ALMOO STUDIO" — no audience. Supporting copy is generic agency language. |
| **Why it matters** | First impression decides everything. Visitor cannot answer "who is this for?" or "what problem does it solve?" |
| **Affected component** | `components/Hero.tsx` |
| **Affected file** | `components/Hero.tsx:8-250` |
| **Expected solution** | New headline communicating audience + problem + outcome. New eyebrow identifying target. Clear CTAs: "Start a Project" (primary) + "See Our Work" (secondary). Trust signal. |
| **Verification** | A first-time visitor can answer "who is this for?" and "what does Almoo do?" within 3 seconds. |

### 2. CTA Architecture — Every CTA is mailto:

| | |
|---|---|
| **Existing behavior** | All CTAs link to `mailto:almoo.agency@gmail.com`. No in-page form. No project inquiry flow. |
| **Why it matters** | Cannot capture leads in-page. Email is high-friction. No structured qualification. |
| **Affected components** | `Hero.tsx`, `AuditCTA.tsx`, `Contact.tsx`, `Founder.tsx`, `FinalCTA.tsx`, `CinematicFooter.tsx` |
| **Affected files** | All above + new `components/Inquiry.tsx` |
| **Expected solution** | Primary CTA: "Start a Project" → scrolls to inquiry section/form. Secondary CTA: "See Our Work". Inquiry form with validation, states, submission. Replace mailto with form trigger. |
| **Verification** | Click "Start a Project" → form appears → fill out → submit → success state. |

### 3. Duplicate Audit CTA

| | |
|---|---|
| **Existing behavior** | `AuditCTA` (dark 80vh section) + `Contact` (repeats same "Already have a website?" audit card). Two visually different versions of the same offer. |
| **Why it matters** | Redundancy dilutes conversion. Site ends on repetitive atmosphere, not a decision. |
| **Affected components** | `AuditCTA.tsx`, `Contact.tsx` |
| **Affected files** | `AuditCTA.tsx`, `Contact.tsx`, `app/page.tsx:23-24` |
| **Expected solution** | Remove `AuditCTA` component. Transform `Contact` into a single strong final conversion section. |
| **Verification** | Only ONE strong CTA section near end. No duplicate offers. |

### 4. Weak Trust Layer

| | |
|---|---|
| **Existing behavior** | Work section shows "Concept Project" placeholders. No case study narrative. No process. No FAQ. No testimonials. No client logos. |
| **Why it matters** | Cannot convert "nice design studio" into "credible vendor we'd hire." |
| **Affected components** | `Work.tsx`, new `Process.tsx`, new `FAQ.tsx`, new `CaseStudy.tsx` |
| **Affected files** | `Work.tsx`, new files, `app/page.tsx` |
| **Expected solution** | Label concept projects as "Experimental Concept." Add process section. Add FAQ. Create case study from Jackpot project. |
| **Verification** | Visitor can see real work, understand process, get objections answered. |

### 5. Placeholder Projects Presented as Client Work

| | |
|---|---|
| **Existing behavior** | Three "Concept Project" entries — first two have no images/link, third has Jackpot images but labeled as "Concept Project." |
| **Why it matters** | Creates false impression of client work. Damages credibility. |
| **Affected component** | `Work.tsx` |
| **Affected file** | `Work.tsx:8-46` |
| **Expected solution** | Label as "Experimental Concept." Use Option B from spec. |
| **Verification** | No placeholder presented as real client work. |

### 6. Missing Process Section

| | |
|---|---|
| **Existing behavior** | No process section. Visitor doesn't know what happens after contacting. |
| **Why it matters** | Reduces uncertainty and objections. |
| **Affected component** | New `components/Process.tsx` |
| **Expected solution** | 6-step process with deliverables. |
| **Verification** | Visitor understands the journey from inquiry to launch. |

### 7. Missing FAQ Section

| | |
|---|---|
| **Existing behavior** | No FAQ. Common objections not addressed. |
| **Why it matters** | Visitors have questions that prevent conversion. |
| **Affected component** | New `components/FAQ.tsx` |
| **Expected solution** | FAQ addressing real purchase objections. |
| **Verification** | Common questions answered before they become blockers. |

### 8. Weak Services Presentation

| | |
|---|---|
| **Existing behavior** | "Web", "App", "Digital Growth" — category list, not outcome-based. No "who this is for" context. |
| **Why it matters** | Visitor can't self-identify if Almoo solves their problem. |
| **Affected component** | `components/Services.tsx` |
| **Affected file** | `Services.tsx:6-22` |
| **Expected solution** | Services restructured around outcomes with "For businesses that need..." framing. |
| **Verification** | Visitor can identify which service matches their need. |

### 9. Navigation Missing Key Pages

| | |
|---|---|
| **Existing behavior** | Work, Services, About. No Process, FAQ. CTA says "Let's talk" (mailto). |
| **Why it matters** | Can't navigate to important sections. CTA inconsistent. |
| **Affected component** | `components/Navbar.tsx` |
| **Affected file** | `Navbar.tsx:6-10` |
| **Expected solution** | Nav: Work, Services, Process, About, FAQ. CTA: "Start a Project" → inquiry form. |
| **Verification** | All key sections accessible from nav. Primary CTA visually distinct. |

### 10. Page Flow — No Logical Persuasion Sequence

| | |
|---|---|
| **Existing behavior** | Hero → Philosophy → Services → Work → AlmooApproach → Founder → AuditCTA → Contact → Footer |
| **Why it matters** | Missing: Problem/pain section, Case study, Process, Trust, FAQ. CTA appears before proof. |
| **Affected file** | `app/page.tsx` |
| **Expected solution** | Hero → Positioning → Problem → Services → Work → Case Study → Process → Trust → FAQ → Final CTA → Footer |
| **Verification** | Logical persuasion sequence before CTA. |

### 11. Missing Problem/Pain Section

| | |
|---|---|
| **Existing behavior** | Site explains what Almoo does but not why someone needs it. |
| **Why it matters** | Visitor needs to feel the pain before the solution resonates. |
| **Affected component** | Reuse/adapt existing `Philosophy.tsx` or create new section |
| **Expected solution** | Concise section: Problem → Why it matters → Almoo's approach. |
| **Verification** | Visitor understands the pain points Almoo solves. |

---

## B. Implementation Mapping

```
Problem                    → Component          → File                    → Change
─────────────────────────────────────────────────────────────────────────────────────
Hero unclear               → Hero               → Hero.tsx                → New copy, eyebrow, CTAs
All CTAs are mailto        → All CTA components → Multiple                → Replace with inquiry form trigger
Duplicate AuditCTA         → AuditCTA           → AuditCTA.tsx            → Remove component
Weak trust                 → New components     → Process.tsx, FAQ.tsx    → Create new sections
Placeholder projects       → Work               → Work.tsx                → Label as Experimental Concept
Missing process            → New component      → Process.tsx             → Create with deliverables
Missing FAQ                → New component      → FAQ.tsx                 → Create with objection handling
Weak services              → Services           → Services.tsx            → Restructure around outcomes
Navigation incomplete      → Navbar             → Navbar.tsx              → Add Process, FAQ, update CTA
Page flow wrong            → Page               → page.tsx                → Reorder sections
Missing problem section    → Philosophy         → Philosophy.tsx          → Transform into problem/pain
```

---

## C. Risk Analysis

### Breaking Changes
- **AuditCTA removal:** Referenced in page.tsx. Safe to remove — component is only used there.
- **CTA changes:** Multiple components reference mailto links. All must be updated consistently.
- **Navigation changes:** Adding new anchor targets (#process, #faq, #inquiry).

### Animation Risks
- New sections (Process, FAQ, CaseStudy) need animation consistent with existing system.
- Inquiry form must not break GSAP ScrollTrigger in CinematicFooter.
- New components should use existing motion primitives (FadeIn, MaskReveal, etc.).

### Responsive Risks
- New form must work at all breakpoints (320px–1920px).
- Process section must not overflow on mobile.
- FAQ accordion must be touch-friendly.

### SEO Risks
- Removing sections changes page structure. Headings must maintain hierarchy.
- New sections need semantic HTML.

### Accessibility Risks
- Form must have labels, validation, focus management, ARIA where needed.
- FAQ must support keyboard navigation.
- Mobile menu needs updated links.

### Existing Functionality Risks
- CinematicFooter has GSAP ScrollTrigger — must not be affected by content changes above.
- ProfileCard in Founder section — must not break.
- InfiniteMovingCards in AlmooApproach — must not be affected.

---

## D. Implementation Order

1. ✅ Architecture analysis (this document)
2. BUSINESS_DATA_REQUIRED.md
3. Hero repositioning
4. CTA system + Inquiry form
5. Remove duplicate AuditCTA
6. Create final conversion section
7. Services rewrite
8. Process section
9. FAQ section
10. Work section updates (label concepts)
11. Case study section
12. Navigation updates
13. Page flow reordering
14. Responsive testing
15. Accessibility audit
16. Build/lint/typecheck
17. Browser testing
18. Final QA report
