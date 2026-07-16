import { notFound } from "next/navigation";

/** Catch unmatched paths so `(site)/not-found` renders with site chrome. */
export default function CatchAllNotFound() {
  notFound();
}
