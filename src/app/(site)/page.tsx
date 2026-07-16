import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { SanityImage } from "@/components/SanityImage";
import { STOCK } from "@/lib/stockImages";
import { SectionHeading } from "@/components/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { JsonLdScript, organizationJsonLd } from "@/lib/jsonld";
import { COMPANY, INCOTERMS, OEM_POINTS, PROCESS_STEPS, REGIONS, SHIP_CARDS, STATS } from "@/lib/constants";
import { getCategories, getCertifications, getFeaturedProducts, getTestimonials } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Wholesale Himalayan Pink Salt Manufacturer & Exporter",
  description:
    "Bulk wholesale, private label, and custom manufacturing of Himalayan pink salt products for importers, distributors and brands in 80+ countries. FDA & ISO certified, container-ready.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [categories, featured, testimonials, certifications] = await Promise.all([
    getCategories(),
    getFeaturedProducts(4),
    getTestimonials(),
    getCertifications(),
  ]);

  return (
    <main>
      <JsonLdScript data={organizationJsonLd()} />

      {/* HERO */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <SanityImage image={undefined} alt="Salt lamp glowing in a warm interior" priority fallbackSrc={STOCK.heroLampInterior} />
          <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/60 to-ink/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[18px] py-16 sm:px-8">
          <div className="animate-float-up max-w-[640px]">
            <span className="mb-5 inline-block text-xs font-bold tracking-[0.24em] text-pink uppercase">{COMPANY.tagline}</span>
            <h1 className="font-heading text-[32px] leading-[1.06] font-extrabold tracking-tight text-bg sm:text-5xl lg:text-[58px]">
              Premium Himalayan Pink Salt, straight from the source in Pakistan.
            </h1>
            <p className="mt-[22px] max-w-[520px] text-lg text-[#E7DDD5]">
              Bulk wholesale, private label, and custom manufacturing for importers, distributors and brands in 80+ countries. FDA
              &amp; ISO certified. Container-ready.
            </p>
            <div className="mt-[34px] flex flex-wrap gap-3.5">
              <LinkButton href="/quote" variant="pink" size="lg">
                Request Wholesale Quote &rarr;
              </LinkButton>
              <LinkButton href="/catalog" variant="ghost-light" size="lg">
                Download Catalog
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-ink px-[18px] py-6 sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6">
          <span className="text-xs font-bold tracking-[0.2em] text-footer-muted uppercase">Exporting to 80+ countries</span>
          <div className="flex flex-wrap items-center gap-8">
            {REGIONS.map((r) => (
              <span key={r} className="text-[14.5px] font-semibold text-[#D9DEE6]">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KOHSAR */}
      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-[110px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Why Kohsar</span>
            <h2 className="mt-4 font-heading text-[28px] leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
              A vertically integrated salt house — mine to container.
            </h2>
            <p className="mt-[22px] text-[17px] text-muted">
              We control extraction liaison, hand-carving workshops, an edible-grade processing line and export packing under one
              roof near the Khewra range. That control is why global buyers trust us with private-label programs and repeat
              container orders.
            </p>
            <LinkButton href="/about" variant="link" className="mt-[30px]">
              Our story &amp; facility &rarr;
            </LinkButton>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-[18px] border border-border-2 bg-white p-6 shadow-[0_8px_30px_-18px_rgba(31,41,55,0.18)]">
                <div className="font-heading text-4xl font-extrabold tracking-tight text-ink">{s.value}</div>
                <div className="mt-2 text-sm font-semibold text-brown-lighter">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-alt px-[18px] py-16 sm:px-8 lg:py-[100px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Product Range</span>
              <h2 className="mt-3.5 font-heading text-[28px] font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
                Everything we make from pink salt
              </h2>
            </div>
            <LinkButton href="/products" size="sm">
              View all products &rarr;
            </LinkButton>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c._id} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-[110px]">
        <SectionHeading eyebrow="From Mine to Market" title="A controlled four-stage process" center className="mb-14" />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {PROCESS_STEPS.map((p) => (
            <div key={p.num} className="border-t-2 border-pink pt-3.5">
              <div className="font-heading text-[15px] font-extrabold text-brown-mid">{p.num}</div>
              <h3 className="mt-3 font-heading text-lg font-bold sm:text-xl">{p.title}</h3>
              <p className="mt-2.5 text-[14.5px] text-muted-2">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {featured.length > 0 && (
        <section className="bg-ink px-[18px] py-16 sm:px-8 lg:py-[104px]">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="text-xs font-bold tracking-[0.24em] text-pink uppercase">Best Sellers</span>
                <h2 className="mt-3.5 font-heading text-[28px] font-extrabold tracking-tight text-bg sm:text-4xl lg:text-[42px]">
                  Featured wholesale products
                </h2>
              </div>
              <LinkButton href="/products" variant="ghost-light" size="sm">
                Browse catalog &rarr;
              </LinkButton>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p._id} product={p} dark />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OEM */}
      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-[110px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative h-[300px] overflow-hidden rounded-[22px] lg:h-[420px]">
            <SanityImage
              image={undefined}
              alt="Custom branded packaging"
              fallbackSrc={STOCK.packaging}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">OEM &amp; Private Label</span>
            <h2 className="mt-4 font-heading text-[28px] leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
              Your brand, our factory floor.
            </h2>
            <p className="mt-5 text-[17px] text-muted">
              From logo-engraved lamps to fully retail-ready cartons and gift boxes, we build private-label programs end to end
              — design, sampling, compliance labelling and export.
            </p>
            <div className="mt-[26px] grid grid-cols-2 gap-4">
              {OEM_POINTS.map((o) => (
                <div key={o} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rotate-45 rounded-sm bg-pink" />
                  <span className="text-[15px] font-semibold text-ink">{o}</span>
                </div>
              ))}
            </div>
            <LinkButton href="/quote" className="mt-[30px]">
              Start a private-label inquiry &rarr;
            </LinkButton>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      {certifications.length > 0 && (
        <section className="bg-alt px-[18px] py-16 sm:px-8 lg:py-[90px]">
          <div className="mx-auto max-w-[1240px] text-center">
            <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Certified &amp; Compliant</span>
            <h2 className="mt-3.5 mb-9 font-heading text-[26px] font-extrabold tracking-tight sm:text-4xl">
              Quality documented at every step
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((c) => (
                <div key={c._id} className="min-w-[150px] rounded-[14px] bg-white px-7 py-5">
                  <div className="font-heading text-[22px] font-extrabold text-ink">{c.name}</div>
                  <div className="mt-1.5 text-xs font-semibold tracking-wide text-brown-light">{c.shortDesc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXPORT */}
      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-[110px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <span className="text-xs font-bold tracking-[0.24em] text-brown uppercase">Export &amp; Logistics</span>
            <h2 className="mt-4 font-heading text-[28px] leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
              Container-ready, worldwide.
            </h2>
            <p className="mt-5 text-[17px] text-muted">
              Sea and air freight from Karachi Port with full export documentation — commercial invoice, packing list,
              phytosanitary and CoO. FOB, CIF, CFR and DDP terms supported.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-3">
              {INCOTERMS.map((t) => (
                <span key={t} className="rounded-full border border-border-5 px-[18px] py-2 text-[13px] font-bold text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4.5">
            {SHIP_CARDS.map((s) => (
              <div key={s.k} className="rounded-[18px] border border-border-2 bg-white p-6 shadow-[0_10px_34px_-22px_rgba(31,41,55,0.25)]">
                <div className="font-heading text-sm font-extrabold text-brown-mid">{s.k}</div>
                <div className="mt-2 font-heading text-[28px] font-extrabold">{s.v}</div>
                <div className="mt-2 text-[13.5px] text-muted-2">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="bg-ink px-[18px] py-16 sm:px-8 lg:py-[104px]">
          <div className="mx-auto max-w-[1240px]">
            <span className="text-xs font-bold tracking-[0.24em] text-pink uppercase">Trusted by buyers worldwide</span>
            <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t._id} className="rounded-[20px] border border-white/10 bg-white/5 p-8">
                  <p className="text-base leading-relaxed text-[#EDE4DC]">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-10 w-10 flex-none rounded-full bg-pink" />
                    <div>
                      <div className="text-sm font-bold text-bg">{t.name}</div>
                      <div className="text-[12.5px] text-[#93A0B0]">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="mx-auto max-w-[1240px] px-[18px] py-16 sm:px-8 lg:py-[110px]">
        <div className="rounded-[28px] bg-pink px-6 py-14 text-center sm:px-12 lg:py-[70px]">
          <h2 className="mx-auto max-w-[720px] font-heading text-[28px] leading-[1.06] font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[46px]">
            Ready to source Himalayan salt at scale?
          </h2>
          <p className="mx-auto mt-4.5 max-w-[560px] text-lg text-[#5A3E31]">
            Send us your requirement — we reply with pricing, samples and lead times within one business day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <LinkButton href="/quote" size="lg">
              Request a Quote
            </LinkButton>
            <LinkButton href="/products" variant="ghost-dark" size="lg">
              Browse products
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
