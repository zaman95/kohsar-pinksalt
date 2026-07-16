import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { CONTAINER_GUIDE, INCOTERMS, REGIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Export & Shipping",
  description: "Container-ready logistics, worldwide — sea and air freight from Karachi Port with full export documentation to 80+ countries.",
  alternates: { canonical: "/export" },
};

export default function ExportPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Export & Shipping" }]}
        title="Container-ready logistics, worldwide"
        lead="Sea and air freight from Karachi Port with full export documentation, to 80+ countries."
        maxWidth="max-w-[680px]"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-8 sm:px-8">
        <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Container Loading Guide</span>
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
          <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Incoterms Supported</span>
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
          <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Countries We Export To</span>
          <div className="mt-5.5 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-8">
            {REGIONS.map((r) => (
              <div key={r} className="rounded-xl bg-alt p-3.5 text-center text-[13.5px] font-bold">
                {r}
              </div>
            ))}
          </div>
          <div className="mt-[50px] flex flex-wrap items-center justify-between gap-6 rounded-[22px] bg-ink px-7 py-11 sm:px-[50px]">
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-bg sm:text-[26px]">Not seeing your country?</h3>
              <p className="mt-2 text-[15px] text-[#C6CFDA]">We ship to non-listed destinations regularly — ask us directly.</p>
            </div>
            <LinkButton href="/quote" variant="pink">
              Check shipping to my country &rarr;
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
