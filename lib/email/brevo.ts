// -------------------------------------------------------------------------
// Brevo Transactional Email — Almoo Studio Inquiry System
// -------------------------------------------------------------------------

export interface InquiryData {
  projectType: string;
  projectStage: string;
  budget: string;
  projectDetails: string;
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
}

// -------------------------------------------------------------------------
// BREVO API CALL
// -------------------------------------------------------------------------
async function sendBrevoEmail(payload: {
  sender: { email: string; name: string };
  to: { email: string; name?: string }[];
  replyTo?: { email: string; name?: string };
  subject: string;
  htmlContent: string;
  textContent: string;
  tags?: string[];
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("[brevo] BREVO_API_KEY is not set");
    return { ok: false, error: "Email service not configured" };
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: payload.sender,
        to: payload.to,
        replyTo: payload.replyTo,
        subject: payload.subject,
        htmlContent: payload.htmlContent,
        textContent: payload.textContent,
        tags: payload.tags,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[brevo] API error:", res.status, body);
      return { ok: false, error: "Failed to send email" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[brevo] Network error:", err);
    return { ok: false, error: "Email service unavailable" };
  }
}

// -------------------------------------------------------------------------
// SENDER CONFIG
// -------------------------------------------------------------------------
const SENDER = {
  email: process.env.BREVO_SENDER_EMAIL || "hello@almoo.pro.bd",
  name: process.env.BREVO_SENDER_NAME || "Almoo Studio",
};

const INQUIRY_EMAIL = process.env.ALMOO_INQUIRY_EMAIL || "almoo.agency@gmail.com";

// -------------------------------------------------------------------------
// EMAIL 01 — INTERNAL BUSINESS NOTIFICATION
// -------------------------------------------------------------------------
export async function sendInternalNotification(
  data: InquiryData
): Promise<{ ok: boolean; error?: string }> {
  const subject = `New Project Inquiry — ${data.name} — ${data.projectType}`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#F5F1EB;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F1EB;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid #C8C2B8;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 48px 32px;border-bottom:1px solid #C8C2B8;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#999999;">Almoo Studio</p>
              <h1 style="margin:8px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:700;color:#111111;letter-spacing:-0.02em;">New Project Inquiry</h1>
            </td>
          </tr>

          <!-- Client Section -->
          <tr>
            <td style="padding:32px 48px;">
              <p style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Client</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Name</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Email</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.email)}</p>
                  </td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Company</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.company)}</p>
                  </td>
                </tr>` : ""}
                ${data.website ? `
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Website</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.website)}</p>
                  </td>
                </tr>` : ""}
                ${data.phone ? `
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">WhatsApp / Phone</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.phone)}</p>
                  </td>
                </tr>` : ""}
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #C8C2B8;margin:0;"></td></tr>

          <!-- Project Section -->
          <tr>
            <td style="padding:32px 48px;">
              <p style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Project</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Type</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.projectType)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Stage</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.projectStage)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Budget</p>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.budget)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #C8C2B8;margin:0;"></td></tr>

          <!-- Details Section -->
          <tr>
            <td style="padding:32px 48px;">
              <p style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Project Details</p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.projectDetails)}</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #C8C2B8;margin:0;"></td></tr>

          <!-- Timestamp -->
          <tr>
            <td style="padding:32px 48px;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Submitted ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  const textContent = `
ALMOO STUDIO — New Project Inquiry

CLIENT
Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ""}
${data.website ? `Website: ${data.website}` : ""}
${data.phone ? `WhatsApp / Phone: ${data.phone}` : ""}

PROJECT
Type: ${data.projectType}
Stage: ${data.projectStage}
Budget: ${data.budget}

PROJECT DETAILS
${data.projectDetails}

Submitted ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
`.trim();

  return sendBrevoEmail({
    sender: SENDER,
    to: [{ email: INQUIRY_EMAIL }],
    replyTo: { email: data.email, name: data.name },
    subject,
    htmlContent,
    textContent,
    tags: ["almoo-inquiry", "website-contact"],
  });
}

// -------------------------------------------------------------------------
// EMAIL 02 — USER CONFIRMATION
// -------------------------------------------------------------------------
export async function sendUserConfirmation(
  data: InquiryData
): Promise<{ ok: boolean; error?: string }> {
  const subject = "We\u2019ve received your project inquiry \u2014 Almoo Studio";

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#F5F1EB;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F1EB;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid #C8C2B8;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 48px 32px;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#999999;">Almoo Studio</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 48px 40px;">
              <h1 style="margin:0 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:700;color:#111111;letter-spacing:-0.02em;line-height:1.2;">Thanks, ${escapeHtml(data.name)}.</h1>

              <p style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#555555;line-height:1.7;">
                We&rsquo;ve received your project details and our team will review them carefully.
              </p>

              <p style="margin:0 0 32px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#555555;line-height:1.7;">
                We&rsquo;ll get back to you within 24&ndash;48 hours.
              </p>

              <!-- Inquiry Summary -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F1EB;border:1px solid #C8C2B8;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Your inquiry</p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;width:100px;vertical-align:top;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Project</p>
                        </td>
                        <td style="padding:6px 0;vertical-align:top;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.projectType)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;width:100px;vertical-align:top;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Stage</p>
                        </td>
                        <td style="padding:6px 0;vertical-align:top;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.projectStage)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;width:100px;vertical-align:top;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#999999;">Budget</p>
                        </td>
                        <td style="padding:6px 0;vertical-align:top;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">${escapeHtml(data.budget)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#555555;line-height:1.7;">
                We&rsquo;ll be in touch soon.
              </p>

              <p style="margin:24px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#111111;font-weight:500;">
                &mdash; Almoo Studio<br>
                <span style="font-weight:400;color:#999999;font-size:13px;">We Build. You Grow.</span>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  const textContent = `
Almoo Studio

Thanks, ${data.name}.

We've received your project details and our team will review them carefully.

We'll get back to you within 24-48 hours.

Your inquiry

Project: ${data.projectType}
Stage: ${data.projectStage}
Budget: ${data.budget}

We'll be in touch soon.

— Almoo Studio
We Build. You Grow.
`.trim();

  return sendBrevoEmail({
    sender: SENDER,
    to: [{ email: data.email, name: data.name }],
    replyTo: { email: INQUIRY_EMAIL, name: "Almoo Studio" },
    subject,
    htmlContent,
    textContent,
    tags: ["almoo-inquiry", "user-confirmation"],
  });
}

// -------------------------------------------------------------------------
// UTILITIES
// -------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
