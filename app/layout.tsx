import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Almoo Studio — Web, App & Digital Growth",
  description:
    "Almoo Studio builds custom web, app, and digital solutions designed around your business.",
  openGraph: {
    title: "Almoo Studio — Web, App & Digital Growth",
    description:
      "Almoo Studio builds custom web, app, and digital solutions designed around your business.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almoo Studio — Web, App & Digital Growth",
    description:
      "Almoo Studio builds custom web, app, and digital solutions designed around your business.",
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
