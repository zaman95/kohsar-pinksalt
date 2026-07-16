import Link from "next/link";
import { FOOTER_COMPANY, FOOTER_RESOURCES } from "@/lib/constants";
import type { Product, SiteSettings } from "@/lib/types";

const FEATURED_PRODUCT_SLUGS = ["lamp-natural", "holder-tealight", "edible-fine", "bath-crystal", "tile-cooking"];

export function Footer({ settings, products }: { settings: SiteSettings; products: Product[] }) {
  const footerProducts = FEATURED_PRODUCT_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(
    (p): p is Product => Boolean(p)
  );

  return (
    <footer className="bg-ink-2 px-[18px] py-16 text-[#C6CFDA] sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-11 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-6 w-6 rotate-45 rounded-[5px] bg-pink" />
              <span className="font-heading text-[17px] font-extrabold tracking-[0.14em] text-bg">KOHSAR</span>
            </div>
            <p className="mt-[18px] max-w-[260px] text-sm text-footer-muted">
              Himalayan pink salt manufacturer &amp; exporter. Mine-to-container supply for wholesale buyers worldwide.
            </p>
            <div className="mt-[18px] text-[13px] leading-[1.7] text-footer-muted">
              {settings.factoryAddress}
              <br />
              {settings.email}
              <br />
              {settings.phone}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-bg uppercase">Products</div>
            <div className="flex flex-col">
              {footerProducts.map((p) => (
                <Link key={p._id} href={`/products/${p.slug}`} className="py-1.5 text-sm text-footer-muted hover:text-bg">
                  {p.name}
                </Link>
              ))}
              <Link href="/products" className="py-1.5 text-sm text-footer-muted hover:text-bg">
                View all products
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-bg uppercase">Company</div>
            <div className="flex flex-col">
              {FOOTER_COMPANY.map((item) => (
                <Link key={item.href} href={item.href} className="py-1.5 text-sm text-footer-muted hover:text-bg">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-bg uppercase">Resources</div>
            <div className="flex flex-col">
              {FOOTER_RESOURCES.map((item) => (
                <Link key={item.href} href={item.href} className="py-1.5 text-sm text-footer-muted hover:text-bg">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <span className="text-[13px] text-footer-line">&copy; {new Date().getFullYear()} {settings.legalName}. All rights reserved.</span>
          <div className="flex gap-5">
            <span className="text-[13px] text-footer-line">Privacy</span>
            <span className="text-[13px] text-footer-line">Terms</span>
            <Link href="/sitemap.xml" className="text-[13px] text-footer-line hover:text-bg">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
