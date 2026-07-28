import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { QUOTE, QUOTE_TRUST } from "@/lib/copy";
import { getCategories, getCertifications, getProductBySlug, getSiteSettings } from "@/lib/queries";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}): Promise<Metadata> {
  const { type } = await searchParams;
  const isSample = type === "sample";
  return {
    title: isSample ? QUOTE.sampleMetaTitle : QUOTE.metaTitle,
    description: isSample ? QUOTE.sampleMetaDescription : QUOTE.metaDescription,
    alternates: { canonical: "/quote" },
  };
}

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; product?: string }>;
}) {
  const { type, product: productSlug } = await searchParams;
  const isSample = type === "sample";

  const [categories, certifications, settings, product] = await Promise.all([
    getCategories(),
    getCertifications(),
    getSiteSettings(),
    productSlug ? getProductBySlug(productSlug) : Promise.resolve(null),
  ]);

  const defaultProductInterest = product?.category?.name;
  const defaultProductNote = product ? product.name : undefined;

  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-[18px] py-11 sm:px-8 lg:pb-[90px]">
        <Breadcrumb items={[{ name: isSample ? "Request a Sample" : "Request a Quote" }]} />
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[24px] border border-border-3 bg-white p-7 shadow-[0_24px_60px_-40px_rgba(31,41,55,0.35)] sm:p-11">
            <h1 className="font-heading text-[28px] font-extrabold tracking-tight sm:text-[34px]">
              {isSample ? QUOTE.sampleTitle : QUOTE.title}
            </h1>
            <p className="mt-2.5 text-[15.5px] text-muted-2">{isSample ? QUOTE.sampleLead : QUOTE.lead}</p>
            <QuoteForm
              categories={categories}
              type={isSample ? "sample" : "quote"}
              defaultProductInterest={defaultProductInterest}
              defaultProductNote={defaultProductNote}
            />
          </div>

          <aside className="lg:sticky lg:top-[100px]">
            <div className="rounded-[22px] bg-ink px-8 py-8 text-bg">
              <h3 className="font-heading text-[22px] font-extrabold">{QUOTE.asideTitle}</h3>
              <div className="mt-[22px] flex flex-col gap-[18px]">
                {QUOTE_TRUST.map((q) => (
                  <div key={q.t} className="flex items-start gap-3.5">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-none rotate-45 rounded-sm bg-pink" />
                    <div>
                      <div className="text-[14.5px] font-bold">{q.t}</div>
                      <div className="mt-0.5 text-[13px] text-[#A6B1BF]">{q.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-[26px] border-t border-white/10 pt-[22px]">
                <div className="text-xs font-semibold tracking-[0.1em] text-[#93A0B0] uppercase">{QUOTE.preferToTalk}</div>
                <div className="mt-2.5 text-base font-bold">WhatsApp {settings.phone}</div>
                <div className="mt-1 text-sm text-[#C6CFDA]">{settings.email}</div>
              </div>
            </div>
            <div className="mt-[18px] flex flex-wrap gap-2.5">
              {certifications.map((c) => (
                <span key={c._id} className="rounded-full border border-border-4 bg-white px-[13px] py-[7px] text-xs font-bold text-muted">
                  {c.name}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
