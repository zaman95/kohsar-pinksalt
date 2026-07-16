"use client";

import { useState } from "react";
import type { Faq } from "@/lib/types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?._id ?? null);

  return (
    <div className="mt-9 flex flex-col gap-3">
      {faqs.map((f) => {
        const open = openId === f._id;
        return (
          <div key={f._id} className="overflow-hidden rounded-[14px] border border-border-3 bg-white">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : f._id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-3.5 px-[22px] py-5 text-left"
            >
              <span className="text-[15.5px] font-bold text-ink">{f.question}</span>
              <span className="flex-none text-xl text-brown">{open ? "−" : "+"}</span>
            </button>
            {open && <div className="px-[22px] pb-5 text-[14.5px] leading-relaxed text-muted">{f.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
