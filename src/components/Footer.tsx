import Link from "next/link";
import { FOOTER, FOOTER_COMPANY, FOOTER_RESOURCES, SOCIALS } from "@/lib/copy";
import type { Product, SiteSettings } from "@/lib/types";

const FEATURED_PRODUCT_SLUGS = ["lamp-natural", "holder-tealight", "edible-fine", "bath-crystal", "tile-cooking"];

const SOCIAL_ICONS: Record<(typeof SOCIALS)[number]["label"], React.ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.16h4.52V23H.24V8.16zM8.34 8.16h4.33v2.02h.06c.6-1.14 2.08-2.34 4.28-2.34C21.6 7.84 23 10.55 23 14.09V23h-4.51v-7.9c0-1.88-.04-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V23H8.34V8.16z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  ),
};

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
            <p className="mt-[18px] max-w-[260px] text-sm text-footer-muted">{FOOTER.blurb}</p>
            <div className="mt-[18px] text-[13px] leading-[1.7] text-footer-muted">
              {settings.factoryAddress}
              <br />
              {settings.email}
              <br />
              {settings.phone}
            </div>
            {SOCIALS.length > 0 && (
              <div className="mt-[18px] flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-footer-muted transition-colors hover:border-pink hover:text-pink"
                  >
                    {SOCIAL_ICONS[s.label]}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-bg uppercase">{FOOTER.productsHeading}</div>
            <div className="flex flex-col">
              {footerProducts.map((p) => (
                <Link key={p._id} href={`/products/${p.slug}`} className="py-1.5 text-sm text-footer-muted hover:text-bg">
                  {p.name}
                </Link>
              ))}
              <Link href="/products" className="py-1.5 text-sm text-footer-muted hover:text-bg">
                {FOOTER.viewAllProducts}
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-bg uppercase">{FOOTER.companyHeading}</div>
            <div className="flex flex-col">
              {FOOTER_COMPANY.map((item) => (
                <Link key={item.href} href={item.href} className="py-1.5 text-sm text-footer-muted hover:text-bg">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-bg uppercase">{FOOTER.resourcesHeading}</div>
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
          <span className="text-[13px] text-footer-line">&copy; {settings.legalName}. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[13px] text-footer-line hover:text-bg">
              {FOOTER.privacyLabel}
            </Link>
            <Link href="/terms" className="text-[13px] text-footer-line hover:text-bg">
              {FOOTER.termsLabel}
            </Link>
            <Link href="/sitemap.xml" className="text-[13px] text-footer-line hover:text-bg">
              {FOOTER.sitemapLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
