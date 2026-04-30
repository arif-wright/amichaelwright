import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NewsletterPayload = {
  email?: string;
  source?: string;
};

export async function POST(request: NextRequest) {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
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

  const email = payload.email?.trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/newsletter_signups?on_conflict=email`,
    {
      method: "POST",
      headers: {
        apikey: supabaseServiceRoleKey,
        Authorization: `Bearer ${supabaseServiceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        email,
        source: payload.source || "website",
        user_agent: request.headers.get("user-agent"),
        referrer: request.headers.get("referer"),
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "Signup failed. Please try again in a moment." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "You're on the list. Welcome to The Wellspring Saga.",
  });
}
