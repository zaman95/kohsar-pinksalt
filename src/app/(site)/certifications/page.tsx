import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CERTIFICATIONS } from "@/lib/copy";
import { getCertifications } from "@/lib/queries";

export const metadata: Metadata = {
  title: CERTIFICATIONS.metaTitle,
  description: CERTIFICATIONS.metaDescription,
  alternates: { canonical: "/certifications" },
};

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Certifications" }]}
        title={CERTIFICATIONS.heroTitle}
        maxWidth="max-w-none"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div key={c._id} className="rounded-[18px] border border-border-3 bg-white p-6.5">
              <div className="flex items-start justify-between">
                <div className="font-heading text-xl font-extrabold">{c.name}</div>
                {c.year && (
                  <span className="rounded-full border border-border-4 px-2.5 py-1 text-[11px] font-bold text-brown-lighter">
                    {c.year}
                  </span>
                )}
              </div>
              {c.issuingBody && <div className="mt-1.5 text-[13px] font-semibold text-brown-light">{c.issuingBody}</div>}
              {c.scope && <div className="mt-3.5 text-sm text-muted">{c.scope}</div>}
            </div>
          ))}
        </div>
        {certifications.length === 0 && <p className="text-muted">{CERTIFICATIONS.empty}</p>}
      </section>
    </main>
  );
}
