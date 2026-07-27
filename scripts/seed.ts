/**
 * One-time content migration: pushes the site's original copy (categories,
 * products, blog posts, FAQs, certifications, testimonials, site settings)
 * into Sanity so the studio starts populated instead of empty.
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and
 * SANITY_API_WRITE_TOKEN (Editor permission) in .env.local. Safe to re-run —
 * every document uses a deterministic _id and is upserted with createOrReplace.
 *
 * Usage: npm run seed
 */
import { FALLBACK_CATEGORIES, FALLBACK_CERTIFICATIONS, FALLBACK_FAQS, FALLBACK_POSTS, FALLBACK_PRODUCTS, FALLBACK_TESTIMONIALS } from "@/lib/fallbackContent";
import { BlogPost, Category, Certification, Faq, Product, Testimonial } from "@/lib/types";
import { config } from "dotenv";

config({ path: ".env.local" });

const categories: Category[] = FALLBACK_CATEGORIES

const products: Product[] = FALLBACK_PRODUCTS

const posts: BlogPost[] = FALLBACK_POSTS

const faqs: Faq[] = FALLBACK_FAQS

const certifications: Certification[] = FALLBACK_CERTIFICATIONS

const testimonials: Testimonial[] = FALLBACK_TESTIMONIALS

// function toPortableText(paragraphs: string[]) {
//   return paragraphs.map((text) => ({
//     _type: "block" as const,
//     _key: crypto.randomUUID(),
//     style: "normal" as const,
//     children: [{ _type: "span" as const, _key: crypto.randomUUID(), text }],
//   }));
// }

async function seed() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("SANITY_API_WRITE_TOKEN is not set in .env.local — cannot write to Sanity. See .env.local.example.");
    process.exit(1);
  }

  // Imported dynamically (after dotenv has populated process.env) so the
  // Sanity client's module-level env var reads pick up .env.local — a
  // static top-level import would be hoisted above the config() call.
  const { writeClient } = await import("../src/sanity/client");

  console.log("Seeding categories...");
  for (const c of categories) {
    await writeClient.createOrReplace({
      _id: `category-${c._id}`,
      _type: "category",
      name: c.name,
      slug: { _type: "slug", current: c._id },
      blurb: c.blurb,
      order: c.order,
    });
  }

  console.log("Seeding products...");
  for (const p of products) {
    await writeClient.createOrReplace({
      _id: `product-${p._id}`,
      _type: "product",
      name: p.name,
      slug: { _type: "slug", current: p._id },
      category: { _type: "reference", _ref: `category-${p.category}` },
      tag: p.tag,
      moq: p.moq,
      priceRange: p.priceRange,
      sizes: p.sizes,
      description: p.description,
      featured: p.featured,
      order: p.order,
    });
  }

  console.log("Seeding blog posts...");
  for (const post of posts) {
    await writeClient.createOrReplace({
      _id: `post-${post._id}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post._id },
      category: post.category,
      publishedAt: post.publishedAt,
      excerpt: post.excerpt,
      body: post.body,
      author: "Kohsar Export Team",
    });
  }

  console.log("Seeding FAQs...");
  for (const f of faqs) {
    await writeClient.createOrReplace({
      _id: `faq-${f._id}`,
      _type: "faq",
      question: f.question,
      answer: f.answer,
      category: f.category,
      order: f.order,
    });
  }

  console.log("Seeding certifications...");
  for (const c of certifications) {
    await writeClient.createOrReplace({
      _id: `cert-${c._id}`,
      _type: "certification",
      name: c.name,
      issuingBody: c.issuingBody,
      scope: c.scope,
      year: c.year,
      shortDesc: c.shortDesc,
      order: c.order,
    });
  }

  console.log("Seeding testimonials...");
  for (const t of testimonials) {
    await writeClient.createOrReplace({
      _id: `testimonial-${t._id}`,
      _type: "testimonial",
      quote: t.quote,
      name: t.name,
      role: t.role,
      order: t.order,
    });
  }

  console.log("Seeding site settings...");
  await writeClient.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: "Kohsar Saltworks",
    legalName: "Kohsar Saltworks (Pvt) Ltd.",
    tagline: "Manufacturer · Exporter · OEM Partner",
    email: "export@kohsarsaltworks.com",
    phone: "+92 345 117 1957",
    whatsappNumber: "923451171957",
    factoryAddress: "Khewra Industrial Zone, Jhelum, Punjab, Pakistan",
    hours: "Mon–Sat, 9:00–18:00 PKT",
  });

  console.log("Done. Add product/category/post images in Sanity Studio at /studio.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
