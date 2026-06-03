import { NextRequest, NextResponse } from "next/server";
import {
  getRequestMetadata,
  getSupabaseConfig,
  supabaseHeaders,
} from "../../supabase-server";

const allowedEvents = new Set([
  "buy_book_one",
  "buy_book_two",
  "read_book_one_excerpt",
  "read_book_two_excerpt",
  "newsletter_signup_success",
]);

export async function POST(request: NextRequest) {
  const supabase = getSupabaseConfig();

  if (!supabase) {
    return NextResponse.json({ ok: false });
  }

  let payload: {
    event?: string;
    href?: string;
    label?: string;
    path?: string;
  };

  try {
    payload = (await request.json()) as typeof payload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!payload.event || !allowedEvents.has(payload.event)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  await fetch(`${supabase.url}/rest/v1/site_events`, {
    method: "POST",
    headers: supabaseHeaders(supabase.serviceRoleKey),
    body: JSON.stringify({
      event_name: payload.event,
      href: payload.href || null,
      label: payload.label || null,
      path: payload.path || null,
      ...getRequestMetadata(request),
    }),
  });

  return NextResponse.json({ ok: true });
}
