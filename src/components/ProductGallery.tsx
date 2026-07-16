"use client";

import { useState } from "react";
import { SanityImage } from "@/components/SanityImage";
import { PRODUCT_STOCK } from "@/lib/stockImages";
import { cn } from "@/lib/utils";
import type { SanityImageRef } from "@/lib/types";

export function ProductGallery({
  images,
  name,
  slug,
  tag,
}: {
  images: SanityImageRef[];
  name: string;
  slug: string;
  tag?: string;
}) {
  const [active, setActive] = useState(0);
  const gallery = images.length > 0 ? images : [undefined];
  const fallbackSrc = PRODUCT_STOCK[slug];

  return (
    <div>
      <div className="relative h-[320px] overflow-hidden rounded-[22px] bg-slot sm:h-[400px] lg:h-[460px]">
        <SanityImage
          image={gallery[active]}
          alt={`${name} — main product photo`}
          priority
          fallbackSrc={fallbackSrc}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        {tag && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-pink px-3 py-1.5 text-[11px] font-bold text-ink">{tag}</span>
        )}
      </div>
      {gallery.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3.5">
          {gallery.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-24 overflow-hidden rounded-[14px] border-2 bg-slot",
                active === i ? "border-pink" : "border-transparent"
              )}
            >
              <SanityImage
                image={img}
                alt={`${name} thumbnail ${i + 1}`}
                fallbackSrc={i === 0 ? fallbackSrc : undefined}
                sizes="25vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
