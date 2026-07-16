import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { SanityImage } from "@/components/SanityImage";
import type { SanityImageRef } from "@/lib/types";

export function ImageHero({
  crumbs,
  title,
  image,
  imageAlt,
  height = "h-[340px]",
}: {
  crumbs: Crumb[];
  title: string;
  image?: SanityImageRef | null;
  imageAlt: string;
  height?: string;
}) {
  return (
    <section className={`relative overflow-hidden ${height}`}>
      <SanityImage image={image} alt={imageAlt} />
      <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/50 to-ink/20" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1240px] flex-col justify-center px-[18px] sm:px-8">
        <Breadcrumb items={crumbs} light />
        <h1 className="max-w-[720px] font-heading text-[28px] font-extrabold tracking-tight text-bg sm:text-4xl lg:text-[44px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
