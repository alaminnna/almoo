"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";
import { FadeIn, MaskReveal, BlurReveal } from "./ui/motion";

// -------------------------------------------------------------------------
// TYPES
// -------------------------------------------------------------------------
type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  projectType: string;
  projectStage: string;
  budget: string;
  projectDetails: string;
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
}

interface FormErrors {
  [key: string]: string;
}

interface SubmitResult {
  success: boolean;
  internalEmailSent?: boolean;
  confirmationEmailSent?: boolean;
  error?: string;
}

// -------------------------------------------------------------------------
// CONSTANTS
// -------------------------------------------------------------------------
const PROJECT_TYPES = [
  "Website",
  "Web Application",
  "UI / UX Design",
  "AI & Automation",
  "Digital Growth",
  "Something else",
];

const PROJECT_STAGES = [
  "Just an idea",
  "Starting a new business",
  "Existing business",
  "Redesigning something",
  "Scaling an existing product",
  "Other",
];

const BUDGET_RANGES = [
  "Under $500",
  "$500 \u2014 $1,000",
  "$1,000 \u2014 $3,000",
  "$3,000+",
  "Not sure yet",
];

const INITIAL_FORM: FormData = {
  projectType: "",
  projectStage: "",
  budget: "",
  projectDetails: "",
  name: "",
  email: "",
  company: "",
  website: "",
  phone: "",
};

const TOTAL_STEPS = 5;
const REVIEW_STEP = 5;

// -------------------------------------------------------------------------
// VALIDATION
// -------------------------------------------------------------------------
function validateStep(step: number, data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (step === 0) {
    if (!data.projectType) errors.projectType = "Please select a project type.";
  } else if (step === 1) {
    if (!data.projectStage) errors.projectStage = "Please select a stage.";
  } else if (step === 2) {
    if (!data.budget) errors.budget = "Please select a budget range.";
  } else if (step === 3) {
    if (!data.projectDetails.trim())
      errors.projectDetails = "Please tell us about your project.";
  } else if (step === 4) {
    if (!data.name.trim()) errors.name = "Please enter your name.";
    if (!data.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email.";
    }
  }

  return errors;
}

// -------------------------------------------------------------------------
// SUBMIT HANDLER
// -------------------------------------------------------------------------
async function submitInquiry(
  data: FormData
): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const body = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: body.error || "Unable to send inquiry. Please try again.",
        internalEmailSent: body.internalEmailSent,
        confirmationEmailSent: body.confirmationEmailSent,
      };
    }

    return {
      success: true,
      internalEmailSent: body.internalEmailSent,
      confirmationEmailSent: body.confirmationEmailSent,
    };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again or contact us directly.",
    };
  }
}

// -------------------------------------------------------------------------
// STYLES
// -------------------------------------------------------------------------
const STYLES = `
/* ── Option cards ── */
.inquiry-option {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  background: var(--color-paper);
  cursor: pointer;
  transition: border-color 250ms var(--ease-out), background 250ms var(--ease-out), box-shadow 250ms var(--ease-out);
  min-height: 48px;
  user-select: none;
}

.inquiry-option:hover {
  border-color: var(--color-ink-2);
  background: var(--color-paper-2);
}

.inquiry-option:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.inquiry-option.selected {
  border-color: var(--color-accent);
  background: oklch(68% 0.120 40 / 0.06);
  box-shadow: 0 0 0 1px var(--color-accent);
}

.inquiry-option-radio {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid var(--color-rule);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 250ms var(--ease-out), background 250ms var(--ease-out);
}

.inquiry-option.selected .inquiry-option-radio {
  border-color: var(--color-accent);
  background: var(--color-accent);
}

.inquiry-option.selected .inquiry-option-radio::after {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-paper);
}

.inquiry-option-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-ink);
  line-height: 1.4;
}

/* ── Form fields ── */
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
  min-height: 48px;
}

.inquiry-input:focus,
.inquiry-textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px oklch(68% 0.120 40 / 0.12);
}

.inquiry-input.error,
.inquiry-textarea.error {
  border-color: oklch(65% 0.250 25);
}

.inquiry-textarea {
  min-height: 140px;
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

/* ── Step heading ── */
.inquiry-step-heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-2xl);
  letter-spacing: -0.02em;
  color: var(--color-ink);
  margin-bottom: var(--space-2xl);
  line-height: 1.15;
}

/* ── Options grid ── */
.inquiry-options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

/* ── Progress bar ── */
.inquiry-progress-track {
  width: 100%;
  height: 2px;
  background: var(--color-rule);
  border-radius: 1px;
  overflow: hidden;
}

.inquiry-progress-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: 1px;
  transition: width 500ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Review section ── */
.inquiry-review-section {
  margin-bottom: var(--space-2xl);
}

.inquiry-review-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-xs);
  color: var(--color-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.inquiry-review-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-rule);
}

.inquiry-review-row:last-child {
  border-bottom: none;
}

.inquiry-review-key {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-muted);
}

.inquiry-review-value {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-ink);
  text-align: right;
  max-width: 60%;
  overflow-wrap: anywhere;
}

.inquiry-review-edit {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-xs);
  color: var(--color-accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2xs) var(--space-xs);
  transition: color 250ms var(--ease-out);
}

.inquiry-review-edit:hover {
  color: var(--color-accent-hover);
}

.inquiry-review-edit:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* ── Success state ── */
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

/* ── Direct contact panel ── */
.inquiry-direct-panel {
  border-left: 1px solid var(--color-rule);
  padding-left: var(--space-2xl);
}

.inquiry-direct-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--color-rule);
}

.inquiry-direct-item:last-child {
  border-bottom: none;
}

.inquiry-direct-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-xs);
  color: var(--color-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.inquiry-direct-value {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-ink);
}

.inquiry-direct-value a {
  color: var(--color-ink);
  text-decoration: none;
  transition: color 250ms var(--ease-out);
}

.inquiry-direct-value a:hover {
  color: var(--color-accent);
}

/* ── Spinner ── */
@keyframes inquiry-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .inquiry-main-grid {
    grid-template-columns: 1fr !important;
    gap: var(--space-3xl) !important;
  }
  .inquiry-direct-panel {
    border-left: none !important;
    border-top: 1px solid var(--color-rule);
    padding-left: 0 !important;
    padding-top: var(--space-2xl);
  }
  .inquiry-options-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .inquiry-row {
    grid-template-columns: 1fr;
  }
  .inquiry-step-heading {
    font-size: var(--text-xl);
  }
}

@media (prefers-reduced-motion: reduce) {
  .inquiry-input,
  .inquiry-textarea {
    transition: none;
  }
  .inquiry-option {
    transition: none;
  }
  .inquiry-progress-fill {
    transition: none;
  }
  @keyframes inquiry-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(0deg); }
  }
}
`;

// -------------------------------------------------------------------------
// OPTION CARD
// -------------------------------------------------------------------------
function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`inquiry-option ${selected ? "selected" : ""}`}
      onClick={onClick}
      role="radio"
      aria-checked={selected}
    >
      <span className="inquiry-option-radio" aria-hidden="true" />
      <span className="inquiry-option-label">{label}</span>
    </button>
  );
}

// -------------------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------------------
export default function Contact() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // -- Navigation --
  const canGoBack = step > 0 && step < REVIEW_STEP;
  const isReviewStep = step === REVIEW_STEP;

  const goNext = useCallback(() => {
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      setTouched(
        Object.keys(stepErrors).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {}
        )
      );
      return;
    }
    setErrors({});
    setTouched({});
    if (step < REVIEW_STEP) setStep((s) => s + 1);
  }, [step, formData]);

  const goBack = useCallback(() => {
    if (step > 0 && step < REVIEW_STEP) {
      setErrors({});
      setTouched({});
      setStep((s) => s - 1);
    }
  }, [step]);

  const jumpToStep = useCallback(
    (targetStep: number) => {
      if (targetStep >= 0 && targetStep < REVIEW_STEP) {
        setErrors({});
        setTouched({});
        setStep(targetStep);
      }
    },
    []
  );

  // -- Field changes --
  const handleChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
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
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
    },
    []
  );

  const selectOption = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors]
  );

  // -- Submit --
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      setStatus("submitting");
      try {
        const result = await submitInquiry(formData);
        if (result.success) {
          setStatus("success");
        } else {
          setStatus("error");
          setErrors({
            form: result.error || "Something went wrong. Please try again.",
          });
        }
      } catch {
        setStatus("error");
        setErrors({ form: "Something went wrong. Please try again." });
      }
    },
    [formData]
  );

  // -- Scroll to top --
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // -- Step transition variants --
  const stepVariants = {
    enter: { opacity: 0, y: 12 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  // -- Progress --
  const progressPercent =
    step < REVIEW_STEP ? ((step + 1) / TOTAL_STEPS) * 100 : 100;

  // -------------------------------------------------------------------------
  // SUCCESS STATE
  // -------------------------------------------------------------------------
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Inquiry received.</h3>
            <p>
              Thanks, {formData.name}. We&rsquo;ve received your project details.
            </p>
            <p style={{ marginTop: "var(--space-sm)" }}>
              We&rsquo;ll review everything and get back to you within 24&ndash;48
              hours.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "var(--space-lg)",
                marginTop: "var(--space-2xl)",
              }}
            >
              <Button
                as="button"
                type="button"
                variant="text"
                size="md"
                onClick={scrollToTop}
              >
                Back to top <span className="almoo-arrow">&uarr;</span>
              </Button>
              <Button
                as="a"
                href="https://wa.me/8801882030873"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                size="md"
              >
                Prefer a direct conversation? <span className="almoo-arrow">&rarr;</span>
              </Button>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  // -------------------------------------------------------------------------
  // ERROR STATE
  // -------------------------------------------------------------------------
  if (status === "error") {
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
            <div
              className="inquiry-success-icon"
              style={{ background: "oklch(65% 0.250 25 / 0.12)" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="oklch(65% 0.250 25)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h3>Something went wrong.</h3>
            <p>
              We couldn&rsquo;t send your inquiry right now.
            </p>
            <p style={{ marginTop: "var(--space-sm)" }}>
              Your information has not been lost.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "var(--space-lg)",
                marginTop: "var(--space-2xl)",
              }}
            >
              <Button
                as="button"
                type="button"
                variant="primary"
                size="md"
                onClick={() => {
                  setStatus("idle");
                  setErrors({});
                }}
              >
                Try Again <span className="almoo-arrow">&rarr;</span>
              </Button>
              <Button
                as="a"
                href="https://wa.me/8801882030873"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
              >
                WhatsApp Us <span className="almoo-arrow">&rarr;</span>
              </Button>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  // -------------------------------------------------------------------------
  // MAIN RENDER
  // -------------------------------------------------------------------------
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        id="inquiry"
        style={{
          paddingBlock: "var(--space-4xl)",
          background: "var(--color-paper)",
        }}
      >
        <div className="container-narrow">
          {/* ── CONTACT HERO ── */}
          <div style={{ marginBottom: "var(--space-4xl)" }}>
            <FadeIn direction="up" distance={10} duration={0.6} delay={0}>
              <p
                className="label"
                style={{
                  color: "var(--color-accent)",
                  letterSpacing: "0.18em",
                  marginBottom: "var(--space-lg)",
                }}
              >
                START A PROJECT
              </p>
            </FadeIn>

            <MaskReveal direction="up" duration={0.9} delay={0.1}>
              <h2
                className="display-lg"
                style={{ marginBottom: "var(--space-xl)" }}
              >
                Let&rsquo;s understand your
                <br />
                project<span style={{ color: "var(--color-accent)" }}>.</span>
              </h2>
            </MaskReveal>

            <BlurReveal duration={0.8} delay={0.3} blur={4} y={12}>
              <p
                className="body-text"
                style={{
                  maxWidth: "48ch",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Tell us what you&rsquo;re building. A few details help us prepare
                for our conversation.
              </p>
            </BlurReveal>

            <FadeIn direction="up" distance={8} duration={0.5} delay={0.5}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                Usually reply within 24&ndash;48 hours.
              </p>
            </FadeIn>
          </div>

          {/* ── MAIN GRID: INQUIRY + DIRECT CONTACT ── */}
          <div
            className="inquiry-main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "var(--space-4xl)",
              alignItems: "start",
            }}
          >
            {/* ── LEFT: MULTI-STEP INQUIRY ── */}
            <div>
              {/* Progress indicator */}
              <FadeIn direction="up" distance={8} duration={0.5} delay={0.2}>
                <div
                  style={{
                    marginBottom: "var(--space-2xl)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "var(--text-sm)",
                        color: "var(--color-muted)",
                        fontVariantNumeric: "tabular-nums",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {isReviewStep
                        ? "Review"
                        : `${String(step + 1).padStart(2, "0")} \u2014 ${String(TOTAL_STEPS).padStart(2, "0")}`}
                    </span>

                    {canGoBack && (
                      <button
                        type="button"
                        onClick={goBack}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          fontSize: "var(--text-sm)",
                          color: "var(--color-ink-2)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "var(--space-xs) 0",
                          transition: "color 250ms var(--ease-out)",
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--space-xs)",
                        }}
                        aria-label="Go to previous step"
                      >
                        <span aria-hidden="true">&larr;</span> Back
                      </button>
                    )}
                  </div>

                  <div className="inquiry-progress-track">
                    <div
                      className="inquiry-progress-fill"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Steps */}
              <form onSubmit={handleSubmit} noValidate>
                <AnimatePresence mode="wait">
                  {/* ── STEP 01: Project Type ── */}
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h3 className="inquiry-step-heading">
                        What are you looking to build?
                      </h3>

                      <div
                        className="inquiry-options-grid"
                        role="radiogroup"
                        aria-label="Project type"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <OptionCard
                            key={type}
                            label={type}
                            selected={formData.projectType === type}
                            onClick={() => selectOption("projectType", type)}
                          />
                        ))}
                      </div>

                      {touched.projectType && errors.projectType && (
                        <p
                          className="inquiry-error"
                          role="alert"
                          style={{ marginTop: "var(--space-md)" }}
                        >
                          {errors.projectType}
                        </p>
                      )}

                      <div style={{ marginTop: "var(--space-2xl)" }}>
                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          onClick={goNext}
                        >
                          Continue <span className="almoo-arrow">&rarr;</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 02: Project Stage ── */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h3 className="inquiry-step-heading">
                        Where are you right now?
                      </h3>

                      <div
                        className="inquiry-options-grid"
                        role="radiogroup"
                        aria-label="Project stage"
                      >
                        {PROJECT_STAGES.map((stage) => (
                          <OptionCard
                            key={stage}
                            label={stage}
                            selected={formData.projectStage === stage}
                            onClick={() => selectOption("projectStage", stage)}
                          />
                        ))}
                      </div>

                      {touched.projectStage && errors.projectStage && (
                        <p
                          className="inquiry-error"
                          role="alert"
                          style={{ marginTop: "var(--space-md)" }}
                        >
                          {errors.projectStage}
                        </p>
                      )}

                      <div style={{ marginTop: "var(--space-2xl)" }}>
                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          onClick={goNext}
                        >
                          Continue <span className="almoo-arrow">&rarr;</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 03: Budget ── */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h3 className="inquiry-step-heading">
                        What&rsquo;s your approximate budget?
                      </h3>

                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--text-sm)",
                          color: "var(--color-ink-2)",
                          marginBottom: "var(--space-xl)",
                          lineHeight: 1.6,
                        }}
                      >
                        This helps us understand the scope. No judgement &mdash; every
                        project starts somewhere.
                      </p>

                      <div
                        className="inquiry-options-grid"
                        role="radiogroup"
                        aria-label="Budget range"
                      >
                        {BUDGET_RANGES.map((range) => (
                          <OptionCard
                            key={range}
                            label={range}
                            selected={formData.budget === range}
                            onClick={() => selectOption("budget", range)}
                          />
                        ))}
                      </div>

                      {touched.budget && errors.budget && (
                        <p
                          className="inquiry-error"
                          role="alert"
                          style={{ marginTop: "var(--space-md)" }}
                        >
                          {errors.budget}
                        </p>
                      )}

                      <div style={{ marginTop: "var(--space-2xl)" }}>
                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          onClick={goNext}
                        >
                          Continue <span className="almoo-arrow">&rarr;</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 04: Project Details ── */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h3 className="inquiry-step-heading">
                        Tell us about your project.
                      </h3>

                      <div className="inquiry-field">
                        <textarea
                          id="contact-project-details"
                          name="projectDetails"
                          className={`inquiry-textarea ${
                            touched.projectDetails && errors.projectDetails
                              ? "error"
                              : ""
                          }`}
                          placeholder="What's the idea, problem, or goal you're working toward?"
                          value={formData.projectDetails}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={6}
                          aria-describedby={
                            errors.projectDetails
                              ? "contact-project-details-error"
                              : undefined
                          }
                          aria-invalid={!!errors.projectDetails}
                        />
                        {touched.projectDetails && errors.projectDetails && (
                          <p
                            id="contact-project-details-error"
                            className="inquiry-error"
                            role="alert"
                          >
                            {errors.projectDetails}
                          </p>
                        )}
                      </div>

                      <div style={{ marginTop: "var(--space-2xl)" }}>
                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          onClick={goNext}
                        >
                          Continue <span className="almoo-arrow">&rarr;</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 05: Contact Info ── */}
                  {step === 4 && (
                    <motion.div
                      key="step-4"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h3 className="inquiry-step-heading">
                        How can we reach you?
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--space-xl)",
                        }}
                      >
                        {/* Row: Name + Email */}
                        <div className="inquiry-row">
                          <div className="inquiry-field">
                            <label
                              htmlFor="contact-name"
                              className="inquiry-label"
                            >
                              Name
                              <span className="inquiry-required">*</span>
                            </label>
                            <input
                              id="contact-name"
                              name="name"
                              type="text"
                              className={`inquiry-input ${
                                touched.name && errors.name ? "error" : ""
                              }`}
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              autoComplete="name"
                              aria-describedby={
                                errors.name ? "contact-name-error" : undefined
                              }
                              aria-invalid={!!errors.name}
                            />
                            {touched.name && errors.name && (
                              <p
                                id="contact-name-error"
                                className="inquiry-error"
                                role="alert"
                              >
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div className="inquiry-field">
                            <label
                              htmlFor="contact-email"
                              className="inquiry-label"
                            >
                              Email
                              <span className="inquiry-required">*</span>
                            </label>
                            <input
                              id="contact-email"
                              name="email"
                              type="email"
                              className={`inquiry-input ${
                                touched.email && errors.email ? "error" : ""
                              }`}
                              placeholder="you@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              autoComplete="email"
                              aria-describedby={
                                errors.email ? "contact-email-error" : undefined
                              }
                              aria-invalid={!!errors.email}
                            />
                            {touched.email && errors.email && (
                              <p
                                id="contact-email-error"
                                className="inquiry-error"
                                role="alert"
                              >
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row: Company + Website */}
                        <div className="inquiry-row">
                          <div className="inquiry-field">
                            <label
                              htmlFor="contact-company"
                              className="inquiry-label"
                            >
                              Company / Brand
                            </label>
                            <input
                              id="contact-company"
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
                            <label
                              htmlFor="contact-website"
                              className="inquiry-label"
                            >
                              Website
                            </label>
                            <input
                              id="contact-website"
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

                        {/* WhatsApp / Phone */}
                        <div className="inquiry-field" style={{ maxWidth: "50%" }}>
                          <label
                            htmlFor="contact-phone"
                            className="inquiry-label"
                          >
                            WhatsApp / Phone
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            className="inquiry-input"
                            placeholder="+880..."
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="tel"
                          />
                        </div>
                      </div>

                      {/* Form-level error */}
                      {errors.form && (
                        <p
                          className="inquiry-error"
                          role="alert"
                          style={{
                            fontSize: "var(--text-sm)",
                            marginTop: "var(--space-lg)",
                          }}
                        >
                          {errors.form}
                        </p>
                      )}

                      {/* Continue to review */}
                      <div style={{ marginTop: "var(--space-2xl)" }}>
                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          onClick={goNext}
                        >
                          Review your inquiry <span className="almoo-arrow">&rarr;</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 06: Review ── */}
                  {step === REVIEW_STEP && (
                    <motion.div
                      key="step-review"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h3 className="inquiry-step-heading">
                        Review your inquiry.
                      </h3>

                      {/* Project section */}
                      <div className="inquiry-review-section">
                        <p className="inquiry-review-label">Your Project</p>

                        <div className="inquiry-review-row">
                          <span className="inquiry-review-key">Project</span>
                          <span className="inquiry-review-value">
                            {formData.projectType}
                          </span>
                          <button
                            type="button"
                            className="inquiry-review-edit"
                            onClick={() => jumpToStep(0)}
                            aria-label="Edit project type"
                          >
                            Edit
                          </button>
                        </div>

                        <div className="inquiry-review-row">
                          <span className="inquiry-review-key">Stage</span>
                          <span className="inquiry-review-value">
                            {formData.projectStage}
                          </span>
                          <button
                            type="button"
                            className="inquiry-review-edit"
                            onClick={() => jumpToStep(1)}
                            aria-label="Edit project stage"
                          >
                            Edit
                          </button>
                        </div>

                        <div className="inquiry-review-row">
                          <span className="inquiry-review-key">Budget</span>
                          <span className="inquiry-review-value">
                            {formData.budget}
                          </span>
                          <button
                            type="button"
                            className="inquiry-review-edit"
                            onClick={() => jumpToStep(2)}
                            aria-label="Edit budget"
                          >
                            Edit
                          </button>
                        </div>

                        <div className="inquiry-review-row">
                          <span className="inquiry-review-key">Details</span>
                          <span className="inquiry-review-value">
                            {formData.projectDetails.slice(0, 120)}
                            {formData.projectDetails.length > 120 ? "\u2026" : ""}
                          </span>
                          <button
                            type="button"
                            className="inquiry-review-edit"
                            onClick={() => jumpToStep(3)}
                            aria-label="Edit project details"
                          >
                            Edit
                          </button>
                        </div>
                      </div>

                      {/* Contact section */}
                      <div className="inquiry-review-section">
                        <p className="inquiry-review-label">Contact</p>

                        <div className="inquiry-review-row">
                          <span className="inquiry-review-key">Name</span>
                          <span className="inquiry-review-value">
                            {formData.name}
                          </span>
                        </div>

                        <div className="inquiry-review-row">
                          <span className="inquiry-review-key">Email</span>
                          <span className="inquiry-review-value">
                            {formData.email}
                          </span>
                        </div>

                        {formData.company && (
                          <div className="inquiry-review-row">
                            <span className="inquiry-review-key">Company</span>
                            <span className="inquiry-review-value">
                              {formData.company}
                            </span>
                          </div>
                        )}

                        {formData.website && (
                          <div className="inquiry-review-row">
                            <span className="inquiry-review-key">Website</span>
                            <span className="inquiry-review-value">
                              {formData.website}
                            </span>
                          </div>
                        )}

                        {formData.phone && (
                          <div className="inquiry-review-row">
                            <span className="inquiry-review-key">Phone</span>
                            <span className="inquiry-review-value">
                              {formData.phone}
                            </span>
                          </div>
                        )}

                        <div style={{ marginTop: "var(--space-sm)" }}>
                          <button
                            type="button"
                            className="inquiry-review-edit"
                            onClick={() => jumpToStep(4)}
                            aria-label="Edit contact information"
                          >
                            Edit contact info
                          </button>
                        </div>
                      </div>

                      {/* Form-level error */}
                      {errors.form && (
                        <p
                          className="inquiry-error"
                          role="alert"
                          style={{
                            fontSize: "var(--text-sm)",
                            marginBottom: "var(--space-lg)",
                          }}
                        >
                          {errors.form}
                        </p>
                      )}

                      {/* Submit */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--space-lg)",
                          marginTop: "var(--space-xl)",
                        }}
                      >
                        <button
                          type="submit"
                          className="almoo-btn almoo-btn--primary almoo-btn--lg"
                          disabled={status === "submitting"}
                          style={{
                            cursor:
                              status === "submitting" ? "not-allowed" : "pointer",
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
                                style={{
                                  animation: "inquiry-spin 1s linear infinite",
                                }}
                              >
                                <path d="M21 12a9 9 0 11-6.219-8.56" />
                              </svg>
                              Sending your inquiry&hellip;
                            </>
                          ) : (
                            <>
                              Send Inquiry{" "}
                              <span className="almoo-arrow">&rarr;</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* ── RIGHT: DIRECT CONTACT PANEL ── */}
            <FadeIn
              direction="up"
              distance={20}
              duration={0.7}
              delay={0.4}
              className="inquiry-direct-panel"
            >
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "var(--text-lg)",
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  Prefer a direct conversation?
                </h4>

                <div className="inquiry-direct-item">
                  <span className="inquiry-direct-label">Email</span>
                  <span className="inquiry-direct-value">
                    <a href="mailto:almoo.agency@gmail.com">
                      almoo.agency@gmail.com
                    </a>
                  </span>
                </div>

                <div className="inquiry-direct-item">
                  <span className="inquiry-direct-label">WhatsApp</span>
                  <span className="inquiry-direct-value">
                    <a
                      href="https://wa.me/8801882030873"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      01882030873
                    </a>
                  </span>
                </div>

                <div className="inquiry-direct-item">
                  <span className="inquiry-direct-label">Response time</span>
                  <span className="inquiry-direct-value">
                    Usually within 24&ndash;48 hours
                  </span>
                </div>

                <div className="inquiry-direct-item">
                  <span className="inquiry-direct-label">Location</span>
                  <span className="inquiry-direct-value">
                    Bangladesh &middot; Working globally
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
