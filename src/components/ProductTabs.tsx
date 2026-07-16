"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Row = { k: string; v: string };

export function ProductTabs({ specs, pack, ship }: { specs: Row[]; pack: Row[]; ship: Row[] }) {
  const [tab, setTab] = useState<"specs" | "pack" | "ship">("specs");
  const rows = tab === "pack" ? pack : tab === "ship" ? ship : specs;

  const tabBtn = (id: "specs" | "pack" | "ship", label: string) => (
    <button
      type="button"
      onClick={() => setTab(id)}
      className={cn(
        "border-b-[3px] px-5 py-4 text-[15px] font-bold",
        tab === id ? "border-pink text-ink" : "border-transparent text-muted-2"
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="mt-16 border-t border-border pt-2">
      <div className="flex flex-wrap gap-2 border-b border-border">
        {tabBtn("specs", "Specifications")}
        {tabBtn("pack", "Packaging")}
        {tabBtn("ship", "Shipping & Custom")}
      </div>
      <div className="py-8">
        {rows.map((r) => (
          <div key={r.k} className="grid grid-cols-1 gap-2 border-b border-slot py-4 sm:grid-cols-[220px_1fr] sm:gap-5">
            <div className="text-[15px] font-bold text-ink">{r.k}</div>
            <div className="text-[15px] text-muted">{r.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
