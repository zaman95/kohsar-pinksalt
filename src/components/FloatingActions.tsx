import { FLOATING } from "@/lib/copy";
import { LinkButton } from "@/components/ui/Button";

export function FloatingActions({ whatsappNumber }: { whatsappNumber: string }) {
  return (
    <div className="fixed right-5 bottom-5 z-[70] flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-[13px] text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.6)]"
      >
        <span className="block h-5 w-5 rounded-full bg-white" />
        {FLOATING.whatsappLabel}
      </a>
      <LinkButton href="/quote" size="sm" className="shadow-[0_12px_30px_-12px_rgba(31,41,55,0.7)]">
        {FLOATING.quoteLabel}
      </LinkButton>
    </div>
  );
}
