import { z } from "zod";

// Length caps keep abusive payloads out of the outgoing emails; the limits
// are generous for any legitimate inquiry.
const shortField = z.string().trim().max(200, "Too long");

export const quoteFormSchema = z
  .object({
    // Drives which fields the UI shows and how the email is labeled — see
    // QuoteForm.tsx. "sample" is a lighter-weight, faster-decision inquiry
    // than "quote", so it doesn't ask about packaging/branding/target market.
    // Always supplied by QuoteForm's defaultValues/hidden input (no schema
    // default here — that would create a resolver input/output type mismatch).
    inquiryType: z.enum(["quote", "sample"]),
    companyName: shortField.min(1, "Company name is required"),
    country: shortField.min(1, "Country is required"),
    contactName: shortField.min(1, "Contact name is required"),
    email: z.string().trim().email("Enter a valid email address").max(254),
    // Single field for phone/WhatsApp — most buyers give the same number for both.
    phone: shortField.optional(),
    productInterest: shortField.min(1, "Select a product category"),
    // Free-text product/model reference, prefilled when arriving from a
    // product page (e.g. "Crafted & Geometric Salt Lamp — KS-CL-02 Pyramid").
    productNote: shortField.optional(),
    quantity: shortField.optional(),
    packaging: shortField.optional(),
    privateLabel: shortField.optional(),
    targetMarket: shortField.optional(),
    destinationPort: shortField.optional(),
    message: z.string().trim().max(5000, "Message is too long").optional(),
    // Honeypot field — real users never fill this in; bots typically do.
    companyWebsite: z.string().max(0).optional(),
  })
  .superRefine((data, ctx) => {
    // A sample has to be shipped somewhere — this field is optional for a
    // wholesale quote (which may be pre-shipment) but required for a sample.
    if (data.inquiryType === "sample" && !data.destinationPort?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["destinationPort"],
        message: "Shipping address is required for a sample request",
      });
    }
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
