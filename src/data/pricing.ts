export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  recommended?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Business Website",
    price: "Custom Quote",
    description:
      "For small companies and professionals ready for a fast, credible online presence.",
    features: [
      "Custom UI layout matched to your brand",
      "Conversion-focused core pages",
      "Tested from 360px mobile to wide desktop",
      "Clean metadata & technical SEO base",
      "Lead form & WhatsApp quick action",
      "Live launch & handover support",
    ],
  },
  {
    name: "Bilingual Growth Site",
    price: "Custom Quote",
    description:
      "For brands targeting local and international markets with EN / FR architecture.",
    recommended: true,
    features: [
      "Bespoke studio design direction",
      "Bilingual EN / FR structure",
      "Clear conversion copy & user flow",
      "Speed & image optimization",
      "Accessible Framer Motion transitions",
      "Sitemap, Open Graph & search readiness",
    ],
  },
  {
    name: "E-commerce Store",
    price: "Custom Quote",
    description:
      "For brands selling online with clear product pages and simple order control.",
    features: [
      "Clean product & category catalog",
      "Thumb-friendly cart & mobile checkout",
      "Payment & shipping configuration",
      "Order & stock management",
      "E-commerce SEO essentials",
    ],
  },
];
