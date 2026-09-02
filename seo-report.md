# Almoo Studio — Complete SEO Audit Report

**Website:** https://almoo.pro.bd/
**Audit Date:** September 2, 2026
**Auditor:** Automated SEO Audit
**Confidence:** High (based on live site inspection + source code analysis)

---

## 1. Executive Summary

Almoo Studio's website is a visually impressive, well-built Next.js 15 single-page application with strong design fundamentals and good accessibility. However, it has **critical SEO infrastructure gaps** that prevent Google from discovering, indexing, and ranking the site.

**The most urgent problem:** Google has **zero pages indexed** for almoo.pro.bd. The site is invisible to search engines.

**Root causes:**
- No robots.txt file (404)
- No sitemap.xml file (404)
- No canonical URLs
- No JSON-LD structured data
- Single-page architecture limits keyword targeting to one URL
- No separate service, work, or location pages

**What's already good:**
- Clean semantic HTML with proper heading hierarchy
- Good Open Graph and Twitter card metadata
- Accessible form with ARIA attributes
- `prefers-reduced-motion` support throughout
- Fast Next.js framework
- Strong brand voice and positioning

**Overall SEO Health Score: 28/100** — The site needs immediate technical SEO infrastructure before any content or authority strategy can succeed.

---

## 2. Website Overview

| Attribute | Value |
|-----------|-------|
| **URL** | https://almoo.pro.bd/ |
| **Platform** | Next.js 15 (App Router) |
| **Framework** | React 19 |
| **CSS** | Tailwind CSS v4 |
| **Animations** | GSAP + Motion (Framer Motion) |
| **Hosting** | Vercel (inferred from Next.js defaults) |
| **SSL** | Active (HTTPS) |
| **Language** | `lang="en"` |
| **Architecture** | Single-page application (SPA) with anchor navigation |
| **Pages** | 1 (all content on `/`) |
| **API Routes** | `/api/inquiry` (POST only), `/api/diagnostic` |

### Technology Stack Assessment

**Strengths:**
- Next.js 15 provides excellent performance foundations
- React 19 with modern hooks
- Tailwind CSS v4 for utility-first styling
- GSAP ScrollTrigger for scroll-based animations
- Motion (Framer Motion) for component animations
- Server-side rendering capability (though not leveraged for SEO)

**Weaknesses:**
- No `next.config.ts` optimization (empty config)
- No image format optimization (WebP/AVIF)
- Multiple Google Fonts loaded synchronously
- Heavy animation libraries loaded on client-side
- No ISR or static generation configured for SEO pages

---

## 3. Current Architecture

### Page Flow
```
Navbar (fixed)
├── Hero (100dvh)
├── Philosophy (#philosophy)
├── Services (#services)
├── Process (#process)
├── Work (#work)
├── AlmooApproach (infinite cards)
├── Founder (#founder)
├── FAQ (#faq)
├── Contact/Inquiry (#inquiry)
└── CinematicFooter (GSAP scroll-pinned)
```

### Navigation Links
- About → #philosophy
- Services → #services
- Process → #process
- Work → #work
- FAQ → #faq
- CTA: "Start a Project" → #inquiry

### URLs Discovered
| URL | Status | Notes |
|-----|--------|-------|
| `/` | 200 | Homepage (only page) |
| `/robots.txt` | 404 | Missing |
| `/sitemap.xml` | 404 | Missing |
| `/api/inquiry` | 405 (GET) | POST-only endpoint |
| `/api/diagnostic` | Unknown | Not inspected |
| `/hero-image.jpg` | 200 | Hero image |
| `/founder.jpg` | 200 | Founder photo |
| `/favicon.png` | 200 | Favicon |
| `/digital-exp-video.mp4` | 200 | Video asset |

---

## 4. Technical SEO Audit

### Crawlability

| Check | Status | Severity | Notes |
|-------|--------|----------|-------|
| robots.txt | Missing (404) | Critical | No file at /robots.txt |
| sitemap.xml | Missing (404) | Critical | No file at /sitemap.xml |
| robots meta tag | Not present | High | No `<meta name="robots">` tag |
| noindex | Not present | Good | No pages blocked |
| nofollow | Not present | Good | Links are followable |
| X-Robots-Tag | Not present | Medium | No HTTP header directives |
| Crawl depth | 1 (SPA) | Medium | All content on single URL |
| Orphan pages | N/A | Good | Single page, no orphans possible |
| Broken internal links | None detected | Good | All anchors resolve to sections |
| Redirect chains | None detected | Good | Direct HTTPS access |
| 404 pages | None internal | Good | No broken internal links |
| 5xx issues | None detected | Good | Site loads reliably |

### Indexability

| Check | Status | Severity | Notes |
|-------|--------|----------|-------|
| Google index | 0 pages | Critical | `site:almoo.pro.bd` returns no results |
| Pages can be indexed | Yes (technically) | Medium | No noindex tags, but no sitemap to discover |
| Canonical conflicts | N/A | Medium | No canonical tags present |
| Duplicate URLs | Risk exists | Medium | SPA may serve same content at / and other paths |
| Parameter URLs | Not present | Good | No query parameters detected |
| Trailing slash | Inconsistent | Low | No enforcement visible |
| HTTP/HTTPS | HTTPS only | Good | Proper redirect expected |
| www/non-www | Non-www | Good | Consistent |

### Canonical

| Page | Canonical Present | Self-Referencing | Correct |
|------|-------------------|------------------|---------|
| Homepage `/` | No | N/A | Missing |

**Finding:** No canonical URLs are implemented anywhere. This is a critical gap — Google cannot determine the preferred version of the page.

---

## 5. Meta SEO Audit

### Homepage Metadata

| Element | Value | Length | Quality |
|---------|-------|--------|---------|
| **Title** | Almoo Studio — Web, App & Digital Growth | 44 chars | Good (within 50-60 range) |
| **Meta Description** | Almoo Studio builds custom web, app, and digital solutions designed around your business. | 89 chars | Good (within 150-160 range) |
| **H1** | Digital experiences built to convert, scale, and actually work. | Good | Good (descriptive, keyword-relevant) |
| **Robots** | Not present | Missing | Should be explicit |
| **Canonical** | Not present | Missing | Must be added |
| **og:title** | Almoo Studio — Web, App & Digital Growth | Good | Matches title tag |
| **og:description** | Almoo Studio builds custom web, app, and digital solutions designed around your business. | Good | Matches meta description |
| **og:type** | website | Good | Correct for homepage |
| **og:image** | Not present | Missing | Critical for social sharing |
| **og:url** | Not present | Missing | Should be set |
| **twitter:card** | summary_large_image | Good | Appropriate |
| **twitter:title** | Almoo Studio — Web, App & Digital Growth | Good | Matches title |
| **twitter:description** | Almoo Studio builds custom web, app, and digital solutions designed around your business. | Good | Matches description |
| **twitter:image** | Not present | Missing | Critical for Twitter sharing |
| **lang** | en | Good | Correct |
| **viewport** | width=device-width, initial-scale=1 | Good | Standard |

### Issues Identified

| Issue | Severity | Impact |
|-------|----------|--------|
| Missing og:image | High | Social shares show no preview image |
| Missing twitter:image | High | Twitter cards show no image |
| Missing og:url | Medium | Canonical URL not declared for social |
| No robots meta tag | Medium | Implicitly indexable but not explicit |
| Single title for SPA | Medium | Same title for all sections |
| Missing hreflang | Low | Site targets Bangladesh + international |

---

## 6. Heading Audit

### Homepage Heading Structure

| Element | Content | Level | Count |
|---------|---------|-------|-------|
| H1 | Digital experiences built to convert, scale, and actually work. | 1 | 1 |
| H2 | Your business isn't a template. | 2 | 1 |
| H2 | From idea to launch. | 2 | 1 |
| H2 | Selected work. | 2 | 1 |
| H2 | Different businesses different digital needs. | 2 | 1 |
| H2 | Built with curiosity. | 2 | 1 |
| H2 | Common questions. | 2 | 1 |
| H2 | Let's understand your project. | 2 | 1 |
| H2 | let's build. | 2 | 1 |
| H3 | Web Design & Development | 3 | 1 |
| H3 | Web Applications | 3 | 1 |
| H3 | Digital Growth | 3 | 1 |
| H3 | Discover | 3 | 1 |
| H3 | Define | 3 | 1 |
| H3 | Design | 3 | 1 |
| H3 | Build | 3 | 1 |
| H3 | Launch | 3 | 1 |
| H3 | Grow | 3 | 1 |
| H3 | Immersive Web Concept | 3 | 1 |
| H3 | Treactly — SaaS Platform | 3 | 1 |
| H3 | Jackpot Brand System | 3 | 1 |
| H3 | Al A Min | 3 | 1 |

**Assessment:** Heading structure is well-organized with single H1, logical H2/H3 hierarchy. No issues detected.

---

## 7. Content SEO Audit

### Search Intent Analysis

| Intent | Coverage | Quality |
|--------|----------|---------|
| Informational ("what does Almoo do") | Good | Clear service descriptions |
| Navigational ("Almoo Studio") | Partial | Brand name present but no dedicated pages |
| Commercial ("web development agency Bangladesh") | Weak | Not targeted on any page |
| Transactional ("hire web developer Bangladesh") | Weak | No service-specific landing pages |

### Content Quality Assessment

| Factor | Score | Notes |
|--------|-------|-------|
| Search intent match | 5/10 | Generic agency copy, not keyword-targeted |
| Keyword targeting | 2/10 | No visible keyword strategy |
| Topical relevance | 6/10 | Relevant to digital agency space |
| Content depth | 4/10 | Thin content per section |
| Content uniqueness | 7/10 | Distinctive brand voice |
| Helpful content | 6/10 | Good for humans, weak for crawlers |
| Thin content risk | High | Most sections are 1-2 paragraphs |
| Generic marketing copy | Low | Distinctive voice, not generic |
| Keyword stuffing | None | Clean, natural language |
| Entity clarity | 5/10 | Brand name clear, services less so |
| Service clarity | 6/10 | Three services defined but not detailed |
| Geographic relevance | 3/10 | "Bangladesh" mentioned once in hero |
| Conversion intent | 7/10 | Strong CTA architecture |
| E-E-A-T signals | 4/10 | Founder info present, no credentials |
| Trust signals | 3/10 | No testimonials, case studies, or client proof |
| Proof/case studies | 2/10 | Only concept projects shown |
| Author/founder information | 7/10 | Al A Min profile present |
| Contact information | 6/10 | Email + WhatsApp, no phone/address |
| Business legitimacy | 4/10 | No business registration, no physical address |

### Google Understanding Assessment

Can Google clearly understand:

1. **What Almoo Studio is?** — Partially. "Digital agency" not explicitly stated in homepage content. Services imply it.
2. **Where it is based?** — Barely. "Bangladesh" mentioned once in hero trust signal. No address, no local signals.
3. **What services it provides?** — Yes. Three services clearly defined.
4. **Who it serves?** — Weakly. "Businesses ready to grow" is vague.
5. **Whether it works internationally?** — Yes. "Bangladesh & internationally" stated.
6. **Why a customer should trust it?** — No. No testimonials, case studies, reviews, or credentials.

---

## 8. Keyword Strategy Audit

### Current Keyword Coverage

| Keyword Group | Target Keywords | Currently Targeted | Opportunity |
|---------------|-----------------|-------------------|-------------|
| **Brand** | Almoo Studio, Almoo | Partial (title only) | High |
| **Web** | web development agency Bangladesh | Not targeted | Critical |
| **Web** | web design agency Bangladesh | Not targeted | Critical |
| **Web** | website development company Bangladesh | Not targeted | Critical |
| **Web** | custom web development Bangladesh | Not targeted | High |
| **App** | web application development Bangladesh | Not targeted | High |
| **App** | custom software development Bangladesh | Not targeted | High |
| **AI** | AI automation agency Bangladesh | Not targeted | Medium |
| **Growth** | digital growth agency Bangladesh | Not targeted | High |
| **Growth** | SEO agency Bangladesh | Not targeted | Medium |
| **Growth** | conversion optimization Bangladesh | Not targeted | Medium |

### Keyword Cannibalization Risks
- **None detected.** Single-page architecture means no internal competition.
- **However:** Single-page architecture also means only ONE URL can rank for any keyword.

### High-Value Keyword Clusters

| Cluster | Example Keywords | Monthly Search Volume (Estimated) | Difficulty |
|---------|------------------|-----------------------------------|------------|
| Web Development Bangladesh | web development agency Bangladesh, website development company Bangladesh | 1,000-5,000 | High |
| Web Design Bangladesh | web design agency Bangladesh, website design Bangladesh | 500-2,000 | High |
| Custom Software Bangladesh | custom software development Bangladesh, web application development | 200-1,000 | Medium |
| Digital Agency Bangladesh | digital agency Bangladesh, digital marketing agency Bangladesh | 1,000-5,000 | Very High |
| AI Agency Bangladesh | AI automation agency Bangladesh, AI solutions Bangladesh | 100-500 | Low |

---

## 9. Information Architecture

### Current Structure
```
almoo.pro.bd/
└── / (single page with anchor sections)
    ├── #philosophy
    ├── #services
    ├── #process
    ├── #work
    ├── #faq
    ├── #founder
    └── #inquiry
```

### Recommended Architecture
```
almoo.pro.bd/
├── / (homepage)
├── /services/
│   ├── /services/web-design/
│   ├── /services/web-development/
│   ├── /services/web-applications/
│   ├── /services/ui-ux-design/
│   ├── /services/ai-automation/
│   └── /services/digital-growth/
├── /work/
│   ├── /work/immersive-web-concept/
│   ├── /work/treactly-saas-platform/
│   └── /work/jackpot-brand-system/
├── /about/
├── /contact/
├── /blog/
│   └── /blog/[slug]/
├── /digital-agency-bangladesh/
├── /robots.txt
└── /sitemap.xml
```

### Missing Pages

| Page | Priority | SEO Value |
|------|----------|-----------|
| `/services/` | Critical | Service hub page |
| `/services/web-design/` | Critical | Target "web design Bangladesh" |
| `/services/web-development/` | Critical | Target "web development Bangladesh" |
| `/services/web-applications/` | High | Target "web app development Bangladesh" |
| `/services/ai-automation/` | High | Target "AI automation Bangladesh" |
| `/services/digital-growth/` | High | Target "digital growth Bangladesh" |
| `/work/` | High | Portfolio hub |
| `/about/` | Medium | Brand entity page |
| `/contact/` | Medium | Contact page (separate from form) |
| `/blog/` | High | Content marketing hub |
| `/digital-agency-bangladesh/` | High | Location/industry landing page |

### URL Quality
- Current URL: `almoo.pro.bd/` — Clean, good
- Anchor URLs: `#services`, `#work` — Functional but not indexable
- No parameter pollution
- No URL length issues

---

## 10. Internal Linking

### Current Internal Link Map

| Source | Targets | Count |
|--------|---------|-------|
| Navbar | #philosophy, #services, #process, #work, #faq, #inquiry | 6 |
| Hero | #inquiry, #work | 2 |
| Services | #inquiry (×3) | 3 |
| Work | External link (jackpotbd.vercel.app) | 1 |
| Founder | #inquiry | 1 |
| FAQ | None | 0 |
| Contact | #inquiry (implicit) | 1 |
| Footer | #inquiry, #work, #services, #philosophy, mailto:, wa.me | 6 |

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| No separate service pages to link to | High | Can't distribute authority to keyword-targeted pages |
| No blog posts to link from | High | No content-based internal linking |
| Work section has only 1 external link | Low | Limited link equity flow |
| FAQ has no outbound internal links | Low | Missed opportunity to link to services |
| All CTAs point to same #inquiry | Low | Concentrated link equity |

### Recommended Internal Linking Architecture
```
Homepage → Services (hub)
Homepage → Work (hub)
Homepage → About
Homepage → Blog
Services hub → Individual service pages
Individual service pages → Related work
Individual service pages → Contact/Inquiry
Blog posts → Related services
Blog posts → Related blog posts
Work items → Related services
About → Services
About → Founder (Person schema)
```

---

## 11. Image SEO

### Image Inventory

| Image | Alt Text | Format | Size | Lazy Loading |
|-------|----------|--------|------|--------------|
| hero-image.jpg | "Almoo Studio" | JPEG | Unknown | No (preload) |
| founder.jpg | Not inspected | JPEG | Unknown | No |
| digital-exp-1.png | Via MorphSlider | PNG | Unknown | No |
| digital-exp-2.png | Via MorphSlider | PNG | Unknown | No |
| web-app-1.png | Via MorphSlider | PNG | Unknown | No |
| web-app-2.png | Via MorphSlider | PNG | Unknown | No |
| jackpot-brand*.png (6) | Via MorphSlider | PNG | Unknown | No |
| favicon.png | N/A | PNG | Unknown | N/A |
| icon-code.svg | N/A | SVG | N/A | N/A |

### Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| Generic alt text ("Almoo Studio") | Medium | Should describe the image content |
| PNG format for photos | High | Should be WebP/AVIF for performance |
| No lazy loading on below-fold images | Medium | Could improve LCP |
| No `srcset` or responsive images | Medium | Same image served at all viewports |
| No image optimization in next.config.ts | High | No WebP/AVIF generation |
| Video autoplay without poster | Medium | Affects LCP |

### Recommended Alt Text Patterns
- Hero image: `alt="Almoo Studio digital agency workspace"` (if it shows workspace)
- Work images: `alt="Immersive web concept - interactive storytelling interface"`
- Founder: `alt="Al A Min, Founder of Almoo Studio"`

---

## 12. Structured Data / Schema

### Current Status
**No JSON-LD or structured data present anywhere on the site.**

### What Should Be Added

| Schema Type | Priority | Notes |
|-------------|----------|-------|
| Organization | Critical | Name, description, URL, logo, sameAs, contact |
| LocalBusiness | High | If physical office exists in Bangladesh |
| WebSite | High | Site name, URL, potentialAction (search) |
| Service (×3) | High | Web Design, Web Applications, Digital Growth |
| FAQPage | Medium | 9 FAQ items already present — easy win |
| Person | Medium | Al A Min founder profile |
| BreadcrumbList | Medium | If multi-page architecture implemented |
| ImageObject | Low | For work portfolio images |

### What Should NOT Be Added
- Fake reviews or ratings
- Fake address or business location
- AggregateRating without real reviews
- Junk structured data

---

## 13. Open Graph / Social SEO

### Current Implementation

| Tag | Present | Value | Quality |
|-----|---------|-------|---------|
| og:title | Yes | Almoo Studio — Web, App & Digital Growth | Good |
| og:description | Yes | Almoo Studio builds custom web, app, and digital solutions... | Good |
| og:type | Yes | website | Correct |
| og:image | **No** | — | Critical gap |
| og:url | **No** | — | Missing |
| og:site_name | **No** | — | Missing |
| og:locale | **No** | — | Missing |
| twitter:card | Yes | summary_large_image | Good |
| twitter:title | Yes | Almoo Studio — Web, App & Digital Growth | Good |
| twitter:description | Yes | Almoo Studio builds custom web, app, and digital solutions... | Good |
| twitter:image | **No** | — | Critical gap |
| twitter:site | **No** | — | Missing (@almoostudio) |

### Social Sharing Preview (Current)
When shared on Facebook/WhatsApp: **No image preview** — only title and description.
When shared on Twitter/X: **No image preview** — only title and description.

### Social Profiles Verification

| Platform | Official URL | Website Links To | Status |
|----------|-------------|------------------|--------|
| Instagram | @almoostudio | Empty string in code | Broken |
| Facebook | facebook.com/almoostudio | Empty string in code | Broken |
| TikTok | tiktok.com/@almoostudio | Empty string in code | Broken |
| X (Twitter) | x.com/almoostudio | Empty string in code | Broken |
| YouTube | @almoostudio | Empty string in code | Broken |
| GitHub | github.com/organizations/almoostudio | Empty string in code | Broken |
| WhatsApp | +8801882030873 | Linked correctly (wa.me) | Working |
| Email | almoo.agency@gmail.com | Linked correctly (mailto:) | Working |
| LinkedIn | Not found | Not present | Missing |
| Behance | Not found | Not present | Missing |
| Dribbble | Not found | Not present | Missing |
| Clutch | Not found | Not present | Missing |
| DesignRush | Not found | Not present | Missing |
| Goodfirms | Not found | Not present | Missing |

**Critical finding:** All social media links in the footer (`CinematicFooter.tsx:139-145`) are empty strings. The social links section is completely non-functional.

---

## 14. Performance

### Core Web Vitals Assessment

| Metric | Estimated Status | Notes |
|--------|------------------|-------|
| **LCP** | Likely poor (3-5s+) | Hero video autoplay, multiple font loads, large images |
| **INP** | Likely moderate | GSAP animations + Motion + React state |
| **CLS** | Likely good | Fixed layout, no dynamic content shifts |

### Performance Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| Hero video autoplays without poster | High | Affects LCP significantly |
| 3 Google Fonts loaded synchronously | High | Render-blocking CSS |
| GSAP + ScrollTrigger loaded on all pages | Medium | ~50KB+ JavaScript |
| Motion (Framer Motion) loaded on all pages | Medium | Additional JS bundle |
| No image format optimization | High | PNG/JPEG instead of WebP/AVIF |
| No lazy loading on below-fold images | Medium | Unnecessary early loading |
| CinematicFooter is GSAP scroll-pinned | Medium | Heavy animation on scroll |
| Grain overlay uses SVG filter | Low | Minor rendering cost |
| Multiple `dangerouslySetInnerHTML` style blocks | Low | Could be extracted to CSS files |

### Font Loading Strategy
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Geist:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
```
- 3 font families loaded
- `display=swap` is good (prevents FOIT)
- But loaded synchronously in `<head>` — should be preloaded or deferred

### Animation Impact on SEO
- GSAP ScrollTrigger: Heavy but respects `prefers-reduced-motion`
- Motion animations: Lightweight, well-optimized
- InfiniteMovingCards: Continuous animation, potential battery/performance concern
- MorphSlider: Image transitions, moderate impact

---

## 15. Mobile SEO

### Responsive Layout Assessment

| Element | Mobile Behavior | Quality |
|---------|-----------------|---------|
| Hero | Image faded to 20% opacity, repositioned | Good |
| Services | Full-width, stacked | Good |
| Process | Grid collapses to single column | Good |
| Work | Single column, 4:3 aspect ratio | Good |
| Founder | Grid collapses, card reordered | Good |
| FAQ | Full-width, touch-friendly | Good |
| Contact/Inquiry | Form adapts, single column | Good |
| Footer | Stacked layout | Good |
| Navigation | Hamburger menu with fullscreen overlay | Good |

### Mobile-Specific Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| Hero image barely visible on mobile | Low | 20% opacity — intentional design choice |
| Video autoplay on mobile | Medium | May cause performance issues on slower devices |
| Process section grid override uses `!important` | Low | Inline styles with `!important` override |
| No AMP version | Low | Not critical for this type of site |
| Touch targets adequate | Good | All buttons meet 48px minimum |
| No horizontal overflow | Good | `overflow-x: clip` applied |

### Mobile Metadata
- Viewport tag: Present and correct
- Title: Same as desktop (appropriate)
- Description: Same as desktop (appropriate)

---

## 16. Local SEO

### Current Local Signals

| Signal | Present | Notes |
|--------|---------|-------|
| Bangladesh location mentioned | Yes | "Bangladesh & internationally" in hero |
| Physical address | No | Not listed anywhere |
| Phone number | Partial | WhatsApp only, no direct phone |
| Business hours | No | Not listed |
| Google Business Profile | Unknown | Not found in search |
| Local keywords | Minimal | "Bangladesh" appears once |
| Location-specific pages | No | No /dhaka/ or /bangladesh/ pages |
| LocalBusiness schema | No | Not implemented |
| NAP consistency | Incomplete | No address, phone is WhatsApp only |

### Local SEO Opportunities

| Opportunity | Priority | Notes |
|-------------|----------|-------|
| Create Google Business Profile | Critical | Free, high-impact for local search |
| Add physical address (if real) | High | Must be legitimate — no fake addresses |
| Create /digital-agency-bangladesh/ page | High | Target local keyword cluster |
| Add LocalBusiness schema | High | With real business information |
| List on Bangladesh business directories | Medium | .bd directories, local citations |
| Create Dhaka-specific landing page | Medium | If Dhaka-based |

### Important Note
**Do not create fake business addresses or fake business information.** Only include legitimate, verifiable business details.

---

## 17. E-E-A-T / Trust

### Experience, Expertise, Authoritativeness, Trustworthiness

| Signal | Present | Quality | Notes |
|--------|---------|---------|-------|
| **Experience** | Partial | Medium | Concept projects show skill, no client work |
| **Expertise** | Partial | Medium | Founder credentials listed, no detailed expertise page |
| **Authoritativeness** | Weak | Low | No backlinks, no industry recognition, no press |
| **Trustworthiness** | Weak | Low | No testimonials, no case studies, no reviews |

### Trust Signals Audit

| Signal | Present | Impact |
|--------|---------|--------|
| Founder information | Yes | Al A Min profile with skills |
| Agency information | Partial | Description exists, no detailed about page |
| Portfolio | Yes | 3 projects (2 concepts, 1 real) |
| Case studies | No | Critical gap |
| Client proof | No | No client logos, no testimonials |
| Testimonials | No | Critical gap |
| Contact information | Partial | Email + WhatsApp only |
| Social presence | Weak | Instagram has 0 followers, 1 post |
| Business email | Yes | almoo.agency@gmail.com |
| About page | No | Founder section exists but no /about/ page |
| Credentials | No | No certifications, no awards |
| Transparency | Low | No pricing, no team info, no company details |
| Real-world proof | Low | Only concept projects shown |

### E-E-A-T Improvement Priorities
1. Add client testimonials (even 2-3 would help)
2. Create case studies from real projects
3. Add team members or at least "About the studio" page
4. Get listed on Clutch, DesignRush, Goodfirms
5. Publish blog content demonstrating expertise
6. Add client logos (with permission)

---

## 18. Brand Entity SEO

### Entity Consistency Check

| Signal | Website | Social Accounts | Consistent? |
|--------|---------|-----------------|-------------|
| Brand name | "Almoo Studio" | @almoostudio | Yes |
| Description | "digital agency...websites, apps, growth strategies" | "Digital studio crafting websites, apps & growth strategies" | Partial |
| Logo | favicon.png | Not verified | Unknown |
| Location | "Bangladesh" (hero text) | "Bangladesh" (Instagram bio) | Yes |
| Contact | almoo.agency@gmail.com | almoo.agency@gmail.com (Instagram) | Yes |
| Founder | Al A Min | Not present on social | Inconsistent |

### Entity Building Strategy

**Current entity signal:** Weak. Google sees almoo.pro.bd as a website but has low confidence connecting it to "Almoo Studio digital agency Bangladesh."

**Recommended actions:**
1. Implement Organization schema with sameAs links to all social profiles
2. Complete all social media profiles with consistent information
3. Get listed on business directories (Clutch, DesignRush, Goodfirms)
4. Create LinkedIn company page
5. Create Behance/Dribbble profiles with portfolio
6. Publish content that reinforces entity associations
7. Get press/mentions from Bangladesh tech publications
8. Implement Person schema for Al A Min

---

## 19. Content Strategy

### Blog Necessity Assessment
**Almoo needs a blog.** Currently, there is zero content marketing infrastructure. A blog would:
- Target long-tail keywords
- Build topical authority
- Provide internal linking opportunities
- Demonstrate expertise (E-E-A-T)
- Create shareable content for social media

### Content Clusters

| Cluster | Core Topic | Supporting Topics |
|---------|------------|-------------------|
| Web Development | Custom web development | Next.js, React, performance, responsive design |
| Web Applications | SaaS, dashboards, platforms | API design, authentication, real-time features |
| Digital Growth | Conversion optimization | SEO, analytics, A/B testing, user research |
| AI & Automation | AI integration | Chatbots, workflow automation, data processing |
| UI/UX Design | User-centered design | Design systems, accessibility, prototyping |
| Bangladesh Digital | Local market | Bangladesh tech scene, local business digital transformation |

### 20 High-Value Content Opportunities

| # | Title | Intent | Keyword Cluster | Page Type | Internal Links To |
|---|-------|--------|-----------------|-----------|-------------------|
| 1 | "Web Development Agency in Bangladesh: What to Look for in 2026" | Commercial | web development agency Bangladesh | Blog post | /services/web-development/ |
| 2 | "How Much Does a Website Cost in Bangladesh? Complete Pricing Guide" | Commercial | website cost Bangladesh | Blog post | /services/web-design/ |
| 3 | "Custom Web Application Development: When You Need More Than a Website" | Informational | web application development | Blog post | /services/web-applications/ |
| 4 | "Next.js vs WordPress: Which Is Better for Your Business Website?" | Informational | Next.js WordPress comparison | Blog post | /services/web-development/ |
| 5 | "10 Signs Your Website Needs a Redesign" | Informational | website redesign | Blog post | /services/web-design/ |
| 6 | "How AI Automation Can Transform Your Business Operations" | Informational | AI automation business | Blog post | /services/ai-automation/ |
| 7 | "Digital Growth Strategy: A Complete Guide for Bangladesh Businesses" | Informational | digital growth Bangladesh | Blog post | /services/digital-growth/ |
| 8 | "E-Commerce Website Development in Bangladesh: Complete Guide" | Commercial | ecommerce website Bangladesh | Blog post | /services/web-development/ |
| 9 | "How to Choose the Right Web Design Agency in Bangladesh" | Commercial | web design agency Bangladesh | Blog post | /services/web-design/ |
| 10 | "Web Application vs Website: Which Does Your Business Need?" | Informational | web application vs website | Blog post | /services/web-applications/ |
| 11 | "UI/UX Design Principles That Increase Conversions" | Informational | UI UX design conversions | Blog post | /services/ui-ux-design/ |
| 12 | "Case Study: How We Built [Client] Custom Web Application" | Commercial | custom web application case study | Case study | /services/web-applications/ |
| 13 | "The Complete Guide to Website Performance Optimization" | Informational | website performance optimization | Blog post | /services/digital-growth/ |
| 14 | "Why Your Business Needs a Custom Web Application in 2026" | Commercial | custom web application 2026 | Blog post | /services/web-applications/ |
| 15 | "SEO for Bangladesh Businesses: Local Search Optimization Guide" | Informational | SEO Bangladesh | Blog post | /services/digital-growth/ |
| 16 | "How We Approach Every Project: Our 6-Step Development Process" | Informational | web development process | Blog post | /process |
| 17 | "Case Study: Jackpot Brand System — From Logo to Digital" | Commercial | brand identity case study | Case study | /work/jackpot-brand-system/ |
| 18 | "Digital Agency vs Freelancer: Which Is Right for Your Project?" | Informational | digital agency vs freelancer | Blog post | /about |
| 19 | "How to Start a Digital Transformation for Your Bangladesh Business" | Informational | digital transformation Bangladesh | Blog post | /services/digital-growth/ |
| 20 | "Web Accessibility: Why Your Website Needs to Be Accessible in 2026" | Informational | web accessibility 2026 | Blog post | /services/ui-ux-design/ |

---

## 20. Competitor / SERP Analysis

### Competitive Landscape (Bangladesh Digital Agency Market)

| Competitor | Price Range | Employees | Reviews | Key Strength |
|------------|-------------|-----------|---------|--------------|
| Red Sparrow Digital | $25-49/hr | 50-99 | 5.0 (multiple) | SEO + content marketing |
| Ngital | $25-49/hr | 10-49 | 5.0 (multiple) | Full-service digital marketing |
| VISER X | $25-49/hr | 10-49 | 4.8+ | Web development + SEO |
| Orbix Studio LLC | $50-99/hr | 10-49 | 5.0 (38) | Premium web design |
| Musemind | $50-99/hr | 10-49 | 5.0 (12) | UI/UX design |
| Microdeft | $25-49/hr | 50-99 | 4.8+ | Software development |
| LogoFarmer's Studio | $25-49/hr | 2-9 | 5.0 (4) | Brand identity |
| Inks.studio | $25-49/hr | 2-9 | 5.0 (1) | Creative design |

### SERP Features for Target Keywords

| Keyword | SERP Features Present |
|---------|----------------------|
| web development agency Bangladesh | Local pack, organic results, people also ask |
| web design agency Bangladesh | Local pack, organic results, ads |
| digital agency Bangladesh | Local pack, organic results, map pack |
| SEO agency Bangladesh | Local pack, organic results, people also ask |

### Strategic Gaps Almoo Can Exploit

| Gap | Opportunity | Difficulty |
|-----|-------------|------------|
| No premium-positioned agency in Bangladesh | Position as premium custom studio | Medium |
| Most competitors are template-focused | Emphasize custom, no-template approach | Low |
| Few agencies have strong case studies | Create detailed case studies | Medium |
| AI automation is underserved | Own the AI automation niche | Low |
| Most agencies lack strong founder brand | Build Al A Min's personal brand | Medium |
| Few agencies target international clients | Create content for international audience | Medium |

---

## 21. Backlink / Authority Strategy

### Current Authority Status

| Metric | Status |
|--------|--------|
| Domain Authority | Unknown (likely very low — new site) |
| Referring domains | Unknown (likely zero) |
| Backlinks | Unknown (likely zero) |
| Social signals | Very low (0 Instagram followers) |

### Recommended Legitimate Backlink Sources

| Source | Type | Priority | Action |
|--------|------|----------|--------|
| Clutch.co | Business directory | Critical | Create agency profile |
| DesignRush | Business directory | Critical | Create agency profile |
| Goodfirms | Business directory | High | Create agency profile |
| LinkedIn | Professional network | Critical | Create company page |
| Behance | Portfolio platform | High | Upload portfolio projects |
| Dribbble | Design community | High | Upload design shots |
| GitHub | Developer platform | High | Open-source contributions |
| Product Hunt | Startup platform | Medium | Launch projects |
| Bangladesh tech blogs | Industry PR | Medium | Guest contributions |
| Startup Bangladesh | Government directory | Medium | Register if eligible |
| Facebook Developer Community | Social | Medium | Share projects |
| Dev.to / Medium | Technical writing | Medium | Publish articles |

### What NOT to Do
- No spam backlinks
- No PBNs (Private Blog Networks)
- No purchased links
- No automated link building
- No irrelevant directories

---

## 22. Security / SEO Risks

| Check | Status | Notes |
|-------|--------|-------|
| HTTPS | Active | SSL certificate working |
| Mixed content | None detected | All resources loaded over HTTPS |
| Exposed secrets | None visible | .env file exists but not exposed in code |
| Unsafe external scripts | None detected | Only Google Fonts loaded externally |
| Suspicious redirects | None detected | Direct HTTPS access |
| Insecure resources | None detected | All assets on same domain or HTTPS CDN |
| Security headers | Unknown | Cannot verify without server access |
| API rate limiting | Implemented | /api/inquiry has IP-based rate limiting |

---

## 23. SEO Scorecard

| Category | Score (0-100) | Notes |
|----------|---------------|-------|
| **Technical SEO** | 15/100 | No robots.txt, no sitemap, no canonicals, no schema |
| **On-page SEO** | 35/100 | Good title/description, good headings, missing og:image |
| **Content** | 30/100 | Good brand voice, thin content, no blog, no keywords |
| **Information Architecture** | 20/100 | SPA limits SEO, no separate pages |
| **Internal Linking** | 25/100 | Anchor-based only, no cross-page linking |
| **Structured Data** | 0/100 | Nothing implemented |
| **Performance** | 45/100 | Good framework, heavy animations, no image optimization |
| **Mobile SEO** | 55/100 | Responsive, good touch targets, hero degraded |
| **Local SEO** | 15/100 | "Bangladesh" mentioned once, no GBP, no location pages |
| **Entity/Brand SEO** | 20/100 | Weak social presence, empty links, no schema |
| **Authority/Backlinks** | 5/100 | No backlinks, no directory listings |
| **Conversion SEO** | 60/100 | Strong CTA, good form, clear flow |

### **Overall SEO Health Score: 28/100**

**Why this score:**
- The site has excellent design and development quality (not reflected in SEO score)
- Technical SEO infrastructure is completely absent
- The site is invisible to Google (0 indexed pages)
- No content strategy exists
- No authority-building has been done
- Single-page architecture fundamentally limits SEO potential
- Conversion elements are strong, which is the only bright spot

---

## 24. Critical Issues

| # | Issue | Severity | Impact | Effort |
|---|-------|----------|--------|--------|
| 1 | No robots.txt file | Critical | Google can't follow crawl directives | Low |
| 2 | No sitemap.xml file | Critical | Google can't discover pages | Low |
| 3 | No canonical URLs | Critical | Duplicate content risk, confused indexing | Low |
| 4 | 0 pages indexed by Google | Critical | Complete search invisibility | Medium |
| 5 | No JSON-LD structured data | Critical | No rich results, weak entity understanding | Medium |

---

## 25. High Priority Issues

| # | Issue | Severity | Impact | Effort |
|---|-------|----------|--------|--------|
| 1 | Social media links are empty strings | High | Broken social proof, no social signals | Low |
| 2 | No og:image or twitter:image | High | Poor social sharing preview | Low |
| 3 | No service-specific pages | High | Can't rank for service keywords | High |
| 4 | No blog or content pages | High | No content marketing, no long-tail keywords | High |
| 5 | No Google Business Profile | High | Missing local search visibility | Low |
| 6 | No directory listings (Clutch, etc.) | High | No authority signals, no backlinks | Medium |
| 7 | PNG/JPEG images instead of WebP/AVIF | High | Slower page load, worse Core Web Vitals | Medium |
| 8 | No LinkedIn company page | High | Missing professional network presence | Low |

---

## 26. Medium/Low Priority Issues

| # | Issue | Severity | Impact | Effort |
|---|-------|----------|--------|--------|
| 1 | Generic image alt text | Medium | Weak image SEO | Low |
| 2 | No hreflang tags | Medium | Mixed signals for international audience | Low |
| 3 | Multiple Google Fonts loaded synchronously | Medium | Slower initial load | Low |
| 4 | Hero video without poster image | Medium | Affects LCP | Low |
| 5 | No Behance/Dribbble profiles | Low | Missed design community presence | Low |
| 6 | Instagram has 0 followers | Low | Weak social proof | Medium |

---

## 27. Recommended Site Architecture

### Current Architecture
```
almoo.pro.bd/ (single page, all content)
```

### Recommended Architecture
```
almoo.pro.bd/
├── / (homepage — hero, overview, CTA)
├── /services/
│   ├── /services/web-design/
│   ├── /services/web-development/
│   ├── /services/web-applications/
│   ├── /services/ui-ux-design/
│   ├── /services/ai-automation/
│   └── /services/digital-growth/
├── /work/
│   ├── /work/immersive-web-concept/
│   ├── /work/treactly-saas-platform/
│   └── /work/jackpot-brand-system/
├── /about/
├── /contact/
├── /blog/
│   └── /blog/[slug]/
├── /digital-agency-bangladesh/
├── /robots.txt
└── /sitemap.xml
```

---

## 28. Recommended Content Architecture

```
Homepage
├── Hero (revised for local + service keywords)
├── Services overview (links to /services/)
├── Featured work (links to /work/)
├── Quick process overview
├── Trust signals (testimonials, client logos)
├── CTA → /contact/

Service Pages (individual)
├── Service hero
├── What we do
├── Who it's for
├── Process
├── Related work
├── FAQ
├── CTA → /contact/

Blog
├── Category pages (web development, digital growth, etc.)
├── Individual articles
├── Related posts
├── CTA → /services/
```

---

## 29. Prioritized Implementation Roadmap

### Phase 1 — Critical Fixes (Week 1)
1. Create robots.txt with sitemap reference
2. Create XML sitemap
3. Add canonical URLs to all pages
4. Add Organization + WebSite JSON-LD schema
5. Add og:image and twitter:image
6. Fix all social media links in footer

### Phase 2 — On-Page SEO (Week 2-3)
1. Add meta robots tag (index, follow)
2. Optimize title tag with target keywords
3. Optimize meta description with keywords + CTA
4. Add alt text to all images
5. Add FAQPage schema for existing FAQ
6. Add Person schema for founder

### Phase 3 — Architecture (Week 3-5)
1. Create /services/ hub page
2. Create individual service pages (3-6 pages)
3. Create /about/ page
4. Create /contact/ page
5. Implement BreadcrumbList schema
6. Update internal linking

### Phase 4 — Content (Week 5-8)
1. Set up blog infrastructure
2. Publish first 5 articles from content strategy
3. Create 1-2 case studies from real projects
4. Add testimonials section (need real data)
5. Add client logos section (need real data)

### Phase 5 — Authority (Week 8-12)
1. Create Clutch.co profile
2. Create DesignRush profile
3. Create Goodfirms profile
4. Create LinkedIn company page
5. Create Behance/Dribbble profiles
6. Start GitHub presence

### Phase 6 — Measurement (Ongoing)
1. Set up Google Search Console
2. Set up GA4
3. Configure conversion tracking
4. Monitor SEO KPIs monthly
5. Track keyword rankings
6. Monitor backlink growth

---

## 30. Before vs After Architecture

### Before (Current)
```
/ (single page — all content)
├── No robots.txt
├── No sitemap.xml
├── No canonical URLs
├── No structured data
├── No service pages
├── No blog
├── No location pages
├── Empty social links
└── 0 pages indexed
```

### After (Recommended)
```
/ (homepage)
/services/ (hub)
/services/web-design/
/services/web-development/
/services/web-applications/
/services/ai-automation/
/services/digital-growth/
/work/ (hub)
/work/[project-slug]/
/about/
/contact/
/blog/ (hub)
/blog/[slug]/
/digital-agency-bangladesh/
/robots.txt
/sitemap.xml
+ Organization schema
+ FAQPage schema
+ Service schemas
+ Person schema
+ BreadcrumbList schema
+ og:image + twitter:image
+ Complete social links
+ Google Business Profile
+ Directory listings
```

---

## 31. Recommended Implementation

### 1. robots.txt
- **What:** Create /public/robots.txt
- **Why:** Tell Google how to crawl the site, reference sitemap
- **Page:** New file
- **Expected benefit:** Google can properly crawl and discover pages
- **Priority:** Critical
- **Implementation notes:** Allow all, reference sitemap.xml

### 2. sitemap.xml
- **What:** Create dynamic sitemap via Next.js
- **Why:** Help Google discover all pages
- **Page:** /sitemap.xml (generated by Next.js)
- **Expected benefit:** Faster indexing, better crawl coverage
- **Priority:** Critical
- **Implementation notes:** Use next-sitemap or manual generation

### 3. Canonical URLs
- **What:** Add `<link rel="canonical">` to all pages
- **Why:** Prevent duplicate content, consolidate ranking signals
- **Page:** app/layout.tsx (metadata export)
- **Expected benefit:** Clearer indexing signals
- **Priority:** Critical
- **Implementation notes:** Self-referencing canonicals for all pages

### 4. Organization Schema
- **What:** Add JSON-LD Organization schema
- **Why:** Help Google understand the business entity
- **Page:** app/layout.tsx or components/Schema.tsx
- **Expected benefit:** Rich results, entity recognition
- **Priority:** Critical
- **Implementation notes:** Include name, description, URL, logo, sameAs, contactPoint

### 5. FAQPage Schema
- **What:** Add JSON-LD FAQPage schema for existing FAQ
- **Why:** Existing 9 FAQ items can appear as rich results
- **Page:** components/FAQ.tsx
- **Expected benefit:** FAQ rich results in Google
- **Priority:** High
- **Implementation notes:** Map existing FAQ items to schema format

### 6. Service Pages
- **What:** Create individual service pages with unique content
- **Why:** Target service-specific keywords, distribute authority
- **Page:** /services/web-design/, /services/web-development/, etc.
- **Expected benefit:** Rank for "web development agency Bangladesh" etc.
- **Priority:** High
- **Implementation notes:** Each page needs unique content, 1500+ words, internal links

### 7. og:image + twitter:image
- **What:** Add Open Graph and Twitter image tags
- **Why:** Social sharing shows preview image
- **Page:** app/layout.tsx + public/og-image.png
- **Expected benefit:** Better social sharing appearance
- **Priority:** High
- **Implementation notes:** Create 1200x630px branded image

### 8. Fix Social Links
- **What:** Replace empty strings with real URLs in CinematicFooter.tsx
- **Why:** Social proof, brand consistency, entity signals
- **Page:** components/CinematicFooter.tsx:139-145
- **Expected benefit:** Working social links, better entity signals
- **Priority:** High
- **Implementation notes:** Need real social media URLs from Almoo

### 9. Image Optimization
- **What:** Convert images to WebP/AVIF, add lazy loading, implement srcset
- **Why:** Better Core Web Vitals, faster page load
- **Page:** next.config.ts + image components
- **Expected benefit:** Improved LCP, better performance scores
- **Priority:** High
- **Implementation notes:** Use Next.js Image component or next.config.ts image optimization

### 10. Blog Infrastructure
- **What:** Create blog with MDX or CMS
- **Why:** Content marketing, long-tail keywords, topical authority
- **Page:** /blog/, /blog/[slug]/
- **Expected benefit:** Target informational keywords, build authority
- **Priority:** High
- **Implementation notes:** Use MDX for developer blog or integrate headless CMS

---

## 32. Final Recommendations

### Immediate Actions (This Week)
1. **Create robots.txt** — 5 minutes, critical impact
2. **Create sitemap.xml** — 30 minutes, critical impact
3. **Add canonical URLs** — 30 minutes, critical impact
4. **Fix social media links** — 10 minutes, high impact
5. **Add og:image** — 1 hour, high impact

### Short-term Actions (This Month)
1. Add Organization + FAQPage schema
2. Create first 3 service pages
3. Set up Google Search Console
4. Set up GA4
5. Create Clutch.co profile

### Medium-term Actions (This Quarter)
1. Publish 5-10 blog posts
2. Create 2-3 case studies
3. Create LinkedIn company page
4. Build backlink profile through directories
5. Implement all service pages

### Long-term Actions (This Year)
1. Build content library (20+ articles)
2. Achieve first-page rankings for 3-5 target keywords
3. Build domain authority through backlinks
4. Establish Al A Min as thought leader
5. Expand to international keyword targeting

### What NOT to Do
- Do not buy backlinks
- Do not use PBNs
- Do not stuff keywords
- Do not create fake reviews or testimonials
- Do not create fake business addresses
- Do not copy competitor content
- Do not use black-hat SEO techniques

---

*Report generated: September 2, 2026*
*Source: Live site inspection + source code analysis*
*Confidence: High*
*Auditor: Automated SEO Audit*
