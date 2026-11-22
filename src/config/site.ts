// Set NEXT_PUBLIC_CONTACT_EMAIL / NEXT_PUBLIC_CONTACT_PHONE / NEXT_PUBLIC_WHATSAPP_NUMBER
// in your environment (.env.local / Vercel) to override Yassine's default contact details.
const DEFAULT_EMAIL = "yassinebenazou@gmail.com";
const DEFAULT_PHONE = "+212 7 02 73 62 93";
const DEFAULT_WHATSAPP = "+212702736293";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_EMAIL;
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || DEFAULT_PHONE;
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP;

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://yassine-benazzou.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Yassine Benazzou",
  brand: "YASSINE.",
  fullBrand: "Yassine Benazzou",
  tagline: "Freelance Web Developer & Web Designer",
  description:
    "Freelance web developer and web designer based in Morocco, building modern, high-performance websites for businesses in Morocco, France, Belgium, Canada, UAE, and worldwide.",
  url: siteUrl,
  locale: "en_US",
  alternateLocales: ["fr_FR", "fr_MA"],
  email,
  phone,
  whatsapp,
  isEmailPlaceholder: false,
  isPhonePlaceholder: false,
  isWhatsappPlaceholder: false,
  city: "El Jadida",
  country: "Morocco",
  markets: ["Morocco", "France", "Belgium", "Canada", "UAE", "Worldwide"],
  socials: {
    linkedin: "https://www.linkedin.com/in/yassine-benazzou-4956b4384/",
    instagram: "https://www.instagram.com/yassine.benazzou/",
    facebook: "https://www.facebook.com/profile.php?id=100075906982295",
    googleReview: "https://g.page/r/CXEOWiILca0uEAE/review",
    portfolio: `${siteUrl}/`,
  },
  author: {
    name: "Yassine Benazzou",
    jobTitle: "Freelance Web Developer & Web Designer",
  },
};

export const navLinks = [
  { key: "projects", href: "/#projects" },
  { key: "services", href: "/#services" },
  { key: "process", href: "/#process" },
  { key: "faq", href: "/#faq" },
] as const;

export function whatsappUrl(message = "Hello Yassine, I would like to discuss a website project.") {
  return `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
