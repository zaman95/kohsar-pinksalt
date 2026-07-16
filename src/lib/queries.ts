import { client } from "@/sanity/client";
import { COMPANY } from "@/lib/constants";
import type { BlogPost, Category, Certification, Faq, Product, SiteSettings, Testimonial } from "@/lib/types";

/**
 * Sanity is optional at build time — if no project is configured yet (or the
 * network call fails), every fetch below falls back to an empty/default
 * value instead of crashing the build. Real content shows up as soon as
 * NEXT_PUBLIC_SANITY_PROJECT_ID is set and the studio has entries.
 */
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    const result = await client.fetch<T>(query, params, { next: { revalidate: 60 } });
    return result ?? fallback;
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
  moq,
  priceRange,
  sizes,
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
  return safeFetch<Category[]>(`*[_type == "category"] | order(order asc) ${categoryProjection}`, {}, []);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return safeFetch<Category | null>(
    `*[_type == "category" && slug.current == $slug][0] ${categoryProjection}`,
    { slug },
    null
  );
}

export async function getProducts(): Promise<Product[]> {
  return safeFetch<Product[]>(`*[_type == "product"] | order(order asc) ${productProjection}`, {}, []);
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return safeFetch<Product[]>(
    `*[_type == "product" && featured == true] | order(order asc) [0...$limit] ${productProjection}`,
    { limit },
    []
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return safeFetch<Product | null>(`*[_type == "product" && slug.current == $slug][0] ${productProjection}`, { slug }, null);
}

export async function getRelatedProducts(excludeSlug: string, limit = 4): Promise<Product[]> {
  return safeFetch<Product[]>(
    `*[_type == "product" && slug.current != $excludeSlug] | order(order asc) [0...$limit] ${productProjection}`,
    { excludeSlug, limit },
    []
  );
}

export async function getAllProductSlugs(): Promise<string[]> {
  return safeFetch<string[]>(`*[_type == "product"].slug.current`, {}, []);
}

export async function getPosts(): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(`*[_type == "blogPost"] | order(publishedAt desc) ${postProjection}`, {}, []);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return safeFetch<BlogPost | null>(`*[_type == "blogPost" && slug.current == $slug][0] ${postProjection}`, { slug }, null);
}

export async function getRelatedPosts(excludeSlug: string, limit = 3): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(
    `*[_type == "blogPost" && slug.current != $excludeSlug] | order(publishedAt desc) [0...$limit] ${postProjection}`,
    { excludeSlug, limit },
    []
  );
}

export async function getAllPostSlugs(): Promise<string[]> {
  return safeFetch<string[]>(`*[_type == "blogPost"].slug.current`, {}, []);
}

export async function getFaqs(): Promise<Faq[]> {
  return safeFetch<Faq[]>(`*[_type == "faq"] | order(order asc)`, {}, []);
}

export async function getCertifications(): Promise<Certification[]> {
  return safeFetch<Certification[]>(`*[_type == "certification"] | order(order asc)`, {}, []);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return safeFetch<Testimonial[]>(`*[_type == "testimonial"] | order(order asc)`, {}, []);
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
