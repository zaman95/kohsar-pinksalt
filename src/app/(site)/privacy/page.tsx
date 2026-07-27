import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kohsar Saltworks handles the information you share through this website.",
  alternates: { canonical: "/privacy" },
};

// TODO(owner): have this reviewed before relying on it — it describes what
// the site actually does today (inquiry forms + optional analytics), but it
// is not legal advice.
const SECTIONS = [
  {
    title: "What we collect",
    body: `When you submit our quote or contact form, we receive the details you enter — such as your name, company, email, phone or WhatsApp number, and your inquiry. We do not collect payment information through this website.`,
  },
  {
    title: "How we use it",
    body: `Form submissions are emailed to our export team and used solely to respond to your inquiry and manage a potential business relationship. We do not sell or rent your information to anyone.`,
  },
  {
    title: "Analytics",
    body: `We may use Google Analytics and Microsoft Clarity to understand how visitors use the site (pages visited, approximate location, device type). These tools may set cookies. No form contents are shared with analytics providers.`,
  },
  {
    title: "Data retention",
    body: `Inquiry emails are kept for as long as needed to serve the business relationship. You may ask us to delete your inquiry data at any time.`,
  },
  {
    title: "Contact",
    body: `For any privacy question or deletion request, email ${COMPANY.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} title="Privacy Policy" maxWidth="max-w-none" />
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
