import type { Metadata } from "next";
import Link from "next/link";
import { authorName, seriesName } from "../site-data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${authorName}`,
  description: `Privacy policy for ${authorName}'s official ${seriesName} website and newsletter.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="site-shell min-h-screen text-[#f7ead1]">
      <header className="border-b border-[#34505a]/55 bg-black/55 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-[#f6d98d] transition hover:text-white"
          >
            {authorName}
          </Link>
        </div>
      </header>

      <section className="stone-bg px-5 py-16 sm:px-8 lg:px-12">
        <article className="stone-panel mx-auto max-w-4xl px-6 py-14 sm:px-10 lg:px-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
            Privacy Policy
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-[#fff1c5] sm:text-5xl">
            How this site handles your information
          </h1>

          <div className="mt-10 space-y-8 text-lg leading-8 text-[#d9cdb9]">
            <section>
              <h2 className="font-serif text-2xl text-[#fff1c5]">
                Newsletter signups
              </h2>
              <p className="mt-3">
                When you join the newsletter, this site collects your email
                address, signup source, referrer, user agent, and signup time.
                The list is stored in Supabase and welcome emails are sent
                through Resend.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#fff1c5]">
                Site analytics
              </h2>
              <p className="mt-3">
                This site records anonymous interaction events, such as book
                purchase clicks, excerpt clicks, and successful newsletter
                signups. It does not use tracking cookies or visitor profiles.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#fff1c5]">
                Unsubscribing
              </h2>
              <p className="mt-3">
                You can unsubscribe at any time on the{" "}
                <Link className="text-[#d8a846] hover:text-[#fff1c5]" href="/unsubscribe">
                  unsubscribe page
                </Link>
                . Unsubscribed email addresses are retained only as needed to
                prevent future sends.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#fff1c5]">
                Data requests
              </h2>
              <p className="mt-3">
                To request deletion or ask questions about stored newsletter
                data, reply to a newsletter email or use the reply-to address
                shown in those emails.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
