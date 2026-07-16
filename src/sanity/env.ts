export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

// Sanity's client constructor validates projectId/dataset format and throws
// synchronously if they're missing or malformed — which would crash `next
// build` before a real project is configured. These placeholders are
// syntactically valid but resolve to nothing, so client construction
// succeeds and the actual network call fails instead, where lib/queries.ts
// already catches it and falls back to empty content.
const PLACEHOLDER_PROJECT_ID = "placeholder";
const PLACEHOLDER_DATASET = "production";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  PLACEHOLDER_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  PLACEHOLDER_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET);

function assertValue<T>(v: T | undefined, placeholder: T, errorMessage: string): T {
  if (v === undefined || v === "") {
    console.warn(`${errorMessage} — using a placeholder so the app can still build/run; see .env.local.example.`);
    return placeholder;
  }
  return v;
}
