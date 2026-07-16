import Link from "next/link";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href?: string };

export function Breadcrumb({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-4 text-[13px] font-semibold", light ? "text-[#E0D4C9]" : "text-brown-lighter")}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className={cn("hover:text-ink", light && "hover:text-pink")}>
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? (light ? "text-pink" : "text-ink") : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
