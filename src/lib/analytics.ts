"use client";

export type ConversionEventName =
  | "devis_estimate_generated"
  | "devis_brief_sent_to_contact"
  | "contact_form_submitted";

export type ConversionEventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    va?: (
      type: "beforeSend" | "event" | "pageview",
      properties?: { name?: string; data?: ConversionEventProps },
    ) => void;
  }
}

/**
 * Cookie-free, GDPR-friendly client conversion event emitter.
 * Emits zero third-party ad requests and stores no PII.
 * Compatible with Vercel Web Analytics (`window.va`) when enabled on the project.
 */
export function trackConversionEvent(
  name: ConversionEventName,
  props: ConversionEventProps = {},
) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.va === "function") {
      window.va("event", { name, data: props });
    }
    window.dispatchEvent(
      new CustomEvent("yb:conversion", {
        detail: { name, props, timestamp: Date.now() },
      }),
    );
  } catch {
    // Never interrupt user actions if an analytics hook fails
  }
}
