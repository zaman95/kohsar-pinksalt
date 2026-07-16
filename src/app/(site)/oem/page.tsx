import type { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { SanityImage } from "@/components/SanityImage";
import { LinkButton } from "@/components/ui/Button";
import { OEM_PACKAGING, WHOLESALE_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "OEM / Private Label",
  description: "Your brand, manufactured at source — private-label salt lamps, cartons and gift boxes with design, sampling and compliance labelling.",
  alternates: { canonical: "/oem" },
};

export default function OemPage() {
  return (
    <main>
      <ImageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "OEM / Private Label" }]}
        title="Your brand, manufactured at source"
        imageAlt="Branded retail packaging lineup"
        height="h-[340px]"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-8 sm:px-8 lg:pt-20">
        <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">How it works</span>
        <div className="mt-6 grid grid-cols-2 gap-4.5 sm:grid-cols-3 lg:grid-cols-5">
          {WHOLESALE_STEPS.slice(0, 5).map((p) => (
            <div key={p.n} className="border-t-2 border-pink pt-3.5">
              <div className="font-heading text-sm font-extrabold text-brown-mid">{p.n}</div>
              <div className="mt-2 text-[15px] font-bold">{p.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 sm:px-8">
        <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Packaging options</span>
        <div className="mt-6 grid grid-cols-1 gap-5.5 sm:grid-cols-3">
          {OEM_PACKAGING.map((p) => (
            <div key={p.title}>
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <SanityImage image={undefined} alt={p.ph} />
              </div>
              <div className="mt-3 font-bold">{p.title}</div>
              <div className="mt-1 text-[13.5px] text-muted-2">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-20 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[24px] bg-alt px-6 py-11 sm:px-12">
          <div>
            <h3 className="font-heading text-2xl font-extrabold sm:text-[28px]">Typical private-label MOQ: 1,000–2,000 units / SKU</h3>
            <p className="mt-2 text-[15px] text-[#6B5A4E]">
              Covers custom tooling and print run cost. Ask about lower minimums for gift-box-only branding.
            </p>
          </div>
          <LinkButton href="/quote">Start a private-label inquiry &rarr;</LinkButton>
        </div>
      </section>
    </main>
  );
}
