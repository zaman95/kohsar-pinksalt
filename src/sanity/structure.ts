import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("category").title("Product Categories"),
      S.documentTypeListItem("product").title("Products"),
      S.divider(),
      S.documentTypeListItem("blogPost").title("Blog Posts"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("certification").title("Certifications"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
