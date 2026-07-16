import { defineField, defineType } from "sanity";

export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", description: "e.g. ISO 22000", type: "string", validation: (r) => r.required() }),
    defineField({ name: "issuingBody", title: "Issuing body", type: "string" }),
    defineField({ name: "scope", title: "Scope", type: "string" }),
    defineField({ name: "year", title: "Year / frequency", description: "e.g. 2016 or Annual", type: "string" }),
    defineField({ name: "shortDesc", title: "Short description (home page chip)", type: "string" }),
    defineField({ name: "certificateFile", title: "Certificate PDF", type: "file" }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  orderings: [{ title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "issuingBody" },
  },
});
