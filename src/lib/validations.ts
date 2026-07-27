import { z } from "zod";

// Length caps keep abusive payloads out of the outgoing emails; the limits
// are generous for any legitimate inquiry.
const shortField = z.string().trim().max(200, "Too long");

export const quoteFormSchema = z.object({
  companyName: shortField.min(1, "Company name is required"),
  country: shortField.min(1, "Country is required"),
  contactName: shortField.min(1, "Contact name is required"),
  email: z.string().trim().email("Enter a valid email address").max(254),
  phone: shortField.optional(),
  whatsapp: shortField.optional(),
  productInterest: shortField.min(1, "Select a product category"),
  quantity: shortField.optional(),
  packaging: shortField.optional(),
  privateLabel: shortField.optional(),
  targetMarket: shortField.optional(),
  destinationPort: shortField.optional(),
  message: z.string().trim().max(5000, "Message is too long").optional(),
  // Honeypot field — real users never fill this in; bots typically do.
  companyWebsite: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: shortField.min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address").max(254),
  company: shortField.optional(),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message is too long"),
  companyWebsite: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
