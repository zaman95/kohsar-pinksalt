import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SanityImage } from "@/components/SanityImage";
import { BLOG } from "@/lib/copy";
import { JsonLdScript, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/queries";
import { BLOG_STOCK } from "@/lib/stockImages";
import { formatMonthYear } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug, 3);
  const path = `/blog/${slug}`;

  return (
    <main>
      <JsonLdScript data={articleJsonLd(post, path)} />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />

      <article className="mx-auto max-w-[820px] px-[18px] pt-11 sm:px-8">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} />
        <div className="text-xs font-bold tracking-wide text-brown">
          {post.category} &middot; {formatMonthYear(post.publishedAt)}
        </div>
        <h1 className="mt-2.5 font-heading text-[28px] leading-tight font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>
        <div className="relative mt-7 h-[220px] overflow-hidden rounded-2xl sm:h-[340px]">
          <SanityImage
            image={post.coverImage}
            alt={post.title}
            priority
            fallbackSrc={BLOG_STOCK[post.slug]}
            sizes="(min-width: 820px) 820px, 100vw"
          />
        </div>
        <div className="mt-8 flex flex-col gap-5 text-[17px] text-[#3B4452] [&_p]:leading-relaxed">
          {post.body && <PortableText value={post.body} />}
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1240px] px-[18px] py-[70px] pb-20 sm:px-8">
          <h2 className="mb-5.5 font-heading text-2xl font-extrabold tracking-tight">{BLOG.relatedTitle}</h2>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p._id} href={`/blog/${p.slug}`} className="block overflow-hidden rounded-2xl border border-border-3 bg-white">
                <div className="relative h-[150px] bg-slot">
                  <SanityImage
                    image={p.coverImage}
                    alt={p.title}
                    fallbackSrc={BLOG_STOCK[p.slug]}
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="p-4.5">
                  <div className="font-heading text-[15px] font-bold">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
