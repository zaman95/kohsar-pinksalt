"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/lib/constants";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-[1080px]:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex flex-none flex-col items-center justify-center gap-[3px] rounded-[10px] border border-border-5 bg-transparent p-[9px]"
      >
        <span className="block h-0.5 w-[18px] bg-ink" />
        <span className="block h-0.5 w-[18px] bg-ink" />
        <span className="block h-0.5 w-[18px] bg-ink" />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-bg px-[18px] py-2 sm:px-[22px]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-[15px] font-semibold text-ink last:border-none"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
