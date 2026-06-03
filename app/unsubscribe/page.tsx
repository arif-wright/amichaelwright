import type { Metadata } from "next";
import Link from "next/link";
import { authorName, seriesName } from "../site-data";
import UnsubscribeForm from "./unsubscribe-form";

export const metadata: Metadata = {
  title: `Unsubscribe | ${authorName}`,
  description: `Unsubscribe from ${authorName}'s ${seriesName} email updates.`,
  alternates: {
    canonical: "/unsubscribe",
  },
};

export default function UnsubscribePage() {
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
        <article className="stone-panel mx-auto max-w-3xl px-6 py-14 sm:px-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
            Email Preferences
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-[#fff1c5] sm:text-5xl">
            Leave the reader list
          </h1>
          <p className="mt-6 leading-8 text-[#d9cdb9]">
            Enter the email address you used to subscribe. It will be marked as
            unsubscribed and excluded from future newsletter sends.
          </p>
          <UnsubscribeForm />
        </article>
      </section>
    </main>
  );
}
