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
    defineField({ name: "tag", title: "Badge tag", description: "e.g. Best Seller, New, Food Grade", type: "string" }),
    defineField({
      name: "sizes",
      title: "Available sizes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "variants",
      title: "Designs / models",
      description: "Shape or design variants of this product, each with a model code buyers can quote against.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "model", title: "Model code", description: "e.g. KS-CL-02", type: "string", validation: (r) => r.required() }),
            defineField({ name: "name", title: "Design / variant name", description: "e.g. Pyramid", type: "string", validation: (r) => r.required() }),
            defineField({ name: "note", title: "Note", description: "Optional short note, e.g. polished finish", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "model" } },
        },
      ],
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
    select: { title: "name", subtitle: "tag", media: "images.0" },
  },
});
