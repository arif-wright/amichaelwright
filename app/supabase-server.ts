import { NextRequest } from "next/server";

export function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { serviceRoleKey, url };
}

export function getRequestMetadata(request: NextRequest) {
  return {
    referrer: request.headers.get("referer"),
    user_agent: request.headers.get("user-agent"),
  };
}

export function supabaseHeaders(serviceRoleKey: string) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
  };
}
