# amichaelwright

## Newsletter Signups

The site collects newsletter signups through `POST /api/newsletter` and stores
them in Supabase. It also sends a welcome email through Resend when Resend is
configured.

Setup:

1. Create a Supabase project.
2. Run `supabase/newsletter_signups.sql` in the Supabase SQL editor.
3. Add these environment variables locally and in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
RESEND_API_KEY="re_your-api-key"
RESEND_FROM_EMAIL="A. Michael Wright <newsletter@amichaelwright.com>"
RESEND_REPLY_TO_EMAIL="author@amichaelwright.com"
```

Use the Supabase service role key only on the server. Do not expose it in
client-side code.

Use a verified Resend domain for `RESEND_FROM_EMAIL` in production. The Resend
welcome email is best-effort: signups are still saved in Supabase if email
delivery is not configured.
