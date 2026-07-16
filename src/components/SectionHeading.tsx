import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
  center = false,
  className,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "mx-auto max-w-[640px] text-center", className)}>
      <span className={cn("text-xs font-bold tracking-[0.22em] uppercase", dark ? "text-pink" : "text-brown")}>{eyebrow}</span>
      <h2 className="mt-3 font-heading text-[26px] font-extrabold tracking-tight sm:text-[34px] lg:text-[40px]">{title}</h2>
    </div>
  );
}
