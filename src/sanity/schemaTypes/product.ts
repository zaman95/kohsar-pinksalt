import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "tag", title: "Badge tag", description: "e.g. Best Seller, New, FDA", type: "string" }),
    defineField({ name: "moq", title: "MOQ", description: "e.g. 500 pcs, 5,000 kg", type: "string", validation: (r) => r.required() }),
    defineField({ name: "priceRange", title: "Bulk price range", description: "e.g. $2.20–4.80 / pc", type: "string" }),
    defineField({
      name: "sizes",
      title: "Available sizes / variants",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
    defineField({
      name: "seoDescription",
      title: "SEO meta description",
      type: "text",
      rows: 2,
      validation: (r) => r.max(160),
    }),
  ],
  orderings: [{ title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "moq", media: "images.0" },
  },
});
