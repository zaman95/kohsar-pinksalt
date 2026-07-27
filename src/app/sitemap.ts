import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllPostSlugs, getAllProductSlugs } from "@/lib/queries";

const STATIC_ROUTES = [
  "",
  "/products",
  "/quote",
  "/about",
  "/facility",
  "/why-pakistan",
  "/oem",
  "/process",
  "/export",
  "/certifications",
  "/quality",
  "/sustainability",
  "/catalog",
  "/blog",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [productSlugs, postSlugs] = await Promise.all([getAllProductSlugs(), getAllPostSlugs()]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postEntries: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...postEntries];
}
