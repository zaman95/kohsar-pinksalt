import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductTabs } from "@/components/ProductTabs";
import { LinkButton } from "@/components/ui/Button";
import { PRODUCT_DETAIL } from "@/lib/copy";
import { JsonLdScript, breadcrumbJsonLd, productJsonLd } from "@/lib/jsonld";
import { getAllProductSlugs, getProductBySlug, getRelatedProducts } from "@/lib/queries";

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.seoDescription || product.description,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(slug, 4);
  const path = `/products/${slug}`;

  const specs = [
    ...PRODUCT_DETAIL.specs.slice(0, 1),
    { k: PRODUCT_DETAIL.sizesLabel, v: product.sizes?.join(", ") || PRODUCT_DETAIL.sizesFallback },
    ...PRODUCT_DETAIL.specs.slice(1),
  ];
  const ship = [{ k: "MOQ", v: product.moq ?? "On request" }, ...PRODUCT_DETAIL.ship];

  return (
    <main className="mx-auto max-w-[1240px] px-[18px] py-8 sm:px-8 lg:pb-[90px]">
      <JsonLdScript data={productJsonLd(product, path)} />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path },
        ])}
      />

      <Breadcrumb items={[{ name: "Products", href: "/products" }, { name: product.name }]} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <ProductGallery images={product.images ?? []} name={product.name} slug={product.slug} tag={product.tag} />

        <div>
          <div className="text-[13px] font-semibold tracking-wide text-brown-light">{product.category?.name}</div>
          <h1 className="mt-2 font-heading text-[30px] leading-tight font-extrabold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-[16.5px] text-muted">{product.description}</p>

          <div className="mt-6 rounded-[18px] border border-border-3 bg-white p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] font-semibold text-brown-lighter">{PRODUCT_DETAIL.bulkPricingLabel}</span>
              <span className="font-heading text-2xl font-extrabold text-ink">{product.priceRange || PRODUCT_DETAIL.askForQuote}</span>
            </div>
            <div className="mt-1.5 text-[13px] text-muted-2">{PRODUCT_DETAIL.priceNote}</div>
            <div className="mt-[18px] flex gap-3">
              <LinkButton href="/quote" className="flex-1 justify-center !py-[15px]">
                {PRODUCT_DETAIL.requestQuote}
              </LinkButton>
              <LinkButton href="/quote" variant="pink" className="flex-1 justify-center !py-[15px]">
                {PRODUCT_DETAIL.requestSample}
              </LinkButton>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3.5">
            {[
              { k: "MOQ", v: product.moq },
              { k: "Lead time", v: PRODUCT_DETAIL.quickFacts.leadTime },
              { k: "Packaging", v: PRODUCT_DETAIL.quickFacts.packaging },
              { k: "Private label", v: PRODUCT_DETAIL.quickFacts.privateLabel },
            ].map((q) => (
              <div key={q.k} className="rounded-[14px] border border-border-3 bg-card p-4.5">
                <div className="text-xs font-semibold text-brown-lighter">{q.k}</div>
                <div className="mt-1 text-[15px] font-bold text-ink">{q.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductTabs specs={specs} pack={[...PRODUCT_DETAIL.pack]} ship={ship} />

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-heading text-[26px] font-extrabold tracking-tight">{PRODUCT_DETAIL.relatedTitle}</h2>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
