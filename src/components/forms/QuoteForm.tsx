"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitQuoteForm } from "@/app/actions";
import { FORMS, QUOTE } from "@/lib/copy";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/validations";
import type { Category } from "@/lib/types";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border-5 bg-card px-3.5 py-3 text-[14.5px] outline-none transition-colors focus:border-pink focus:bg-white";
const labelClass = "text-[13px] font-bold text-ink";
const errorClass = "mt-1 text-xs font-semibold text-red-600";

export function QuoteForm({
  categories,
  type = "quote",
  defaultProductInterest,
  defaultProductNote,
}: {
  categories: Category[];
  type?: "quote" | "sample";
  defaultProductInterest?: string;
  defaultProductNote?: string;
}) {
  const isSample = type === "sample";
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      inquiryType: type,
      productInterest: defaultProductInterest ?? "",
      productNote: defaultProductNote ?? "",
    },
  });

  async function onSubmit(values: QuoteFormValues) {
    setServerError(null);
    const result = await submitQuoteForm(values);
    if (result.success) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setServerError(result.error);
    }
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-[760px] px-[18px] py-24 text-center sm:px-8 lg:py-[100px]">
        <div className="mx-auto mb-7 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-pink text-[38px] font-extrabold text-ink">
          &#10003;
        </div>
        <h1 className="font-heading text-[32px] font-extrabold tracking-tight sm:text-4xl">
          {isSample ? FORMS.sampleSuccessTitle : FORMS.quoteSuccessTitle}
        </h1>
        <p className="mt-4 text-lg text-muted">{isSample ? FORMS.sampleSuccessBody : FORMS.quoteSuccessBody}</p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-7" noValidate>
      <input type="hidden" {...register("inquiryType")} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("companyWebsite")} />
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Company name *</span>
          <input className={fieldClass} placeholder="Acme Imports Ltd." {...register("companyName")} />
          {errors.companyName && <p className={errorClass}>{errors.companyName.message}</p>}
        </label>
        <label className="block">
          <span className={labelClass}>Country *</span>
          <input className={fieldClass} placeholder="United States" {...register("country")} />
          {errors.country && <p className={errorClass}>{errors.country.message}</p>}
        </label>
        <label className="block">
          <span className={labelClass}>Contact name *</span>
          <input className={fieldClass} placeholder="Jane Doe" {...register("contactName")} />
          {errors.contactName && <p className={errorClass}>{errors.contactName.message}</p>}
        </label>
        <label className="block">
          <span className={labelClass}>Email *</span>
          <input type="email" className={fieldClass} placeholder="you@company.com" {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </label>
        <label className="block">
          <span className={labelClass}>Phone / WhatsApp</span>
          <input className={fieldClass} placeholder="+1 555 000 0000" {...register("phone")} />
        </label>
        <label className="block">
          <span className={labelClass}>Product interest *</span>
          <select className={fieldClass} defaultValue={defaultProductInterest ?? ""} {...register("productInterest")}>
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((c) => (
              <option key={c._id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.productInterest && <p className={errorClass}>{errors.productInterest.message}</p>}
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE.productNoteLabel}</span>
          <input className={fieldClass} placeholder="e.g. Model KS-CL-02 (Pyramid)" {...register("productNote")} />
        </label>

        {isSample ? (
          <label className="block sm:col-span-2">
            <span className={labelClass}>{QUOTE.shippingAddressLabel}</span>
            <input className={fieldClass} placeholder="Full shipping address, city & country" {...register("destinationPort")} />
            {errors.destinationPort && <p className={errorClass}>{errors.destinationPort.message}</p>}
          </label>
        ) : (
          <label className="block">
            <span className={labelClass}>Estimated quantity</span>
            <input className={fieldClass} placeholder="e.g. 2 x 40ft containers" {...register("quantity")} />
          </label>
        )}
      </div>

      {!isSample && (
        <details className="group mt-[18px] rounded-xl border border-border-5 bg-card open:bg-transparent open:border-none">
          <summary className="cursor-pointer list-none px-3.5 py-3 text-[13px] font-bold text-brown-mid select-none">
            {QUOTE.moreDetailsToggle} <span className="ml-1 text-muted-2 group-open:hidden">+</span>
            <span className="ml-1 hidden text-muted-2 group-open:inline">–</span>
          </summary>
          <div className="grid grid-cols-1 gap-[18px] px-3.5 pt-1 pb-3.5 sm:grid-cols-2 sm:px-0 sm:pt-4">
            <label className="block">
              <span className={labelClass}>Packaging</span>
              <select className={fieldClass} defaultValue="Bulk / brown carton" {...register("packaging")}>
                <option>Bulk / brown carton</option>
                <option>Retail gift box</option>
                <option>Custom branded packaging</option>
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Private label?</span>
              <select className={fieldClass} defaultValue="No, unbranded" {...register("privateLabel")}>
                <option>No, unbranded</option>
                <option>Yes, our brand</option>
                <option>Need guidance</option>
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Target market</span>
              <input className={fieldClass} placeholder="Retail / wellness / hospitality" {...register("targetMarket")} />
            </label>
            <label className="block">
              <span className={labelClass}>{QUOTE.shippingAddressLabelOptional}</span>
              <input className={fieldClass} placeholder="e.g. Los Angeles, USA" {...register("destinationPort")} />
            </label>
          </div>
        </details>
      )}

      <label className="mt-[18px] block">
        <span className={labelClass}>Message / requirements</span>
        <textarea
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="Specs, sizes, timelines, or anything else we should know."
          {...register("message")}
        />
      </label>

      {serverError && <p className={`${errorClass} mt-4`}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-ink py-[17px] text-base font-bold text-bg transition-colors hover:bg-pink hover:text-ink disabled:opacity-60"
      >
        {isSample
          ? isSubmitting
            ? FORMS.sampleSubmitting
            : FORMS.sampleSubmit
          : isSubmitting
            ? FORMS.quoteSubmitting
            : FORMS.quoteSubmit}
      </button>
    </form>
  );
}
