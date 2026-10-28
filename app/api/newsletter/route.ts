import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterWelcomeEmail } from "../../email";
import {
  getRequestMetadata,
  getSupabaseConfig,
  supabaseHeaders,
} from "../../supabase-server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NewsletterPayload = {
  email?: string;
  source?: string;
};

export async function POST(request: NextRequest) {
  const supabase = getSupabaseConfig();

  if (!supabase) {
    return NextResponse.json(
      { message: "Newsletter signup is not configured yet." },
      { status: 503 }
    );
  }

  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const email = typeof payload?.email === "string"
    ? payload.email.trim().toLowerCase()
    : "";

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  let response: Response;

  try {
    response = await fetch(
      `${supabase.url}/rest/v1/newsletter_signups?on_conflict=email&select=id`,
      {
        method: "POST",
        headers: {
          ...supabaseHeaders(supabase.serviceRoleKey),
          Prefer: "resolution=ignore-duplicates,return=representation",
        },
        body: JSON.stringify({
          email,
          source: (typeof payload.source === "string" && payload.source) || "website",
          ...getRequestMetadata(request),
        }),
      }
    );
  } catch {
    return NextResponse.json(
      { message: "Signup failed. Please try again in a moment." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { message: "Signup failed. Please try again in a moment." },
      { status: 502 }
    );
  }

  // PostgREST returns only inserted IDs. Conflicts do not update metadata or
  // unsubscribe state, even when requests for the same address race.
  let inserted: unknown;
  try {
    inserted = await response.json();
  } catch {
    inserted = null;
  }

  if (Array.isArray(inserted) && inserted.length === 1 &&
      typeof inserted[0]?.id === "string") {
    try {
      await sendNewsletterWelcomeEmail(email);
    } catch {
      // Saving a signup must not appear to fail if the email provider throws.
      // Do not retry here: resubmission must never resend a welcome.
      console.error("Newsletter welcome email failed after signup was saved.");
    }
  }

  return NextResponse.json({
    message: "Thanks. If this is a new signup, you're on the list. If you previously unsubscribed, your choice is unchanged.",
  });
}
