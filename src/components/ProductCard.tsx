import Link from "next/link";
import { SanityImage } from "@/components/SanityImage";
import type { Product } from "@/lib/types";

export function ProductCard({ product, dark = false }: { product: Product; dark?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-[18px] border border-border-3 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-24px_rgba(31,41,55,0.35)]"
    >
      <div className="relative h-[210px]">
        <SanityImage image={product.images?.[0]} alt={product.name} sizes="(min-width: 1024px) 25vw, 50vw" />
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-pink px-[11px] py-[5px] text-[11px] font-bold text-ink">
            {product.tag}
          </span>
        )}
      </div>
      <div className={dark ? "bg-bg p-5" : "p-5"}>
        <div className="text-xs font-semibold tracking-wide text-brown-light">{product.category?.name}</div>
        <div className="mt-1 font-heading text-[17px] font-bold text-ink">{product.name}</div>
        <div className="mt-2 flex items-center justify-between border-t border-slot pt-2.5 text-[13px]">
          <span className="text-muted-2">MOQ {product.moq}</span>
          <span className="font-bold text-ink opacity-0 transition-opacity group-hover:opacity-100">Details &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
