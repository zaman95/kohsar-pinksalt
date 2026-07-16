import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileNav } from "@/components/MobileNav";
import { LinkButton } from "@/components/ui/Button";

export function Header({ founded }: { founded: number }) {
  return (
    <header className="sticky top-0 z-[60] flex min-h-[76px] items-center justify-between gap-4 border-b border-border bg-bg/90 px-[18px] py-3 backdrop-blur-md sm:px-8">
      <Link href="/" className="flex flex-none items-center gap-3">
        <span className="block h-[26px] w-[26px] flex-none rotate-45 rounded-[5px] bg-pink" />
        <span className="flex flex-col text-left leading-none">
          <span className="font-heading text-lg font-extrabold tracking-[0.14em] text-ink">KOHSAR</span>
          <span className="mt-[3px] whitespace-nowrap text-[8.5px] font-semibold tracking-[0.2em] text-brown-light sm:text-[9.5px] sm:tracking-[0.28em]">
            SALTWORKS &middot; EST. {founded}
          </span>
        </span>
      </Link>

      <nav className="hidden flex-1 items-center justify-center gap-5 min-[1080px]:flex">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-semibold text-muted hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-none items-center gap-2.5">
        <LinkButton href="/quote" size="sm" className="hidden sm:inline-flex">
          Request Quote
        </LinkButton>
        <MobileNav items={NAV_ITEMS} />
      </div>
    </header>
  );
}
