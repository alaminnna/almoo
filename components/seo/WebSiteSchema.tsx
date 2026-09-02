import JsonLd from "./JsonLd";

export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Almoo Studio",
    url: "https://almoo.pro.bd",
    description:
      "Almoo Studio is a Bangladesh-based digital agency building websites, web apps, AI automation and digital growth solutions.",
    publisher: {
      "@type": "Organization",
      name: "Almoo Studio",
      url: "https://almoo.pro.bd",
    },
  };

  return <JsonLd data={schema} />;
}
