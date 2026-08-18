

```text
You are working on the existing Almoo Studio website.

IMPORTANT:
Do NOT redesign the website.
Do NOT change the existing color palette, typography, layout, spacing, branding, content, header, hero design, footer design, or overall visual direction unless absolutely necessary for animation implementation.

Your task is to add a HIGH-END, PREMIUM, SMOOTH MOTION SYSTEM to the entire website.

The website should feel like a carefully art-directed modern digital agency website — not like a generic website with random fade-in animations.

The goal is:
Every important text/content section should have its own appropriate animation behavior.

DO NOT animate the footer.
The footer already has its own animation system and must remain untouched.

--------------------------------------------------
1. FIRST: AUDIT THE ENTIRE WEBSITE
--------------------------------------------------

Before changing anything:

Inspect the entire existing codebase.

Identify:

- Header
- Hero
- Hero eyebrow text
- Hero headline
- Hero description
- Hero CTA buttons
- Hero secondary links
- Work / Projects section
- Project titles
- Project descriptions
- Project metadata
- Services section
- Service headings
- Service descriptions
- About section
- About headings
- About paragraphs
- Stats / numbers
- Process section
- Process steps
- Testimonials / client section
- CTA section
- Navigation
- Any other text-heavy sections
- Cards
- Lists
- Labels
- Small metadata text
- Images that are visually connected to text

Do NOT blindly apply the same animation everywhere.

Create a different motion treatment depending on the purpose and visual hierarchy of each element.

--------------------------------------------------
2. ANIMATION PHILOSOPHY
--------------------------------------------------

The animation style must feel:

- Premium
- Editorial
- Cinematic
- Minimal
- Smooth
- Intentional
- Expensive
- Modern
- Confident
- Subtle but noticeable
- Never childish
- Never excessive

Avoid:

- Random bouncing
- Excessive scaling
- Huge rotations
- Cartoon-like motion
- Every element moving at once
- Generic fade-in animations everywhere
- Overly fast animations
- Long awkward delays
- Constant looping animations
- Excessive blur
- Excessive parallax

The user should feel:

"Everything is moving because it was designed to move."

NOT:

"Everything has an animation because the developer added animation."

--------------------------------------------------
3. USE THE EXISTING TECH STACK
--------------------------------------------------

Use the existing project architecture.

Preferred animation technologies:

- Motion / motion/react for UI and text animations
- GSAP only where complex scroll-based animation is genuinely useful
- CSS transitions for simple hover states
- IntersectionObserver or Motion viewport detection for reveal animations

Do NOT introduce unnecessary animation libraries.

If Motion is already installed, reuse it.

If it is not installed and the project architecture allows it, install:

motion

Do not install multiple animation libraries just for basic effects.

--------------------------------------------------
4. CREATE A REUSABLE MOTION SYSTEM
--------------------------------------------------

Do NOT write completely separate animation logic for every single element.

Create reusable animation primitives where appropriate.

For example:

components/ui/motion/

or another location that matches the existing architecture.

Possible reusable components:

- FadeIn
- RevealText
- WordReveal
- LineReveal
- SlideIn
- BlurReveal
- StaggerContainer
- StaggerItem
- ScaleReveal
- SectionReveal

However, DO NOT force every section to use these components.

Reusable components should support customization such as:

- direction
- delay
- duration
- stagger
- amount
- once
- distance
- blur
- viewport
- className

Keep the API clean.

--------------------------------------------------
5. HERO TEXT ANIMATION
--------------------------------------------------

The hero is the most important section.

Use the existing TextGenerateEffect component provided in the project for the main hero text if it is already installed.

But customize the content and styling to match Almoo.

The hero headline should NOT look like a normal paragraph appearing from opacity 0.

Use a premium word-by-word reveal.

Recommended behavior:

1. Small eyebrow appears first
2. Main headline reveals word-by-word
3. Words should transition from:
   opacity: 0
   blur: 8-12px
   y: 20-30px

to:

   opacity: 1
   blur: 0
   y: 0

Use a smooth ease.

The headline should feel like it is being revealed rather than simply fading in.

Recommended timing:

Eyebrow:
duration: 0.5-0.7s

Headline:
duration per word: approximately 0.4-0.6s

Stagger:
approximately 0.05-0.10s

Do NOT make the animation painfully slow.

--------------------------------------------------
6. HERO DESCRIPTION
--------------------------------------------------

The description should appear AFTER the headline.

Use a subtle line/paragraph reveal.

Recommended:

opacity: 0
y: 20px
filter: blur(4px)

→

opacity: 1
y: 0
filter: blur(0)

Duration:
0.7-0.9s

Use a small delay after the headline.

--------------------------------------------------
7. HERO CTA ANIMATION
--------------------------------------------------

CTA buttons should NOT simply fade in.

Use a subtle upward reveal:

opacity: 0
y: 15-20px
scale: 0.98

→

opacity: 1
y: 0
scale: 1

Add a small stagger between primary and secondary CTA.

Do NOT make buttons bounce.

On hover:

Use subtle movement.

Example:

Arrow moves slightly to the right.

Button content shifts approximately 3-5px.

Use smooth easing.

--------------------------------------------------
8. SECTION HEADINGS
--------------------------------------------------

Every major section heading should have its own entrance animation.

Do NOT use the exact same animation for every heading.

Use variations such as:

SECTION A:
Line reveal from bottom.

SECTION B:
Word reveal.

SECTION C:
Small upward blur reveal.

SECTION D:
Mask-based reveal.

SECTION E:
Subtle horizontal reveal.

Keep these variations visually consistent.

The animations should still feel like the same design system.

--------------------------------------------------
9. LARGE EDITORIAL TEXT
--------------------------------------------------

For very large typography:

Use an editorial reveal.

Recommended:

overflow: hidden

inner text:

transform: translateY(100%)

opacity: 0

Then animate to:

transform: translateY(0%)

opacity: 1

This should feel like the text is sliding out from behind a mask.

Use this especially for:

- Large section titles
- Work headings
- Services headings
- About headings
- CTA headings

Do NOT use this on every text element.

--------------------------------------------------
10. PARAGRAPHS
--------------------------------------------------

Normal paragraphs should have a much more subtle animation.

Use:

opacity: 0
y: 15-20px

→

opacity: 1
y: 0

Duration:
0.6-0.8s

Do not animate every individual word in normal paragraphs.

That would make the site feel over-engineered.

--------------------------------------------------
11. SMALL LABELS / EYEBROWS
--------------------------------------------------

For labels such as:

ALMOO STUDIO
SERVICES
SELECTED WORK
ABOUT
OUR PROCESS

Use a small horizontal reveal.

Example:

opacity: 0
x: -10px
letterSpacing: slightly larger

→

opacity: 1
x: 0

At the same time, optionally animate a tiny decorative line/dot.

Keep it extremely subtle.

--------------------------------------------------
12. WORK / PROJECT SECTION
--------------------------------------------------

Project sections should feel cinematic.

When a project enters the viewport:

1. Project image reveals
2. Project label appears
3. Project title reveals
4. Description appears
5. Metadata appears

Use staggered timing.

Example:

Image:
scale 1.05 → 1

Title:
y 30 → 0

Description:
opacity 0 → 1

Metadata:
opacity 0 → 1

Avoid making everything move simultaneously.

The image and typography should feel connected.

--------------------------------------------------
13. SERVICE SECTION
--------------------------------------------------

Services should NOT simply fade in as cards.

Use staggered entrance.

For example:

Service number:
small fade/slide

Service title:
masked reveal

Service description:
fade-up

Service icon:
subtle scale

Each service should have a small stagger.

On hover:

- title can move slightly
- arrow can move
- border/background can transition
- icon can subtly rotate or translate

Keep hover animation extremely subtle.

--------------------------------------------------
14. ABOUT SECTION
--------------------------------------------------

The About section should feel more editorial.

Use:

Small label:
fade + slide

Large statement:
word/line reveal

Paragraph:
fade-up

Supporting visual:
subtle scale/parallax

Do NOT make every line independently animate.

The animation should guide the eye.

--------------------------------------------------
15. NUMBERS / STATS
--------------------------------------------------

If the website contains statistics or large numbers:

Animate them when they enter the viewport.

Use a number count-up animation only if the numbers represent actual measurable values.

Otherwise use a simple scale/opacity reveal.

Do NOT create fake statistics.

--------------------------------------------------
16. PROCESS SECTION
--------------------------------------------------

For process steps:

Use sequential animation.

Example:

01
↓
02
↓
03
↓
04

Each item should enter with a slight delay.

The active step can have a subtle highlight.

If appropriate, use a scroll-linked progress indicator.

Keep it elegant.

--------------------------------------------------
17. SCROLL-BASED ANIMATION
--------------------------------------------------

Use scroll animation selectively.

Good uses:

- Large editorial headings
- Project images
- Background decorative elements
- Section transitions
- Large typography
- Subtle parallax

Bad uses:

- Every paragraph
- Every button
- Every tiny label
- Everything moving continuously

The page must remain comfortable to read.

--------------------------------------------------
18. VIEWPORT TRIGGER
--------------------------------------------------

Most entrance animations should trigger when the element enters the viewport.

Use Motion viewport functionality where appropriate.

Recommended behavior:

- once: true for normal content
- amount: approximately 0.15-0.3

Do not replay every animation every time the user scrolls slightly up and down.

Hero animations can run once on initial page load.

--------------------------------------------------
19. STAGGER SYSTEM
--------------------------------------------------

Create a consistent stagger hierarchy.

Example:

Major heading:
0s

Description:
0.10-0.20s

CTA:
0.20-0.30s

Secondary metadata:
0.30-0.40s

For lists/cards:

0.05-0.10s stagger between items.

Do NOT use huge stagger delays.

--------------------------------------------------
20. EASING
--------------------------------------------------

Avoid linear easing for normal UI animations.

Prefer premium easing such as:

easeOut
easeInOut
cubic-bezier(0.16, 1, 0.3, 1)

or Motion equivalents.

Animations should accelerate naturally and settle smoothly.

--------------------------------------------------
21. PAGE LOAD EXPERIENCE
--------------------------------------------------

The page should NOT take several seconds before becoming usable.

Critical hero content should begin appearing immediately.

Do not create a long loading animation.

The user should see useful content almost immediately.

--------------------------------------------------
22. REDUCED MOTION ACCESSIBILITY
--------------------------------------------------

Respect:

prefers-reduced-motion

When reduced motion is enabled:

- Disable large movement
- Disable parallax
- Disable complex transforms
- Keep opacity transitions minimal
- Make content immediately readable

The website must remain fully usable.

--------------------------------------------------
23. MOBILE RESPONSIVENESS
--------------------------------------------------

Animations must work well on mobile.

Reduce:

- movement distance
- parallax
- large transforms
- expensive effects

Do not use hover-only animations as the primary interaction on mobile.

Make sure:

- no horizontal overflow
- no text clipping
- no layout jumps
- no performance problems

--------------------------------------------------
24. PERFORMANCE
--------------------------------------------------

Use GPU-friendly properties whenever possible:

transform
opacity

Avoid animating:

width
height
top
left
margin
padding

unless absolutely necessary.

Do not cause layout thrashing.

Clean up animation listeners and subscriptions properly.

Make sure animations work correctly with React Strict Mode.

--------------------------------------------------
25. IMPORTANT: DO NOT TOUCH FOOTER
--------------------------------------------------

The footer already contains its own animation system.

DO NOT:

- rewrite footer animation
- add new footer animation
- replace footer GSAP
- modify footer motion behavior

Only make sure the animation system above the footer does not conflict with it.

--------------------------------------------------
26. BUTTON MOTION
--------------------------------------------------

All buttons across the website should follow the existing Almoo button design language.

Do NOT randomly give every button a different animation.

Use one consistent button interaction system:

Default:
clean and minimal

Hover:
small translate
subtle background transition
arrow movement

Active:
very subtle scale down

Focus:
accessible focus ring

Do NOT use bounce effects.

--------------------------------------------------
27. OVERALL MOTION HIERARCHY
--------------------------------------------------

Create clear hierarchy.

LEVEL 1 — HERO:
Most expressive animation.

LEVEL 2 — MAJOR SECTION HEADINGS:
Strong editorial reveal.

LEVEL 3 — PROJECTS / SERVICES:
Medium staggered motion.

LEVEL 4 — PARAGRAPHS:
Subtle fade-up.

LEVEL 5 — METADATA:
Very subtle opacity/slide.

This hierarchy is extremely important.

--------------------------------------------------
28. DO NOT OVER-ANIMATE
--------------------------------------------------

After implementing everything, review the website again.

Ask:

"Does every animation have a purpose?"

If not, remove it.

The final result should feel:

CALM
PREMIUM
EDITORIAL
CINEMATIC
CONFIDENT

not:

FLASHY
BUSY
GIMMICKY
GAME-LIKE

--------------------------------------------------
29. FINAL QA
--------------------------------------------------

After implementation:

1. Run the application.
2. Check the entire page from top to bottom.
3. Check desktop.
4. Check tablet.
5. Check mobile.
6. Test Chrome.
7. Check scrolling performance.
8. Check console for errors.
9. Check React hydration errors.
10. Check animation cleanup.
11. Check reduced-motion behavior.
12. Check that footer animation still works.
13. Check that no horizontal overflow was introduced.
14. Check that text remains readable during animation.
15. Check that animations don't cause layout shifts.

If any animation feels excessive, reduce it.

The final website should look like a professionally art-directed digital agency website where motion is part of the visual identity.

IMPORTANT FINAL RULE:

Do not replace the current Almoo visual identity with generic shadcn animations.

The animation system must adapt to the existing Almoo typography, spacing, colors, composition and editorial design.

Animation should enhance the existing design — NOT become the design.
```

### তোমার ক্ষেত্রে বিশেষ করে আমি যেভাবে চাই

**Hero:** সবচেয়ে বেশি expressive → word reveal
**Section heading:** editorial/mask reveal
**Paragraph:** subtle blur + upward
**Services:** stagger
**Projects:** image + text coordinated reveal
**About:** large typography reveal
**Stats:** count/reveal
**CTA:** cinematic reveal
**Buttons:** একই Almoo interaction system
**Footer:** ❌ একদম touch করবে না

আর একটা জিনিস খুব গুরুত্বপূর্ণ: **প্রতিটা text-এর animation আলাদা মানে প্রতিটা text-এর জন্য completely different animation না।** Motion-এর একটা consistent language থাকবে, কিন্তু **hierarchy অনুযায়ী behavior বদলাবে**। এটাই তোমার website-টাকে “joss” করবে, random animation-এর মতো লাগবে না।
