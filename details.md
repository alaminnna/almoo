# Project Overview

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15.1.0 |
| Language | TypeScript 5.7.0 |
| React | React 19.0.0 |
| CSS Framework | Tailwind CSS 4.0.0 |
| Animation Libraries | GSAP 3.15.0, Motion (Framer Motion) 13.1.0 |
| Build Tool | Next.js (Turbopack) |
| Routing | App Router |
| Fonts | Bricolage Grotesque (display), Geist (body), Plus Jakarta Sans (backup) |

## Project Architecture

Single-page marketing website for "Almoo Studio" — a web/app/digital growth agency. The site uses a component-based architecture with all UI components in `/components/`. Animation is implemented through a combination of:

- CSS `@keyframes` animations (global reveal classes)
- Motion (Framer Motion) for React component animations
- GSAP with ScrollTrigger for scroll-driven and complex animations
- CSS transitions for hover/interaction states

The design system uses CSS custom properties (`tokens.css`) for consistent spacing, typography, colors, easing, and durations.

---

# Complete Component Inventory

| # | Component | File Path | Type | Interactive | Animated |
|---|-----------|-----------|------|-------------|----------|
| 1 | Navbar | `components/Navbar.tsx` | Layout | Yes | Yes |
| 2 | Hero | `components/Hero.tsx` | Section | Yes | Yes |
| 3 | Philosophy | `components/Philosophy.tsx` | Section | No | Yes |
| 4 | Services | `components/Services.tsx` | Section | Yes | Yes |
| 5 | Work | `components/Work.tsx` | Section | No | Yes |
| 6 | AlmooApproach | `components/AlmooApproach.tsx` | Section | Yes | Yes |
| 7 | AuditCTA | `components/AuditCTA.tsx` | Section | No | Yes |
| 8 | FinalCTA | `components/FinalCTA.tsx` | Section | No | Yes |
| 9 | CinematicFooter | `components/CinematicFooter.tsx` | Layout | Yes | Yes |
| 10 | Button | `components/Button.tsx` | UI | Yes | Yes |
| 11 | TextGenerateEffect | `components/ui/text-generate-effect.tsx` | UI | No | Yes |
| 12 | InfiniteMovingCards | `components/ui/infinite-moving-cards.tsx` | UI | Yes | Yes |
| 13 | TextLoop | `components/TextLoop.tsx` | UI | Yes | Yes |

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

#### 2. Nav Link Underline
- **Trigger:** Hover
- **Initial State:** `transform: scaleX(0)`, `transform-origin: right`
- **Final State:** `transform: scaleX(1)`, `transform-origin: left`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Property:** `::after` pseudo-element transform

#### 3. Nav CTA Button
- **Trigger:** Hover
- **Initial State:** `background: transparent`, `color: var(--color-ink)`
- **Final State:** `background: var(--color-ink)`, `color: var(--color-paper)`
- **Duration:** 350ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 4. CTA Arrow
- **Trigger:** Hover on parent button
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(3px)`
- **Duration:** 250ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 5. Mobile Menu Overlay
- **Trigger:** Hamburger button click
- **Initial State:** `opacity: 0`
- **Final State:** `opacity: 1`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Library:** AnimatePresence + motion.div

#### 6. Mobile Menu Items
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

### Performance Notes
- Scroll listener uses `{ passive: true }` — good
- No layout-triggering properties animated
- GPU-friendly transforms only

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

### Entry Sequence
1. Large "a" visual mark (delay: 0.4s)
2. Eyebrow text (delay: 0.1s)
3. Headline via TextGenerateEffect (delay: 0.2s)
4. Supporting copy (delay: 0.8s)
5. Service line (delay: 0.9s)
6. CTAs (delay: 1.0s)

### Animation Details

#### 1. Hero Visual ("a" mark)
- **Trigger:** Page load (component mount)
- **Initial State:** `opacity: 0, x: 40`
- **Final State:** `opacity: 1, x: 0`
- **Duration:** 1s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.4s

#### 2. Eyebrow ("ALMOO STUDIO")
- **Trigger:** Page load
- **Initial State:** `opacity: 0, y: 12`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.5s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.1s

#### 3. Headline (TextGenerateEffect)
- **Trigger:** Page load
- **Initial State:** Each word `opacity: 0, filter: blur(8px), y: 8`
- **Final State:** Each word `opacity: 1, filter: blur(0px), y: 0`
- **Duration per word:** 0.35s
- **Stagger:** 0.04s between words
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.2s initial

#### 4. Supporting Copy
- **Trigger:** Page load
- **Initial State:** `opacity: 0, y: 12`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.5s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.8s

#### 5. Service Line
- **Trigger:** Page load
- **Initial State:** `opacity: 0, y: 8`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.5s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 0.9s

#### 6. CTAs
- **Trigger:** Page load
- **Initial State:** `opacity: 0, y: 12`
- **Final State:** `opacity: 1, y: 0`
- **Duration:** 0.5s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Delay:** 1.0s

#### 7. Down Arrow Hover
- **Trigger:** Hover on text button
- **Initial State:** `transform: translateY(0)`
- **Final State:** `transform: translateY(3px)`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

### Responsive Behavior
- Mobile (≤768px): Hero visual opacity reduced to 0.25, repositioned right: -6rem
- Tablet (769-1024px): Hero visual opacity reduced to 0.4
- Desktop: Full opacity

### Accessibility
- `prefers-reduced-motion`: Disables arrow hover transition

---

## Component: Philosophy

### Location
- File: `components/Philosophy.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: CSS animation
- Animation library: None (pure CSS)

### Animation Details

#### 1. Section Content Reveal
- **Trigger:** CSS animation on mount
- **Initial State:** `opacity: 0, transform: translateY(12px)`
- **Final State:** `opacity: 1, transform: none`
- **Duration:** 420ms (`--dur-long`)
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1) (`--ease-out`)
- **Delay:** Staggered via `--i` CSS variable (0ms, 80ms, 160ms)
- **Class:** `.reveal`

---

## Component: Services

### Location
- File: `components/Services.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: CSS animation, CSS transitions
- Animation library: None (pure CSS)

### Animation Details

#### 1. Section Content Reveal
- **Trigger:** CSS animation on mount
- **Initial State:** `opacity: 0, transform: translateY(12px)`
- **Final State:** `opacity: 1, transform: none`
- **Duration:** 420ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger:** 80ms between items via `--i`
- **Class:** `.reveal`

#### 2. Service Item Hover — Description Expand
- **Trigger:** Hover/Focus on service link
- **Initial State:** `max-height: 0, opacity: 0`
- **Final State:** `max-height: 80px, opacity: 1`
- **Duration:** max-height uses `--dur-long` (420ms), opacity uses `--dur-short` (220ms)
- **Easing:** var(--ease-out)

#### 3. Service Item Hover — Padding Indent
- **Trigger:** Hover/Focus
- **Initial State:** `paddingLeft: var(--space-3xs)` (0.125rem)
- **Final State:** `paddingLeft: var(--space-md)` (1rem)
- **Duration:** `--dur-short` (220ms)
- **Easing:** var(--ease-out)

---

## Component: Work

### Location
- File: `components/Work.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: CSS animation
- Animation library: None (pure CSS)

### Animation Details

#### 1. Section Content Reveal
- **Trigger:** CSS animation on mount
- **Initial State:** `opacity: 0, transform: translateY(12px)`
- **Final State:** `opacity: 1, transform: none`
- **Duration:** 420ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger:** 80ms between items via `--i`
- **Class:** `.reveal`

---

## Component: AlmooApproach

### Location
- File: `components/AlmooApproach.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: CSS animation, CSS keyframes
- Animation library: None (InfiniteMovingCards uses CSS)

### Animation Details

#### 1. Section Content Reveal
- **Trigger:** CSS animation on mount
- **Class:** `.reveal` with `--i` stagger

#### 2. Infinite Scrolling Cards
- **Trigger:** CSS animation on mount
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(-50%)`
- **Duration:** 55s (slow speed)
- **Easing:** linear
- **Repeat:** Infinite
- **Direction:** forwards (left)
- **Class:** `.almoo-infinite-scroll`

#### 3. Card Hover — Pause
- **Trigger:** Hover on container
- **Action:** `animation-play-state: paused`
- **Class:** `.almoo-scroll-pause:hover .almoo-infinite-scroll`

---

## Component: AuditCTA

### Location
- File: `components/AuditCTA.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: CSS animation
- Animation library: None (pure CSS)

### Animation Details

#### 1. Section Content Reveal
- **Trigger:** CSS animation on mount
- **Class:** `.reveal` with `--i` stagger

---

## Component: FinalCTA

### Location
- File: `components/FinalCTA.tsx`
- Route: Homepage

### Animation Status
- Animated: Yes
- Interactive: No
- Animation technology: CSS animation
- Animation library: None (pure CSS)

### Animation Details

#### 1. Section Content Reveal
- **Trigger:** CSS animation on mount
- **Class:** `.reveal` with `--i` stagger

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
- **Class:** `.animate-footer-breathe`

#### 4. Footer Marquee
- **Trigger:** CSS animation on mount
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(-50%)`
- **Duration:** 50s
- **Easing:** linear
- **Repeat:** Infinite
- **Class:** `.animate-footer-scroll-marquee`

### Accessibility
- `prefers-reduced-motion`: Yes — disables `footer-breathe` and `footer-scroll-marquee` animations

---

## Component: Button

### Location
- File: `components/Button.tsx`
- Used by: Hero, Work, AuditCTA, FinalCTA, CinematicFooter

### Animation Status
- Animated: Yes
- Interactive: Yes
- Animation technology: GSAP, CSS transitions
- Animation library: GSAP 3.15.0

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
- **Initial State:** Current
- **Final State:** `translateY(0) scale(0.97)`
- **Duration:** 350ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 4. Arrow Translation (Text variant)
- **Trigger:** Hover
- **Initial State:** `transform: translateX(0)`
- **Final State:** `transform: translateX(3px)`
- **Duration:** 300ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)

#### 5. Magnetic Effect
- **Trigger:** Mouse move over button
- **Initial State:** `x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1`
- **Final State:** `x: cursorX * 0.4, y: cursorY * 0.4, rotationX: -cursorY * 0.15, rotationY: cursorX * 0.15, scale: 1.05`
- **Duration:** 0.4s
- **Easing:** power2.out
- **Library:** GSAP

#### 6. Magnetic Reset
- **Trigger:** Mouse leave
- **Initial State:** Magnetic displaced position
- **Final State:** `x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1`
- **Duration:** 1.2s
- **Easing:** elastic.out(1, 0.3)
- **Library:** GSAP

### Accessibility
- `prefers-reduced-motion`: Yes — disables all transitions and transforms

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
- **Duration per word:** 0.35s (configurable)
- **Stagger:** 0.04s between words (configurable)
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Once:** true (animates only once)

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
- Route: Not currently used in main page (available as component)

### Animation Status
- Animated: Yes
- Interactive: Yes (pause on hover)
- Animation technology: GSAP
- Animation library: GSAP 3.15.0

### Animation Details

#### 1. Text Path Animation
- **Trigger:** GSAP on mount
- **Initial State:** `startOffset: 0`
- **Final State:** `startOffset: ±pathLength` (depending on direction)
- **Duration:** `pathLength / speed` seconds
- **Easing:** linear
- **Repeat:** Infinite (-1)
- **Pause on hover:** Yes

### Accessibility
- `prefers-reduced-motion`: Yes — animation does not start if reduced motion is preferred

---

# Scroll Animation Map

| Section | Trigger | Animation | Start State | End State | Duration | Delay |
|---------|---------|-----------|-------------|-----------|----------|-------|
| Hero | Page load | Entry sequence | opacity: 0, translateY(12-40px) | opacity: 1, none | 0.5-1s | 0.1-1.0s |
| Philosophy | Page load | .reveal stagger | opacity: 0, translateY(12px) | opacity: 1, none | 420ms | 0-160ms |
| Services | Page load | .reveal stagger | opacity: 0, translateY(12px) | opacity: 1, none | 420ms | 0-320ms |
| Work | Page load | .reveal stagger | opacity: 0, translateY(12px) | opacity: 1, none | 420ms | 0-240ms |
| AlmooApproach | Page load | .reveal + Infinite scroll | opacity: 0 + translateX(0) | opacity: 1 + translateX(-50%) | 420ms + 55s | 0-160ms |
| AuditCTA | Page load | .reveal stagger | opacity: 0, translateY(12px) | opacity: 1, none | 420ms | 0-320ms |
| FinalCTA | Page load | .reveal stagger | opacity: 0, translateY(12px) | opacity: 1, none | 420ms | 0-160ms |
| CinematicFooter | Scroll | GSAP ScrollTrigger | y: 10vh, scale: 0.8, opacity: 0 | y: 0, scale: 1, opacity: 1 | Scrub | — |
| CinematicFooter | Scroll | GSAP ScrollTrigger | y: 50, opacity: 0 | y: 0, opacity: 1 | Scrub | — |

---

# Hover Animation Map

| Component | Hover Trigger | Before | After | Duration | Easing |
|-----------|---------------|--------|-------|----------|--------|
| Nav Link | Hover | color: var(--color-ink-2), underline scaleX(0) | color: var(--color-ink), underline scaleX(1) | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Nav CTA | Hover | background: transparent | background: var(--color-ink) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| CTA Arrow | Hover | translateX(0) | translateX(3px) | 250-300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Button (Primary) | Hover | translateY(0) | translateY(-2px) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Button (Secondary) | Hover | background: transparent | background: var(--color-ink) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Button (Magnetic) | Mouse move | x:0, y:0, scale:1 | x:±, y:±, scale:1.05 | 0.4s | power2.out |
| Service Item | Hover | paddingLeft: 0.125rem, desc hidden | paddingLeft: 1rem, desc visible | 220-420ms | var(--ease-out) |
| Down Arrow | Hover | translateY(0) | translateY(3px) | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Infinite Cards | Hover | animation running | animation paused | — | — |
| TextLoop | Hover | animation running | animation paused | — | — |
| Back to Top | Hover | arrow translateY(0) | arrow translateY(-6px) | 300ms | default |

---

# Click / Interaction Animation

| Component | Trigger | State Transition | Duration | Easing |
|-----------|---------|------------------|----------|--------|
| Mobile Menu | Click hamburger | Closed → Opening → Open | 300ms overlay + 400ms items | cubic-bezier(0.16, 1, 0.3, 1) |
| Button Active | Click/release | Normal → Pressed (scale 0.97) | 350ms | cubic-bezier(0.16, 1, 0.3, 1) |

---

# CSS Animation Audit

## Global Keyframes (`app/globals.css`)

### `reveal`
- **Defined in:** `app/globals.css:118-123`
- **Used by:** Philosophy, Services, Work, AlmooApproach, AuditCTA, FinalCTA
- **Keyframes:** opacity 0→1, translateY(12px)→none
- **Duration:** `var(--dur-long)` (420ms)
- **Easing:** `var(--ease-out)`
- **Repeat:** Once (forwards)
- **Stagger:** Via `--i` CSS variable (80ms per item)

### `reveal-left`
- **Defined in:** `app/globals.css:133-138`
- **Keyframes:** opacity 0→1, translateX(-20px)→none
- **Duration:** `var(--dur-long)` (420ms)
- **Easing:** `var(--ease-out)`
- **Repeat:** Once (forwards)

### `sweep`
- **Defined in:** `app/globals.css:147-151`
- **Keyframes:** clip-path inset(0 100% 0 0)→inset(0 0 0 0)
- **Duration:** 0.8s
- **Easing:** var(--ease-out)
- **Repeat:** Once (forwards)

## Component-Level Keyframes

### `footer-breathe` (CinematicFooter)
- **Defined in:** `components/CinematicFooter.tsx:17-20`
- **Keyframes:** translate(-50%, -50%) scale(1)→scale(1.1), opacity 0.6→1
- **Duration:** 8s
- **Easing:** ease-in-out
- **Repeat:** Infinite, alternate

### `footer-scroll-marquee` (CinematicFooter)
- **Defined in:** `components/CinematicFooter.tsx:22-25`
- **Keyframes:** translateX(0)→translateX(-50%)
- **Duration:** 50s
- **Easing:** linear
- **Repeat:** Infinite

### `almoo-scroll` (InfiniteMovingCards)
- **Defined in:** `components/ui/infinite-moving-cards.tsx:99-106`
- **Keyframes:** translateX(0)→translateX(-50%)
- **Duration:** 20s/35s/55s (based on speed prop)
- **Easing:** linear
- **Repeat:** Infinite

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

## Motion (Framer Motion) Usage

### Navbar
- **Trigger:** Menu open/close
- **Targets:** Mobile overlay, menu items
- **Animations:** AnimatePresence + staggered fade/slide

### Hero
- **Trigger:** Page load
- **Targets:** Visual mark, eyebrow, copy, CTAs
- **Animations:** Fade + slide entrance

### TextGenerateEffect
- **Trigger:** Viewport entry (useInView)
- **Targets:** Individual words
- **Animations:** Blur + fade + slide reveal with stagger

---

# Accessibility / Reduced Motion Audit

## `prefers-reduced-motion` Support

### Implemented:
1. **globals.css** (lines 154-170): Reduces all animation durations to 150ms, sets iteration count to 1, and disables `.reveal`, `.reveal-left`, `.sweep` classes
2. **Navbar.tsx** (lines 315-324): Disables nav link underline, CTA transitions, and arrow transforms
3. **CinematicFooter.tsx** (lines 128-133): Disables `footer-breathe` and `footer-scroll-marquee` animations
4. **Button.tsx** (lines 174-187): Disables all button transitions and transforms
5. **InfiniteMovingCards** (lines 108-112): Disables infinite scroll animation
6. **TextLoop.tsx** (lines 167-169): Checks `prefers-reduced-motion` before starting GSAP animation
7. **Hero.tsx** (lines 220-227): Disables arrow down hover transition

### Not Implemented:
- No JavaScript-based reduced motion detection beyond TextLoop
- No programmatic disabling of Motion (Framer Motion) animations

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
- **Reveal:** opacity: 0 → 1, translateY(12px) → 0, 420ms, ease-out
- **Hover:** transform: translateY(-2px), 350ms, ease-out
- **Arrow:** transform: translateX(3px), 300ms, ease-out

## Motion Intensity
- **Entry animations:** Medium — subtle reveals, no dramatic movements
- **Hover animations:** Light — minimal transforms, focus on color/opacity
- **Scroll animations:** Medium — GSAP parallax with scrub
- **Continuous animations:** Low — gentle breathing, smooth marquee

## Overall Motion Style
Editorial/understated. Animations serve functional purposes (reveals, state changes) rather than decorative spectacle. The primary easing curve `cubic-bezier(0.16, 1, 0.3, 1)` provides a natural deceleration feel throughout.

---

# Complete Animation Inventory

| # | Component | Animation | Trigger | Technology | Duration | Easing | Responsive | File |
|---|-----------|-----------|---------|------------|----------|--------|------------|------|
| 1 | Navbar | Header bg scroll | Scroll >60px | CSS transition | 350ms | ease | Yes | Navbar.tsx |
| 2 | Navbar | Nav link underline | Hover | CSS transform | 300ms | cubic-bezier(0.16,1,0.3,1) | Yes | Navbar.tsx |
| 3 | Navbar | CTA button hover | Hover | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Yes | Navbar.tsx |
| 4 | Navbar | CTA arrow slide | Hover | CSS transform | 250ms | cubic-bezier(0.16,1,0.3,1) | Yes | Navbar.tsx |
| 5 | Navbar | Mobile overlay | Click | Motion (Framer) | 300ms | cubic-bezier(0.16,1,0.3,1) | Mobile | Navbar.tsx |
| 6 | Navbar | Mobile menu items | Open | Motion (Framer) | 400ms | cubic-bezier(0.16,1,0.3,1) | Mobile | Navbar.tsx |
| 7 | Hero | Visual "a" mark | Mount | Motion (Framer) | 1s | cubic-bezier(0.16,1,0.3,1) | Yes | Hero.tsx |
| 8 | Hero | Eyebrow text | Mount | Motion (Framer) | 0.5s | cubic-bezier(0.16,1,0.3,1) | Yes | Hero.tsx |
| 9 | Hero | Headline (blur reveal) | Mount | Motion (Framer) | 0.35s/word | cubic-bezier(0.16,1,0.3,1) | Yes | text-generate-effect.tsx |
| 10 | Hero | Supporting copy | Mount | Motion (Framer) | 0.5s | cubic-bezier(0.16,1,0.3,1) | Yes | Hero.tsx |
| 11 | Hero | Service line | Mount | Motion (Framer) | 0.5s | cubic-bezier(0.16,1,0.3,1) | Yes | Hero.tsx |
| 12 | Hero | CTAs | Mount | Motion (Framer) | 0.5s | cubic-bezier(0.16,1,0.3,1) | Yes | Hero.tsx |
| 13 | Hero | Down arrow hover | Hover | CSS transform | 300ms | cubic-bezier(0.16,1,0.3,1) | Yes | Hero.tsx |
| 14 | Philosophy | Content reveal | Mount | CSS animation | 420ms | var(--ease-out) | Yes | Philosophy.tsx |
| 15 | Services | Content reveal | Mount | CSS animation | 420ms | var(--ease-out) | Yes | Services.tsx |
| 16 | Services | Description expand | Hover/Focus | CSS transition | 420ms/220ms | var(--ease-out) | Yes | Services.tsx |
| 17 | Services | Padding indent | Hover/Focus | CSS transition | 220ms | var(--ease-out) | Yes | Services.tsx |
| 18 | Work | Content reveal | Mount | CSS animation | 420ms | var(--ease-out) | Yes | Work.tsx |
| 19 | AlmooApproach | Content reveal | Mount | CSS animation | 420ms | var(--ease-out) | Yes | AlmooApproach.tsx |
| 20 | AlmooApproach | Infinite scroll | Mount | CSS keyframes | 55s | linear | Yes | infinite-moving-cards.tsx |
| 21 | AlmooApproach | Scroll pause | Hover | CSS | — | — | Yes | infinite-moving-cards.tsx |
| 22 | AuditCTA | Content reveal | Mount | CSS animation | 420ms | var(--ease-out) | Yes | AuditCTA.tsx |
| 23 | FinalCTA | Content reveal | Mount | CSS animation | 420ms | var(--ease-out) | Yes | FinalCTA.tsx |
| 24 | CinematicFooter | Giant text parallax | Scroll | GSAP ScrollTrigger | Scrub | power1.out | Yes | CinematicFooter.tsx |
| 25 | CinematicFooter | Content reveal | Scroll | GSAP ScrollTrigger | Scrub | power3.out | Yes | CinematicFooter.tsx |
| 26 | CinematicFooter | Aurora breathing | Mount | CSS keyframes | 8s | ease-in-out | Yes | CinematicFooter.tsx |
| 27 | CinematicFooter | Marquee scroll | Mount | CSS keyframes | 50s | linear | Yes | CinematicFooter.tsx |
| 28 | Button | Primary hover | Hover | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Yes | Button.tsx |
| 29 | Button | Secondary hover | Hover | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Yes | Button.tsx |
| 30 | Button | Active press | Click | CSS transition | 350ms | cubic-bezier(0.16,1,0.3,1) | Yes | Button.tsx |
| 31 | Button | Arrow slide | Hover | CSS transform | 300ms | cubic-bezier(0.16,1,0.3,1) | Yes | Button.tsx |
| 32 | Button | Magnetic effect | Mouse move | GSAP | 0.4s | power2.out | No (desktop) | Button.tsx |
| 33 | Button | Magnetic reset | Mouse leave | GSAP | 1.2s | elastic.out(1,0.3) | No (desktop) | Button.tsx |
| 34 | TextLoop | Text path | Mount | GSAP | pathLength/speed | linear | Yes | TextLoop.tsx |
| 35 | TextLoop | Pause | Hover | GSAP | — | — | Yes | TextLoop.tsx |

---

# Non-Animated Components

| Component | File | Why Considered Non-Animated |
|-----------|------|----------------------------|
| (None) | — | All components have some form of animation |

---

# Performance Audit

## Good Practices
- Transform-based animations (no layout thrashing)
- Passive scroll listeners
- GPU-friendly properties (transform, opacity)
- GSAP context cleanup on unmount
- `prefers-reduced-motion` support throughout

## Potential Issues

| Location | Problem | Why It Matters | Severity | Suggestion |
|----------|---------|----------------|----------|------------|
| CinematicFooter | Fixed footer with full height | May cause z-index stacking issues on mobile | Medium | Consider `position: sticky` or conditional fixed positioning |
| CinematicFooter | GSAP ScrollTrigger on fixed element | Performance cost on lower-end devices | Low | Consider throttling or disabling on mobile |
| InfiniteMovingCards | CSS animation on 10 duplicated items | May cause paint overhead | Low | Reduce item count on mobile |
| TextLoop | SVG text measurement on mount | May cause FOUT/flash | Low | Consider lazy measurement |
| Multiple components | Inline styles with CSS custom properties | May cause style recalculation | Low | Consider Tailwind utilities where possible |

---

# Animation Summary

### Total Animated Components
13

### Total Animation Types
35

### Main Animation Technologies
- CSS `@keyframes` animations
- CSS transitions
- Motion (Framer Motion) — AnimatePresence, motion.div, useInView, useAnimation
- GSAP — ScrollTrigger, core tweens, elastic easing

### Main Triggers
- Page load / Component mount
- Hover / Focus
- Scroll (ScrollTrigger)
- Viewport entry (useInView)
- Click (menu toggle)

### Most Used Easing
1. `cubic-bezier(0.16, 1, 0.3, 1)` — used in 20+ animations
2. `linear` — used in marquees and text loops
3. `power2.out` / `power3.out` / `power1.out` — GSAP scroll animations
4. `elastic.out(1, 0.3)` — magnetic button reset

### Most Used Duration
1. 350ms — button transitions
2. 300ms — hover effects
3. 420ms — reveal animations
4. 55s — infinite scroll (slow)

### Scroll Animations
2 (CinematicFooter — giant text parallax + content reveal)

### Hover Animations
12 (nav links, buttons, service items, arrows, cards)

### Click Animations
2 (mobile menu open/close, button active state)

### Page Load Animations
7 (Hero entry sequence — visual, eyebrow, headline, copy, service line, CTAs)

### Page Transitions
None (single-page application)

---

# Critical Findings

## 🟢 Good
- Consistent easing curve across all animations (`cubic-bezier(0.16, 1, 0.3, 1)`)
- Comprehensive `prefers-reduced-motion` support
- Transform-based animations only (no layout thrashing)
- Passive scroll listeners
- GSAP context cleanup on unmount
- Clean separation of animation concerns (CSS for reveals, Motion for React, GSAP for scroll)

## 🟠 Warning
- CinematicFooter uses `position: fixed` with full viewport height — may cause issues with content stacking
- Multiple `<style>` tags injected per component (Button, Navbar, Hero) — could be consolidated
- No page transition animations (acceptable for single-page marketing site)

## 🔵 Improvement
- Consider consolidating CSS animations into globals.css for better caching
- Add `will-change` hints for GSAP-animated elements
- Consider adding intersection observer for above-fold animations to prevent unnecessary animation on page load
- TextLoop component exists but is not used on the homepage
