import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SanityImage } from "@/components/SanityImage";
import { LinkButton } from "@/components/ui/Button";
import { FACILITY_AREAS, FACILITY_STATS } from "@/lib/constants";
import { STOCK } from "@/lib/stockImages";

const FACILITY_STOCK: Record<string, string> = {
  "Mining & Sorting": STOCK.mining,
  Handcrafting: STOCK.workshop,
  "Edible Processing": STOCK.edibleSalt,
  "Quality Lab": STOCK.qualityLab,
  "Export Packing": STOCK.exportPacking,
  Warehouse: STOCK.warehouse,
};

export const metadata: Metadata = {
  title: "Manufacturing Facility",
  description: "A 40,000 sq ft facility housing carving workshops, an edible-grade processing line, quality labs and export packing.",
  alternates: { canonical: "/facility" },
};

export default function FacilityPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Manufacturing Facility" }]}
        title="Mine to container, under one roof"
        lead="A 40,000 sq ft facility near the Khewra Industrial Zone housing carving workshops, an edible-grade processing line, quality labs and export packing."
        maxWidth="max-w-[640px]"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] sm:px-8">
        <div className="mt-11 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {FACILITY_STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-alt p-[22px]">
              <div className="font-heading text-[26px] font-extrabold sm:text-[28px]">{s.value}</div>
              <div className="mt-1.5 text-[13px] text-brown-lighter">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-[70px]">
        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITY_AREAS.map((a) => (
            <div key={a.title}>
              <div className="relative h-[210px] overflow-hidden rounded-2xl">
                <SanityImage
                  image={undefined}
                  alt={a.ph}
                  fallbackSrc={FACILITY_STOCK[a.title]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="mt-3 font-bold">{a.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[22px] bg-ink px-7 py-11 sm:px-[50px]">
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-bg sm:text-[26px]">Want a live factory audit?</h3>
            <p className="mt-2 text-[15px] text-[#C6CFDA]">We host video walkthroughs for serious buyers before large orders.</p>
          </div>
          <LinkButton href="/quote" variant="pink">
            Request a factory audit &rarr;
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
