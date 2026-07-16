import Link from "next/link";
import { SanityImage } from "@/components/SanityImage";
import { CATEGORY_STOCK } from "@/lib/stockImages";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="block overflow-hidden rounded-[18px] border border-border-4 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(31,41,55,0.35)]"
    >
      <div className="relative h-[150px]">
        <SanityImage
          image={category.image}
          alt={category.name}
          sizes="(min-width: 1024px) 25vw, 50vw"
          fallbackSrc={CATEGORY_STOCK[category.slug]}
        />
      </div>
      <div className="p-5">
        <div className="font-heading text-[17px] font-bold text-ink">{category.name}</div>
        <div className="mt-1 text-[13px] text-brown-lighter">{category.blurb}</div>
      </div>
    </Link>
  );
}
