import type { LocalizedText } from "@/data/projects";

export type Testimonial = {
  id: string;
  author: string;
  role: LocalizedText;
  company: string;
  projectUrl?: string;
  quote: LocalizedText;
  verifiedSource?: string;
};

/**
 * Add verified client quotes here (e.g., sourced directly from your Google Business Profile reviews).
 * Kept empty by default so unverified or invented quotes are never displayed publicly.
 */
export const verifiedTestimonials: Testimonial[] = [];
