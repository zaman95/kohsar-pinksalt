import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { LinkButton } from "@/components/ui/Button";
import { getCategories, getProducts } from "@/lib/queries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Product Catalog",
  description:
    "Wholesale Himalayan pink salt across ten categories — salt lamps, tiles, kitchenware, edible salt, bath salt and more. Every product available for private label and bulk container orders.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: activeCategory } = await searchParams;
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  const filtered = activeCategory ? products.filter((p) => p.category?.slug === activeCategory) : products;

  return (
    <main>
      <section className="bg-ink px-[18px] pt-14 pb-[62px] sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <Breadcrumb items={[{ name: "Products" }]} light />
          <h1 className="font-heading text-[32px] font-extrabold tracking-tight text-bg sm:text-[46px]">Product Catalog</h1>
          <p className="mt-3.5 max-w-[560px] text-[17px] text-[#C6CFDA]">
            Wholesale Himalayan pink salt across ten categories. Every product available for private label and bulk container
            orders.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 sm:px-8">
        <div className="mb-10 flex flex-wrap gap-2.5">
          <LinkButton
            href="/products"
            size="sm"
            variant={!activeCategory ? "dark" : "ghost-dark"}
            className={cn("!px-5 !py-2.5 text-[13.5px]", !activeCategory ? "" : "border-border-4 text-muted")}
          >
            All
          </LinkButton>
          {categories.map((c) => (
            <LinkButton
              key={c._id}
              href={`/products?category=${c.slug}`}
              size="sm"
              variant={activeCategory === c.slug ? "dark" : "ghost-dark"}
              className={cn("!px-5 !py-2.5 text-[13.5px]", activeCategory === c.slug ? "" : "border-border-4 text-muted")}
            >
              {c.name}
            </LinkButton>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
        {filtered.length === 0 && <p className="text-muted">No products in this category yet — check back soon.</p>}
      </section>

      <section className="mx-auto max-w-[1240px] px-[18px] pb-20 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[24px] bg-alt px-6 py-10 sm:px-12">
          <div>
            <h3 className="font-heading text-[24px] font-extrabold tracking-tight sm:text-[28px]">Can&apos;t find what you need?</h3>
            <p className="mt-2 text-base text-[#6B5A4E]">We manufacture custom shapes, sizes and packaging to spec.</p>
          </div>
          <LinkButton href="/quote">Request a custom quote &rarr;</LinkButton>
        </div>
      </section>
    </main>
  );
}
