import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SanityImage } from "@/components/SanityImage";
import { LinkButton } from "@/components/ui/Button";
import { CATALOG } from "@/lib/copy";
import { getCategories } from "@/lib/queries";

export const metadata: Metadata = {
  title: CATALOG.metaTitle,
  description: CATALOG.metaDescription,
  alternates: { canonical: "/catalog" },
};

export default async function CatalogPage() {
  const categories = await getCategories();

  return (
    <main>
      <section className="mx-auto max-w-[1000px] px-[18px] py-16 pb-20 text-center sm:px-8 lg:py-[70px]">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Catalog Download" }]} />
        <h1 className="font-heading text-[30px] font-extrabold tracking-tight sm:text-[38px]">{CATALOG.title}</h1>
        <p className="mx-auto mt-3.5 max-w-[520px] text-base text-muted">{CATALOG.lead}</p>
        <div className="relative mx-auto mt-9 h-[290px] w-[220px] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(31,41,55,0.4)]">
          <SanityImage image={undefined} alt={CATALOG.coverAlt} sizes="220px" />
        </div>
        {/* Until a real PDF is uploaded (see CATALOG.pdfUrl in src/lib/copy.ts),
            buyers are sent to the quote form instead of a dead download button. */}
        {CATALOG.pdfUrl ? (
          <a
            href={CATALOG.pdfUrl}
            download
            className="mt-9 inline-block rounded-full bg-ink px-[34px] py-[17px] text-base font-bold text-bg transition-colors hover:bg-pink hover:text-ink"
          >
            {CATALOG.downloadButton}
          </a>
        ) : (
          <div className="mt-9">
            <LinkButton href="/quote" size="lg">
              {CATALOG.requestButton}
            </LinkButton>
          </div>
        )}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <span key={c._id} className="rounded-full border border-border-5 px-4 py-2 text-[13px] font-semibold text-muted">
              {c.name}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
