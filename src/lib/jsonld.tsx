import { COMPANY, SITE_URL } from "@/lib/constants";
import type { BlogPost, Faq, Product } from "@/lib/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    foundingDate: String(COMPANY.founded),
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.factoryAddress,
      addressCountry: "PK",
    },
    sameAs: [],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function productJsonLd(product: Product, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category?.name,
    url: `${SITE_URL}${path}`,
    brand: { "@type": "Brand", name: COMPANY.name },
    manufacturer: { "@type": "Organization", name: COMPANY.name },
    // B2B: no public pricing — offers are intentionally omitted; buyers
    // request a quote instead.
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleJsonLd(post: BlogPost, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author || COMPANY.name },
    publisher: { "@type": "Organization", name: COMPANY.name },
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}

export function JsonLdScript({ data }: { data: object }) {
  // Escape "<" so CMS-sourced strings can never close the script tag and
  // inject markup into the page.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
