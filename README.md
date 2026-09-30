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

### Scheduled Supabase Health Check

`.github/workflows/supabase-health-check.yml` reads at most one newsletter record
ID through the Supabase Data API at 00:17, 06:17, 12:17, and 18:17 UTC each day.
The response is discarded; the job does not change data or send emails. Failed
requests fail the workflow, with two retries for transient HTTP/network errors
supported by curl.

To activate it:

1. Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as repository
   **Settings → Secrets and variables → Actions → Repository secrets**, using
   the same production values as the website. Use the standard Supabase project
   URL. Keep the service role key in Secrets, never in a repository variable or
   committed file.
2. Merge the workflow onto the default branch (`main`).
3. Open **Actions → Supabase health check → Run workflow** and verify that the
   database read succeeds. Enable GitHub Actions failure notifications for your
   account so failed checks are visible.

Supabase says a few user database requests per day typically prevent free-project
pausing, but does not guarantee a specific threshold. This job cannot resume an
already paused project; resume it in the Supabase dashboard first.

GitHub may delay scheduled jobs and automatically disables public-repository
schedules after 60 days without repository activity. Check that the workflow
remains enabled if this site goes unchanged for that long. To stop the checks,
disable this workflow in GitHub Actions.

References: [Supabase pausing policy](https://supabase.com/docs/guides/platform/free-project-pausing)
and [GitHub schedule limitations](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).
