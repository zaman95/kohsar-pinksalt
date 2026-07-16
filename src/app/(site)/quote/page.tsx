import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { QUOTE_TRUST } from "@/lib/constants";
import { getCategories, getCertifications, getSiteSettings } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Request a Wholesale Quote",
  description:
    "Tell us what you need — pricing, samples and lead times for Himalayan pink salt products, delivered within one business day.",
  alternates: { canonical: "/quote" },
};

export default async function QuotePage() {
  const [categories, certifications, settings] = await Promise.all([getCategories(), getCertifications(), getSiteSettings()]);

  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-[18px] py-11 sm:px-8 lg:pb-[90px]">
        <Breadcrumb items={[{ name: "Request a Quote" }]} />
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[24px] border border-border-3 bg-white p-7 shadow-[0_24px_60px_-40px_rgba(31,41,55,0.35)] sm:p-11">
            <h1 className="font-heading text-[28px] font-extrabold tracking-tight sm:text-[34px]">Request a Wholesale Quote</h1>
            <p className="mt-2.5 text-[15.5px] text-muted-2">
              Tell us what you need. Our export team replies within one business day with pricing, samples and lead times.
            </p>
            <QuoteForm categories={categories} />
          </div>

          <aside className="lg:sticky lg:top-[100px]">
            <div className="rounded-[22px] bg-ink px-8 py-8 text-bg">
              <h3 className="font-heading text-[22px] font-extrabold">Why buyers choose Kohsar</h3>
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
                <div className="text-xs font-semibold tracking-[0.1em] text-[#93A0B0] uppercase">Prefer to talk?</div>
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
