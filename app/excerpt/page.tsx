import type { Metadata } from "next";
import Link from "next/link";
import {
  amazonLink,
  authorName,
  bookTitle,
  excerptParagraphs,
  primaryButton,
  secondaryButton,
  seriesName,
} from "../site-data";

export const metadata: Metadata = {
  title: `Read an Excerpt from ${bookTitle} | ${authorName}`,
  description: `Read an opening excerpt from ${bookTitle}, Book One of ${seriesName}.`,
};

export default function ExcerptPage() {
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
          <nav
            aria-label="Excerpt navigation"
            className="flex items-center gap-5 text-xs font-black uppercase tracking-[0.18em] text-[#d9c39b]"
          >
            <Link className="transition hover:text-[#f3c96a]" href="/">
              Home
            </Link>
            <Link className="transition hover:text-[#f3c96a]" href="/#signup">
              Updates
            </Link>
          </nav>
        </div>
      </header>

      <section className="stone-bg px-5 py-16 sm:px-8 lg:px-12">
        <article className="stone-panel mx-auto max-w-4xl px-6 py-14 sm:px-10 lg:px-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
            Chapter One Excerpt
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold uppercase leading-tight text-[#fff1c5] sm:text-6xl">
            {bookTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d9cdb9]">
            Book One of {seriesName}
          </p>

          <div className="excerpt-prose mt-12 space-y-6 text-xl leading-9 text-[#efe0c3]">
            {excerptParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:gap-8">
            <a href={amazonLink} className={primaryButton}>
              Buy on Amazon
            </a>
            <Link href="/#signup" className={secondaryButton}>
              Join the List
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
