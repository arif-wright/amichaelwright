# amichaelwright

## Newsletter Signups

The site collects newsletter signups through `POST /api/newsletter` and stores
them in Supabase.

Setup:

1. Create a Supabase project.
2. Run `supabase/newsletter_signups.sql` in the Supabase SQL editor.
3. Add these environment variables locally and in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

Use the Supabase service role key only on the server. Do not expose it in
client-side code.
