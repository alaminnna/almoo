import JsonLd from "./JsonLd";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Al A Min",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Almoo Studio",
      url: "https://almoo.pro.bd",
    },
    description:
      "AI Developer, Full Stack Web Developer and Open Source Builder focused on building thoughtful digital experiences, intelligent systems and products that help businesses grow.",
  };

  return <JsonLd data={schema} />;
}
