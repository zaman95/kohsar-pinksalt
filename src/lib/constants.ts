/**
 * Site configuration & company contact details.
 * All marketing/page text lives in src/lib/copy.ts — edit wording there.
 */

// Canonical site URL used in metadata, sitemap, robots.txt and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL in production (e.g. https://kohsarsaltworks.com);
// otherwise we fall back to the Vercel deployment URL instead of localhost.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

// TODO(owner): every value below must be real and reachable — buyers verify
// the email domain, call the phone number and look up the address. A contact
// email that bounces is the fastest way to lose a lead.
export const COMPANY = {
  name: "Kohsar Saltworks",
  legalName: "Kohsar Saltworks (Pvt) Ltd.", // TODO(owner): must match your SECP registration exactly
  founded: 2022,
  tagline: "Manufacturer · Exporter · OEM Partner",
  email: "export@kohsarsaltworks.com",
  phone: "+92 345 117 1957",
  whatsapp: "923451171957",
  factoryAddress: "Khewra Industrial Zone, Jhelum, Punjab, Pakistan",
  hours: "Mon–Sat, 9:00–18:00 PKT",
} as const;
