"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, MaskReveal } from "./ui/motion";

// -------------------------------------------------------------------------
// TYPES
// -------------------------------------------------------------------------
type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  needs: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// -------------------------------------------------------------------------
// CONSTANTS
// -------------------------------------------------------------------------
const PROJECT_TYPES = [
  "Website design & development",
  "Web application",
  "Mobile application",
  "Brand & identity",
  "Digital product",
  "Other",
];

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Flexible",
];

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  needs: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

// -------------------------------------------------------------------------
// VALIDATION
// -------------------------------------------------------------------------
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.needs.trim()) {
    errors.needs = "Please tell us what you need.";
  }

  return errors;
}

// -------------------------------------------------------------------------
// SUBMIT HANDLER (API abstraction)
// -------------------------------------------------------------------------
async function submitInquiry(data: FormData): Promise<{ ok: boolean; error?: string }> {
  // NEEDS REAL BUSINESS DATA: Replace with actual API endpoint / server action
  // Example flow:
  //   POST /api/inquiry
  //   → server-side validation
  //   → email / database / CRM integration
  //   → success/error response

  // Simulated submission for frontend development
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In production, this would be:
  // const res = await fetch("/api/inquiry", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // return res.json();

  return { ok: true };
}

// -------------------------------------------------------------------------
// STYLES
// -------------------------------------------------------------------------
const STYLES = `
.inquiry-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.inquiry-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-ink);
  letter-spacing: 0.01em;
}

.inquiry-label .inquiry-required {
  color: var(--color-accent);
  margin-left: 2px;
}

.inquiry-input,
.inquiry-select,
.inquiry-textarea {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-ink);
  background: var(--color-paper);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  transition: border-color 250ms var(--ease-out), box-shadow 250ms var(--ease-out);
  width: 100%;
  outline: none;
}

.inquiry-input:focus,
.inquiry-select:focus,
.inquiry-textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px oklch(68% 0.120 40 / 0.12);
}

.inquiry-input.error,
.inquiry-select.error,
.inquiry-textarea.error {
  border-color: oklch(65% 0.250 25);
}

.inquiry-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23777' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-md) center;
  padding-right: var(--space-2xl);
  cursor: pointer;
}

.inquiry-textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.6;
}

.inquiry-error {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: oklch(65% 0.250 25);
  letter-spacing: 0.02em;
}

.inquiry-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.inquiry-submit-row {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.inquiry-note {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted);
  letter-spacing: 0.03em;
}

.inquiry-success {
  text-align: center;
  padding: var(--space-4xl) var(--space-xl);
}

.inquiry-success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: oklch(68% 0.120 40 / 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-xl);
}

.inquiry-success h3 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-2xl);
  color: var(--color-ink);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-md);
}

.inquiry-success p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-ink-2);
  max-width: 40ch;
  margin-inline: auto;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .inquiry-row {
    grid-template-columns: 1fr;
  }
  .inquiry-submit-row {
    flex-direction: column;
    align-items: stretch;
  }
  .inquiry-submit-row .almoo-btn {
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .inquiry-input,
  .inquiry-select,
  .inquiry-textarea {
    transition: none;
  }
}
`;

// -------------------------------------------------------------------------
// COMPONENT
// -------------------------------------------------------------------------
export default function Inquiry() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setStatus("submitting");
      try {
        const result = await submitInquiry(formData);
        if (result.ok) {
          setStatus("success");
        } else {
          setStatus("error");
          setErrors({ form: result.error || "Something went wrong. Please try again." });
        }
      } catch {
        setStatus("error");
        setErrors({ form: "Something went wrong. Please try again." });
      }
    },
    [formData]
  );

  if (status === "success") {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
        <section
          id="inquiry"
          className="container-narrow"
          style={{
            paddingBlock: "var(--space-4xl)",
            background: "var(--color-paper)",
          }}
        >
          <motion.div
            className="inquiry-success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inquiry-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Thank you, {formData.name.split(" ")[0]}.</h3>
            <p>
              We&rsquo;ve received your inquiry and will get back to you
              within 24&ndash;48 hours.
            </p>
            <div style={{ marginTop: "var(--space-2xl)" }}>
              <button
                className="almoo-btn almoo-btn--text"
                onClick={() => {
                  setStatus("idle");
                  setFormData(INITIAL_FORM);
                  setTouched({});
                }}
              >
                Send another inquiry <span className="almoo-arrow">&rarr;</span>
              </button>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        id="inquiry"
        className="container-narrow"
        style={{
          paddingBlock: "var(--space-4xl)",
          background: "var(--color-paper)",
        }}
      >
        {/* ── Eyebrow ── */}
        <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
          <p className="label" style={{ marginBottom: "var(--space-lg)" }}>
            START A PROJECT
          </p>
        </FadeIn>

        {/* ── Heading ── */}
        <MaskReveal direction="up" duration={0.9} delay={0.1}>
          <h2
            className="display-lg"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            Tell us about
            <br />
            your project<span style={{ color: "var(--color-accent)" }}>.</span>
          </h2>
        </MaskReveal>

        <FadeIn direction="up" distance={10} duration={0.6} delay={0.2}>
          <p
            className="body-text"
            style={{
              maxWidth: "48ch",
              marginBottom: "var(--space-3xl)",
            }}
          >
            Fill out the form below and we&rsquo;ll get back to you within
            24&ndash;48 hours with next steps.
          </p>
        </FadeIn>

        {/* ── Form ── */}
        <FadeIn direction="up" distance={15} duration={0.7} delay={0.3}>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
              {/* Row: Name + Email */}
              <div className="inquiry-row">
                <div className="inquiry-field">
                  <label htmlFor="inquiry-name" className="inquiry-label">
                    Name<span className="inquiry-required">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    className={`inquiry-input ${touched.name && errors.name ? "error" : ""}`}
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    aria-describedby={errors.name ? "inquiry-name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {touched.name && errors.name && (
                    <p id="inquiry-name-error" className="inquiry-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="inquiry-field">
                  <label htmlFor="inquiry-email" className="inquiry-label">
                    Email<span className="inquiry-required">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    className={`inquiry-input ${touched.email && errors.email ? "error" : ""}`}
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    aria-describedby={errors.email ? "inquiry-email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {touched.email && errors.email && (
                    <p id="inquiry-email-error" className="inquiry-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row: Company + Website */}
              <div className="inquiry-row">
                <div className="inquiry-field">
                  <label htmlFor="inquiry-company" className="inquiry-label">
                    Company / Brand
                  </label>
                  <input
                    id="inquiry-company"
                    name="company"
                    type="text"
                    className="inquiry-input"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="organization"
                  />
                </div>

                <div className="inquiry-field">
                  <label htmlFor="inquiry-website" className="inquiry-label">
                    Website
                  </label>
                  <input
                    id="inquiry-website"
                    name="website"
                    type="url"
                    className="inquiry-input"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="url"
                  />
                </div>
              </div>

              {/* What do you need? */}
              <div className="inquiry-field">
                <label htmlFor="inquiry-needs" className="inquiry-label">
                  What do you need?<span className="inquiry-required">*</span>
                </label>
                <textarea
                  id="inquiry-needs"
                  name="needs"
                  className={`inquiry-textarea ${touched.needs && errors.needs ? "error" : ""}`}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  value={formData.needs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  aria-describedby={errors.needs ? "inquiry-needs-error" : undefined}
                  aria-invalid={!!errors.needs}
                />
                {touched.needs && errors.needs && (
                  <p id="inquiry-needs-error" className="inquiry-error" role="alert">
                    {errors.needs}
                  </p>
                )}
              </div>

              {/* Row: Project Type + Budget */}
              <div className="inquiry-row">
                <div className="inquiry-field">
                  <label htmlFor="inquiry-project-type" className="inquiry-label">
                    Project type
                  </label>
                  <select
                    id="inquiry-project-type"
                    name="projectType"
                    className="inquiry-select"
                    value={formData.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select a type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="inquiry-field">
                  <label htmlFor="inquiry-budget" className="inquiry-label">
                    Budget range
                  </label>
                  <select
                    id="inquiry-budget"
                    name="budget"
                    className="inquiry-select"
                    value={formData.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select a range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row: Timeline */}
              <div className="inquiry-row" style={{ maxWidth: "50%" }}>
                <div className="inquiry-field">
                  <label htmlFor="inquiry-timeline" className="inquiry-label">
                    Timeline
                  </label>
                  <select
                    id="inquiry-timeline"
                    name="timeline"
                    className="inquiry-select"
                    value={formData.timeline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select a timeline</option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="inquiry-field">
                <label htmlFor="inquiry-message" className="inquiry-label">
                  Additional notes
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  className="inquiry-textarea"
                  placeholder="Anything else you'd like us to know..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                />
              </div>

              {/* Form-level error */}
              {errors.form && (
                <p className="inquiry-error" role="alert" style={{ fontSize: "var(--text-sm)" }}>
                  {errors.form}
                </p>
              )}

              {/* Submit */}
              <div className="inquiry-submit-row">
                <button
                  type="submit"
                  className="almoo-btn almoo-btn--primary almoo-btn--lg"
                  disabled={status === "submitting"}
                  style={{
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    opacity: status === "submitting" ? 0.7 : 1,
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ animation: "spin 1s linear infinite" }}
                      >
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send inquiry <span className="almoo-arrow">&rarr;</span>
                    </>
                  )}
                </button>
                <span className="inquiry-note">
                  We typically respond within 24&ndash;48 hours.
                </span>
              </div>
            </div>
          </form>
        </FadeIn>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @media (prefers-reduced-motion: reduce) {
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(0deg); }
            }
          }
        `}</style>
      </section>
    </>
  );
}
