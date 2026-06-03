import { NextRequest, NextResponse } from "next/server";
import {
  getRequestMetadata,
  getSupabaseConfig,
  supabaseHeaders,
} from "../../supabase-server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const supabase = getSupabaseConfig();

  if (!supabase) {
    return NextResponse.json(
      { message: "Unsubscribe is not configured yet." },
      { status: 503 }
    );
  }

  let payload: { email?: string };

  try {
    payload = (await request.json()) as { email?: string };
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
    `${supabase.url}/rest/v1/newsletter_signups?email=eq.${encodeURIComponent(
      email
    )}`,
    {
      method: "PATCH",
      headers: supabaseHeaders(supabase.serviceRoleKey),
      body: JSON.stringify({
        unsubscribed_at: new Date().toISOString(),
        ...getRequestMetadata(request),
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "Unsubscribe failed. Please try again in a moment." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "You're unsubscribed. The list has released your name.",
  });
}
