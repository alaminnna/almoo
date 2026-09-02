import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://almoo.pro.bd"),
  title: {
    default: "Almoo Studio — Digital Agency in Bangladesh | Web, App & Growth",
    template: "%s | Almoo Studio",
  },
  description:
    "Almoo Studio is a Bangladesh-based digital agency building websites, web apps, AI automation and digital growth solutions for businesses in Bangladesh and worldwide.",
  keywords: [
    "digital agency Bangladesh",
    "web design Bangladesh",
    "web development Bangladesh",
    "web applications",
    "AI automation",
    "digital growth",
    "SaaS development",
    "UI UX design",
  ],
  authors: [{ name: "Al A Min" }],
  creator: "Al A Min",
  publisher: "Almoo Studio",
  applicationName: "Almoo Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://almoo.pro.bd",
  },
  openGraph: {
    title: "Almoo Studio — Digital Agency in Bangladesh | Web, App & Growth",
    description:
      "Almoo Studio is a Bangladesh-based digital agency building websites, web apps, AI automation and digital growth solutions for businesses in Bangladesh and worldwide.",
    url: "https://almoo.pro.bd",
    siteName: "Almoo Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Almoo Studio — Digital Agency in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almoo Studio — Digital Agency in Bangladesh | Web, App & Growth",
    description:
      "Almoo Studio is a Bangladesh-based digital agency building websites, web apps, AI automation and digital growth solutions for businesses in Bangladesh and worldwide.",
    images: ["/og-image.png"],
    site: "@almoostudio",
    creator: "@almoostudio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Geist:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
