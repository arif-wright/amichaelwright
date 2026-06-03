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

After changing `supabase/newsletter_signups.sql`, rerun it in the Supabase SQL
editor. The current schema stores newsletter subscriptions, unsubscribe state,
and anonymous site events for book/excerpt/signup conversion tracking.

### End-to-End Signup Test

1. Submit a real email through the homepage signup form.
2. Confirm a row appears in `newsletter_signups`.
3. Confirm the welcome email arrives through Resend.
4. Click a Book One, Book Two, and excerpt link.
5. Confirm rows appear in `site_events`.
6. Submit the same email on `/unsubscribe`.
7. Confirm `unsubscribed_at` is set for that email.

### Search Console

After deployment, add `https://amichaelwright.com` to Google Search Console and
submit:

```text
https://amichaelwright.com/sitemap.xml
```
