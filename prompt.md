

# Almoo Studio — Audit Fix & Production Implementation Prompt

You are now the **Lead Product Designer, UX Strategist, Conversion Architect, Senior Frontend Engineer, Accessibility Engineer, Motion Designer, and QA Engineer** responsible for implementing the attached Almoo Studio website audit.

The audit document is the source of truth for the problems.

Your job is NOT to redesign the website randomly.

Your job is to:

**Understand → Audit → Plan → Implement → Test → Iterate → Verify**

until the identified conversion, UX, trust, content, responsive, accessibility, motion, and frontend problems are properly solved.

---

# 1. PRIMARY OBJECTIVE

Transform the current Almoo Studio website from:

> “A visually impressive agency website”

into:

> “A visually impressive, credible, conversion-focused agency website that clearly explains who Almoo Studio serves, what problems it solves, why clients should trust it, what the process looks like, and exactly what happens when someone wants to work with Almoo.”

The existing visual quality is already strong.

**Do not destroy the existing art direction.**

Preserve and improve:

* editorial visual language
* warm off-white background
* Bricolage Grotesque typography
* coral accent system
* existing design tokens
* existing motion language
* GSAP usage
* Motion usage
* smooth transitions
* responsive behavior
* reduced-motion support
* existing high-quality visual composition

Improve the **conversion architecture**, not merely the aesthetics.

---

# 2. FIRST: READ THE ENTIRE PROJECT

Before modifying anything:

1. Inspect the entire repository.
2. Read every relevant source file.
3. Understand the current architecture.
4. Identify all pages/routes.
5. Identify all components.
6. Identify all sections.
7. Identify all shared UI components.
8. Identify all animation systems.
9. Identify the design token system.
10. Identify all CTA implementations.
11. Identify all forms.
12. Identify all links.
13. Identify all images/assets.
14. Identify all placeholder content.
15. Identify all existing project/case-study data.
16. Identify all SEO metadata.
17. Identify all accessibility implementations.
18. Identify all responsive breakpoints.
19. Identify all `mailto:` usage.
20. Identify all duplicated sections/components.

Do not start coding before understanding the architecture.

---

# 3. CREATE AN IMPLEMENTATION PLAN FIRST

Before editing production code, create:

`AUDIT_IMPLEMENTATION_PLAN.md`

The plan must contain:

## A. Current problem

For every audit issue:

* existing behavior
* why it is a problem
* affected component
* affected file
* expected solution

## B. Implementation mapping

For every problem specify:

```text
Problem
↓
Component
↓
File
↓
Change
↓
Expected outcome
↓
Verification method
```

## C. Risk analysis

Identify:

* breaking changes
* animation risks
* responsive risks
* SEO risks
* accessibility risks
* existing functionality risks

Do not remove existing functionality without a clear reason.

---

# 4. HERO — REPOSITION COMPLETELY

The current hero is visually strong but strategically unclear.

The hero must immediately answer:

1. Who is Almoo for?
2. What does Almoo build?
3. What outcome does Almoo create?
4. Why should someone care?
5. What should they do next?

Do NOT use vague agency language such as:

* We build amazing digital experiences
* We create digital solutions
* We transform businesses
* We build the future
* Innovative digital experiences

unless backed by a specific proposition.

---

# 5. HERO STRUCTURE

Implement a hierarchy similar to:

```text
EYEBROW
Who Almoo works with

HEADLINE
Specific transformation/outcome

SUPPORTING COPY
What Almoo actually does + why it matters

PRIMARY CTA
Start a project

SECONDARY CTA
See our work

TRUST SIGNAL
Selected work / availability / response time / relevant proof
```

The headline must communicate:

**Audience + Problem + Outcome**

Example direction:

> Digital experiences built for businesses ready to grow beyond templates.

Do NOT blindly use this copy.

Develop the strongest copy based on the actual services and positioning already present in the repository/audit.

---

# 6. CTA ARCHITECTURE

The current website relies heavily on `mailto:`.

Fix this.

Establish a clear CTA hierarchy.

## Primary CTA

Use one consistent action:

> Start a Project

or another strategically stronger equivalent.

## Secondary CTA

Use:

> View Our Work

or equivalent.

## Optional low-friction CTA

Use:

> Get a Free Website Audit

ONLY if the audit offer is actually part of the business strategy.

Do not allow multiple competing primary CTAs.

---

# 7. REAL PROJECT-INQUIRY FLOW

Replace the current “every CTA → mailto” architecture.

Create an actual project inquiry experience.

The preferred UX:

```text
CTA
↓
Project Inquiry Section / Modal / Dedicated route
↓
Form
↓
Validation
↓
Submission
↓
Success state
```

The form should capture only information useful for qualification.

Recommended fields:

* Name
* Email
* Company / Brand
* Website
* What do you need?
* Project type
* Budget range
* Timeline
* Message

Avoid unnecessary fields.

---

# 8. FORM UX

The form must include:

## States

* idle
* focused
* validation error
* submitting
* success
* server error

## Requirements

* accessible labels
* keyboard navigation
* clear validation
* useful error messages
* loading state
* disabled submit state
* success confirmation
* mobile-friendly layout

Never silently fail.

Never rely only on placeholder text as labels.

---

# 9. FORM BACKEND

Inspect the existing project architecture.

If there is already a backend/email infrastructure, integrate with it.

Otherwise design a clean abstraction:

```text
InquiryForm
↓
API endpoint / server action
↓
Validation
↓
Email / database
```

Use proper server-side validation.

Do NOT expose private API keys in the client.

If business infrastructure is not available, implement the frontend and API abstraction cleanly and mark the external provider integration:

`NEEDS REAL BUSINESS DATA`

Do not invent credentials, email addresses, CRM IDs, or business information.

---

# 10. REMOVE THE DUPLICATE AUDIT CTA

The audit identified:

```text
AuditCTA
↓
Contact
↓
Footer
```

where the first two sections communicate essentially the same offer.

Fix this.

There should be ONE strong conversion section near the end.

Do not keep two visually different versions of the same CTA simply for visual variety.

---

# 11. NEW FINAL CONVERSION SECTION

Create a single strong final CTA section.

Recommended structure:

```text
Eyebrow

Headline:
Have a project in mind?

Supporting copy:
Briefly explain what happens next.

Primary CTA:
Start a Project

Secondary:
View Work

Trust/expectation:
Response time / no-pressure consultation / next-step information
```

Only use factual claims.

If response time or consultation policy is unknown:

`NEEDS REAL BUSINESS DATA`

Do not invent them.

---

# 12. TRUST LAYER

The current website has weak proof.

Build a dedicated trust layer.

Potential structure:

```text
Selected Work
↓
Case Study
↓
Results / impact
↓
Process
↓
Testimonials / logos
↓
FAQ
↓
CTA
```

Do not fabricate:

* clients
* testimonials
* metrics
* revenue
* conversion percentages
* awards
* partnerships
* logos
* results

Anything requiring real business information must be marked:

`NEEDS REAL BUSINESS DATA`

---

# 13. CASE STUDY SECTION

Use the strongest real existing project in the repository.

Do not call placeholder projects “case studies”.

A proper case study should communicate:

```text
Client / Project
↓
Problem
↓
Approach
↓
What Almoo built
↓
Key decisions
↓
Outcome
```

If outcome metrics do not exist:

DO NOT invent them.

Instead use qualitative outcomes such as:

* redesigned experience
* improved structure
* clearer navigation
* responsive implementation

only when supported by the actual project.

---

# 14. REMOVE OR FIX FAKE PROJECT PLACEHOLDERS

Current placeholders such as:

> Concept Project

should NOT create the impression that they are real client work.

Choose one:

### Option A

Replace with real projects.

### Option B

Clearly label them:

> Experimental Concept

### Option C

Remove them.

Never present fictional work as client work.

---

# 15. PROCESS SECTION

Add a concrete process section.

The visitor should understand what happens after contacting Almoo.

Suggested structure:

```text
01 — Discover
Understand goals, audience, problems and requirements.

02 — Define
Create strategy, structure and direction.

03 — Design
Develop the visual and interaction system.

04 — Build
Implement the production experience.

05 — Launch
Test, refine and launch.

06 — Grow
Optional ongoing optimization and support.
```

Adapt the actual process to Almoo's real services.

Do not invent services that the agency does not actually provide.

---

# 16. PROCESS MUST INCLUDE DELIVERABLES

Do not make the process generic.

Each phase should optionally explain:

```text
What happens
What you receive
What decision is made
```

Example:

```text
Discover

We clarify:
- goals
- audience
- business requirements
- technical constraints

You receive:
- project direction
- requirements
- scope
```

This reduces uncertainty and objections.

---

# 17. SERVICES SECTION

Rewrite service presentation around outcomes rather than category dumping.

Instead of:

```text
Websites
Web Apps
Digital Growth
```

structure services around problems/outcomes.

For example:

```text
01
Web Design & Development

For businesses that need a website that communicates clearly,
looks credible and converts attention into action.

02
Web Applications

For businesses that need custom digital products instead of
generic software.

03
Digital Growth

For businesses that already have a digital presence but need
better acquisition, UX or conversion.
```

Do not copy these exact words if the actual Almoo offering differs.

---

# 18. ADD OBJECTION HANDLING

Create an FAQ section.

Questions should address real purchase objections.

Potential questions:

* What kind of projects do you work on?
* How does a project start?
* How long does a project take?
* Do you work with existing websites?
* Can you redesign an existing website?
* Do you provide ongoing maintenance?
* Can you work with our existing brand?
* What happens after I submit an inquiry?
* What information should I prepare before contacting you?

Only provide factual answers.

Use:

`NEEDS REAL BUSINESS DATA`

where required.

---

# 19. NAVIGATION

Review the navbar.

The navigation should prioritize:

```text
Work
Services
Process
About
FAQ
Start a Project
```

Do not overcrowd the navbar.

The primary CTA should visually stand apart.

On mobile:

```text
Menu
↓
navigation
↓
primary CTA
```

Ensure keyboard accessibility.

---

# 20. PAGE FLOW

Rebuild the page journey around this logic:

```text
01 Hero
   ↓
02 Immediate positioning
   ↓
03 Problem / pain
   ↓
04 Services / solution
   ↓
05 Selected work
   ↓
06 Case study
   ↓
07 Process
   ↓
08 Trust
   ↓
09 FAQ
   ↓
10 Final CTA
   ↓
11 Footer
```

Do not treat this as a mandatory visual layout.

The purpose is to create a logical persuasion sequence.

---

# 21. ADD A PROBLEM / PAIN SECTION

The current site explains what Almoo does but not strongly enough why someone needs it.

Create a concise section addressing problems such as:

* outdated website
* template-like presence
* confusing UX
* weak conversion
* disconnected brand and website
* lack of a scalable digital foundation

Only include problems Almoo genuinely solves.

Structure:

```text
Problem
↓
Why it matters
↓
Almoo's approach
```

---

# 22. TRUST BEFORE HIGH-FRICTION CTA

Do not ask for a project inquiry immediately after generic marketing copy.

The visitor should encounter:

```text
Positioning
↓
Value
↓
Work
↓
Proof
↓
Process
↓
Objection handling
↓
CTA
```

The CTA should feel like the natural conclusion.

---

# 23. MOTION RULES

Preserve Almoo's existing animation quality.

Do NOT add animation everywhere.

Every animation must have a purpose:

* hierarchy
* continuity
* feedback
* reveal
* storytelling

Avoid:

* excessive parallax
* excessive text scrambling
* unnecessary hover effects
* long blocking animations
* motion that delays CTA visibility
* animation that reduces readability

Respect:

```css
prefers-reduced-motion
```

for every newly introduced animation.

---

# 24. CONVERSION-CRITICAL ELEMENTS MUST NOT BE HIDDEN

Do not hide primary messaging or CTA behind:

* long loading sequences
* scroll-only reveals
* hover-only interactions
* complex animations
* inaccessible carousels

The primary value proposition must be available immediately.

---

# 25. RESPONSIVE IMPLEMENTATION

Test at minimum:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Check:

* typography
* spacing
* horizontal overflow
* navigation
* CTA visibility
* form
* cards
* case study
* images
* footer
* animations
* touch targets

No horizontal scroll should exist unless intentionally designed.

---

# 26. MOBILE CONVERSION

Mobile must not be treated as a smaller desktop.

Ensure:

* primary CTA is obvious
* headline wraps naturally
* form is comfortable
* buttons are touch-friendly
* navigation is easy
* sections don't become excessively tall
* important content appears before decorative content

---

# 27. ACCESSIBILITY

Audit all changed components.

Check:

* semantic HTML
* heading hierarchy
* labels
* keyboard navigation
* focus states
* contrast
* ARIA only when necessary
* buttons vs links
* form errors
* screen-reader meaning
* reduced motion
* touch target sizes

Do not use ARIA to compensate for incorrect HTML.

---

# 28. SEO

After structural changes, verify:

* title
* description
* canonical
* Open Graph
* Twitter/X metadata
* semantic headings
* internal links
* image alt text
* robots
* sitemap
* structured data where appropriate

Do not keyword-stuff.

Use natural agency positioning.

---

# 29. PERFORMANCE

Do not sacrifice performance for visual effects.

Review:

* image optimization
* lazy loading
* font loading
* GSAP usage
* Motion usage
* client components
* hydration
* bundle size
* unnecessary JavaScript
* layout shifts

Prefer server components where appropriate.

Do not convert everything to client components.

---

# 30. COMPONENT ARCHITECTURE

Do not create a giant page component.

Keep sections modular.

Example:

```text
components/
  hero/
  positioning/
  services/
  work/
  case-study/
  process/
  trust/
  faq/
  inquiry/
  footer/
```

Adapt to the existing project architecture rather than blindly restructuring everything.

Reuse existing components where appropriate.

Avoid duplicate UI implementations.

---

# 31. CONTENT SYSTEM

Do not hardcode repeated business content across multiple components.

Create a clean content/data layer when appropriate.

For example:

```ts
services
projects
processSteps
faqs
testimonials
```

This makes future CMS/API integration easier.

---

# 32. REAL BUSINESS DATA POLICY

This is extremely important.

NEVER fabricate:

* client names
* testimonials
* project metrics
* project revenue
* conversion rates
* awards
* client logos
* years of experience
* number of clients
* response times
* pricing
* guarantees
* partnerships

If the site needs any of these:

```text
NEEDS REAL BUSINESS DATA
```

Document the required information in:

`BUSINESS_DATA_REQUIRED.md`

---

# 33. BUSINESS DATA FILE

Create:

`BUSINESS_DATA_REQUIRED.md`

Structure:

```text
# Required Business Data

## Brand
- official positioning
- official tagline
- location
- contact email

## Clients
- client names
- logos
- permissions

## Case Studies
- client
- problem
- solution
- outcome
- metrics

## Testimonials
- quote
- person
- company
- permission

## Process
- actual workflow
- estimated timeline

## Commercial
- starting budget
- payment structure
- availability
```

Only list information genuinely needed by the implementation.

---

# 34. DO NOT OVER-DESIGN

The existing website is already visually sophisticated.

Avoid:

* adding random gradients
* adding unnecessary glassmorphism
* adding excessive cards
* adding huge amounts of text
* adding generic agency sections
* adding fake statistics
* adding decorative UI without strategic purpose

Every section must answer:

> Why does this exist?

If there is no good answer, remove or simplify it.

---

# 35. VISUAL HIERARCHY

The visitor should visually understand:

```text
Most important
↓
Headline
↓
Primary CTA
↓
Proof
↓
Supporting information
↓
Secondary content
↓
Decoration
```

Decorative elements must never compete with conversion-critical content.

---

# 36. CTA CONSISTENCY

Audit every CTA across the entire repository.

Find:

```text
mailto:
Contact
Get Started
Let's Talk
Start
Book
Audit
```

Determine whether each CTA has a clear purpose.

Create a consistent CTA system.

Avoid having five different labels for the same action.

---

# 37. REMOVE DEAD-ENDS

Find every place where the user can reach a dead end.

Examples:

```text
project card → nowhere
CTA → mailto only
service → no next step
case study → incomplete
footer → no useful action
```

Every important interaction should have a meaningful destination.

---

# 38. TEST WITH PLAYWRIGHT

After implementation, use browser automation to test:

### Desktop

* navbar
* every CTA
* every link
* project cards
* forms
* FAQ
* footer

### Mobile

* menu
* navigation
* buttons
* form
* scrolling
* touch interactions

Test actual user flows.

---

# 39. TEST THE PRIMARY CONVERSION JOURNEY

Simulate a completely new visitor:

```text
Open homepage
↓
Understand positioning
↓
Understand services
↓
See proof
↓
Understand process
↓
Read FAQ
↓
Click Start a Project
↓
Complete form
↓
Submit
↓
Receive success state
```

At every step ask:

> Is the next action obvious?

If not, fix it.

---

# 40. USE LIGHTHOUSE / DEVTOOLS

After implementation:

Run performance/accessibility/SEO checks.

Target:

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

These are targets, not reasons to add hacks.

Do not manipulate Lighthouse scores artificially.

Fix actual problems.

---

# 41. FINAL QA REPORT

Create:

`AUDIT_IMPLEMENTATION_REPORT.md`

Include:

## Fixed

Every solved audit issue.

## Partially Fixed

Anything blocked by missing business data.

## Needs Business Data

Everything marked:

`NEEDS REAL BUSINESS DATA`

## Remaining Technical Issues

Any unresolved frontend issue.

## UX Changes

Explain the conversion journey before vs after.

## Files Changed

List every modified/created file.

## Testing

Include:

* build
* lint
* typecheck
* browser testing
* responsive testing
* accessibility
* performance
* SEO

---

# 42. IMPORTANT DEVELOPMENT RULE

Do not blindly implement every suggestion in the audit.

Use judgment.

The priority is:

```text
Conversion
>
Understanding
>
Trust
>
Navigation
>
Visual Hierarchy
>
Accessibility
>
Performance
>
Polish
```

When two recommendations conflict, follow the higher priority.

---

# 43. DO NOT BREAK EXISTING DESIGN SYSTEM

Before creating new styles:

Inspect:

```text
tokens.css
Tailwind configuration
global styles
typography
spacing
colors
animation tokens
```

Reuse the existing design system.

Only introduce new tokens when necessary.

---

# 44. DO NOT CHANGE THE STACK UNNECESSARILY

Keep:

```text
Next.js
React
TypeScript
Tailwind
GSAP
Motion
existing design system
```

Do not migrate frameworks.

Do not replace animation libraries.

Do not introduce unnecessary dependencies.

If a new dependency is genuinely necessary, explain why before adding it.

---

# 45. IMPLEMENTATION ORDER

Implement in this order:

```text
1. Architecture analysis
2. Content/positioning
3. Hero
4. CTA system
5. Inquiry flow
6. Duplicate CTA removal
7. Services
8. Work / case study
9. Process
10. Trust
11. FAQ
12. Navigation
13. Responsive
14. Accessibility
15. SEO
16. Performance
17. Animation refinement
18. Browser testing
19. Lighthouse audit
20. Final QA
```

Do not polish animations before fixing conversion architecture.

---

# 46. ITERATION LOOP

After each major implementation phase:

```text
Implement
↓
Run typecheck
↓
Run lint
↓
Run build
↓
Open in browser
↓
Test
↓
Fix
↓
Continue
```

Do not accumulate dozens of untested changes.

---

# 47. FINAL SUCCESS CRITERIA

The implementation is complete only when a first-time visitor can answer these questions within the first part of the page:

### WHO?

Who does Almoo work with?

### WHAT?

What does Almoo actually build?

### WHY?

What problem does Almoo solve?

### WHY ALMOO?

What evidence/proof exists?

### HOW?

What happens if I work with Almoo?

### NEXT?

How do I start?

If any answer remains unclear, continue improving the implementation.

---

# 48. FINAL COMMAND

Now perform the work.

Start by:

1. Reading the entire repository.
2. Reading the audit document completely.
3. Mapping every audit problem to actual files/components.
4. Creating `AUDIT_IMPLEMENTATION_PLAN.md`.
5. Creating `BUSINESS_DATA_REQUIRED.md`.
6. Implementing the highest-impact conversion fixes first.
7. Preserving the existing art direction.
8. Testing every major interaction.
9. Running typecheck/lint/build.
10. Testing responsive layouts.
11. Testing the complete project inquiry journey.
12. Running performance/accessibility/SEO validation.
13. Creating `AUDIT_IMPLEMENTATION_REPORT.md`.

Do not stop after making visual changes.

The final result must be a **production-ready, conversion-focused Almoo Studio agency website**, not merely a prettier version of the existing website.

If real business information is missing, do not invent it.

Mark it clearly as:

`NEEDS REAL BUSINESS DATA`

and continue implementing everything that can be completed safely without it.
