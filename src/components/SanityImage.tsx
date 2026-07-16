import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { cn } from "@/lib/utils";
import type { SanityImageRef } from "@/lib/types";

type SanityImageProps = {
  image?: SanityImageRef | null;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  /** Local /public fallback (e.g. from lib/stockImages.ts) used until a real Sanity image is uploaded. */
  fallbackSrc?: string;
};

/**
 * Renders a Sanity-hosted image via next/image when one is set. Otherwise
 * falls back to a local stock photo if one is provided, or a branded
 * gradient placeholder as a last resort — lets pages ship today and pick up
 * real photography the moment it's added in Studio.
 */
export function SanityImage({ image, alt, className, sizes = "100vw", priority, fill = true, fallbackSrc }: SanityImageProps) {
  if (image?.asset) {
    const url = urlFor(image).width(1600).fit("max").auto("format").url();
    return <Image src={url} alt={alt} fill={fill} sizes={sizes} priority={priority} className={cn("object-cover", className)} />;
  }

  if (fallbackSrc) {
    return <Image src={fallbackSrc} alt={alt} fill={fill} sizes={sizes} priority={priority} className={cn("object-cover", className)} />;
  }

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center overflow-hidden bg-slot text-center text-brown-lighter",
        className
      )}
      aria-hidden={!!alt}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(233,183,165,0.55), transparent 55%), radial-gradient(circle at 75% 70%, rgba(176,122,99,0.28), transparent 50%)",
        }}
      />
      <span className="relative z-10 px-4 text-[12.5px] font-semibold">{alt}</span>
    </div>
  );
}
