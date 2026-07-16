import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Formats an ISO date string as "Mon YYYY" without Intl/toLocaleDateString —
 * those read the runtime's locale/ICU data, which can differ between the
 * Node server and the browser and is a classic cause of hydration mismatches.
 */
export function formatMonthYear(iso: string) {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
