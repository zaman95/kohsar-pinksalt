import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LinkButton } from "@/components/ui/Button";
import { JsonLdScript, faqJsonLd } from "@/lib/jsonld";
import { getFaqs } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "MOQs, samples, payment terms, Incoterms, lead times, private label minimums and export documentation — answered.",
  alternates: { canonical: "/faq" },
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <main>
      {faqs.length > 0 && <JsonLdScript data={faqJsonLd(faqs)} />}
      <section className="mx-auto max-w-[860px] px-[18px] py-11 pb-20 sm:px-8">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <h1 className="font-heading text-[30px] font-extrabold tracking-tight sm:text-[38px]">Frequently asked questions</h1>
        <FaqAccordion faqs={faqs} />
        <div className="mt-11 text-center">
          <p className="text-[15px] text-muted-2">Still have questions?</p>
          <LinkButton href="/contact" className="mt-3.5">
            Contact our export team &rarr;
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
