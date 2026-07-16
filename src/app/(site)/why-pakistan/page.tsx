import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { WHY_PAKISTAN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Pakistan",
  description: "Why serious buyers source Himalayan salt from Pakistan — source proximity, skilled labour, trade access and port logistics.",
  alternates: { canonical: "/why-pakistan" },
};

export default function WhyPakistanPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Why Pakistan" }]}
        title="Why serious buyers source Himalayan salt from Pakistan"
        maxWidth="max-w-[680px]"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 sm:px-8 lg:py-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_PAKISTAN.map((w) => (
            <div key={w.t} className="rounded-[18px] border border-border-3 bg-white p-7">
              <h3 className="font-heading text-[19px] font-bold">{w.t}</h3>
              <p className="mt-3 text-[14.5px] text-muted">{w.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <LinkButton href="/quote">Get a quote from source &rarr;</LinkButton>
        </div>
      </section>
    </main>
  );
}
