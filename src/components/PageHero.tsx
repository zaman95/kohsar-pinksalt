import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";

export function PageHero({
  crumbs,
  title,
  lead,
  maxWidth = "max-w-[680px]",
}: {
  crumbs: Crumb[];
  title: string;
  lead?: string;
  maxWidth?: string;
}) {
  return (
    <div className="mx-auto max-w-[1240px] px-[18px] pt-11 pb-2 sm:px-8">
      <Breadcrumb items={crumbs} />
      <h1 className={`font-heading text-[28px] font-extrabold tracking-tight sm:text-[36px] lg:text-[42px] ${maxWidth}`}>{title}</h1>
      {lead && <p className={`mt-3.5 text-[16.5px] text-muted ${maxWidth}`}>{lead}</p>}
    </div>
  );
}
