import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  description?: string;
  website?: string; // honeypot
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 6;
const ipHits = new Map<string, number[]>();

function cleanHeaderLine(value: string, maxLen: number) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLen);
}

function isRateLimited(request: Request): boolean {
  const rawIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown";

  if (rawIp === "unknown") return false;

  const now = Date.now();
  const recent = (ipHits.get(rawIp) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);
  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    ipHits.set(rawIp, recent);
    return true;
  }

  recent.push(now);
  ipHits.set(rawIp, recent);
  return false;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  // Silently accept bot honeypot submissions without dispatching external notifications
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true, deliveredVia: "prepared" });
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a few minutes or message on WhatsApp." },
      { status: 429 },
    );
  }

  const fullName = cleanHeaderLine(String(body.fullName ?? ""), 120);
  const email = cleanHeaderLine(String(body.email ?? ""), 160);
  const company = cleanHeaderLine(String(body.company ?? ""), 120);
  const projectType = cleanHeaderLine(String(body.projectType ?? "Website Project"), 120) || "Website Project";
  const budget = cleanHeaderLine(String(body.budget ?? ""), 120);
  const description = String(body.description ?? "").trim().slice(0, 4000);

  if (fullName.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your full name (at least 2 characters)." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (description.length < 15) {
    return NextResponse.json(
      { ok: false, error: "Please provide at least 15 characters describing your project." },
      { status: 400 },
    );
  }

  // Optional webhook dispatch (e.g., Formspree, Make, Discord, custom API)
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          company,
          projectType,
          budget,
          description,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        return NextResponse.json({ ok: true, deliveredVia: "webhook" });
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "Failed to deliver inquiry via webhook." },
        { status: 502 },
      );
    }
  }

  // Optional Resend email delivery
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  if (resendApiKey && toEmail) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL?.trim() || "Portfolio <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `New Project Inquiry from ${fullName} (${projectType})`,
          text: [
            `Full Name: ${fullName}`,
            `Email: ${email}`,
            company ? `Business / Company: ${company}` : null,
            `Project Type: ${projectType}`,
            budget ? `Budget: ${budget}` : null,
            "",
            "Description:",
            description,
          ]
            .filter((line) => line !== null)
            .join("\n"),
        }),
      });

      if (res.ok) {
        return NextResponse.json({ ok: true, deliveredVia: "resend" });
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "Failed to send email notification." },
        { status: 502 },
      );
    }
  }

  // Default honest response when external mail transport is not configured
  return NextResponse.json({ ok: true, deliveredVia: "prepared" });
}
