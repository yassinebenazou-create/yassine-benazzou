import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const resolvedImages = image
    ? [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        fr: url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.fullBrand} — ${siteConfig.tagline}`,
      locale: siteConfig.locale,
      alternateLocale: siteConfig.alternateLocales,
      type: "website",
      ...(resolvedImages ? { images: resolvedImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [absoluteUrl(image)] } : {}),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.author.name,
        jobTitle: siteConfig.author.jobTitle,
        url: siteConfig.url,
        email: siteConfig.isEmailPlaceholder ? undefined : siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressCountry: "MA",
        },
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          siteConfig.socials.facebook,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.fullBrand,
        description: siteConfig.description,
        url: siteConfig.url,
        areaServed: ["Morocco", "France", "Belgium", "Canada", "United Arab Emirates", "Worldwide"],
        founder: { "@id": `${siteConfig.url}/#person` },
        availableLanguage: ["English", "French"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.fullBrand,
        url: siteConfig.url,
        inLanguage: ["en", "fr"],
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
