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

  // Silently accept bot honeypot submissions without dispatching
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true, deliveredVia: "prepared" });
  }

  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "Website Project";
  const budget = body.budget?.trim() ?? "";
  const description = body.description?.trim() ?? "";

  if (!fullName || fullName.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your full name." },
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
