import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { PROCESS, WHOLESALE_STEPS } from "@/lib/copy";

export const metadata: Metadata = {
  title: PROCESS.metaTitle,
  description: PROCESS.metaDescription,
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Wholesale Process" }]}
        title={PROCESS.heroTitle}
        maxWidth="max-w-none"
      />

      <section className="mx-auto max-w-[900px] px-[18px] py-14 pb-20 sm:px-8">
        {WHOLESALE_STEPS.map((p) => (
          <div key={p.n} className="grid grid-cols-[50px_1fr] items-start gap-4 border-b border-border-3 py-6 sm:grid-cols-[70px_1fr_110px] sm:gap-5">
            <div className="font-heading text-2xl font-extrabold text-pink">{p.n}</div>
            <div>
              <div className="text-[17px] font-bold">{p.t}</div>
              <div className="mt-1.5 text-[14.5px] text-muted-2">{p.d}</div>
            </div>
            <div className="col-span-2 text-[13px] font-bold text-brown-lighter sm:col-span-1 sm:text-right">{p.dur}</div>
          </div>
        ))}
        <div className="mt-12 text-center">
          <LinkButton href="/quote">{PROCESS.cta}</LinkButton>
        </div>
      </section>
    </main>
  );
}
