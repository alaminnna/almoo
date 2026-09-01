import { NextRequest, NextResponse } from "next/server";
import {
  sendInternalNotification,
  sendUserConfirmation,
  type InquiryData,
} from "@/lib/email/brevo";

// -------------------------------------------------------------------------
// RATE LIMITING (simple in-memory — works per serverless instance)
// -------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count++;
  return true;
}

// -------------------------------------------------------------------------
// VALIDATION
// -------------------------------------------------------------------------
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 100,
  website: 200,
  phone: 30,
  projectType: 50,
  projectStage: 50,
  budget: 50,
  projectDetails: 5000,
} as const;

const VALID_PROJECT_TYPES = [
  "Website",
  "Web Application",
  "UI / UX Design",
  "AI & Automation",
  "Digital Growth",
  "Something else",
];

const VALID_PROJECT_STAGES = [
  "Just an idea",
  "Starting a new business",
  "Existing business",
  "Redesigning something",
  "Scaling an existing product",
  "Other",
];

const VALID_BUDGETS = [
  "Under $500",
  "$500 \u2014 $1,000",
  "$1,000 \u2014 $3,000",
  "$3,000+",
  "Not sure yet",
];

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 5000);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface ValidationErrors {
  [key: string]: string;
}

function validateBody(body: Record<string, unknown>): {
  ok: boolean;
  errors: ValidationErrors;
  data: InquiryData | null;
} {
  const errors: ValidationErrors = {};

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const company = sanitize(body.company);
  const website = sanitize(body.website);
  const phone = sanitize(body.phone);
  const projectType = sanitize(body.projectType);
  const projectStage = sanitize(body.projectStage);
  const budget = sanitize(body.budget);
  const projectDetails = sanitize(body.projectDetails);

  if (!name) errors.name = "Name is required.";
  else if (name.length > MAX_LENGTHS.name) errors.name = "Name is too long.";

  if (!email) errors.email = "Email is required.";
  else if (!validateEmail(email)) errors.email = "Invalid email address.";
  else if (email.length > MAX_LENGTHS.email) errors.email = "Email is too long.";

  if (!projectType) errors.projectType = "Project type is required.";
  else if (!VALID_PROJECT_TYPES.includes(projectType))
    errors.projectType = "Invalid project type.";

  if (!projectStage) errors.projectStage = "Project stage is required.";
  else if (!VALID_PROJECT_STAGES.includes(projectStage))
    errors.projectStage = "Invalid project stage.";

  if (!budget) errors.budget = "Budget is required.";
  else if (!VALID_BUDGETS.includes(budget)) errors.budget = "Invalid budget range.";

  if (!projectDetails) errors.projectDetails = "Project details are required.";
  else if (projectDetails.length > MAX_LENGTHS.projectDetails)
    errors.projectDetails = "Project details are too long.";

  if (company && company.length > MAX_LENGTHS.company)
    errors.company = "Company name is too long.";
  if (website && website.length > MAX_LENGTHS.website)
    errors.website = "Website URL is too long.";
  if (phone && phone.length > MAX_LENGTHS.phone)
    errors.phone = "Phone number is too long.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, data: null };
  }

  return {
    ok: true,
    errors: {},
    data: {
      name,
      email,
      company,
      website,
      phone,
      projectType,
      projectStage,
      budget,
      projectDetails,
    },
  };
}

// -------------------------------------------------------------------------
// POST HANDLER
// -------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  console.log("[inquiry] Received request");

  // Rate limit
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    console.warn("[inquiry] Rate limited:", ip);
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch (e) {
    console.error("[inquiry] Failed to parse body:", e);
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Validate
  const validation = validateBody(body);
  if (!validation.ok) {
    console.warn("[inquiry] Validation failed:", validation.errors);
    return NextResponse.json(
      { success: false, error: "Validation failed.", details: validation.errors },
      { status: 400 }
    );
  }

  const data = validation.data!;
  console.log("[inquiry] Validated. Sending emails for:", data.email);

  // Check API key
  if (!process.env.BREVO_API_KEY) {
    console.error("[inquiry] BREVO_API_KEY is not set in environment");
    return NextResponse.json(
      { success: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  // Send emails
  const [internalResult, confirmationResult] = await Promise.all([
    sendInternalNotification(data),
    sendUserConfirmation(data),
  ]);

  console.log("[inquiry] Internal email:", internalResult.ok ? "sent" : `failed: ${internalResult.error}`);
  console.log("[inquiry] Confirmation email:", confirmationResult.ok ? "sent" : `failed: ${confirmationResult.error}`);

  // If internal email failed, the inquiry didn't reach Almoo
  if (!internalResult.ok) {
    console.error("[inquiry] Internal email failed:", internalResult.error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to send inquiry. Please try again or contact us directly.",
        detail: internalResult.error,
        internalEmailSent: false,
        confirmationEmailSent: confirmationResult.ok,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    internalEmailSent: true,
    confirmationEmailSent: confirmationResult.ok,
  });
}
