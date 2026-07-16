import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company name", type: "string", initialValue: "Kohsar Saltworks" }),
    defineField({ name: "legalName", title: "Legal name", type: "string", initialValue: "Kohsar Saltworks (Pvt) Ltd." }),
    defineField({ name: "tagline", title: "Tagline", type: "string", initialValue: "Manufacturer · Exporter · OEM Partner" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone / WhatsApp display", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp number (digits only, intl format)", type: "string" }),
    defineField({ name: "factoryAddress", title: "Factory address", type: "string" }),
    defineField({ name: "hours", title: "Business hours", type: "string" }),
    defineField({ name: "defaultSeoTitle", title: "Default SEO title", type: "string" }),
    defineField({ name: "defaultSeoDescription", title: "Default SEO description", type: "text", rows: 2 }),
    defineField({ name: "ogImage", title: "Default social share image", type: "image" }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
