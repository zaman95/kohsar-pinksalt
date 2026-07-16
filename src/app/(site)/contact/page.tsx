import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SanityImage } from "@/components/SanityImage";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSiteSettings } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Contact Our Export Team",
  description: "Reach Kohsar Saltworks' export team by phone, WhatsApp or email — factory address and business hours.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  const details = [
    { label: "Factory address", value: settings.factoryAddress },
    { label: "Phone / WhatsApp", value: settings.phone },
    { label: "Email", value: settings.email },
    { label: "Business hours", value: settings.hours },
  ];

  return (
    <main>
      <section className="mx-auto max-w-[1240px] px-[18px] py-11 pb-20 sm:px-8">
        <Breadcrumb items={[{ name: "Contact" }]} />
        <h1 className="font-heading text-[32px] font-extrabold tracking-tight sm:text-[42px]">Talk to our export team</h1>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="relative h-[280px] overflow-hidden rounded-[18px]">
              <SanityImage image={undefined} alt={`Map — ${settings.factoryAddress}`} />
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
