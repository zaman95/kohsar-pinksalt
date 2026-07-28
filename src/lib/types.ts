import type { PortableTextBlock } from "next-sanity";

export type SanityImageRef = {
  asset?: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  blurb?: string;
  image?: SanityImageRef;
  order?: number;
};

/** A design/shape variant of a product, e.g. "Pyramid" under Crafted Lamps. */
export type ProductVariant = {
  model: string;
  name: string;
  note?: string;
};

export type Product = {
  _id: string;
  name: string;
  slug: string;
  category?: { name: string; slug: string } | null;
  tag?: string;
  sizes?: string[];
  variants?: ProductVariant[];
  description?: string;
  images?: SanityImageRef[];
  featured?: boolean;
  order?: number;
  seoDescription?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  publishedAt: string;
  excerpt: string;
  coverImage?: SanityImageRef;
  body?: PortableTextBlock[];
  author?: string;
  seoDescription?: string;
};

export type Faq = {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
};

export type Certification = {
  _id: string;
  name: string;
  issuingBody?: string;
  scope?: string;
  year?: string;
  shortDesc?: string;
  certificateFile?: { asset?: { _ref: string; url?: string } };
  order?: number;
};

export type Testimonial = {
  _id: string;
  quote: string;
  name: string;
  role?: string;
  order?: number;
};

export type SiteSettings = {
  companyName: string;
  legalName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  factoryAddress: string;
  hours: string;
  defaultSeoTitle?: string;
  defaultSeoDescription?: string;
  ogImage?: SanityImageRef;
};
