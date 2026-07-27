import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SanityImage } from "@/components/SanityImage";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/copy";
import { getSiteSettings } from "@/lib/queries";

export const metadata: Metadata = {
  title: CONTACT.metaTitle,
  description: CONTACT.metaDescription,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  const details = [
    { label: CONTACT.labels.address, value: settings.factoryAddress },
    { label: CONTACT.labels.phone, value: settings.phone },
    { label: CONTACT.labels.email, value: settings.email },
    { label: CONTACT.labels.hours, value: settings.hours },
  ];

  return (
    <main>
      <section className="mx-auto max-w-[1240px] px-[18px] py-11 pb-20 sm:px-8">
        <Breadcrumb items={[{ name: "Contact" }]} />
        <h1 className="font-heading text-[32px] font-extrabold tracking-tight sm:text-[42px]">{CONTACT.title}</h1>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="relative h-[280px] overflow-hidden rounded-[18px]">
              <SanityImage image={undefined} alt={`Map — ${settings.factoryAddress}`} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="mt-[22px] flex flex-col gap-4">
              {details.map((d) => (
                <div key={d.label}>
                  <div className="text-xs font-bold tracking-wide text-brown-lighter uppercase">{d.label}</div>
                  <div className="mt-1 text-[15px]">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
