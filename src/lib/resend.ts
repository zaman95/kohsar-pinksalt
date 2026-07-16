import { Resend } from "resend";

// Lazily constructed so builds/tests without RESEND_API_KEY set don't crash at import time.
let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}
