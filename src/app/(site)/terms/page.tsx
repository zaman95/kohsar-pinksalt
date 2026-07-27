import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Kohsar Saltworks website and the information published on it.",
  alternates: { canonical: "/terms" },
};

// TODO(owner): have this reviewed before relying on it — it is a sensible
// default for a B2B export site, but it is not legal advice.
const SECTIONS = [
  {
    title: "Information, not an offer",
    body: `Product specifications, price ranges, MOQs and lead times shown on this website are indicative only and do not constitute a binding offer. Binding terms are established exclusively in a written proforma invoice or sales contract issued by ${COMPANY.legalName}.`,
  },
  {
    title: "Quotes and samples",
    body: `Quotations are valid for the period stated on the quotation document. Samples may be chargeable and are provided for evaluation only.`,
  },
  {
    title: "Accuracy",
    body: `We work to keep the information on this site accurate and current, but natural products vary and specifications may change; final specifications are confirmed per order.`,
  },
  {
    title: "Intellectual property",
    body: `The content of this website (text, images, branding) belongs to ${COMPANY.legalName} or its licensors and may not be reproduced without permission.`,
  },
  {
    title: "Governing law",
    body: `These terms are governed by the laws of Pakistan. Contract-specific terms, including dispute resolution, are set out in each sales contract.`,
  },
  {
    title: "Contact",
    body: `Questions about these terms: ${COMPANY.email}.`,
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero crumbs={[{ name: "Home", href: "/" }, { name: "Terms of Use" }]} title="Terms of Use" maxWidth="max-w-none" />
      <section className="mx-auto max-w-[820px] px-[18px] py-14 pb-20 sm:px-8">
        {SECTIONS.map((s) => (
          <div key={s.title} className="mb-8">
            <h2 className="font-heading text-xl font-extrabold">{s.title}</h2>
            <p className="mt-2.5 text-[15.5px] leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
