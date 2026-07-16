import { z } from "zod";

export const quoteFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  country: z.string().min(1, "Country is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  whatsapp: z.string().optional(),
  productInterest: z.string().min(1, "Select a product category"),
  quantity: z.string().optional(),
  packaging: z.string().optional(),
  privateLabel: z.string().optional(),
  targetMarket: z.string().optional(),
  destinationPort: z.string().optional(),
  message: z.string().optional(),
  // Honeypot field — real users never fill this in; bots typically do.
  companyWebsite: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  companyWebsite: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
