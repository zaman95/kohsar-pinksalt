import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LinkButton } from "@/components/ui/Button";
import { FAQ } from "@/lib/copy";
import { JsonLdScript, faqJsonLd } from "@/lib/jsonld";
import { getFaqs } from "@/lib/queries";

export const metadata: Metadata = {
  title: FAQ.metaTitle,
  description: FAQ.metaDescription,
  alternates: { canonical: "/faq" },
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <main>
      {faqs.length > 0 && <JsonLdScript data={faqJsonLd(faqs)} />}
      <section className="mx-auto max-w-[860px] px-[18px] py-11 pb-20 sm:px-8">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <h1 className="font-heading text-[30px] font-extrabold tracking-tight sm:text-[38px]">{FAQ.title}</h1>
        <FaqAccordion faqs={faqs} />
        <div className="mt-11 text-center">
          <p className="text-[15px] text-muted-2">{FAQ.stillQuestions}</p>
          <LinkButton href="/contact" className="mt-3.5">
            {FAQ.cta}
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
