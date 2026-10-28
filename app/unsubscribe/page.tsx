import type { Metadata } from "next";
import { authorName, seriesName } from "../site-data";
import UnsubscribeForm from "./unsubscribe-form";

import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
export const metadata: Metadata = {
  title: `Unsubscribe | ${authorName}`,
  description: `Unsubscribe from ${authorName}'s ${seriesName} email updates.`,
  alternates: {
    canonical: "/unsubscribe",
  },
};

export default function UnsubscribePage() {
  return (
    <div className="site-shell refined-site">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="reading-page">
          <article className="content-width reading-article reader-form">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
              Email Preferences
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-[#fff1c5] sm:text-5xl">
              Leave the reader list
            </h1>
            <p className="mt-6 leading-8 text-[#d9cdb9]">
              Enter the email address you used to subscribe. It will be marked
              as unsubscribed and excluded from future newsletter sends.
            </p>
            <UnsubscribeForm />
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
