import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { CONTAINER_GUIDE, EXPORT, INCOTERMS, REGIONS } from "@/lib/copy";

export const metadata: Metadata = {
  title: EXPORT.metaTitle,
  description: EXPORT.metaDescription,
  alternates: { canonical: "/export" },
};

export default function ExportPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Export & Shipping" }]}
        title={EXPORT.heroTitle}
        lead={EXPORT.heroLead}
        maxWidth="max-w-[680px]"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-8 sm:px-8">
        <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">{EXPORT.containerEyebrow}</span>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTAINER_GUIDE.map((s) => (
            <div key={s.k} className="rounded-[18px] border border-border-3 bg-white p-6.5">
              <div className="text-xs font-bold text-brown-lighter">{s.k}</div>
              <div className="mt-2 font-heading text-2xl font-extrabold">{s.v}</div>
              <div className="mt-2 text-[13px] text-muted-2">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[18px] py-9 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">{EXPORT.incotermsEyebrow}</span>
          <div className="mt-5 flex flex-wrap gap-3">
            {INCOTERMS.map((t) => (
              <span key={t} className="rounded-full border border-border-5 px-4.5 py-2.5 text-[13.5px] font-bold text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[18px] py-9 pb-20 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">{EXPORT.countriesEyebrow}</span>
          <div className="mt-5.5 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-8">
            {REGIONS.map((r) => (
              <div key={r} className="rounded-xl bg-alt p-3.5 text-center text-[13.5px] font-bold">
                {r}
              </div>
            ))}
          </div>
          <div className="mt-[50px] flex flex-wrap items-center justify-between gap-6 rounded-[22px] bg-ink px-7 py-11 sm:px-[50px]">
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-bg sm:text-[26px]">{EXPORT.notListed.title}</h3>
              <p className="mt-2 text-[15px] text-[#C6CFDA]">{EXPORT.notListed.lead}</p>
            </div>
            <LinkButton href="/quote" variant="pink">
              {EXPORT.notListed.button}
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
