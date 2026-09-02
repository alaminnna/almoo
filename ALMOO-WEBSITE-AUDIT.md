
# Almoo Studio — SEO Implementation & Website Upgrade

You are a senior Next.js developer, technical SEO engineer, information architect, UX engineer, and performance specialist.

You are working on the EXISTING Almoo Studio website:

**[https://almoo.pro.bd/](https://almoo.pro.bd/)**

You have been given a complete SEO audit report named:

**`seo-report.md`**

You MUST read and understand the entire `seo-report.md` before making any changes.

---

# PRIMARY OBJECTIVE

Implement the SEO improvements identified in `seo-report.md` directly into the existing Almoo Studio Next.js project.

The goal is:

> Make Almoo Studio technically crawlable, indexable, semantically understandable, locally relevant, and scalable for organic search — WITHOUT unnecessarily changing the existing visual identity, animations, UX, or brand personality.

The current website is a visually strong Next.js 15 / React 19 website with a single-page architecture.

Do NOT turn it into a generic SEO template.

Do NOT destroy the existing design.

Do NOT remove the cinematic experience.

Do NOT replace the existing UI with a basic blog/agency template.

SEO must be integrated INTO the existing design system.

---

# IMPORTANT: READ THE EXISTING PROJECT FIRST

Before modifying anything:

1. Inspect the entire project structure.
2. Inspect `package.json`.
3. Inspect `app/`.
4. Inspect `components/`.
5. Inspect `public/`.
6. Inspect existing metadata.
7. Inspect existing layout files.
8. Inspect all existing sections.
9. Inspect navigation.
10. Inspect footer.
11. Inspect images.
12. Inspect API routes.
13. Inspect fonts.
14. Inspect GSAP/Motion usage.
15. Inspect Tailwind configuration.
16. Inspect any existing SEO utilities.
17. Inspect any existing configuration files.

Do NOT blindly create duplicate files.

Reuse existing components and utilities wherever possible.

---

# BRAND RULES

Preserve the official identity:

**Brand:**
Almoo Studio

**Description:**

> Almoo Studio is a digital agency based in Bangladesh that builds websites, apps, and growth strategies.

**Website:**

[https://almoo.pro.bd/](https://almoo.pro.bd/)

**Business Email:**

[almoo.agency@gmail.com](mailto:almoo.agency@gmail.com)

**WhatsApp:**

+8801882030873

**Positioning:**

Digital Agency • Web • App • Digital Growth

**Location:**

Bangladesh

**Working scope:**

Bangladesh + international clients

Do NOT invent:

* clients
* testimonials
* reviews
* awards
* certifications
* business registration
* physical address
* employees
* revenue
* fake case-study results
* fake statistics

If information is unavailable, do not fabricate it.

---

# OFFICIAL SOCIAL ACCOUNTS

Replace all empty social URLs with these exact official accounts.

### Instagram

[https://www.instagram.com/almoostudio/](https://www.instagram.com/almoostudio/)

### Facebook

[https://www.facebook.com/almoostudio](https://www.facebook.com/almoostudio)

### TikTok

[https://www.tiktok.com/@almoostudio](https://www.tiktok.com/@almoostudio)

### X

[https://x.com/almoostudio](https://x.com/almoostudio)

### GitHub

[https://github.com/organizations/almoostudio](https://github.com/organizations/almoostudio)

### YouTube

[https://www.youtube.com/@almoostudio](https://www.youtube.com/@almoostudio)

### WhatsApp

[https://wa.me/8801882030873](https://wa.me/8801882030873)

### Email

mailto:almoo[.agency@gmail.com](mailto:.agency@gmail.com)

Do not invent additional social profiles.

Do not add LinkedIn, Behance, Dribbble, Clutch, DesignRush, Goodfirms, etc. to the website unless those accounts actually exist in the project/user-provided information.

---

# PHASE 1 — TECHNICAL SEO FOUNDATION

Implement all of the following.

## 1. robots.txt

Create a proper Next.js robots implementation.

Preferred approach:

`app/robots.ts`

Generate:

```text
User-agent: *
Allow: /

Sitemap: https://almoo.pro.bd/sitemap.xml
```

Do not block important CSS, JS, image, or page resources.

---

# 2. sitemap.xml

Create:

`app/sitemap.ts`

Generate a valid XML sitemap.

Initially include all real indexable pages.

When new service/work/blog pages are added, they must automatically become part of the sitemap.

Do NOT manually maintain a fragile static sitemap if Next.js dynamic generation is more appropriate.

---

# 3. Canonical URLs

Implement proper canonical metadata using Next.js Metadata API.

Homepage canonical:

```text
https://almoo.pro.bd/
```

Every future indexable page must have its own self-referencing canonical.

Avoid duplicate canonical declarations.

---

# 4. Robots Metadata

For indexable public pages:

```text
index, follow
```

Do not accidentally apply `noindex`.

API routes must NOT be treated as public SEO pages.

---

# PHASE 2 — GLOBAL METADATA

Update the global metadata without destroying the existing branding.

Recommended homepage title:

```text
Almoo Studio — Digital Agency in Bangladesh | Web, App & Growth
```

Recommended homepage description:

```text
Almoo Studio is a Bangladesh-based digital agency building websites, web apps, AI automation and digital growth solutions for businesses in Bangladesh and worldwide.
```

Do not keyword-stuff.

Keep copy natural.

Implement:

* title
* description
* canonical
* metadataBase
* robots
* keywords only if genuinely useful
* authors where appropriate
* creator
* publisher
* applicationName if appropriate

---

# PHASE 3 — OPEN GRAPH

Implement complete Open Graph metadata.

Include:

```text
og:title
og:description
og:url
og:type
og:site_name
og:locale
og:image
```

Create/use:

```text
/public/og-image.png
```

Recommended size:

**1200 × 630**

It should visually match Almoo Studio's existing branding.

Do NOT create a generic stock image.

If an existing brand image can be safely reused, prefer it.

Also implement:

```text
twitter:card = summary_large_image
twitter:title
twitter:description
twitter:image
twitter:site
```

Twitter/X handle:

```text
@almoostudio
```

---

# PHASE 4 — STRUCTURED DATA

Implement valid JSON-LD.

Use real information only.

## Organization

Create an Organization schema containing:

* name
* url
* logo
* description
* email
* telephone where appropriate
* sameAs
* contactPoint where appropriate

Use the official social accounts provided above.

Do NOT add fake address information.

---

# WebSite schema

Add a WebSite schema for:

[https://almoo.pro.bd/](https://almoo.pro.bd/)

Do not add a fake site search action if the website does not actually have a site-search feature.

---

# Person schema

Create a Person schema for the founder only using information actually present in the existing website.

The existing website identifies:

**Al A Min**

Do not invent additional credentials or claims.

Connect the Person to Almoo Studio where appropriate.

---

# Service schema

When individual service pages are created, use appropriate Service structured data.

Do NOT add Service schema to content that does not actually represent a service.

---

# FAQ schema

The current website contains FAQ content.

If the existing FAQ is visible, accurate, and eligible, implement structured data that accurately represents the visible FAQ content.

Never put FAQ questions/answers into schema that are not visible on the page.

Do not create fake FAQ content just for SEO.

---

# Breadcrumb schema

For multi-page routes, implement BreadcrumbList structured data where appropriate.

Homepage does not need a breadcrumb.

---

# PHASE 5 — INFORMATION ARCHITECTURE

The current website is a single-page application.

Preserve the homepage.

Expand the architecture carefully.

Implement:

```text
/
├── services/
├── services/web-design/
├── services/web-development/
├── services/web-applications/
├── services/ui-ux-design/
├── services/ai-automation/
├── services/digital-growth/
├── work/
├── work/immersive-web-concept/
├── work/treactly-saas-platform/
├── work/jackpot-brand-system/
├── about/
├── contact/
├── blog/
└── digital-agency-bangladesh/
```

IMPORTANT:

Do not create pages with fake or duplicated content.

Each indexable page must have a clear purpose and unique content.

---

# PHASE 6 — SERVICES

Create a `/services/` hub page.

It should visually feel like an extension of the existing Almoo Studio website.

Do not use a generic SEO landing-page design.

Create individual service pages.

## Web Design

URL:

```text
/services/web-design/
```

Primary intent:

Web design / website design

---

## Web Development

URL:

```text
/services/web-development/
```

Primary intent:

Web development / custom web development / Bangladesh

---

## Web Applications

URL:

```text
/services/web-applications/
```

Primary intent:

Web application / SaaS / custom application development

---

## UI/UX Design

URL:

```text
/services/ui-ux-design/
```

Primary intent:

UI/UX design

---

## AI Automation

URL:

```text
/services/ai-automation/
```

Primary intent:

AI automation / business automation

Only describe services Almoo can genuinely provide.

---

## Digital Growth

URL:

```text
/services/digital-growth/
```

Primary intent:

Digital growth / SEO / analytics / conversion optimization

Only include sub-services that are genuinely offered.

---

# SERVICE PAGE CONTENT STRUCTURE

Every service page should contain:

1. SEO-friendly unique title
2. Unique meta description
3. H1
4. Strong introductory explanation
5. What the service includes
6. Who it is for
7. Problems it solves
8. Almoo's approach
9. Process
10. Relevant technologies where appropriate
11. Related work
12. FAQ
13. CTA
14. Internal links
15. Appropriate structured data

Avoid artificially forcing a 1500-word minimum.

Content quality matters more than word count.

---

# PHASE 7 — WORK / PORTFOLIO

Create:

```text
/work/
```

as the portfolio hub.

Create individual project pages only when enough real information exists.

Existing projects include:

* Immersive Web Concept
* Treactly — SaaS Platform
* Jackpot Brand System

IMPORTANT:

Clearly label conceptual/speculative work as:

**Concept Project**

Do not present a concept project as a real client project.

For each project page, use only information actually available.

Recommended structure:

```text
Project overview
Problem
Objective
Approach
Design
Development
Technology
Outcome
Visuals
Related service
CTA
```

Do not invent performance metrics.

---

# PHASE 8 — ABOUT

Create:

```text
/about/
```

The About page should explain:

* What Almoo Studio is
* Bangladesh-based positioning
* What the studio builds
* Working philosophy
* Founder
* Relevant skills/capabilities
* International working scope

Reuse the existing founder information.

Do not invent company history.

---

# PHASE 9 — CONTACT

Create:

```text
/contact/
```

Keep the existing inquiry experience.

Do not remove the existing contact form.

The contact page should include:

* Almoo Studio
* email
* WhatsApp
* Bangladesh
* project inquiry CTA
* existing form flow

Keep API behavior intact.

Do not expose secrets.

---

# PHASE 10 — BANGLADESH LANDING PAGE

Create:

```text
/digital-agency-bangladesh/
```

Purpose:

Establish Almoo Studio as a Bangladesh-based digital agency.

Content should naturally explain:

* Almoo Studio
* Bangladesh
* web design
* web development
* web applications
* AI automation
* digital growth
* international clients

Do NOT keyword-stuff phrases such as:

"best digital agency Bangladesh"

repeatedly.

Use natural language.

---

# PHASE 11 — BLOG INFRASTRUCTURE

Create a scalable blog architecture:

```text
/blog/
/blog/[slug]/
```

Prefer a simple developer-friendly architecture such as MDX unless the existing project already has a CMS.

Do not populate the blog with fake articles.

Create the infrastructure and, if content files are necessary, create only a small number of clearly marked starter/example entries if required by the implementation.

Blog posts should support:

* title
* description
* slug
* published date
* updated date
* author
* cover image
* categories
* tags where useful
* canonical
* Open Graph
* Article schema
* internal links

---

# PHASE 12 — INTERNAL LINKING

Implement contextual internal links.

Required relationship:

```text
Homepage
 ↓
Services
 ↓
Individual Service
 ↓
Related Work
 ↓
Contact
```

Also:

```text
Blog
 ↓
Related Service
 ↓
Related Work
 ↓
Contact
```

And:

```text
Work
 ↓
Related Service
 ↓
Contact
```

Do not add excessive links.

Links must make sense to users.

---

# PHASE 13 — NAVIGATION

Update the existing navigation carefully.

Current navigation uses anchor sections.

Do not remove the existing homepage sections.

Possible structure:

```text
About
Services
Work
Process
FAQ
Contact
```

Where appropriate, make:

* Services → `/services/`
* Work → `/work/`
* About → `/about/`
* Contact → `/contact/`

But preserve smooth scrolling for sections that remain on the homepage.

Do not make navigation confusing.

---

# PHASE 14 — IMAGE SEO & PERFORMANCE

Audit all images.

Use Next.js Image where appropriate.

Implement:

* proper width/height
* responsive images
* modern formats where practical
* lazy loading below the fold
* appropriate priority for LCP image
* meaningful alt text
* avoid unnecessary image downloads

Do NOT change the visual output unnecessarily.

For example:

Founder image:

```text
Al A Min, founder of Almoo Studio
```

only if that accurately describes the image.

Do not keyword-stuff alt attributes.

Decorative images should use appropriate empty alt handling.

---

# PHASE 15 — HERO VIDEO / LCP

The existing website uses visual/animation-heavy hero content.

Do NOT simply remove it.

Optimize it.

Investigate:

* poster image
* preload strategy
* video loading
* mobile behavior
* autoplay behavior
* reduced-motion behavior
* LCP impact

The page should remain cinematic while avoiding unnecessary blocking resources.

---

# PHASE 16 — FONTS

The existing site loads multiple Google Fonts.

Optimize font loading.

Do not blindly remove fonts.

Prefer:

* Next.js font optimization where appropriate
* fewer font requests
* only required weights
* avoiding unnecessary render-blocking requests

Preserve the current typography as closely as possible.

---

# PHASE 17 — ANIMATIONS

The current site uses:

* GSAP
* ScrollTrigger
* Motion
* infinite moving cards
* MorphSlider
* cinematic footer effects

Do NOT remove animations just because they affect performance.

Instead:

* lazy-load non-critical animation code where possible
* reduce unnecessary client-side JavaScript
* avoid running expensive effects before needed
* respect `prefers-reduced-motion`
* ensure content remains accessible without animations

The final website must still feel like the existing Almoo Studio site.

---

# PHASE 18 — ACCESSIBILITY

Do not regress existing accessibility.

Preserve:

* semantic HTML
* ARIA
* keyboard navigation
* focus states
* reduced-motion support
* adequate contrast
* touch target sizes
* meaningful labels

SEO implementation must not reduce accessibility.

---

# PHASE 19 — INTERNATIONAL SEO

The website serves Bangladesh and international clients.

Do NOT add hreflang tags unless there are genuinely separate language/region versions.

There is currently one English version.

Do not create fake language URLs.

---

# PHASE 20 — LOCAL SEO

Do NOT invent a physical office address.

If no legitimate public address exists:

Do not add one.

Use legitimate location information:

**Bangladesh**

Only implement LocalBusiness schema if the actual business information satisfies the requirements for doing so.

Otherwise use Organization schema.

Do not create fake local signals.

---

# PHASE 21 — SOCIAL ENTITY CONNECTION

Ensure the website footer contains functional links to all official social accounts.

Ensure Organization schema `sameAs` references the official accounts.

Ensure the brand name is consistently:

**Almoo Studio**

Do not create duplicate brand names.

---

# PHASE 22 — SEO CONTENT ON HOMEPAGE

Keep the existing creative hero headline:

> Digital experiences built to convert, scale, and actually work.

Do NOT replace it with something ugly like:

> Best Web Development Agency in Bangladesh

Instead, add a natural supporting sentence that clearly explains the business.

Example direction:

> Almoo Studio is a Bangladesh-based digital agency building websites, web applications, AI automation systems, and digital growth solutions for businesses in Bangladesh and worldwide.

You may improve this copy, but preserve the brand voice.

---

# PHASE 23 — METADATA PER PAGE

Every new indexable route must have unique:

* title
* description
* canonical
* Open Graph title
* Open Graph description
* Open Graph URL
* Open Graph image where appropriate

Do NOT use one global metadata object for every page.

Use Next.js `generateMetadata` where dynamic routes require it.

---

# PHASE 24 — SECURITY

Do not expose:

* API keys
* environment variables
* private credentials
* tokens
* secrets

Do not modify API authentication/rate-limiting behavior unless required.

---

# PHASE 25 — DO NOT OVER-SEO

Avoid:

* keyword stuffing
* hidden text
* invisible links
* doorway pages
* duplicate service pages
* fake reviews
* fake testimonials
* fake ratings
* fake business addresses
* PBNs
* spam links
* manipulative schema
* copied competitor content

---

# PHASE 26 — DESIGN PRESERVATION

This is extremely important.

The existing Almoo Studio website has a distinctive premium/cinematic visual identity.

DO NOT:

* replace the design system
* replace the homepage with a template
* remove animations
* flatten the visual experience
* introduce generic cards everywhere
* add huge walls of SEO text to the homepage
* make the website look like an SEO blog
* change the existing brand identity unnecessarily

New pages should feel like:

**"Almoo Studio, but expanded."**

Not:

**"A completely different website."**

---

# PHASE 27 — CODE QUALITY

Follow the existing project's conventions.

Use:

* TypeScript
* App Router
* reusable components
* semantic HTML
* server components where appropriate
* client components only when necessary

Avoid unnecessary dependencies.

Do not install packages if native Next.js functionality can solve the problem.

Do not duplicate components.

---

# PHASE 28 — VERIFY EVERYTHING

After implementation, test:

## Technical

* `/robots.txt`
* `/sitemap.xml`
* homepage
* every new route
* canonical tags
* metadata
* JSON-LD
* Open Graph
* Twitter metadata
* 404 behavior
* internal links

## Build

Run:

```bash
npm run build
```

Fix all build errors.

Also run lint/type checks if available.

## SEO validation

Verify:

* exactly one H1 on important pages
* no accidental noindex
* valid canonical URLs
* valid sitemap
* valid robots
* no broken internal links
* no empty social links
* no duplicate metadata
* valid JSON-LD
* no fake schema claims

---

# PHASE 29 — PERFORMANCE VERIFICATION

After implementation, inspect whether the changes introduced:

* excessive JavaScript
* excessive CSS
* layout shift
* slower LCP
* unnecessary network requests
* duplicate font loading
* duplicate images

Do not sacrifice performance for SEO features.

---

# PHASE 30 — FINAL REPORT

After completing the implementation, create:

**`seo-implementation-report.md`**

Include:

## 1. What was changed

## 2. Files created

## 3. Files modified

## 4. Pages created

## 5. Metadata changes

## 6. Schema changes

## 7. Sitemap/robots implementation

## 8. Internal linking changes

## 9. Image optimization

## 10. Performance improvements

## 11. Social profile fixes

## 12. Remaining SEO issues

## 13. Things that require real business information

## 14. Things that require Google Search Console

## 15. Things that require future content/backlinks

## 16. Final SEO readiness score

---

# FINAL REQUIREMENT

Do not stop after fixing only:

* robots.txt
* sitemap
* canonical
* schema

The purpose is to create a **scalable SEO architecture** for Almoo Studio.

At the same time, do not overbuild the website.

Prioritize:

1. Technical correctness
2. Indexability
3. Search intent
4. Useful content
5. Internal linking
6. Entity clarity
7. Performance
8. Conversion
9. Brand/design preservation

The final website should remain unmistakably **Almoo Studio**.

Before finishing, compare your implementation against every relevant recommendation in `seo-report.md` and make sure no high-priority item was accidentally skipped.

DO NOT fabricate information.

DO NOT change unrelated functionality.

DO NOT remove existing working features.

Implement the SEO upgrade carefully, then produce `seo-implementation-report.md`.

