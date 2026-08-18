
তুমি এই website/project-এর একজন **Senior UX Content Strategist + UI/UX Information Architect + Conversion Copy Auditor** হিসেবে কাজ করবে।

তোমার কাজ হলো পুরো website-এর **UI text, content structure, information hierarchy, messaging, CTA logic, section purpose এবং content placement** গভীরভাবে analyse করা এবং সম্পূর্ণ analysis:

`details.md`

ফাইলে লিখে দেওয়া।

তোমার analysis শুধুমাত্র text-এর spelling বা grammar check হবে না।

তোমাকে বুঝতে হবে:

**কোন text কোথায় আছে → কেন আছে → user কখন দেখবে → তার purpose কী → কোন text-এর পরে কোন information আসা উচিত → কোন CTA কোথায় যাবে → পুরো website-এর information flow কীভাবে কাজ করছে।**

---

# 1. Complete UI Text Inventory

প্রথমে website-এর সব visible text সংগ্রহ করো।

কিছুই বাদ দেবে না।

Include:

* Logo text
* Navigation
* Menu items
* Breadcrumbs
* Hero heading
* Hero subtitle
* Hero description
* CTA buttons
* Secondary CTA
* Section headings
* Section descriptions
* Labels
* Badges
* Cards
* Service names
* Service descriptions
* Product names
* Portfolio text
* Project descriptions
* Stats
* Testimonials
* Quotes
* Client names
* FAQ
* Form labels
* Placeholder
* Validation messages
* Error messages
* Success messages
* Tooltips
* Footer text
* Social links text
* Copyright
* Legal text
* Cookie text
* Loading text
* Empty states
* 404 text
* Modal text
* Dropdown text
* Mobile menu text
* Hidden/conditional UI text

Dynamic text থাকলে সেটাও identify করবে।

---

# 2. UI Text Location Mapping

প্রতিটি text কোথায় আছে সেটা map করো।

Format:

| Text | Page | Section | Component | File | Element |
| ---- | ---- | ------- | --------- | ---- | ------- |

উদাহরণ:

```text
"Let's work together"
Page: Home
Section: Hero
Component: HeroCTA
File: components/Hero.tsx
Element: Button
```

যতটা সম্ভব exact source location দাও।

---

# 3. Website Information Architecture

পুরো website-এর information hierarchy analyse করো।

Identify:

```text
Website
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── CTA
│
├── Hero
│   ├── Eyebrow
│   ├── H1
│   ├── Description
│   └── CTA
│
├── About
│
├── Services
│
├── Work / Portfolio
│
├── Process
│
├── Testimonials
│
├── FAQ
│
├── Contact CTA
│
└── Footer
```

কিন্তু example copy করবে না।

**Actual website-এর structure অনুযায়ী তৈরি করবে।**

---

# 4. প্রতিটি Section-এর Content Logic

প্রতিটি section-এর জন্য এই structure ব্যবহার করো:

## Section: [Name]

### Purpose

এই section কেন website-এ আছে?

### User Question

এই section user-এর কোন প্রশ্নের উত্তর দেয়?

উদাহরণ:

* Who are they?
* What do they offer?
* Why should I trust them?
* How much does it cost?
* How does it work?
* What should I do next?

### Content Hierarchy

Identify:

1. Eyebrow / Label
2. Main heading
3. Supporting text
4. Visual content
5. CTA
6. Supporting information

### Current Text

বর্তমানে website-এ কী লেখা আছে তার summary দাও।

### Text Role

প্রতিটি text-এর role identify করো:

* Awareness
* Explanation
* Trust
* Differentiation
* Conversion
* Navigation
* Education
* Proof
* Action

### Information Flow

এই section-এর information কীভাবে user-এর সামনে আসে সেটা explain করো।

### Next Logical Step

এই section দেখার পরে user logically কোথায় যাবে?

---

# 5. Heading Hierarchy Audit

পুরো website-এর heading structure analyse করো।

Check:

* H1
* H2
* H3
* H4
* Visual headings
* Semantic headings

Identify:

* Multiple H1 আছে কিনা
* H1 যথেষ্ট clear কিনা
* H2 section purpose communicate করছে কিনা
* Heading hierarchy logical কিনা
* Heading unnecessarily long কিনা
* Heading vague কিনা

Table:

| Page | Heading | Level | Purpose | Issue |
| ---- | ------- | ----- | ------- | ----- |

---

# 6. Hero Content Audit

Hero section সবচেয়ে গুরুত্বপূর্ণভাবে analyse করো।

Identify:

### Eyebrow

কেন আছে?

### H1

Website-এর primary value proposition কী?

### Supporting text

H1-এর meaning explain করছে কিনা?

### Primary CTA

User কোথায় যাবে?

### Secondary CTA

কেন দরকার?

### Hero Information Flow

এই sequence analyse করো:

```text
Attention
↓
Understanding
↓
Value Proposition
↓
Trust / Differentiation
↓
CTA
```

তারপর actual website এই flow follow করছে কিনা বলো।

---

# 7. Navigation Text Logic

Header/Navbar-এর প্রতিটি item analyse করো।

For each:

* Label
* Destination
* Purpose
* Priority
* User expectation
* CTA কিনা
* Naming clear কিনা

Table:

| Nav Item | Destination | Purpose | Priority | Recommendation |
| -------- | ----------- | ------- | -------- | -------------- |

Check:

* Navigation naming
* Ordering
* Too many items
* Missing important page
* CTA placement
* Mobile menu logic

---

# 8. CTA Audit

Website-এর **সব CTA** identify করো।

Examples:

* Get Started
* Contact
* Book
* Learn More
* View Work
* Start Project
* Buy Now
* Sign Up

প্রতিটি CTA-এর জন্য:

| CTA | Location | Destination | User Intent | Primary/Secondary | Clarity |
| --- | -------- | ----------- | ----------- | ----------------- | ------- |

তারপর check করো:

* CTA vague কিনা
* CTA action-oriented কিনা
* CTA destination-এর সাথে label match করে কিনা
* একই CTA unnecessarily repeated কিনা
* Important section-এ CTA missing কিনা

---

# 9. Content Flow Across Entire Website

পুরো website-এর user journey map করো।

Example structure:

```text
Hero
↓
What the company does
↓
Why it matters
↓
Services
↓
Proof
↓
Process
↓
Portfolio
↓
Testimonials
↓
FAQ
↓
Final CTA
↓
Contact
```

Actual website-এর content অনুযায়ী flow তৈরি করবে।

তারপর analyse করবে:

### Does the flow make sense?

* Yes / No

### Where does user understand the business?

### Where does trust develop?

### Where does conversion intent begin?

### Where can user become confused?

### Where is information missing?

---

# 10. Above-the-Fold Content Audit

প্রথম viewport-এ কী কী information আছে analyse করো।

Check:

* Brand identity
* What the company/person does
* Target audience
* Value proposition
* CTA
* Differentiator
* Trust signal

তারপর বলো:

**একজন নতুন visitor প্রথম 5–10 seconds-এর মধ্যে website সম্পর্কে কী বুঝতে পারবে?**

---

# 11. Content Completeness Audit

প্রতিটি section-এর জন্য identify করো:

### Present

কী information আছে।

### Missing

কী information থাকা উচিত কিন্তু নেই।

### Unnecessary

কোন information user-এর জন্য unnecessary।

### Weak

কোন information আছে কিন্তু যথেষ্ট clear নয়।

Table:

| Section | Present | Missing | Unnecessary | Weak |
| ------- | ------- | ------- | ----------- | ---- |

---

# 12. Trust & Social Proof Content

Website-এ থাকা trust-related text identify করো:

* Client names
* Client logos
* Testimonials
* Reviews
* Numbers
* Results
* Certifications
* Experience
* Case studies
* Awards
* Partners
* Technologies
* Guarantees

Analyse:

* Trust কোথায় তৈরি হচ্ছে?
* যথেষ্ট proof আছে কিনা?
* Proof-এর placement logical কিনা?
* Claim-এর সাথে evidence আছে কিনা?

---

# 13. Service / Product Content Logic

প্রতিটি service/product-এর content structure analyse করো।

Identify:

```text
Service Name
↓
What it is
↓
Problem it solves
↓
What is included
↓
Benefit
↓
Proof
↓
CTA
```

Actual website এই structure follow করে কিনা analyse করো।

---

# 14. Card Content Audit

সব card analyse করো।

যেমন:

* Service cards
* Portfolio cards
* Blog cards
* Team cards
* Testimonial cards
* Pricing cards

For each card:

* Label
* Title
* Description
* Metadata
* CTA
* Supporting text

Check:

* Information hierarchy
* Text length
* Consistency
* Duplicate information
* Missing CTA
* Unclear labels

---

# 15. Form Content Audit

সব form analyse করো।

Check:

* Form title
* Description
* Field labels
* Placeholder
* Required/optional indicator
* CTA
* Error message
* Success message
* Validation message
* Privacy text

Logic:

```text
User intent
↓
Question
↓
Input
↓
Validation
↓
Submission
↓
Success / Error
```

এই flow document করো।

---

# 16. FAQ Content Logic

FAQ থাকলে প্রতিটি question analyse করো।

For each:

* Question
* Answer purpose
* User concern
* Conversion relevance
* Duplicate information
* Missing question

তারপর identify করো:

**কোন প্রশ্নগুলো user naturally জিজ্ঞেস করতে পারে কিন্তু FAQ-তে নেই।**

---

# 17. Footer Content Audit

Footer-এর সব text analyse করো।

Check:

* Brand description
* Navigation
* Services
* Contact
* Social links
* Legal
* Copyright
* Newsletter
* CTA

Footer-এর information priority explain করো।

---

# 18. Microcopy Audit

Small UI text ignore করবে না।

Include:

* "Learn more"
* "Read more"
* "View project"
* "Submit"
* "Send"
* "Close"
* "Back"
* "Next"
* "Previous"
* "Menu"
* "Search"
* Placeholder
* Tooltip
* Error
* Success

প্রতিটির clarity এবং consistency analyse করো।

---

# 19. Copy Consistency Audit

পুরো website জুড়ে check করো:

### Terminology

একই জিনিসের জন্য different words ব্যবহার হচ্ছে কিনা।

### Capitalization

Consistency আছে কিনা।

### CTA language

একই action-এর জন্য multiple naming আছে কিনা।

### Tone

Professional / friendly / premium / technical / playful ইত্যাদি consistent কিনা।

### Voice

Brand-এর voice consistent কিনা।

---

# 20. Text Length & UI Fit

Text UI-এর design-এর সাথে fit করছে কিনা analyse করো।

Check:

* Heading too long
* Paragraph too long
* Button text too long
* Card description too long
* Mobile wrapping
* Navigation overflow
* Text truncation
* Line breaks
* awkward wrapping

বিশেষ করে responsive layout-এর জন্য সম্ভাব্য text overflow identify করো।

---

# 21. Responsive Content Audit

Desktop বনাম mobile-এ text/content পরিবর্তন হচ্ছে কিনা analyse করো।

Check:

* Different heading
* Hidden text
* Shortened CTA
* Mobile-only text
* Navigation text
* Responsive content
* Text wrapping

Table:

| Component | Desktop | Tablet | Mobile | Issue |
| --------- | ------- | ------ | ------ | ----- |

---

# 22. SEO Content Audit

UI text-এর SEO impact analyse করো।

Check:

* H1
* H2
* Semantic text
* Keyword relevance
* Internal link anchor text
* Image alt text
* Page title
* Meta description
* Breadcrumb
* Structured content

**Keyword stuffing recommend করবে না।**

---

# 23. Accessibility Content Audit

Check:

* Link text meaningful কিনা
* Button text meaningful কিনা
* Heading hierarchy
* Form labels
* Placeholder dependency
* ARIA labels
* Icon-only buttons
* Screen-reader text
* Error messaging

বিশেষ করে:

`Click here`

`Read more`

এর মতো contextless text থাকলে identify করো।

---

# 24. Conversion Logic Audit

প্রতিটি major section-এর conversion role identify করো।

Use:

* Awareness
* Interest
* Consideration
* Trust
* Conversion
* Retention

প্রতিটি section কোন stage-এ কাজ করছে সেটা document করো।

---

# 25. Content Dependency Map

একটি logical dependency map তৈরি করো।

উদাহরণ:

```text
Hero
 ↓
User understands service
 ↓
Services explain offer
 ↓
Portfolio provides proof
 ↓
Testimonials build trust
 ↓
FAQ removes objections
 ↓
CTA converts
```

Actual website অনুযায়ী তৈরি করবে।

---

# 26. Missing Content Report

Website ভালোভাবে কাজ করার জন্য সম্ভাব্য missing content identify করো।

Categories:

### Critical Missing

User understanding/conversion-এর জন্য গুরুত্বপূর্ণ।

### Recommended

UX উন্নত করবে।

### Optional

Extra value দিতে পারে।

প্রতিটির সাথে explain করবে:

* কেন দরকার
* কোথায় রাখা উচিত
* কোন section-এর পরে রাখা উচিত
* কী ধরনের information থাকা উচিত

---

# 27. Content Placement Recommendations

এখানে নতুন content লিখবে না।

বরং **কোন information কোথায় থাকা উচিত** সেটা recommend করবে।

Format:

| Information | Current Location | Recommended Location | Reason |
| ----------- | ---------------- | -------------------- | ------ |

Example logic:

```text
Pricing
Current: Footer
Recommended: Services section-এর পরে
Reason: User service বুঝে pricing জানতে চাইতে পারে
```

---

# 28. Complete UI Content Map

শেষে master map তৈরি করো:

| Order | Page | Section | Element | Text Type | Purpose | Destination |
| ----- | ---- | ------- | ------- | --------- | ------- | ----------- |

Website-এর সব major UI text এখানে map করবে।

---

# 29. Ideal Information Architecture

বর্তমান website analyse করার পরে একটি proposed ideal structure দাও।

Format:

```text
01 — Header
02 — Hero
03 — Value Proposition
04 — Services
05 — Why Choose Us
06 — Portfolio / Proof
07 — Process
08 — Testimonials
09 — FAQ
10 — Final CTA
11 — Footer
```

**Actual website অনুযায়ী structure তৈরি করবে।**

প্রতিটি section-এর পাশে লিখবে:

* Purpose
* Required information
* CTA
* User question answered

---

# 30. Final Content Audit Score

শেষে website-এর content-এর জন্য score দাও:

| Category              | Score / 10 | Reason |
| --------------------- | ---------: | ------ |
| Clarity               |            |        |
| Information Hierarchy |            |        |
| Content Completeness  |            |        |
| CTA Clarity           |            |        |
| Navigation            |            |        |
| Conversion Flow       |            |        |
| Trust                 |            |        |
| Consistency           |            |        |
| Accessibility         |            |        |
| Mobile Content        |            |        |
| SEO Content           |            |        |

তারপর:

## Overall Content Score

`X/10`

দাও।

---

# 31. Final Findings

শেষে চারটি category:

### 🔴 Critical Problems

যেগুলো fix করা জরুরি।

### 🟠 UX / Content Problems

যেগুলো user experience কমাচ্ছে।

### 🟢 Good Content Decisions

যেগুলো ভালোভাবে করা হয়েছে।

### 🔵 Recommended Improvements

পরবর্তীতে implement করলে website আরও ভালো হবে।

---

# FINAL RULE

তুমি **নিজে থেকে marketing copy লিখে replace করবে না**।

এই task-এর উদ্দেশ্য হলো:

**AUDIT + STRUCTURE + LOGIC + PLACEMENT + INFORMATION ARCHITECTURE**

অর্থাৎ:

> "কী লেখা আছে"
>
> * "কোথায় লেখা আছে"
> * "কেন সেখানে আছে"
> * "এর আগে/পরে কী থাকা উচিত"
> * "user কী বুঝবে"
> * "কোন information missing"
> * "কোন CTA কোথায় যাওয়া উচিত"

সবকিছু `details.md`-এ document করবে।

Source code-এর বাইরে কোনো information invent করবে না।

যেখানে source থেকে নিশ্চিত হওয়া যায় না সেখানে:

`Not determinable from source`

লিখবে।

শেষে আমাকে শুধু report করবে:

* `details.md` তৈরি হয়েছে কিনা
* কতটি page analyse করা হয়েছে
* কতটি section analyse করা হয়েছে
* কতটি UI text element analyse করা হয়েছে
* কতটি CTA পাওয়া গেছে
* কতটি missing-content issue পাওয়া গেছে
* কতটি critical issue পাওয়া গেছে
* Overall content score
