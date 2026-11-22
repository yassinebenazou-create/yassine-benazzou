import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  locale?: string;
  absoluteTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
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
  locale,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  // Social scrapers do not reliably render SVG OpenGraph images; fall back to /opengraph-image PNG.
  const ogImagePath = !image || image.endsWith(".svg") ? "/opengraph-image" : image;
  const resolvedImages = [
    {
      url: absoluteUrl(ogImagePath),
      width: 1200,
      height: 630,
      alt: absoluteTitle ?? title,
    },
  ];
  const socialTitle = absoluteTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: `${siteConfig.fullBrand} — ${siteConfig.tagline}`,
      locale: locale ?? siteConfig.locale,
      alternateLocale: siteConfig.alternateLocales,
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      images: resolvedImages,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [absoluteUrl(ogImagePath)],
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
        telephone: siteConfig.phone,
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
        email: siteConfig.isEmailPlaceholder ? undefined : siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressCountry: "MA",
        },
        areaServed: ["Morocco", "France", "Belgium", "Canada", "United Arab Emirates", "Worldwide"],
        founder: { "@id": `${siteConfig.url}/#person` },
        availableLanguage: ["English", "French"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.fullBrand,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#person` },
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

export function serviceJsonLd({
  name,
  description,
  path,
  areaServed = ["Morocco", "France", "Worldwide"],
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string | string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: "Web Design & Web Development",
    areaServed: Array.isArray(areaServed)
      ? areaServed.map((area) => ({ "@type": "Place", name: area }))
      : { "@type": "Place", name: areaServed },
    provider: {
      "@id": `${siteConfig.url}/#person`,
    },
    availableLanguage: ["French", "English"],
  };
}

export function localServiceJsonLd({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string;
}) {
  return serviceJsonLd({ name, description, path, areaServed });
}

export function articleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  inLanguage = "fr",
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  inLanguage?: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl("/opengraph-image"),
    datePublished,
    dateModified,
    inLanguage,
    author: {
      "@id": `${siteConfig.url}/#person`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
  };
}
