import { client } from "@/sanity/client";
import { COMPANY } from "@/lib/constants";
import {
  FALLBACK_CATEGORIES,
  FALLBACK_CERTIFICATIONS,
  FALLBACK_FAQS,
  FALLBACK_POSTS,
  FALLBACK_PRODUCTS,
  FALLBACK_TESTIMONIALS,
} from "@/lib/fallbackContent";
import type { BlogPost, Category, Certification, Faq, Product, SiteSettings, Testimonial } from "@/lib/types";

/**
 * Sanity is optional — if no project is configured yet, the dataset is
 * empty, or the network call fails, every fetch below falls back to the
 * site's local starter content (lib/fallbackContent.ts) instead of shipping
 * an empty catalog/blog/FAQ. Real Sanity content always takes priority the
 * moment it exists.
 */
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    const result = await client.fetch<T>(query, params, { next: { revalidate: 60 } });
    if (result === null || result === undefined) return fallback;
    if (Array.isArray(result) && result.length === 0) return fallback;
    return result;
  } catch {
    return fallback;
  }
}

const categoryProjection = `{
  "_id": _id,
  name,
  "slug": slug.current,
  blurb,
  image,
  order
}`;

const productProjection = `{
  "_id": _id,
  name,
  "slug": slug.current,
  "category": category->{ name, "slug": slug.current },
  tag,
  sizes,
  variants,
  description,
  images,
  featured,
  order,
  seoDescription
}`;

const postProjection = `{
  "_id": _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  coverImage,
  body,
  author,
  seoDescription
}`;

export async function getCategories(): Promise<Category[]> {
  return safeFetch<Category[]>(`*[_type == "category"] | order(order asc) ${categoryProjection}`, {}, FALLBACK_CATEGORIES);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const fallback = FALLBACK_CATEGORIES.find((c) => c.slug === slug) ?? null;
  return safeFetch<Category | null>(`*[_type == "category" && slug.current == $slug][0] ${categoryProjection}`, { slug }, fallback);
}

export async function getProducts(): Promise<Product[]> {
  return safeFetch<Product[]>(`*[_type == "product"] | order(order asc) ${productProjection}`, {}, FALLBACK_PRODUCTS);
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const fallback = FALLBACK_PRODUCTS.filter((p) => p.featured).slice(0, limit);
  return safeFetch<Product[]>(
    `*[_type == "product" && featured == true] | order(order asc) [0...$limit] ${productProjection}`,
    { limit },
    fallback
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const fallback = FALLBACK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  return safeFetch<Product | null>(`*[_type == "product" && slug.current == $slug][0] ${productProjection}`, { slug }, fallback);
}

export async function getRelatedProducts(excludeSlug: string, limit = 4): Promise<Product[]> {
  const fallback = FALLBACK_PRODUCTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
  return safeFetch<Product[]>(
    `*[_type == "product" && slug.current != $excludeSlug] | order(order asc) [0...$limit] ${productProjection}`,
    { excludeSlug, limit },
    fallback
  );
}

export async function getAllProductSlugs(): Promise<string[]> {
  const fallback = FALLBACK_PRODUCTS.map((p) => p.slug);
  return safeFetch<string[]>(`*[_type == "product"].slug.current`, {}, fallback);
}

export async function getPosts(): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(`*[_type == "blogPost"] | order(publishedAt desc) ${postProjection}`, {}, FALLBACK_POSTS);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  return safeFetch<BlogPost | null>(`*[_type == "blogPost" && slug.current == $slug][0] ${postProjection}`, { slug }, fallback);
}

export async function getRelatedPosts(excludeSlug: string, limit = 3): Promise<BlogPost[]> {
  const fallback = FALLBACK_POSTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
  return safeFetch<BlogPost[]>(
    `*[_type == "blogPost" && slug.current != $excludeSlug] | order(publishedAt desc) [0...$limit] ${postProjection}`,
    { excludeSlug, limit },
    fallback
  );
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fallback = FALLBACK_POSTS.map((p) => p.slug);
  return safeFetch<string[]>(`*[_type == "blogPost"].slug.current`, {}, fallback);
}

export async function getFaqs(): Promise<Faq[]> {
  return safeFetch<Faq[]>(`*[_type == "faq"] | order(order asc)`, {}, FALLBACK_FAQS);
}

export async function getCertifications(): Promise<Certification[]> {
  return safeFetch<Certification[]>(`*[_type == "certification"] | order(order asc)`, {}, FALLBACK_CERTIFICATIONS);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return safeFetch<Testimonial[]>(`*[_type == "testimonial"] | order(order asc)`, {}, FALLBACK_TESTIMONIALS);
}

const fallbackSiteSettings: SiteSettings = {
  companyName: COMPANY.name,
  legalName: COMPANY.legalName,
  tagline: COMPANY.tagline,
  email: COMPANY.email,
  phone: COMPANY.phone,
  whatsappNumber: COMPANY.whatsapp,
  factoryAddress: COMPANY.factoryAddress,
  hours: COMPANY.hours,
};

export async function getSiteSettings(): Promise<SiteSettings> {
  return safeFetch<SiteSettings>(`*[_type == "siteSettings"][0]`, {}, fallbackSiteSettings);
}
