import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { LinkButton } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/copy";
import { getCategories, getProducts } from "@/lib/queries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: PRODUCTS.metaTitle,
  description: PRODUCTS.metaDescription,
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
          <h1 className="font-heading text-[32px] font-extrabold tracking-tight text-bg sm:text-[46px]">{PRODUCTS.title}</h1>
          <p className="mt-3.5 max-w-[560px] text-[17px] text-[#C6CFDA]">{PRODUCTS.lead}</p>
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
            {PRODUCTS.filterAll}
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
        {filtered.length === 0 && <p className="text-muted">{PRODUCTS.emptyCategory}</p>}
      </section>

      <section className="mx-auto max-w-[1240px] px-[18px] pb-20 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[24px] bg-alt px-6 py-10 sm:px-12">
          <div>
            <h3 className="font-heading text-[24px] font-extrabold tracking-tight sm:text-[28px]">{PRODUCTS.customCta.title}</h3>
            <p className="mt-2 text-base text-[#6B5A4E]">{PRODUCTS.customCta.lead}</p>
          </div>
          <LinkButton href="/quote">{PRODUCTS.customCta.button}</LinkButton>
        </div>
      </section>
    </main>
  );
}
