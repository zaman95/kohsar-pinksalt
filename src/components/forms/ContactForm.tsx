"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/app/actions";
import { FORMS } from "@/lib/copy";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

const fieldClass =
  "mt-1.5 w-full rounded-[10px] border border-border-5 bg-card px-3.5 py-3 text-[14.5px] outline-none transition-colors focus:border-pink focus:bg-white";
const labelClass = "text-[13px] font-bold text-ink";
const errorClass = "mt-1 text-xs font-semibold text-red-600";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);
    const result = await submitContactForm(values);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error);
    }
  }

  if (submitted) {
    return (
      <div className="animate-fade-in rounded-[20px] border border-border-3 bg-white p-11 text-center">
        <div className="mx-auto mb-4.5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-pink text-[28px] font-extrabold text-ink">
          &#10003;
        </div>
        <h2 className="font-heading text-2xl font-extrabold">{FORMS.contactSuccessTitle}</h2>
        <p className="mt-2.5 text-[15px] text-muted">{FORMS.contactSuccessBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[20px] border border-border-3 bg-white p-8" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("companyWebsite")} />
      <div className="flex flex-col gap-4">
        <label>
          <span className={labelClass}>Name *</span>
          <input className={fieldClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </label>
        <label>
          <span className={labelClass}>Email *</span>
          <input type="email" className={fieldClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </label>
        <label>
          <span className={labelClass}>Company</span>
          <input className={fieldClass} {...register("company")} />
        </label>
        <label>
          <span className={labelClass}>Message *</span>
          <textarea rows={4} className={`${fieldClass} resize-y`} {...register("message")} />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </label>
        {serverError && <p className={errorClass}>{serverError}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-ink py-[15px] text-[15px] font-bold text-bg transition-colors hover:bg-pink hover:text-ink disabled:opacity-60"
        >
          {isSubmitting ? FORMS.contactSubmitting : FORMS.contactSubmit}
        </button>
      </div>
    </form>
  );
}
