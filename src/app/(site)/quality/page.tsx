import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QC_STAGES, QC_TABLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quality Control",
  description: "Inspected at every stage, not just the last — raw material grading, in-process checks, lab testing and pre-shipment inspection.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Quality Control" }]}
        title="Inspected at every stage, not just the last"
        maxWidth="max-w-none"
      />

      <section className="mx-auto max-w-[1240px] px-[18px] py-14 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QC_STAGES.map((s) => (
            <div key={s.title} className="border-t-2 border-pink pt-4">
              <div className="text-base font-bold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-2">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden overflow-x-auto rounded-[18px] border border-border-3 bg-white">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="bg-ink text-xs font-bold text-bg">
                <th className="px-6 py-4 font-bold">Parameter</th>
                <th className="px-6 py-4 font-bold">Standard</th>
                <th className="px-6 py-4 font-bold">Test method</th>
              </tr>
            </thead>
            <tbody>
              {QC_TABLE.map((row) => (
                <tr key={row.param} className="border-b border-slot text-[14.5px] last:border-none">
                  <td className="px-6 py-4">{row.param}</td>
                  <td className="px-6 py-4">{row.standard}</td>
                  <td className="px-6 py-4">{row.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
