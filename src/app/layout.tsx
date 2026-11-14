import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const bricolageDisplay = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Yassine Benazzou | Freelance Web Developer & Web Designer Morocco",
    template: "%s | Yassine Benazzou",
  },
  description:
    "Custom, fast websites built for small businesses, startups, and international clients in Morocco, France, Belgium, Canada, UAE, and worldwide.",
  keywords: [
    "Freelance Web Developer Morocco",
    "Website Designer Morocco",
    "Création Site Web Maroc",
    "Développeur Web Freelance",
    "Website Development for Small Businesses",
    "Freelance Web Designer",
  ],
  applicationName: siteConfig.fullBrand,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: siteConfig.alternateLocales,
    siteName: siteConfig.fullBrand,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Benazzou | Custom Websites for Growing Businesses",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageDisplay.variable} ${interSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#07080b] text-slate-100">
        <LanguageProvider>
          <JsonLd data={organizationJsonLd()} />
          <Navbar />
          <main>{children}</main>
          <FloatingContact />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
