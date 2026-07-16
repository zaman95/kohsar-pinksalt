import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "pink" | "ghost-light" | "ghost-dark" | "link";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  dark: "bg-ink text-bg hover:bg-pink hover:text-ink hover:-translate-y-0.5",
  pink: "bg-pink text-ink hover:-translate-y-0.5",
  "ghost-light": "bg-white/10 text-bg border border-white/40 hover:bg-white/20",
  "ghost-dark": "bg-transparent text-ink border border-[#CFC3B5] hover:bg-black/5",
  link: "bg-transparent text-ink border-b-2 border-pink rounded-none px-0 pb-1 font-bold",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-[22px] py-[13px] text-sm",
  md: "px-7 py-[15px] text-[14.5px]",
  lg: "px-[34px] py-[17px] text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-all duration-200 cursor-pointer",
    variantClasses[variant],
    variant !== "link" && sizeClasses[size],
    className
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function LinkButton({ href, variant = "dark", size = "md", className, children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ variant = "dark", size = "md", className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
