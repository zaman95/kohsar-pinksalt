"use server";

import { headers } from "next/headers";
import { getResend } from "@/lib/resend";
import { contactFormSchema, quoteFormSchema, type ContactFormValues, type QuoteFormValues } from "@/lib/validations";

export type ActionResult = { success: true } | { success: false; error: string };

const FROM = process.env.RESEND_FROM_EMAIL || "Kohsar Saltworks <onboarding@resend.dev>";
const TO = process.env.SALES_INBOX_EMAIL || "export@kohsarsaltworks.com";

// Basic per-IP rate limit: max 5 submissions per 10 minutes. In-memory, so
// each serverless instance keeps its own counter — not bulletproof, but it
// stops naive spam loops without any extra infrastructure.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const submissionLog = new Map<string, number[]>();

async function isRateLimited(): Promise<boolean> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  submissionLog.set(ip, recent);
  if (submissionLog.size > 10_000) submissionLog.clear(); // cap memory
  return false;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;color:#8A7A6D;font-size:13px;font-weight:600;white-space:nowrap">${escapeHtml(
    label
  )}</td><td style="padding:6px 12px;font-size:14px;color:#1F2937">${escapeHtml(value)}</td></tr>`;
}

const NOT_CONFIGURED_ERROR = `Our inquiry form is temporarily unavailable. Please email us directly at ${TO} — we reply within one business day.`;

export async function submitQuoteForm(values: QuoteFormValues): Promise<ActionResult> {
  const parsed = quoteFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Please check the form for errors and try again." };
  }
  const data = parsed.data;

  // Honeypot tripped — silently report success so bots don't learn anything.
  if (data.companyWebsite) {
    return { success: true };
  }

  if (!process.env.RESEND_API_KEY) {
    // TODO: RESEND_API_KEY
    // Never pretend a lead was delivered when it wasn't — tell the buyer to
    // email directly instead of silently dropping their inquiry.
    console.error(`Quote form submission from ${data.companyName} could not be emailed: RESEND_API_KEY is not set.`);
    return { success: false, error: NOT_CONFIGURED_ERROR };
  }

  if (await isRateLimited()) {
    return { success: false, error: "Too many submissions from your network right now. Please try again in a few minutes or email us directly." };
  }

  const isSample = data.inquiryType === "sample";

  try {
    await getResend().emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `${isSample ? "Sample request" : "Wholesale quote request"} — ${data.companyName}`,
      html: `
        <div style="display:inline-block;padding:4px 12px;border-radius:999px;font-family:sans-serif;font-size:12px;font-weight:700;color:#fff;background:${
          isSample ? "#E9B7A5" : "#1F2937"
        }">${isSample ? "SAMPLE REQUEST" : "WHOLESALE QUOTE"}</div>
        <h2 style="font-family:sans-serif">${isSample ? "New sample request" : "New wholesale quote request"}</h2>
        <table style="border-collapse:collapse;font-family:sans-serif">
          ${row("Company", data.companyName)}
          ${row("Country", data.country)}
          ${row("Contact name", data.contactName)}
          ${row("Email", data.email)}
          ${row("Phone / WhatsApp", data.phone)}
          ${row("Product interest", data.productInterest)}
          ${row("Product / model", data.productNote)}
          ${row("Estimated quantity", data.quantity)}
          ${row("Packaging", data.packaging)}
          ${row("Private label", data.privateLabel)}
          ${row("Target market", data.targetMarket)}
          ${row(isSample ? "Shipping address" : "Destination port", data.destinationPort)}
        </table>
        ${data.message ? `<p style="font-family:sans-serif"><b>Message:</b><br>${escapeHtml(data.message)}</p>` : ""}
      `,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong sending your request. Please try again or email us directly." };
  }
}

export async function submitContactForm(values: ContactFormValues): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Please check the form for errors and try again." };
  }
  const data = parsed.data;

  if (data.companyWebsite) {
    return { success: true };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(`Contact form submission from ${data.name} could not be emailed: RESEND_API_KEY is not set.`);
    return { success: false, error: NOT_CONFIGURED_ERROR };
  }

  if (await isRateLimited()) {
    return { success: false, error: "Too many submissions from your network right now. Please try again in a few minutes or email us directly." };
  }

  try {
    await getResend().emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `Website contact form — ${data.name}`,
      html: `
        <h2 style="font-family:sans-serif">New contact form message</h2>
        <table style="border-collapse:collapse;font-family:sans-serif">
          ${row("Name", data.name)}
          ${row("Email", data.email)}
          ${row("Company", data.company)}
        </table>
        <p style="font-family:sans-serif"><b>Message:</b><br>${escapeHtml(data.message)}</p>
      `,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong sending your message. Please try again or email us directly." };
  }
}
