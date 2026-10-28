import type { Metadata } from "next";
import Link from "next/link";
import {
  amazonLink,
  authorName,
  bookTitle,
  excerptParagraphs,
  seriesName,
  siteUrl,
} from "../site-data";

import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
export const metadata: Metadata = {
  title: `Read an Excerpt from ${bookTitle} | ${authorName}`,
  description: `Read an opening excerpt from ${bookTitle}, Book One of ${seriesName}.`,
  alternates: {
    canonical: "/excerpt",
  },
  openGraph: {
    title: `Read an Excerpt from ${bookTitle}`,
    description: `Read the opening excerpt from ${bookTitle}, Book One of ${seriesName}.`,
    url: `${siteUrl}/excerpt`,
    type: "article",
  },
};

export default function ExcerptPage() {
  return (
    <div className="site-shell refined-site">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="reading-page">
        <div className="content-width">
          <nav aria-label="Reading navigation" className="reading-breadcrumb">
            <Link href="/#book">The books</Link>
            <span aria-hidden="true">/</span>
            <span>Book One</span>
            <span aria-hidden="true">·</span>
            <Link href="/excerpt/book-2">Book Two preview →</Link>
          </nav>
        </div>
        <article className="content-width reading-article">
          <p className="eyebrow">Chapter One · An excerpt</p>
          <h1>{bookTitle}</h1>
          <p className="reading-subtitle">Book One of {seriesName}</p>
          <div className="excerpt-prose">
            {excerptParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="reading-next">
            <p className="eyebrow">Continue the story</p>
            <h2>Enter The Shattered Pact.</h2>
            <a
              href="https://www.amazon.com/dp/B0GXH3NQNV"
              className="action-button"
              data-track-event="buy_book_one"
            >
              Get Book One on Kindle ↗
            </a>
            <div className="purchase-links">
              <a href={amazonLink} data-track-event="buy_book_one">
                Buy the paperback ↗
              </a>
              <Link href="/#signup">Join the reader list →</Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
