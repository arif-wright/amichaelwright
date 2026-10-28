import type { Metadata } from "next";
import Link from "next/link";
import {
  authorName,
  bookTwoAmazonLink,
  bookTwoExcerptParagraphs,
  bookTwoTitle,
  seriesName,
  siteUrl,
} from "../../site-data";

import SiteHeader from "../../site-header";
import SiteFooter from "../../site-footer";
export const metadata: Metadata = {
  title: `Read an Excerpt from ${bookTwoTitle} | ${authorName}`,
  description: `Read an opening excerpt from ${bookTwoTitle}, Book Two of ${seriesName}.`,
  alternates: {
    canonical: "/excerpt/book-2",
  },
  openGraph: {
    title: `Read an Excerpt from ${bookTwoTitle}`,
    description: `Read the opening excerpt from ${bookTwoTitle}, Book Two of ${seriesName}.`,
    url: `${siteUrl}/excerpt/book-2`,
    type: "article",
  },
};

export default function BookTwoExcerptPage() {
  return (
    <div className="site-shell refined-site">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="reading-page">
        <div className="content-width">
          <nav aria-label="Reading navigation" className="reading-breadcrumb">
            <Link href="/#book">The books</Link>
            <span aria-hidden="true">/</span>
            <Link href="/excerpt">Book One preview</Link>
            <span aria-hidden="true">/</span>
            <span>Book Two</span>
          </nav>
        </div>
        <article className="content-width reading-article">
          <p className="eyebrow">Chapter One · An excerpt</p>
          <h1>{bookTwoTitle}</h1>
          <p className="reading-subtitle">Book Two of {seriesName}</p>
          <h2>The Gate That Surrendered</h2>
          <div className="excerpt-prose">
            {bookTwoExcerptParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="reading-next">
            <p className="eyebrow">Continue the journey</p>
            <h2>The fracture widens.</h2>
            <a
              href={bookTwoAmazonLink}
              className="action-button"
              data-track-event="buy_book_two"
            >
              Find Book Two on Amazon ↗
            </a>
            <div>
              <Link href="/#signup" className="text-link">
                Join the reader list →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
