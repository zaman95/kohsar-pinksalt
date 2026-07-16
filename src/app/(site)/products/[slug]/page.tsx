import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductTabs } from "@/components/ProductTabs";
import { LinkButton } from "@/components/ui/Button";
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
    { k: "Material", v: "100% natural Himalayan pink salt (Khewra range)" },
    { k: "Available sizes", v: product.sizes?.join(", ") || "Contact us for sizing" },
    { k: "Colour grade", v: "Light pink to deep amber, sortable to spec" },
    { k: "Moisture", v: "< 0.5% — kiln-dried and stabilised" },
    { k: "Customization", v: "Logo engraving, base finish, plug standard, dimmer" },
    { k: "Private label", v: "Available — artwork, barcode & retail box to your brand" },
  ];
  const pack = [
    { k: "Inner packaging", v: "Bubble wrap + individual white/brown box" },
    { k: "Master carton", v: "5-ply export carton, 6–12 pcs per carton" },
    { k: "Carton marking", v: "Neutral or your brand & shipping marks" },
    { k: "Palletisation", v: "Shrink-wrapped, corner-protected, ISPM-15 pallets" },
    { k: "Gift packaging", v: "Optional retail-ready gift box & sleeve" },
    { k: "Labelling", v: "Multilingual, compliant with destination market" },
  ];
  const ship = [
    { k: "MOQ", v: product.moq },
    { k: "Container load", v: "20ft ≈ 22–24 MT · 40ft ≈ 26–28 MT (product dependent)" },
    { k: "Lead time", v: "18–28 days after sample & PI approval" },
    { k: "Incoterms", v: "FOB Karachi, CIF, CFR, DDP" },
    { k: "Freight", v: "Sea (LCL/FCL) & air freight arranged" },
    { k: "Documents", v: "CI, packing list, CoO, phytosanitary, HS code included" },
  ];

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
              <span className="text-[13px] font-semibold text-brown-lighter">Bulk pricing</span>
              <span className="font-heading text-2xl font-extrabold text-ink">{product.priceRange || "Ask for quote"}</span>
            </div>
            <div className="mt-1.5 text-[13px] text-muted-2">
              Final price depends on volume, spec &amp; Incoterm. Request a quote for a formal offer.
            </div>
            <div className="mt-[18px] flex gap-3">
              <LinkButton href="/quote" className="flex-1 justify-center !py-[15px]">
                Request Quote
              </LinkButton>
              <LinkButton href="/quote" variant="pink" className="flex-1 justify-center !py-[15px]">
                Request Sample
              </LinkButton>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3.5">
            {[
              { k: "MOQ", v: product.moq },
              { k: "Lead time", v: "18–28 days" },
              { k: "Packaging", v: "Bulk / retail / custom" },
              { k: "Private label", v: "Available" },
            ].map((q) => (
              <div key={q.k} className="rounded-[14px] border border-border-3 bg-card p-4.5">
                <div className="text-xs font-semibold text-brown-lighter">{q.k}</div>
                <div className="mt-1 text-[15px] font-bold text-ink">{q.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductTabs specs={specs} pack={pack} ship={ship} />

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-heading text-[26px] font-extrabold tracking-tight">Related products</h2>
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
