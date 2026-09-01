import { NextResponse } from "next/server";

export async function GET() {
  const diagnostics: Record<string, unknown> = {};

  // Check env vars
  diagnostics.brevoApiKeySet = !!process.env.BREVO_API_KEY;
  diagnostics.brevoApiKeyLength = process.env.BREVO_API_KEY?.length || 0;
  diagnostics.senderEmail = process.env.BREVO_SENDER_EMAIL || "NOT SET";
  diagnostics.senderName = process.env.BREVO_SENDER_NAME || "NOT SET";
  diagnostics.inquiryEmail = process.env.ALMOO_INQUIRY_EMAIL || "NOT SET";

  // Try a minimal Brevo API call to test connectivity
  if (process.env.BREVO_API_KEY) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            email: process.env.BREVO_SENDER_EMAIL || "hello@almoo.pro.bd",
            name: process.env.BREVO_SENDER_NAME || "Almoo Studio",
          },
          to: [{ email: "test@test.com" }],
          subject: "Diagnostic test",
          htmlContent: "<p>test</p>",
        }),
      });

      const body = await res.text();
      diagnostics.brevoStatus = res.status;
      diagnostics.brevoResponse = body.slice(0, 500);
      diagnostics.brevoReachable = true;
    } catch (err) {
      diagnostics.brevoReachable = false;
      diagnostics.brevoError = String(err);
    }
  } else {
    diagnostics.brevoReachable = false;
    diagnostics.brevoError = "No API key set";
  }

  return NextResponse.json(diagnostics, { status: 200 });
}
