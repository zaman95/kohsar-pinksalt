import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SUSTAINABILITY, SUSTAINABILITY_PAGE } from "@/lib/copy";

export const metadata: Metadata = {
  title: SUSTAINABILITY_PAGE.metaTitle,
  description: SUSTAINABILITY_PAGE.metaDescription,
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Sustainability" }]}
        title={SUSTAINABILITY_PAGE.heroTitle}
        maxWidth="max-w-[680px]"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2">
          {SUSTAINABILITY.map((s) => (
            <div key={s.title} className="rounded-[18px] bg-alt p-7">
              <div className="text-[17px] font-bold">{s.title}</div>
              <p className="mt-2.5 text-[14.5px] text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
