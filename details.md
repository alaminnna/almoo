# Project Overview

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15.1.0 |
| Language | TypeScript 5.7.0 |
| React | React 19.0.0 |
| CSS Framework | Tailwind CSS 4.0.0 |
| Animation Libraries | GSAP 3.15.0, Motion (Framer Motion) 13.1.0 |
| WebGL | OGL 1.0.11 (MorphSlider) |
| Utility | clsx 2.1.1, tailwind-merge 3.6.0 |
| Build Tool | Next.js (Turbopack) |
| Routing | App Router |
| Fonts | Bricolage Grotesque (display), Geist (body), Plus Jakarta Sans (backup) |

## Project Architecture

Single-page marketing website for "Almoo Studio" — a web/app/digital growth agency. The site uses a component-based architecture with all UI components in `/components/`. Animation is implemented through:

- **Motion (Framer Motion)** — primary animation layer via reusable primitives (`FadeIn`, `MaskReveal`, `BlurReveal`, `StaggerContainer`, `ScaleReveal`, `SlideIn`, `LineReveal`, `WordReveal`)
- **GSAP with ScrollTrigger** — scroll-driven and complex animations (CinematicFooter, Button magnetic effect)
- **CSS `@keyframes`** — global reveal classes (`.reveal`, `.reveal-left`, `.sweep`), infinite scroll marquees, breathing effects
- **CSS transitions** — hover/interaction states throughout

The design system uses CSS custom properties (`tokens.css`) for consistent spacing, typography, colors, easing, and durations. A `lib/utils.ts` provides a `cn()` helper (clsx + tailwind-merge).

---

# Complete Component Inventory

## Page Sections (rendered in `app/page.tsx`)

| # | Component | File Path | Type | Interactive | Animated |
|---|-----------|-----------|------|-------------|----------|
| 1 | Navbar | `components/Navbar.tsx` | Layout | Yes | Yes |
| 2 | Hero | `components/Hero.tsx` | Section | Yes | Yes |
| 3 | Philosophy | `components/Philosophy.tsx` | Section | No | Yes |
| 4 | Services | `components/Services.tsx` | Section | Yes | Yes |
| 5 | Process | `components/Process.tsx` | Section | No | Yes |
| 6 | Work | `components/Work.tsx` | Section | No | Yes |
| 7 | AlmooApproach | `components/AlmooApproach.tsx` | Section | Yes | Yes |
| 8 | Founder | `components/Founder.tsx` | Section | Yes | Yes |
| 9 | FAQ | `components/FAQ.tsx` | Section | Yes | Yes |
| 10 | Contact | `components/Contact.tsx` | Section | Yes | Yes |
| 11 | CinematicFooter | `components/CinematicFooter.tsx` | Layout | Yes | Yes |

## Other Components (exist but not on main page)

| # | Component | File Path | Type | Interactive | Animated |
|---|-----------|-----------|------|-------------|----------|
| 12 | AuditCTA | `components/AuditCTA.tsx` | Section | Yes | Yes |
| 13 | FinalCTA | `components/FinalCTA.tsx` | Section | Yes | Yes |
| 14 | Inquiry | `components/Inquiry.tsx` | Section/Form | Yes | Yes |

## UI Components

| # | Component | File Path | Type | Interactive | Animated |
|---|-----------|-----------|------|-------------|----------|
| 15 | Button | `components/Button.tsx` | UI | Yes | Yes |
| 16 | TextGenerateEffect | `components/ui/text-generate-effect.tsx` | UI | No | Yes |
| 17 | InfiniteMovingCards | `components/ui/infinite-moving-cards.tsx` | UI | Yes | Yes |
| 18 | TextLoop | `components/TextLoop.tsx` | UI | Yes | Yes |
| 19 | ProfileCard | `components/ui/ProfileCard.tsx` | UI | Yes | Yes |
| 20 | MorphSlider | `components/ui/morph-slider.tsx` | UI | Yes | Yes |

## Motion Primitives (`components/ui/motion/`)

| # | Primitive | File Path | Description |
|---|-----------|-----------|-------------|
| 21 | FadeIn | `components/ui/motion/FadeIn.tsx` | Directional fade with optional blur |
| 22 | MaskReveal | `components/ui/motion/MaskReveal.tsx` | Clip-path reveal from edge |
| 23 | BlurReveal | `components/ui/motion/BlurReveal.tsx` | Blur + fade + slide |
| 24 | ScaleReveal | `components/ui/motion/ScaleReveal.tsx` | Scale + fade |
| 25 | SlideIn | `components/ui/motion/SlideIn.tsx` | Directional slide |
| 26 | LineReveal | `components/ui/motion/LineReveal.tsx` | Line-by-line reveal |
| 27 | WordReveal | `components/ui/motion/WordReveal.tsx` | Word-by-word blur reveal |
| 28 | StaggerContainer | `components/ui/motion/StaggerContainer.tsx` | Parent container for stagger |
| 29 | StaggerItem | `components/ui/motion/StaggerItem.tsx` | Child item for stagger |

---

# Component Animation Audit

## Component: Navbar

### Location
- File: `components/Navbar.tsx`
- Route: Global (all pages)

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: CSS transitions, Motion (Framer Motion)
- Animation library: motion/react

### Animation Details

#### 1. Header Background Scroll Effect
- **Trigger:** `window.scrollY > 60` (scroll event listener)
- **Initial State:** `background: transparent`, `backdropFilter: none`
- **Final State:** `background: rgba(245, 241, 235, 0.95)`, `backdropFilter: blur(16px)`
- **Duration:** 350ms
- **Easing:** ease
- **Property:** CSS transition on `background`

#### 2. Header Hide/Show on Scroll
- **Trigger:** Scroll direction (scroll up to show, scroll down past 100px to hide)
- **Initial State:** `transform: translateY(0)`
- **Final State:** `transform: translateY(-100%)`
- **Duration:** 350ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 3. Nav Link Underline
- **Trigger:** Hover
- **Initial State:** `transform: scaleX(0)`, `transform-origin: right`
- **Final State:** `transform: scaleX(1)`, `transform-origin: left`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Property:** `::after` pseudo-element transform

#### 4. Nav CTA Button
- **Trigger:** Hover
- **Initial State:** `background: transparent`, `color: var(--color-ink)`
- **Final State:** `background: var(--color-ink)`, `color: var(--color-paper)`
- **Duration:** 350ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 5. CTA Arrow
- **Trigger:** Hover on parent button
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(3px)`
- **Duration:** 250ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 6. Mobile Menu Overlay
- **Trigger:** Hamburger button click
- **Initial State:** `opacity: 0`
- **Final State:** `opacity: 1`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Library:** AnimatePresence + motion.div

#### 7. Mobile Menu Items
- **Trigger:** Menu open
- **Initial State:** `opacity: 0, y: 20`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 400ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger:** 0.06s between items
- **Library:** motion.a

### Accessibility
- `prefers-reduced-motion`: Yes — disables all transitions and transforms
- Keyboard interaction: Focus-visible outline on links
- Focus animation: 2px solid accent outline with 3px offset
- `aria-label` on mobile toggle button
- `aria-expanded` on mobile toggle

### Performance Notes
- Scroll listener uses `{ passive: true }` — good
- No layout-triggering properties animated
- GPU-friendly transforms only
- Body overflow locked when mobile menu open

---

## Component: Hero

### Location
- File: `components/Hero.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion)
- Animation library: motion/react

### Animation Details

#### 1. Hero Image
- **Trigger:** Page load (component mount)
- **Initial State:** `opacity: 0, x: 40, scale: 0.95`
- **Final State:** `opacity: 1, x: 0, scale: 1`
- **Duration:** 1.2s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.4s

#### 2. Eyebrow ("For businesses ready to grow")
- **Trigger:** Viewport entry (FadeIn component)
- **Initial State:** `opacity: 0, y: 12`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.7s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.1s

#### 3. Headline (TextGenerateEffect)
- **Trigger:** Page load (component mount)
- **Initial State:** Each word `opacity: 0, filter: blur(8px), y: 8`
- **Final State:** Each word `opacity: 1, filter: blur(0px), y: 0`
- **Duration per word:** 0.5s (configurable)
- **Stagger:** 0.06s between words
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.2s initial

#### 4. Supporting Copy
- **Trigger:** Viewport entry (FadeIn component)
- **Initial State:** `opacity: 0, y: 15, filter: blur(4px)`
- **Final State:** `opacity: 1, y: 0, filter: blur(0px)`
- **Duration:** 0.8s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.9s

#### 5. CTAs
- **Trigger:** Page load (component mount)
- **Initial State:** `opacity: 0, y: 15, scale: 0.98`
- **Final State:** `opacity: 1, y: 0, scale: 1`
- **Duration:** 0.7s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 1.1s

#### 6. Trust Signal
- **Trigger:** Viewport entry (FadeIn component)
- **Initial State:** `opacity: 0, y: 8`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.6s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 1.2s

#### 7. Down Arrow Hover
- **Trigger:** Hover on text button
- **Initial State:** `transform: translateY(0)`
- **Final State:** `transform: translateY(3px)`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

### Responsive Behavior
- Mobile (≤768px): Hero visual opacity 0.2, repositioned right: -4rem
- Tablet (769-1024px): Hero visual opacity 0.35
- Desktop: Full opacity

### Accessibility
- `prefers-reduced-motion`: Yes — all durations set to 0, arrow hover disabled

---

## Component: Philosophy

### Location
- File: `components/Philosophy.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: Motion (Framer Motion) via primitives
- Animation library: motion/react

### Animation Details

#### 1. Label ("01 — The Idea")
- **Trigger:** Viewport entry (FadeIn, direction: left)
- **Initial State:** `opacity: 0, x: 10`
- **Final State:** `opacity: 1, x: 0`
- **Duration:** 0.6s
- **Delay:** 0s

#### 2. Heading ("Your business isn't a template.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Initial State:** `y: 100%, opacity: 0` (clip-path hidden)
- **Final State:** `y: 0%, opacity: 1`
- **Duration:** 0.9s
- **Delay:** 0.1s

#### 3. Body Copy
- **Trigger:** Viewport entry (BlurReveal)
- **Initial State:** `opacity: 0, filter: blur(6px), y: 15`
- **Final State:** `opacity: 1, filter: blur(0px), y: 0`
- **Duration:** 0.8s
- **Delay:** 0.3s

---

## Component: Services

### Location
- File: `components/Services.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion) via primitives, CSS transitions
- Animation library: motion/react

### Animation Details

#### 1. Label ("What We Build")
- **Trigger:** Viewport entry (FadeIn, direction: left)
- **Duration:** 0.6s, **Delay:** 0s

#### 2. Service Items (Stagger)
- **Trigger:** Viewport entry (StaggerContainer + StaggerItem)
- **Initial State:** `opacity: 0, y: 25`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.6s per item
- **Stagger:** 0.12s between items
- **Delay:** 0.1s

#### 3. Service Item Hover — Description Expand
- **Trigger:** Hover/Focus on service link
- **Initial State:** `max-height: 0, opacity: 0`
- **Final State:** `max-height: 80px, opacity: 1`
- **Duration:** max-height: 420ms, opacity: 220ms
- **Easing:** var(--ease-out)

#### 4. Service Item Hover — Padding Indent
- **Trigger:** Hover/Focus
- **Initial State:** `paddingLeft: var(--space-3xs)` (0.125rem)
- **Final State:** `paddingLeft: var(--space-md)` (1rem)
- **Duration:** 220ms
- **Easing:** var(--ease-out)

---

## Component: Process

### Location
- File: `components/Process.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: Motion (Framer Motion) via primitives

### Animation Details

#### 1. Label ("How We Work")
- **Trigger:** Viewport entry (FadeIn, direction: left)
- **Duration:** 0.6s, **Delay:** 0s

#### 2. Heading ("From idea to launch.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Duration:** 0.9s, **Delay:** 0.1s

#### 3. Description Copy
- **Trigger:** Viewport entry (FadeIn, direction: up)
- **Duration:** 0.6s, **Delay:** 0.2s

#### 4. Process Steps (Stagger)
- **Trigger:** Viewport entry (StaggerContainer + StaggerItem)
- **Initial State:** `opacity: 0, y: 20`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.6s per item
- **Stagger:** 0.1s between items
- **Delay:** 0.1s

### Responsive
- Mobile (≤640px): Grid switches to single column

---

## Component: Work

### Location
- File: `components/Work.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: Motion (Framer Motion) via primitives

### Animation Details

#### 1. Heading ("Selected work.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Duration:** 0.9s, **Delay:** 0s

#### 2. Project Items (Stagger)
- **Trigger:** Viewport entry (StaggerContainer + StaggerItem)
- **Initial State:** `opacity: 0, y: 30`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.6s per item
- **Stagger:** 0.15s between items

#### 3. Project Number + Category
- **Trigger:** Viewport entry (FadeIn)
- **Duration:** 0.5s, **Delay:** 0.1s / 0.15s

#### 4. Project Image
- **Trigger:** Viewport entry (ScaleReveal)
- **Initial State:** `scale: 1.05, opacity: 0`
- **Final State:** `scale: 1, opacity: 1`
- **Duration:** 0.9s, **Delay:** 0.05s

#### 5. Project Title + Year + Description + CTA
- **Trigger:** Viewport entry (FadeIn)
- **Duration:** 0.5–0.6s, **Delay:** 0.1–0.25s

### Projects Data
| # | Category | Title | Year | Live | Has MorphSlider |
|---|----------|-------|------|------|-----------------|
| 01 | Digital Experience | Experimental Concept | 2026 | No | No (placeholder) |
| 02 | Web Application | Experimental Concept | 2026 | No | No (placeholder) |
| 03 | Brand System | Jackpot Brand System | 2026 | Yes (jackpotbd.vercel.app) | Yes (6 images, melt transition) |

---

## Component: AlmooApproach

### Location
- File: `components/AlmooApproach.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion) via primitives, CSS keyframes

### Animation Details

#### 1. Label ("BUILT AROUND YOU")
- **Trigger:** Viewport entry (FadeIn, direction: left)
- **Duration:** 0.6s, **Delay:** 0s

#### 2. Heading ("Different businesses different digital needs.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Duration:** 0.9s, **Delay:** 0.1s

#### 3. Infinite Scrolling Cards
- **Trigger:** CSS animation on mount
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(-50%)`
- **Duration:** 55s (slow speed)
- **Easing:** linear
- **Repeat:** Infinite

#### 4. Card Hover — Pause
- **Trigger:** Hover on container
- **Action:** `animation-play-state: paused`

### Cards Content
5 principle cards: Custom by default, Built for purpose, Human first, Growth minded, Thoughtful execution

---

## Component: Founder

### Location
- File: `components/Founder.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion) via primitives

### Animation Details

#### 1. Label ("THE FOUNDER")
- **Trigger:** Viewport entry (FadeIn, direction: left)
- **Duration:** 0.6s, **Delay:** 0s

#### 2. Heading ("Built with curiosity.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Duration:** 0.9s, **Delay:** 0.1s

#### 3. Body Copy (2 paragraphs)
- **Trigger:** Viewport entry (BlurReveal)
- **Duration:** 0.8s, **Delay:** 0.3s / 0.4s

#### 4. Founder Details (Stagger)
- **Trigger:** Viewport entry (StaggerContainer + StaggerItem)
- **Stagger:** 0.08s, **Delay:** 0.5s

#### 5. ProfileCard
- **Trigger:** Viewport entry (FadeIn, direction: up, distance: 50)
- **Duration:** 0.9s, **Delay:** 0.2s

#### 6. ProfileCard Tilt Effect
- **Trigger:** Pointer move over card
- **Technology:** Custom `TiltEngine` (requestAnimationFrame-based)
- **Properties:** `--rotate-x`, `--rotate-y`, `--pointer-x`, `--pointer-y`, perspective transforms
- **Smoothing:** Exponential easing (tau: 0.14s default, 0.6s on enter)
- **Initial Animation:** Card sweeps from top-right to center on mount (1.2s)

### Responsive
- Mobile (≤900px): Single column, ProfileCard first (order: -1)

---

## Component: FAQ

### Location
- File: `components/FAQ.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion)

### Animation Details

#### 1. Label ("Frequently Asked")
- **Trigger:** Viewport entry (FadeIn, direction: left)
- **Duration:** 0.6s, **Delay:** 0s

#### 2. Heading ("Common questions.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Duration:** 0.9s, **Delay:** 0.1s

#### 3. Description Copy
- **Trigger:** Viewport entry (FadeIn)
- **Duration:** 0.6s, **Delay:** 0.2s

#### 4. FAQ Items (Stagger)
- **Trigger:** Viewport entry (StaggerContainer + StaggerItem)
- **Stagger:** 0.06s, **Delay:** 0.1s

#### 5. FAQ Accordion Open/Close
- **Trigger:** Click on question button
- **Initial State:** `height: 0, opacity: 0`
- **Final State:** `height: auto, opacity: 1`
- **Duration:** 0.35s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Library:** AnimatePresence + motion.div

#### 6. Plus/Minus Icon Rotation
- **Trigger:** Click on question button
- **Initial State:** `rotate: 0`
- **Final State:** `rotate: 45deg`
- **Duration:** 0.25s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

### FAQ Data (9 questions)
1. What kind of projects do you work on?
2. How does a project start?
3. How long does a project take?
4. Do you work with existing websites?
5. Can you redesign an existing website?
6. Do you provide ongoing maintenance?
7. Can you work with our existing brand?
8. What happens after I submit an inquiry?
9. What information should I prepare before contacting you?

---

## Component: Contact

### Location
- File: `components/Contact.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion) via primitives

### Animation Details

#### 1. Label ("Ready to start?")
- **Trigger:** Viewport entry (FadeIn, direction: up)
- **Duration:** 0.6s, **Delay:** 0s

#### 2. Heading ("Have a project in mind.")
- **Trigger:** Viewport entry (MaskReveal, direction: up)
- **Duration:** 0.9s, **Delay:** 0.1s

#### 3. Supporting Copy
- **Trigger:** Viewport entry (BlurReveal)
- **Duration:** 0.8s, **Delay:** 0.3s

#### 4. CTAs
- **Trigger:** Viewport entry (FadeIn, direction: up)
- **Duration:** 0.7s, **Delay:** 0.4s

#### 5. Trust Note
- **Trigger:** Viewport entry (FadeIn, direction: up)
- **Duration:** 0.6s, **Delay:** 0.6s

### Contact Info
- Email: almoo.agency@gmail.com
- WhatsApp: 01882030873

---

## Component: CinematicFooter

### Location
- File: `components/CinematicFooter.tsx`
- Route: Global (all pages)

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: GSAP, ScrollTrigger, CSS keyframes
- Animation library: GSAP 3.15.0

### Animation Details

#### 1. Giant Background Text — Parallax
- **Trigger:** Scroll (ScrollTrigger)
- **Initial State:** `y: 10vh, scale: 0.8, opacity: 0`
- **Final State:** `y: 0vh, scale: 1, opacity: 1`
- **Duration:** Scrub (linked to scroll position)
- **Easing:** power1.out
- **ScrollTrigger:** `trigger: wrapperRef.current`, `start: "top 80%"`, `end: "bottom bottom"`, `scrub: 1`

#### 2. Content Reveal — Staggered
- **Trigger:** Scroll (ScrollTrigger)
- **Initial State:** `y: 50, opacity: 0`
- **Final State:** `y: 0, opacity: 1`
- **Duration:** Scrub (linked to scroll position)
- **Easing:** power3.out
- **Stagger:** 0.15s between elements
- **ScrollTrigger:** `trigger: wrapperRef.current`, `start: "top 40%"`, `end: "bottom bottom"`, `scrub: 1`

#### 3. Aurora Glow — Breathing
- **Trigger:** CSS animation on mount
- **Initial State:** `translate(-50%, -50%) scale(1), opacity: 0.6`
- **Final State:** `translate(-50%, -50%) scale(1.1), opacity: 1`
- **Duration:** 8s
- **Easing:** ease-in-out
- **Repeat:** Infinite, alternate

#### 4. Footer Marquee
- **Trigger:** CSS animation on mount
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(-50%)`
- **Duration:** 50s
- **Easing:** linear
- **Repeat:** Infinite

### Footer Content Structure
1. Diagonal Marquee (rotated -2deg, scale 1.1)
2. Center Content: Heading "let's build.", supporting copy, primary CTAs (Email + WhatsApp), secondary nav links, email link
3. Bottom Bar: Copyright, Brand Mark, Tagline, Back-to-top button

### Accessibility
- `prefers-reduced-motion`: Yes — disables `footer-breathe` and `footer-scroll-marquee` animations

---

## Component: Button

### Location
- File: `components/Button.tsx`
- Used by: Hero, Work, Founder, AuditCTA, FinalCTA, Contact, CinematicFooter, Inquiry

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: GSAP, CSS transitions
- Animation library: GSAP 3.15.0

### Variants
| Variant | Description |
|---------|-------------|
| primary | Warm orange accent, black text, rounded pill |
| secondary | Transparent, dark text, thin border |
| ghost | Transparent, no border |
| text | Minimal, no container, text-only |
| icon | Circular, border, icon-only |

### Sizes
| Size | Height | Padding | Font |
|------|--------|---------|------|
| sm | 2.25rem | 0 1rem | text-sm |
| md | 2.75rem | 0 1.5rem | text-sm |
| lg | 3.25rem | 0 2rem | text-base |
| icon | 2.75rem | 0 | — |

### Animation Details

#### 1. Primary Button Hover
- **Trigger:** Hover
- **Initial State:** `background: var(--color-accent)`
- **Final State:** `background: var(--color-accent-hover)`, `translateY(-2px)`
- **Duration:** 350ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 2. Secondary Button Hover
- **Trigger:** Hover
- **Initial State:** `background: transparent`, `color: var(--color-ink)`
- **Final State:** `background: var(--color-ink)`, `color: var(--color-paper)`, `translateY(-2px)`
- **Duration:** 350ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 3. Active State
- **Trigger:** Click/release
- **Final State:** `translateY(0) scale(0.97)`
- **Duration:** 350ms

#### 4. Arrow Translation (Text variant)
- **Trigger:** Hover
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(3px)`
- **Duration:** 300ms

#### 5. Magnetic Effect (when `magnetic` prop)
- **Trigger:** Mouse move over button
- **Initial State:** `x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1`
- **Final State:** `x: cursorX * 0.4, y: cursorY * 0.4, rotationX: -cursorY * 0.15, rotationY: cursorX * 0.15, scale: 1.05`
- **Duration:** 0.4s
- **Easing:** power2.out
- **Library:** GSAP

#### 6. Magnetic Reset
- **Trigger:** Mouse leave
- **Final State:** `x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1`
- **Duration:** 1.2s
- **Easing:** elastic.out(1, 0.3)
- **Library:** GSAP

### Accessibility
- `prefers-reduced-motion`: Yes — disables all transitions, transforms, and magnetic effects
- Focus-visible: 2px solid accent outline with 3px offset

---

## Component: TextGenerateEffect

### Location
- File: `components/ui/text-generate-effect.tsx`
- Used by: Hero (headline)

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: Motion (Framer Motion)
- Animation library: motion/react

### Animation Details

#### 1. Word-by-Word Blur Reveal
- **Trigger:** Viewport entry (useInView, margin: -10%)
- **Initial State:** Each word `opacity: 0, filter: blur(8px), y: 8`
- **Final State:** Each word `opacity: 1, filter: blur(0px), y: 0`
- **Duration per word:** 0.5s (configurable)
- **Stagger:** 0.06s between words (configurable)
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Once:** true (animates only once)

### Accessibility
- `prefers-reduced-motion`: Yes — sets all words to visible immediately
- `aria-label` set to full text string

---

## Component: InfiniteMovingCards

### Location
- File: `components/ui/infinite-moving-cards.tsx`
- Used by: AlmooApproach

### Animation Status
- Animated: Yes
- Interactive: Yes (pause on hover)
- Animation technology: CSS keyframes
- Animation library: None (pure CSS)

### Animation Details

#### 1. Infinite Scroll
- **Trigger:** CSS animation on mount
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(-50%)`
- **Duration:** 20s (fast), 35s (normal), 55s (slow)
- **Easing:** linear
- **Repeat:** Infinite
- **Direction:** forwards (left) or reverse (right)

#### 2. Pause on Hover
- **Trigger:** Hover on container
- **Action:** `animation-play-state: paused`

### Accessibility
- `prefers-reduced-motion`: Yes — disables animation entirely

---

## Component: TextLoop

### Location
- File: `components/TextLoop.tsx`
- Route: Not currently used on main page (available as component)

### Animation Status
- Animated: Yes
- Interactive: Yes (pause on hover)
- Animation technology: GSAP
- Animation library: GSAP 3.15.0

### Features
- SVG textPath animation along custom shapes (wave, circle, infinity, arch, line)
- Configurable speed, direction, separator, curviness, font, ribbon
- Pause on hover support
- Responsive SVG viewBox (1200×520)

### Accessibility
- `prefers-reduced-motion`: Yes — animation does not start if reduced motion is preferred
- `role="img"` and `aria-label` on SVG

---

## Component: ProfileCard

### Location
- File: `components/ui/ProfileCard.tsx`
- Used by: Founder

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Custom TiltEngine (requestAnimationFrame)

### Animation Details

#### 1. Tilt Effect
- **Trigger:** Pointer move over card
- **Properties:** `--rotate-x`, `--rotate-y`, `--pointer-x`, `--pointer-y`, `--pointer-from-center`, `--pointer-from-top`, `--pointer-from-left`, `--background-x`, `--background-y`
- **Smoothing:** Exponential easing (tau: 0.14s)

#### 2. Initial Sweep
- **Trigger:** Component mount
- **Action:** Pointer sweeps from top-right corner to center
- **Duration:** 1.2s
- **Tau:** 0.6s (slower, more dramatic)

#### 3. Behind Glow
- **Trigger:** Pointer position
- **Property:** Radial gradient follows pointer position
- **Filter:** blur(50px) saturate(1.1)

#### 4. Shine/Glare Layers
- **Trigger:** Pointer position
- **Technology:** CSS gradients + blend modes (color-dodge, overlay)

#### 5. Avatar Parallax
- **Trigger:** Pointer position
- **Property:** Subtle translateX + scaleY/scaleX based on pointer

#### 6. Contact Button
- **Trigger:** Click
- **Action:** Scrolls to #inquiry section

### Accessibility
- `enableMobileTilt` option (disabled by default)
- DeviceOrientation permission handling for iOS

---

## Component: MorphSlider

### Location
- File: `components/ui/morph-slider.tsx`
- Used by: Work (Jackpot Brand System project)

### Animation Status
- Animated: Yes
- Interactive: Yes (drag, keyboard, click)
- Animation technology: WebGL (OGL), GSAP
- Animation library: OGL 1.0.11, GSAP 3.15.0

### Features
- WebGL-based image transitions with GLSL shaders
- 4 transition types: melt, ripple, shear, swirl
- Autoplay with configurable delay
- Drag-to-navigate (pointer capture)
- Keyboard navigation (ArrowLeft/ArrowRight)
- Click indicators to navigate
- Caption overlays with blur/fade transitions
- Reduced motion support (shorter duration, simplified transitions)

### Animation Details

#### 1. Image Transition
- **Technology:** GLSL fragment shader
- **Properties:** uProgress (0→1), uTime (continuous), uPointer, uDir
- **Modes:** melt (fbm noise), ripple (distance-based wave), shear (horizontal slices), swirl (rotation)
- **Duration:** 1.1s default (configurable)
- **Easing:** power2.inOut (GSAP tween)

#### 2. Caption Transition
- **Trigger:** Slide change
- **Initial State:** `opacity: 0, y: 12px, filter: blur(6px)`
- **Final State:** `opacity: 1, y: 0, filter: blur(0px)`
- **Duration:** 0.726s (duration × 0.66)

#### 3. Indicator Dot Transition
- **Trigger:** Slide change
- **Property:** width + background-color
- **Duration:** 0.495s (duration × 0.45)

### Accessibility
- `aria-roledescription="carousel"` on container
- `role="group"` with `aria-label="Image morph slider"`
- `role="tablist"` on indicators
- `aria-selected` on active indicator
- `aria-label` on prev/next buttons
- Focus-visible outline support
- Reduced motion: capped duration at 0.4s

---

## Component: Inquiry

### Location
- File: `components/Inquiry.tsx`
- Route: Not currently used on main page (available as component, linked via `#inquiry`)

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: Motion (Framer Motion) via primitives

### Form Fields
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | text | Yes | Non-empty |
| Email | email | Yes | Valid email format |
| Company / Brand | text | No | — |
| Website | url | No | — |
| What do you need? | textarea | Yes | Non-empty |
| Project type | select | No | 6 options |
| Budget range | select | No | 6 options |
| Timeline | select | No | 6 options |
| Additional notes | textarea | No | — |

### Animation Details

#### 1. Form Entry
- **Trigger:** Viewport entry (FadeIn, direction: up)
- **Duration:** 0.7s, **Delay:** 0.3s

#### 2. Success State
- **Trigger:** Form submission success
- **Initial State:** `opacity: 0, y: 20`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.6s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 3. Spinner (submitting state)
- **Trigger:** Form submission
- **Animation:** CSS `@keyframes spin` (rotate 360deg)
- **Duration:** 1s linear infinite
- **Reduced motion:** Disabled

### Accessibility
- Proper `label` + `htmlFor` associations
- `aria-describedby` for error messages
- `aria-invalid` on invalid fields
- `role="alert"` on error messages
- `noValidate` on form (custom validation)
- `autoComplete` attributes on fields

### Form Submission
- Simulated 1.5s delay (placeholder for real API)
- Validation errors displayed inline below fields
- Success state shows personalized thank-you message

---

# Motion Primitives Library

All primitives in `components/ui/motion/` use Motion (Framer Motion) and respect `prefers-reduced-motion`.

| Primitive | Trigger | Animation | Configurable Props |
|-----------|---------|-----------|-------------------|
| FadeIn | Viewport entry (useInView) | Directional fade + optional blur | direction, distance, duration, delay, blur, blurAmount, once, amount |
| MaskReveal | Viewport entry (useInView) | Clip-path reveal from edge | direction (up/down), duration, delay |
| BlurReveal | Viewport entry (useInView) | Blur + fade + slide | duration, delay, blur, y |
| ScaleReveal | Viewport entry (useInView) | Scale + fade | from, to, duration, delay |
| SlideIn | Viewport entry (useInView) | Directional slide | direction, distance, duration, delay |
| LineReveal | Viewport entry (useInView) | Line-by-line reveal | duration, delay, y |
| WordReveal | Viewport entry (useInView) | Word-by-word blur reveal | text, duration, staggerChildren, delay, blur, y |
| StaggerContainer | Viewport entry (useInView) | Parent for stagger variants | stagger, delay |
| StaggerItem | Variant-based | Child for stagger | direction, distance, blur, blurAmount |

---

# Scroll Animation Map

| Section | Trigger | Animation | Start State | End State | Duration | Delay |
|---------|---------|-----------|-------------|-----------|----------|-------|
| Hero | Page load | Entry sequence (multiple) | opacity: 0, various | opacity: 1, various | 0.5–1.2s | 0.1–1.2s |
| Philosophy | Viewport | FadeIn + MaskReveal + BlurReveal | opacity: 0, various | opacity: 1, various | 0.6–0.9s | 0–0.3s |
| Services | Viewport | FadeIn + StaggerContainer | opacity: 0, y: 25 | opacity: 1, y: 0 | 0.6s | 0–0.12s |
| Process | Viewport | FadeIn + MaskReveal + StaggerContainer | opacity: 0, y: 20 | opacity: 1, y: 0 | 0.6–0.9s | 0–0.1s |
| Work | Viewport | MaskReveal + StaggerContainer + ScaleReveal | opacity: 0, scale: 1.05 | opacity: 1, scale: 1 | 0.6–0.9s | 0–0.15s |
| AlmooApproach | Viewport + CSS | FadeIn + MaskReveal + Infinite scroll | opacity: 0 + translateX(0) | opacity: 1 + translateX(-50%) | 0.6–0.9s + 55s | 0–0.1s |
| Founder | Viewport | FadeIn + MaskReveal + BlurReveal + StaggerContainer | opacity: 0, various | opacity: 1, various | 0.6–0.9s | 0–0.5s |
| FAQ | Viewport | FadeIn + MaskReveal + StaggerContainer | opacity: 0, y: 10 | opacity: 1, y: 0 | 0.6–0.9s | 0–0.1s |
| Contact | Viewport | FadeIn + MaskReveal + BlurReveal | opacity: 0, various | opacity: 1, various | 0.6–0.9s | 0–0.6s |
| CinematicFooter | Scroll | GSAP ScrollTrigger | y: 10vh, scale: 0.8, opacity: 0 | y: 0, scale: 1, opacity: 1 | Scrub | — |

---

# Hover Animation Map

| Component | Hover Trigger | Before | After | Duration | Easing |
|-----------|---------------|--------|-------|----------|--------|
| Nav Link | Hover | color: var(--color-ink-2), underline scaleX(0) | color: var(--color-ink), underline scaleX(1) | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Nav CTA | Hover | background: transparent | background: var(--color-ink) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| CTA Arrow | Hover | translateX(0) | translateX(3px) | 250ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Button (Primary) | Hover | translateY(0) | translateY(-2px), accent-hover bg | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Button (Secondary) | Hover | background: transparent | background: var(--color-ink) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Button (Magnetic) | Mouse move | x:0, y:0, scale:1 | x:±, y:±, scale:1.05 | 0.4s | power2.out |
| Service Item | Hover | paddingLeft: 0.125rem, desc hidden | paddingLeft: 1rem, desc visible | 220–420ms | var(--ease-out) |
| Down Arrow | Hover | translateY(0) | translateY(3px) | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Infinite Cards | Hover | animation running | animation paused | — | — |
| TextLoop | Hover | animation running | animation paused | — | — |
| Back to Top | Hover | arrow translateY(0) | arrow translateY(-6px) | 300ms | default |
| FAQ Plus Icon | Click | rotate: 0 | rotate: 45deg | 250ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Contact Button (ProfileCard) | Hover | default | border-white/40, -translate-y-px | 200ms | ease-out |
| Inquiry Inputs | Focus | border: var(--color-rule) | border: var(--color-accent), box-shadow | 250ms | var(--ease-out) |

---

# Click / Interaction Animation

| Component | Trigger | State Transition | Duration | Easing |
|-----------|---------|------------------|----------|--------|
| Mobile Menu | Click hamburger | Closed → Opening → Open | 300ms overlay + 400ms items | cubic-bezier(0.16, 1, 0.3, 1) |
| Button Active | Click/release | Normal → Pressed (scale 0.97) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| FAQ Accordion | Click question | Closed → Open (height 0→auto) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| MorphSlider Drag | Pointer drag | Image blend follows drag progress | Instant | — |
| MorphSlider Nav | Click indicator/arrow | Slide transition (WebGL shader) | 1.1s | power2.inOut |
| Inquiry Submit | Click submit | Form → Submitting → Success | 1.5s simulated | — |
| ProfileCard Contact | Click "Let's Talk" | Scrolls to #inquiry | Smooth | — |

---

# CSS Animation Audit

## Global Keyframes (`app/globals.css`)

### `reveal`
- **Defined in:** `app/globals.css:119-124`
- **Used by:** None currently (legacy — components now use motion primitives)
- **Keyframes:** opacity 0→1, translateY(12px)→none
- **Duration:** `var(--dur-long)` (420ms)
- **Easing:** `var(--ease-out)`
- **Repeat:** Once (forwards)

### `reveal-left`
- **Defined in:** `app/globals.css:134-139`
- **Keyframes:** opacity 0→1, translateX(-20px)→none
- **Duration:** `var(--dur-long)` (420ms)
- **Easing:** `var(--ease-out)`

### `sweep`
- **Defined in:** `app/globals.css:148-152`
- **Keyframes:** clip-path inset(0 100% 0 0)→inset(0 0 0 0)
- **Duration:** 0.8s
- **Easing:** var(--ease-out)

## Component-Level Keyframes

### `footer-breathe` (CinematicFooter)
- **Defined in:** `components/CinematicFooter.tsx:17-20`
- **Keyframes:** translate(-50%, -50%) scale(1)→scale(1.1), opacity 0.6→1
- **Duration:** 8s, **Repeat:** Infinite, alternate

### `footer-scroll-marquee` (CinematicFooter)
- **Defined in:** `components/CinematicFooter.tsx:22-25`
- **Keyframes:** translateX(0)→translateX(-50%)
- **Duration:** 50s, **Repeat:** Infinite

### `almoo-scroll` (InfiniteMovingCards)
- **Defined in:** `components/ui/infinite-moving-cards.tsx:99-106`
- **Keyframes:** translateX(0)→translateX(-50%)
- **Duration:** 20s/35s/55s (based on speed prop), **Repeat:** Infinite

### `pc-holo-bg` (ProfileCard)
- **Defined in:** `components/ui/ProfileCard.tsx:33-36`
- **Keyframes:** background-position shift for holographic effect
- **Duration:** 18s, **Repeat:** Infinite

### `spin` (Inquiry)
- **Defined in:** `components/Inquiry.tsx:667-669`
- **Keyframes:** rotate(0deg)→rotate(360deg)
- **Duration:** 1s, **Repeat:** Infinite (submitting state only)

---

# JavaScript Animation Audit

## GSAP Usage

### CinematicFooter
- **Trigger:** ScrollTrigger (scroll-linked)
- **Targets:** `giantTextRef`, `headingRef`, `linksRef`
- **Animations:** Parallax + staggered reveal
- **Scrub:** 1 (smooth scroll-linked)

### Button (Magnetic)
- **Trigger:** Mouse move/leave
- **Targets:** Button element
- **Animations:** Magnetic displacement + elastic reset
- **Library:** GSAP core (no ScrollTrigger)

### TextLoop
- **Trigger:** On mount
- **Targets:** SVG textPath elements
- **Animations:** Continuous text path animation
- **Library:** GSAP core

### MorphSlider
- **Trigger:** User interaction (drag, click, autoplay)
- **Targets:** WebGL uniforms (uProgress)
- **Animations:** Image morph transitions via GSAP tween
- **Library:** GSAP core

## Motion (Framer Motion) Usage

### Navbar
- **Trigger:** Menu open/close
- **Targets:** Mobile overlay, menu items
- **Animations:** AnimatePresence + staggered fade/slide

### Hero
- **Trigger:** Page load + viewport entry
- **Targets:** Visual mark, headline, copy, CTAs
- **Animations:** Fade + slide + blur entrance

### TextGenerateEffect
- **Trigger:** Viewport entry (useInView)
- **Targets:** Individual words
- **Animations:** Blur + fade + slide reveal with stagger

### FAQ
- **Trigger:** Click on question
- **Targets:** Accordion content, plus icon
- **Animations:** AnimatePresence height/opacity + rotation

### All Motion Primitives
- **Trigger:** Viewport entry (useInView)
- **Targets:** Children
- **Animations:** Various reveal patterns (fade, blur, mask, scale, slide, stagger)

---

# Accessibility / Reduced Motion Audit

## `prefers-reduced-motion` Support

### Implemented:
1. **globals.css** (lines 155-172): Reduces all animation durations to 150ms, sets iteration count to 1, and disables `.reveal`, `.reveal-left`, `.sweep` classes
2. **Navbar.tsx** (lines 329-338): Disables nav link underline, CTA transitions, and arrow transforms
3. **CinematicFooter.tsx** (lines 128-133): Disables `footer-breathe` and `footer-scroll-marquee` animations
4. **Button.tsx** (lines 174-187): Disables all button transitions, transforms, and magnetic effects
5. **InfiniteMovingCards** (lines 108-112): Disables infinite scroll animation
6. **TextLoop.tsx** (lines 167-169): Checks `prefers-reduced-motion` before starting GSAP animation
7. **Hero.tsx** (lines 241-248): Disables arrow down hover transition, all entry durations set to 0
8. **MorphSlider** (line 590): Reduced motion caps transition duration at 0.4s, simplifies shader
9. **All motion primitives**: Use `useReducedMotion()` — when true, all initial states become final states (opacity: 1, no transforms)
10. **TextGenerateEffect** (lines 27-29): Sets all words to visible immediately
11. **ProfileCard**: No explicit reduced motion check (uses continuous rAF, minimal impact)
12. **Inquiry.tsx** (lines 671-676): Disables spinner animation
13. **Contact.tsx** (lines 45-49): Disables CTA row transitions

### Coverage: Excellent — all major animation layers respect reduced motion

---

# Animation Design System

## Common Duration Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--dur-micro` | 120ms | Micro-interactions |
| `--dur-short` | 220ms | Quick transitions |
| `--dur-long` | 420ms | Reveals, main transitions |

## Common Easing Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out` | cubic-bezier(0.16, 1, 0.3, 1) | Most animations |
| `--ease-in` | cubic-bezier(0.7, 0, 0.84, 0) | Rarely used |
| `--ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | Breathing animation |

## Common Animation Pattern
- **Reveal:** opacity: 0 → 1, translateY(12-30px) → 0, 0.6–0.9s, ease-out
- **Hover:** transform: translateY(-2px), 350ms, ease-out
- **Arrow:** transform: translateX(3px), 300ms, ease-out
- **Mask Reveal:** clip-path/mask hidden → visible, 0.9s, ease-out
- **Stagger:** 0.06–0.15s between items

## Motion Intensity
- **Entry animations:** Medium — subtle reveals, no dramatic movements
- **Hover animations:** Light — minimal transforms, focus on color/opacity
- **Scroll animations:** Medium — GSAP parallax with scrub
- **Continuous animations:** Low — gentle breathing, smooth marquee

## Overall Motion Style
Editorial/understated. Animations serve functional purposes (reveals, state changes) rather than decorative spectacle. The primary easing curve `cubic-bezier(0.16, 1, 0.3, 1)` provides a natural deceleration feel throughout.

---

# Complete Animation Inventory

| # | Component | Animation | Trigger | Technology | Duration | Easing | File |
|---|-----------|-----------|---------|------------|----------|--------|------|
| 1 | Navbar | Header bg scroll | Scroll >60px | CSS transition | 350ms | ease | Navbar.tsx |
| 2 | Navbar | Header hide/show | Scroll direction | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Navbar.tsx |
| 3 | Navbar | Nav link underline | Hover | CSS transform | 300ms | cubic-bezier(0.16,1,0.3,1) | Navbar.tsx |
| 4 | Navbar | CTA button hover | Hover | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Navbar.tsx |
| 5 | Navbar | CTA arrow slide | Hover | CSS transform | 250ms | cubic-bezier(0.16,1,0.3,1) | Navbar.tsx |
| 6 | Navbar | Mobile overlay | Click | Motion (Framer) | 300ms | cubic-bezier(0.16,1,0.3,1) | Navbar.tsx |
| 7 | Navbar | Mobile menu items | Open | Motion (Framer) | 400ms | cubic-bezier(0.16,1,0.3,1) | Navbar.tsx |
| 8 | Hero | Hero image | Mount | Motion (Framer) | 1.2s | cubic-bezier(0.16,1,0.3,1) | Hero.tsx |
| 9 | Hero | Eyebrow text | Viewport | FadeIn | 0.7s | cubic-bezier(0.16,1,0.3,1) | Hero.tsx |
| 10 | Hero | Headline (blur reveal) | Mount | Motion (Framer) | 0.5s/word | cubic-bezier(0.16,1,0.3,1) | text-generate-effect.tsx |
| 11 | Hero | Supporting copy | Viewport | FadeIn + blur | 0.8s | cubic-bezier(0.16,1,0.3,1) | Hero.tsx |
| 12 | Hero | CTAs | Mount | Motion (Framer) | 0.7s | cubic-bezier(0.16,1,0.3,1) | Hero.tsx |
| 13 | Hero | Trust signal | Viewport | FadeIn | 0.6s | cubic-bezier(0.16,1,0.3,1) | Hero.tsx |
| 14 | Hero | Down arrow hover | Hover | CSS transform | 300ms | cubic-bezier(0.16,1,0.3,1) | Hero.tsx |
| 15 | Philosophy | Label | Viewport | FadeIn (left) | 0.6s | cubic-bezier(0.16,1,0.3,1) | Philosophy.tsx |
| 16 | Philosophy | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | Philosophy.tsx |
| 17 | Philosophy | Body copy | Viewport | BlurReveal | 0.8s | cubic-bezier(0.16,1,0.3,1) | Philosophy.tsx |
| 18 | Services | Label | Viewport | FadeIn (left) | 0.6s | cubic-bezier(0.16,1,0.3,1) | Services.tsx |
| 19 | Services | Service items | Viewport | StaggerContainer | 0.6s | cubic-bezier(0.16,1,0.3,1) | Services.tsx |
| 20 | Services | Description expand | Hover/Focus | CSS transition | 420ms/220ms | var(--ease-out) | Services.tsx |
| 21 | Services | Padding indent | Hover/Focus | CSS transition | 220ms | var(--ease-out) | Services.tsx |
| 22 | Process | Label | Viewport | FadeIn (left) | 0.6s | cubic-bezier(0.16,1,0.3,1) | Process.tsx |
| 23 | Process | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | Process.tsx |
| 24 | Process | Description | Viewport | FadeIn | 0.6s | cubic-bezier(0.16,1,0.3,1) | Process.tsx |
| 25 | Process | Steps | Viewport | StaggerContainer | 0.6s | cubic-bezier(0.16,1,0.3,1) | Process.tsx |
| 26 | Work | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | Work.tsx |
| 27 | Work | Projects | Viewport | StaggerContainer | 0.6s | cubic-bezier(0.16,1,0.3,1) | Work.tsx |
| 28 | Work | Project image | Viewport | ScaleReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | Work.tsx |
| 29 | Work | Project details | Viewport | FadeIn | 0.5–0.6s | cubic-bezier(0.16,1,0.3,1) | Work.tsx |
| 30 | AlmooApproach | Label | Viewport | FadeIn (left) | 0.6s | cubic-bezier(0.16,1,0.3,1) | AlmooApproach.tsx |
| 31 | AlmooApproach | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | AlmooApproach.tsx |
| 32 | AlmooApproach | Infinite scroll | Mount | CSS keyframes | 55s | linear | infinite-moving-cards.tsx |
| 33 | AlmooApproach | Scroll pause | Hover | CSS | — | — | infinite-moving-cards.tsx |
| 34 | Founder | Label | Viewport | FadeIn (left) | 0.6s | cubic-bezier(0.16,1,0.3,1) | Founder.tsx |
| 35 | Founder | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | Founder.tsx |
| 36 | Founder | Body copy | Viewport | BlurReveal | 0.8s | cubic-bezier(0.16,1,0.3,1) | Founder.tsx |
| 37 | Founder | Details | Viewport | StaggerContainer | 0.6s | cubic-bezier(0.16,1,0.3,1) | Founder.tsx |
| 38 | Founder | ProfileCard | Viewport | FadeIn | 0.9s | cubic-bezier(0.16,1,0.3,1) | Founder.tsx |
| 39 | Founder | ProfileCard tilt | Pointer move | rAF TiltEngine | 0.14s tau | exponential | ProfileCard.tsx |
| 40 | Founder | ProfileCard initial sweep | Mount | rAF TiltEngine | 1.2s | 0.6s tau | ProfileCard.tsx |
| 41 | FAQ | Label | Viewport | FadeIn (left) | 0.6s | cubic-bezier(0.16,1,0.3,1) | FAQ.tsx |
| 42 | FAQ | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | FAQ.tsx |
| 43 | FAQ | Description | Viewport | FadeIn | 0.6s | cubic-bezier(0.16,1,0.3,1) | FAQ.tsx |
| 44 | FAQ | Accordion items | Viewport | StaggerContainer | 0.6s | cubic-bezier(0.16,1,0.3,1) | FAQ.tsx |
| 45 | FAQ | Accordion open/close | Click | AnimatePresence | 350ms | cubic-bezier(0.16,1,0.3,1) | FAQ.tsx |
| 46 | FAQ | Plus rotation | Click | Motion (Framer) | 250ms | cubic-bezier(0.16,1,0.3,1) | FAQ.tsx |
| 47 | Contact | Label | Viewport | FadeIn (up) | 0.6s | cubic-bezier(0.16,1,0.3,1) | Contact.tsx |
| 48 | Contact | Heading | Viewport | MaskReveal | 0.9s | cubic-bezier(0.16,1,0.3,1) | Contact.tsx |
| 49 | Contact | Supporting copy | Viewport | BlurReveal | 0.8s | cubic-bezier(0.16,1,0.3,1) | Contact.tsx |
| 50 | Contact | CTAs | Viewport | FadeIn | 0.7s | cubic-bezier(0.16,1,0.3,1) | Contact.tsx |
| 51 | Contact | Trust note | Viewport | FadeIn | 0.6s | cubic-bezier(0.16,1,0.3,1) | Contact.tsx |
| 52 | CinematicFooter | Giant text parallax | Scroll | GSAP ScrollTrigger | Scrub | power1.out | CinematicFooter.tsx |
| 53 | CinematicFooter | Content reveal | Scroll | GSAP ScrollTrigger | Scrub | power3.out | CinematicFooter.tsx |
| 54 | CinematicFooter | Aurora breathing | Mount | CSS keyframes | 8s | ease-in-out | CinematicFooter.tsx |
| 55 | CinematicFooter | Marquee scroll | Mount | CSS keyframes | 50s | linear | CinematicFooter.tsx |
| 56 | Button | Primary hover | Hover | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Button.tsx |
| 57 | Button | Secondary hover | Hover | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Button.tsx |
| 58 | Button | Active press | Click | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Button.tsx |
| 59 | Button | Arrow slide | Hover | CSS transform | 300ms | cubic-bezier(0.16,1,0.3,1) | Button.tsx |
| 60 | Button | Magnetic effect | Mouse move | GSAP | 0.4s | power2.out | Button.tsx |
| 61 | Button | Magnetic reset | Mouse leave | GSAP | 1.2s | elastic.out(1,0.3) | Button.tsx |
| 62 | TextLoop | Text path | Mount | GSAP | pathLength/speed | linear | TextLoop.tsx |
| 63 | TextLoop | Pause | Hover | GSAP | — | — | TextLoop.tsx |
| 64 | MorphSlider | Image transition | User/autoplay | WebGL + GSAP | 1.1s | power2.inOut | morph-slider.tsx |
| 65 | MorphSlider | Caption | Slide change | CSS transition | 0.726s | cubic-bezier(0.16,1,0.3,1) | morph-slider.tsx |
| 66 | MorphSlider | Indicators | Slide change | CSS transition | 0.495s | cubic-bezier(0.16,1,0.3,1) | morph-slider.tsx |
| 67 | ProfileCard | Holographic shine | Continuous | CSS keyframes | 18s | linear | ProfileCard.tsx |
| 68 | Inquiry | Form entry | Viewport | FadeIn | 0.7s | cubic-bezier(0.16,1,0.3,1) | Inquiry.tsx |
| 69 | Inquiry | Success state | Submit | Motion (Framer) | 0.6s | cubic-bezier(0.16,1,0.3,1) | Inquiry.tsx |
| 70 | Inquiry | Spinner | Submitting | CSS keyframes | 1s | linear | Inquiry.tsx |

---

# Performance Audit

## Good Practices
- Transform-based animations (no layout thrashing)
- Passive scroll listeners
- GPU-friendly properties (transform, opacity)
- GSAP context cleanup on unmount
- `prefers-reduced-motion` support throughout (comprehensive)
- `useInView` with `once: true` — animations fire once
- Lazy loading on ProfileCard avatars
- WebGL context lost handling in MorphSlider
- Proper cleanup of all event listeners and animation frames

## Potential Issues

| Location | Problem | Why It Matters | Severity | Suggestion |
|----------|---------|----------------|----------|------------|
| CinematicFooter | Fixed footer with full height | May cause z-index stacking issues on mobile | Medium | Consider `position: sticky` or conditional fixed positioning |
| CinematicFooter | GSAP ScrollTrigger on fixed element | Performance cost on lower-end devices | Low | Consider throttling or disabling on mobile |
| InfiniteMovingCards | CSS animation on duplicated items | May cause paint overhead | Low | Reduce item count on mobile |
| TextLoop | SVG text measurement on mount | May cause FOUT/flash | Low | Consider lazy measurement |
| MorphSlider | WebGL context per instance | GPU memory on multiple instances | Low | Currently only one instance on page |
| Multiple components | `<style>` tags injected per component | Could be consolidated | Low | Consider moving to globals.css or CSS modules |

---

# Animation Summary

### Total Animated Components
20 (11 page sections + 9 UI/utility components)

### Total Animation Types
70

### Main Animation Technologies
- **Motion (Framer Motion)** — 9 reusable primitives, AnimatePresence, motion.div, useInView, useReducedMotion, useAnimation
- **GSAP** — ScrollTrigger, core tweens, elastic/power easings, magnetic effects
- **CSS `@keyframes`** — Global reveal classes, marquees, breathing effects, holographic effects
- **CSS transitions** — Hover/interaction states throughout
- **WebGL (OGL + GLSL)** — MorphSlider image transitions

### Main Triggers
- Viewport entry (useInView) — most common
- Page load / Component mount
- Hover / Focus
- Scroll (ScrollTrigger)
- Click (menu toggle, accordion, slider nav)
- Pointer move (magnetic, ProfileCard tilt)

### Most Used Easing
1. `cubic-bezier(0.16, 1, 0.3, 1)` — used in 50+ animations
2. `linear` — used in marquees, text loops, spinner
3. `power2.out` / `power3.out` / `power1.out` — GSAP scroll animations
4. `elastic.out(1, 0.3)` — magnetic button reset
5. `power2.inOut` — MorphSlider transitions

### Most Used Duration
1. 0.6s — reveal animations (FadeIn, StaggerItem)
2. 0.9s — mask reveals (MaskReveal)
3. 350ms — button/hover transitions
4. 300ms — hover effects
5. 55s — infinite scroll (slow)

### Scroll Animations
2 (CinematicFooter — giant text parallax + content reveal)

### Viewport Entry Animations
40+ (all sections use motion primitives with useInView)

### Hover Animations
14 (nav links, buttons, service items, arrows, cards, inputs)

### Click Animations
6 (mobile menu, button active, FAQ accordion, MorphSlider nav, Inquiry submit, ProfileCard contact)

### Page Load Animations
5 (Hero entry sequence — image, eyebrow, headline, CTAs)

### Page Transitions
None (single-page application)

---

# Critical Findings

## 🟢 Good
- Consistent easing curve across all animations (`cubic-bezier(0.16, 1, 0.3, 1)`)
- Comprehensive `prefers-reduced-motion` support (all layers covered)
- Transform-based animations only (no layout thrashing)
- Passive scroll listeners
- GSAP context cleanup on unmount
- Clean separation of animation concerns (CSS for reveals, Motion for React, GSAP for scroll, WebGL for morphs)
- Reusable motion primitives reduce code duplication
- Proper accessibility on all interactive components (ARIA, focus management, keyboard support)

## 🟠 Warning
- CinematicFooter uses `position: fixed` with full viewport height — may cause issues with content stacking
- Multiple `<style>` tags injected per component (Button, Navbar, Hero, Inquiry, AuditCTA, Contact) — could be consolidated
- MorphSlider uses WebGL which may not work on very old devices
- Inquiry form submission is simulated (needs real API endpoint)

## 🔵 Improvement
- Consider consolidating CSS animations into globals.css for better caching
- Add `will-change` hints for GSAP-animated elements
- Consider adding intersection observer for above-fold animations to prevent unnecessary animation on page load
- TextLoop component exists but is not used on the homepage
- AuditCTA and FinalCTA components exist but are not rendered on the main page
- ProfileCard could benefit from explicit `prefers-reduced-motion` handling (currently uses continuous rAF)
