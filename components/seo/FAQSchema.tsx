import JsonLd from "./JsonLd";

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

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}
