"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, MaskReveal, StaggerContainer, StaggerItem } from "./ui/motion";

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "We work on custom websites, web applications, mobile apps, brand systems, and digital products. Every project is built around the specific needs of the business — no templates, no cookie-cutter solutions.",
  },
  {
    question: "How does a project start?",
    answer:
      "It starts with an inquiry. You fill out our project form, and we get back to you within 24–48 hours. From there, we schedule a discovery call to understand your goals, audience, and requirements before proposing an approach.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timeline depends on scope and complexity. A typical website takes 4–8 weeks. Larger web applications or digital products may take 3–6 months. We provide a clear timeline after the discovery phase.",
  },
  {
    question: "Do you work with existing websites?",
    answer:
      "Yes. We can redesign, rebuild, or optimize existing websites. We'll assess what's working, what isn't, and recommend the best path forward — whether that's a full redesign or targeted improvements.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. Website redesigns are one of our core services. We focus on improving both the visual design and the underlying UX, performance, and conversion architecture.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. After launch, we offer ongoing support, updates, and optimization. This is optional — many clients choose to handle maintenance in-house after we deliver the project.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes. If you already have a brand identity, we'll work within your existing visual system. If you need a brand refresh or new identity, we can handle that too.",
  },
  {
    question: "What happens after I submit an inquiry?",
    answer:
      "We review your inquiry and respond within 24–48 hours. If the project is a good fit, we schedule a discovery call to learn more about your goals and requirements. From there, we put together a proposal with scope, timeline, and investment.",
  },
  {
    question: "What information should I prepare before contacting you?",
    answer:
      "It helps to have a rough idea of your goals, your target audience, your timeline, and your budget range. But you don't need everything figured out — that's what the discovery phase is for.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-rule)",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "var(--space-xl) 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "var(--space-lg)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-lg)",
            color: "var(--color-ink)",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flexShrink: 0,
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isOpen ? "var(--color-accent)" : "var(--color-muted)",
            fontSize: "var(--text-xl)",
            fontWeight: 300,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
                paddingBottom: "var(--space-xl)",
                maxWidth: "60ch",
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      id="faq"
      className="container-narrow"
      style={{
        paddingBlock: "var(--space-4xl)",
        background: "var(--color-paper)",
      }}
    >
      <FadeIn direction="left" distance={10} duration={0.6} delay={0}>
        <p className="label" style={{ marginBottom: "var(--space-lg)" }}>
          Frequently Asked
        </p>
      </FadeIn>

      <MaskReveal direction="up" duration={0.9} delay={0.1}>
        <h2
          className="display-md"
          style={{ marginBottom: "var(--space-xl)", maxWidth: "20ch" }}
        >
          Common questions
          <span style={{ color: "var(--color-accent)" }}>.</span>
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
          Got questions? Here are the most common ones we hear.
        </p>
      </FadeIn>

      <StaggerContainer stagger={0.06} delay={0.1}>
        <div role="list">
          {faqs.map((faq, i) => (
            <StaggerItem key={i} direction="up" distance={10}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
