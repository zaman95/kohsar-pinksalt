import type { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { SanityImage } from "@/components/SanityImage";
import { LinkButton } from "@/components/ui/Button";
import { COMPANY, LEADERSHIP, STATS } from "@/lib/constants";
import { STOCK } from "@/lib/stockImages";

export const metadata: Metadata = {
  title: "About Us",
  description: "Two decades exporting the salt of the Himalayas — Kohsar Saltworks' story, mission, vision and leadership team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <ImageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        title="Two decades exporting the salt of the Himalayas"
        imageAlt="Founders / workshop portrait"
        height="h-[380px]"
        fallbackSrc={STOCK.workshop}
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Our Story</span>
            <p className="mt-4 text-[17px] text-[#3B4452]">
              Founded in {COMPANY.founded} near the Khewra Salt Range, Kohsar began as a small family workshop supplying regional
              traders. Today we run a vertically integrated facility — mining liaison, hand-carving workshops, an edible-grade
              processing line and an export packing hall — serving wholesale buyers in over 80 countries.
            </p>
            <p className="mt-4 text-[17px] text-[#3B4452]">
              We still hand-finish every decorative piece the way our founders did, but pair that craft with the certifications,
              documentation and lead-time discipline that global import teams require.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-[18px] bg-alt p-6.5">
              <div className="text-xs font-bold tracking-[0.1em] text-brown uppercase">Mission</div>
              <p className="mt-2.5 text-[15px] text-[#3B4452]">
                Make premium Himalayan salt products accessible to import partners through reliable supply, honest documentation
                and fair pricing.
              </p>
            </div>
            <div className="rounded-[18px] bg-alt p-6.5">
              <div className="text-xs font-bold tracking-[0.1em] text-brown uppercase">Vision</div>
              <p className="mt-2.5 text-[15px] text-[#3B4452]">
                To be the export partner global brands trust first when sourcing Himalayan salt — on quality, compliance and
                speed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-t-2 border-pink pt-4">
              <div className="font-heading text-[30px] font-extrabold tracking-tight sm:text-[34px]">{s.value}</div>
              <div className="mt-1.5 text-[13.5px] text-brown-lighter">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Leadership</span>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {LEADERSHIP.map((l) => (
              <div key={l.name}>
                <div className="relative h-[200px] overflow-hidden rounded-2xl">
                  <SanityImage image={undefined} alt={`Portrait — ${l.role}`} sizes="(min-width: 640px) 33vw, 100vw" />
                </div>
                <div className="mt-3 font-bold">{l.name}</div>
                <div className="text-[13px] text-brown-lighter">{l.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <LinkButton href="/facility">Tour our facility &rarr;</LinkButton>
          <LinkButton href="/why-pakistan" variant="ghost-dark">
            Why source from Pakistan &rarr;
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
