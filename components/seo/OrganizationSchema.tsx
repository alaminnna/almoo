import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Almoo Studio",
    url: "https://almoo.pro.bd",
    logo: "https://almoo.pro.bd/favicon.png",
    description:
      "Almoo Studio is a Bangladesh-based digital agency building websites, web apps, AI automation and digital growth solutions for businesses in Bangladesh and worldwide.",
    email: "almoo.agency@gmail.com",
    telephone: "+8801882030873",
    sameAs: [
      "https://www.instagram.com/almoostudio/",
      "https://www.facebook.com/almoostudio",
      "https://www.tiktok.com/@almoostudio",
      "https://x.com/almoostudio",
      "https://www.youtube.com/@almoostudio",
      "https://wa.me/8801882030873",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "almoo.agency@gmail.com",
      telephone: "+8801882030873",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  return <JsonLd data={schema} />;
}
