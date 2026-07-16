import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SanityImage } from "@/components/SanityImage";
import { getPosts } from "@/lib/queries";
import { BLOG_STOCK } from "@/lib/stockImages";
import { formatMonthYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Import Guides & Wholesale Insights",
  description: "Import guides and wholesale insights for buyers sourcing Himalayan pink salt products — MOQs, container loading, private label and more.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <PageHero crumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]} title="Import guides & wholesale insights" maxWidth="max-w-none" />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-6.5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p._id}
              href={`/blog/${p.slug}`}
              className="block overflow-hidden rounded-[18px] border border-border-3 bg-white transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-[180px] bg-slot">
                <SanityImage
                  image={p.coverImage}
                  alt={p.title}
                  fallbackSrc={BLOG_STOCK[p.slug]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5.5">
                <div className="text-xs font-bold tracking-wide text-brown-light">
                  {p.category} &middot; {formatMonthYear(p.publishedAt)}
                </div>
                <div className="mt-2 font-heading text-lg leading-snug font-bold">{p.title}</div>
                <div className="mt-2.5 text-sm text-muted-2">{p.excerpt}</div>
              </div>
            </Link>
          ))}
        </div>
        {posts.length === 0 && <p className="text-muted">No posts published yet — check back soon.</p>}
      </section>
    </main>
  );
}
