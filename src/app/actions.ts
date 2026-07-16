"use server";

import { getResend } from "@/lib/resend";
import { contactFormSchema, quoteFormSchema, type ContactFormValues, type QuoteFormValues } from "@/lib/validations";

export type ActionResult = { success: true } | { success: false; error: string };

const FROM = process.env.RESEND_FROM_EMAIL || "Kohsar Saltworks <onboarding@resend.dev>";
const TO = process.env.SALES_INBOX_EMAIL || "export@kohsarsaltworks.com";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;color:#8A7A6D;font-size:13px;font-weight:600;white-space:nowrap">${escapeHtml(
    label
  )}</td><td style="padding:6px 12px;font-size:14px;color:#1F2937">${escapeHtml(value)}</td></tr>`;
}

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
    console.warn("RESEND_API_KEY is not set — quote form submission was not emailed.", data);
    return { success: true };
  }

  try {
    await getResend().emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `Wholesale quote request — ${data.companyName}`,
      html: `
        <h2 style="font-family:sans-serif">New wholesale quote request</h2>
        <table style="border-collapse:collapse;font-family:sans-serif">
          ${row("Company", data.companyName)}
          ${row("Country", data.country)}
          ${row("Contact name", data.contactName)}
          ${row("Email", data.email)}
          ${row("Phone", data.phone)}
          ${row("WhatsApp", data.whatsapp)}
          ${row("Product interest", data.productInterest)}
          ${row("Estimated quantity", data.quantity)}
          ${row("Packaging", data.packaging)}
          ${row("Private label", data.privateLabel)}
          ${row("Target market", data.targetMarket)}
          ${row("Destination port", data.destinationPort)}
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
    console.warn("RESEND_API_KEY is not set — contact form submission was not emailed.", data);
    return { success: true };
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
