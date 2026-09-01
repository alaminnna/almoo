

# Almoo Studio — Premium Inquiry + Brevo Email Automation Implementation

You are working on the existing Almoo Studio website.

The existing project is a Next.js 15.1 + React 19 + TypeScript + Tailwind CSS 4 application with Motion/Framer Motion and GSAP.

The website already has:

* `components/Contact.tsx`
* `components/Inquiry.tsx`
* `components/Button.tsx`
* reusable motion primitives
* existing design tokens
* existing reduced-motion support

Do NOT redesign the whole website.

The goal is to transform the current Contact/Inquiry experience into a premium step-by-step project intake system connected to a real email automation flow.

---

# CORE USER FLOW

The final experience must work like this:

```text
Visitor
   ↓
Contact / Start a Project
   ↓
Step 01 — Project Type
   ↓
Step 02 — Project Stage
   ↓
Step 03 — Budget
   ↓
Step 04 — Project Details
   ↓
Step 05 — Contact Information
   ↓
Review
   ↓
Submit
   ↓
Next.js backend/API
   ↓
Validate + sanitize data
   ↓
Brevo Transactional Email API
   ↓
 ┌─────────────────────────────┐
 │                             │
 ↓                             ↓
Almoo Business Email           User Confirmation
almoo.agency@gmail.com         User's email
                             │
                             ↓
                       From:
                       Almoo Studio
                       <hello@almoo.pro.bd>
```

---

# IMPORTANT EMAIL REQUIREMENT

Use Brevo Transactional Email API.

The verified sender must be:

**Name:**
`Almoo Studio`

**Email:**
`hello@almoo.pro.bd`

The internal Almoo business email is:

`almoo.agency@gmail.com`

The user's submitted email should receive an automatic confirmation.

---

# EMAIL FLOW

When a user submits the inquiry:

## EMAIL 01 — INTERNAL BUSINESS NOTIFICATION

Send to:

`almoo.agency@gmail.com`

From:

`Almoo Studio <hello@almoo.pro.bd>`

Reply-To:

The user's submitted email.

This is extremely important.

When Almoo receives the inquiry and clicks Reply, the reply should go directly to the potential client instead of `hello@almoo.pro.bd`.

Subject example:

`New Project Inquiry — {Name} — {Project Type}`

---

# INTERNAL EMAIL DESIGN

Create a beautiful, professional HTML email.

Do NOT send raw JSON.

The email should look like a mini project brief.

Example structure:

```text
ALMOO STUDIO
NEW PROJECT INQUIRY

────────────────────────────

CLIENT

Name
John Doe

Email
john@example.com

Company
Example Studio

Website
example.com

WhatsApp / Phone
+880...

────────────────────────────

PROJECT

Project Type
Web Application

Project Stage
Existing Business

Budget
$1,000 — $3,000

────────────────────────────

PROJECT DETAILS

We want to redesign our existing website
and improve conversion.

────────────────────────────

SUBMITTED
September 1, 2026
```

Make the email visually polished and readable.

Use inline CSS because this is an email.

Do not depend on external CSS.

---

# EMAIL 02 — USER CONFIRMATION

Send confirmation to the user's submitted email.

From:

**Almoo Studio [hello@almoo.pro.bd](mailto:hello@almoo.pro.bd)**

Reply-To:

`almoo.agency@gmail.com`

Subject:

`We've received your project inquiry — Almoo Studio`

The email should feel personal and professional.

Content:

```text
Hi {Name},

Thanks for reaching out to Almoo Studio.

We've received your project details and our team will review them carefully.

We'll get back to you within 24–48 hours.

Your inquiry

Project:
{Project Type}

Stage:
{Project Stage}

Budget:
{Budget}

We'll be in touch soon.

— Almoo Studio
We Build. You Grow.
```

Do not make this look like a generic automated email.

---

# STEP-BY-STEP UI

The form should NOT display all fields at once.

The user sees one question at a time.

Use a premium editorial interface.

At the top:

```text
01 / 05
```

or

```text
01 — 05
```

Use a subtle progress indicator.

---

# STEP 01

Question:

**What are you looking to build?**

Options:

* Website
* Web Application
* UI / UX Design
* AI & Automation
* Digital Growth
* Something else

The user clicks one.

Immediately enable:

`Continue →`

Do not force the user to click Continue if a better interaction is possible, but maintain accessibility.

---

# STEP 02

Question:

**Where are you right now?**

Options:

* Just an idea
* Starting a new business
* Existing business
* Redesigning something
* Scaling an existing product
* Other

---

# STEP 03

Question:

**What's your approximate budget?**

Options:

* Under $500
* $500 — $1,000
* $1,000 — $3,000
* $3,000+
* Not sure yet

Do not make the user feel judged by the budget question.

Keep the copy friendly.

---

# STEP 04

Question:

**Tell us about your project.**

Textarea.

Placeholder:

`What's the idea, problem, or goal you're working toward?`

Required.

---

# STEP 05

Question:

**How can we reach you?**

Fields:

Name *
Email *
Company / Brand
Website
WhatsApp / Phone

Required:

Name
Email

Optional:

Company
Website
WhatsApp / Phone

---

# STEP 06 — REVIEW

Before submission, show a clean summary.

Example:

```text
YOUR PROJECT

Project
Web Application

Stage
Existing Business

Budget
$1,000 — $3,000

Details
Redesign our existing platform...

CONTACT

John Doe
john@example.com
Example Studio
example.com
+880...

────────────────────────

[ ← Edit ]     [ Send Inquiry → ]
```

This review step is important.

The user should be able to edit any answer without losing data.

---

# SUBMIT

Primary CTA:

`Send Inquiry →`

When clicked:

```text
Sending your inquiry...
```

Disable duplicate submissions.

Prevent double-click / duplicate API calls.

---

# SUCCESS STATE

After the backend confirms successful submission:

Replace the form with:

```text
Inquiry received.

Thanks, {Name}.

We've received your project details.

We'll review everything and get back to you within 24–48 hours.

[ Back to top ↑ ]

Prefer a direct conversation?

[ WhatsApp → ]
```

Make this visually premium.

Do not show a fake success state before the API actually succeeds.

---

# ERROR STATE

If email/API submission fails:

```text
Something went wrong.

We couldn't send your inquiry right now.

Your information has not been lost.

[ Try Again ]

or

[ WhatsApp Us → ]
```

Keep all form state intact.

Never clear the user's information on failure.

---

# BACKEND ARCHITECTURE

Do NOT call Brevo directly from the client.

The Brevo API key must NEVER be exposed to browser JavaScript.

Use a server-side Next.js API route.

Recommended:

```text
app/api/inquiry/route.ts
```

Flow:

```text
POST /api/inquiry

       ↓

Validate request body

       ↓

Sanitize strings

       ↓

Validate email

       ↓

Rate limit / abuse protection

       ↓

Create normalized inquiry object

       ↓

Send internal email via Brevo

       ↓

Send user confirmation via Brevo

       ↓

Return success
```

---

# ENVIRONMENT VARIABLES

Use environment variables.

Example:

```env
BREVO_API_KEY=...
BREVO_SENDER_EMAIL=hello@almoo.pro.bd
BREVO_SENDER_NAME=Almoo Studio
ALMOO_INQUIRY_EMAIL=almoo.agency@gmail.com
```

NEVER put:

`BREVO_API_KEY`

inside client-side code.

NEVER hardcode the API key.

---

# BREVO IMPLEMENTATION

Use the official Brevo transactional email API.

Endpoint:

`POST /v3/smtp/email`

Use the sender:

```text
{
  email: "hello@almoo.pro.bd",
  name: "Almoo Studio"
}
```

For internal notification:

```text
to:
almoo.agency@gmail.com

replyTo:
user.email
```

For user confirmation:

```text
to:
user.email

replyTo:
almoo.agency@gmail.com
```

Use HTML + plain text versions where appropriate.

Add useful tags such as:

```text
["almoo-inquiry", "website-contact"]
```

---

# IMPORTANT — DOMAIN

Do not assume that `hello@almoo.pro.bd` will work automatically.

The implementation should expect that:

`almoo.pro.bd`

is authenticated/verified in Brevo and that:

`hello@almoo.pro.bd`

is an authorized sender.

If it is not configured, document exactly what DNS/domain verification is required.

Do not attempt to bypass sender verification.

---

# REPLY FLOW

The internal email must be configured with:

```text
Reply-To: user's submitted email
```

Therefore:

```text
Almoo receives inquiry
       ↓
Clicks Reply
       ↓
Reply goes to client
```

For user confirmation:

```text
User receives confirmation
       ↓
Clicks Reply
       ↓
Reply goes to:
almoo.agency@gmail.com
```

This creates a clean two-way communication flow.

---

# OPTIONAL INBOUND EMAIL AUTOMATION

Do NOT implement inbound email parsing unless explicitly necessary.

The primary requirement is:

website inquiry → email notification + user confirmation.

However, architect the system so that inbound email automation can be added later.

Brevo supports inbound email parsing through a webhook and can provide structured email data to a backend endpoint.

Potential future flow:

```text
Client replies
    ↓
hello@almoo.pro.bd
    ↓
Inbound email processing
    ↓
Webhook
    ↓
Next.js backend
    ↓
CRM / database / notification
```

Do not add this complexity to the current implementation unless required.

---

# DATABASE

Do not introduce a database just for sending emails unless the project already has one.

For this version:

API submission
→ Brevo
→ response

is sufficient.

However, structure the code so a database can be added later.

---

# SECURITY

Implement basic production protections:

* server-side validation
* email validation
* input length limits
* string sanitization
* rate limiting or lightweight abuse protection
* reject obviously malformed requests
* prevent duplicate submission
* never expose Brevo API key
* never trust client-side validation alone

Do not log sensitive user information unnecessarily.

Do not log the Brevo API key.

---

# ANIMATION

Use the existing Almoo motion system.

Use:

* FadeIn
* MaskReveal
* BlurReveal
* StaggerContainer
* AnimatePresence

Step transition should feel smooth.

Example:

Exit:

```text
opacity: 0
y: -10
```

Enter:

```text
opacity: 0
y: 12
```

to:

```text
opacity: 1
y: 0
```

Duration:

400–600ms.

Easing:

`cubic-bezier(0.16, 1, 0.3, 1)`

Do not add excessive animation.

---

# DESIGN

Maintain existing Almoo Studio visual identity.

Do NOT turn this into:

* SaaS dashboard
* glassmorphism form
* colorful onboarding wizard
* generic startup form
* excessive rounded cards

It should remain:

**minimal + editorial + premium + human.**

Use existing design tokens.

Reuse existing Button component.

---

# MOBILE

On mobile:

* one question at a time
* large touch targets
* no horizontal overflow
* sticky or easily accessible navigation if useful
* progress indicator remains visible
* Back / Continue buttons remain easy to reach
* textarea should be comfortable to use

Test at:

320px
375px
390px
430px
768px

---

# ACCESSIBILITY

Every step must be keyboard accessible.

Selection options must work with keyboard.

Use semantic buttons.

Use proper labels.

Use:

`aria-selected`

where appropriate.

Use:

`aria-invalid`

for invalid fields.

Use:

`aria-describedby`

for validation messages.

Announce step changes appropriately for screen readers where practical.

Respect:

`prefers-reduced-motion`.

---

# API RESPONSE

Use a clean response format.

Success:

```ts
{
  success: true
}
```

Error:

```ts
{
  success: false,
  error: "Unable to send inquiry"
}
```

Do not expose internal Brevo error details to the user.

Log useful server-side diagnostics only.

---

# EMAIL FAILURE HANDLING

Important:

There are two emails:

1. Internal Almoo notification
2. User confirmation

If the internal email fails, do not tell the user that everything was successful.

If the user confirmation fails but the internal email succeeded, handle this gracefully and return an appropriate state.

Prefer making the backend result explicit:

```ts
{
  internalEmailSent: boolean;
  confirmationEmailSent: boolean;
}
```

Then determine the appropriate UI state.

Do not create duplicate inquiries by blindly retrying both emails.

---

# IMPLEMENTATION REQUIREMENTS

Before coding:

1. Inspect existing `Contact.tsx`.
2. Inspect existing `Inquiry.tsx`.
3. Inspect `app/page.tsx`.
4. Inspect `Button.tsx`.
5. Inspect existing motion primitives.
6. Inspect `tokens.css`.
7. Inspect current environment configuration.
8. Determine whether the project already has an API/backend structure.

Then implement the feature.

Prefer modifying/reusing existing components instead of creating redundant components.

---

# FILE STRUCTURE

A reasonable implementation could be:

```text
components/
  Contact.tsx
  Inquiry.tsx
  inquiry/
    InquiryStep.tsx
    ProjectTypeStep.tsx
    ProjectStageStep.tsx
    BudgetStep.tsx
    ProjectDetailsStep.tsx
    ContactDetailsStep.tsx
    ReviewStep.tsx
    InquirySuccess.tsx

app/
  api/
    inquiry/
      route.ts

lib/
  email/
    brevo.ts
```

Do NOT blindly follow this structure if the existing project architecture has a better pattern.

Reuse existing files where appropriate.

---

# TESTING CHECKLIST

After implementation:

### UI

* [ ] Step navigation works
* [ ] Back works
* [ ] Data persists between steps
* [ ] Review works
* [ ] Edit works
* [ ] Mobile works
* [ ] Desktop works
* [ ] Animations work
* [ ] Reduced motion works

### Validation

* [ ] Required fields work
* [ ] Email validation works
* [ ] Invalid states work
* [ ] Error messages are accessible

### API

* [ ] API route works
* [ ] Server-side validation works
* [ ] Brevo API key stays server-side
* [ ] Duplicate submissions are prevented
* [ ] API errors are handled

### Email

* [ ] Internal email arrives at `almoo.agency@gmail.com`
* [ ] Internal email sender is `Almoo Studio <hello@almoo.pro.bd>`
* [ ] Internal email Reply-To is the user's email
* [ ] User confirmation arrives at submitted email
* [ ] User confirmation sender is `Almoo Studio <hello@almoo.pro.bd>`
* [ ] User confirmation Reply-To is `almoo.agency@gmail.com`
* [ ] HTML email is responsive
* [ ] Plain text fallback exists

### Production

* [ ] `npm run lint`
* [ ] `npm run build`
* [ ] TypeScript passes
* [ ] No console errors
* [ ] No exposed secrets
* [ ] No broken existing sections

---

# FINAL GOAL

The final user experience should feel like:

```text
"Almoo wants to understand my project."
```

not:

```text
"Almoo wants me to fill out a contact form."
```
