import {
  amazonLink,
  authorImage,
  authorName,
  bookCover,
  bookThreeAmazonLink,
  bookThreeTitle,
  bookTitle,
  excerptParagraphs,
  goodreadsLink,
  heroImage,
  readerHooks,
  series,
  seriesName,
} from "./site-data";
import NewsletterForm from "./newsletter-form";
import StructuredData from "./structured-data";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
const kindleLink = "https://www.amazon.com/dp/B0GXH3NQNV";

export default function Home() {
  return (
    <div className="site-shell refined-site">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <StructuredData />
        <section id="top" className="saga-hero" aria-labelledby="saga-title">
          <div
            className="hero-landscape"
            style={{ backgroundImage: `url('${heroImage}')` }}
            aria-hidden="true"
          />
          <div className="content-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="small-sigil" aria-hidden="true">
                  ✦
                </span>{" "}
                Epic dark fantasy
              </p>
              <h1 id="saga-title">
                The Wellspring <span>Saga</span>
              </h1>
              <p className="hero-tagline">
                The world was never meant to breathe.
                <br />
                When it finally does, it begins to break.
              </p>
              <div className="hero-start">
                <p className="chapter-label">
                  Your journey begins with Book One
                </p>
                <h2>{bookTitle}</h2>
                <p>
                  One impossible survivor. A world beginning to fracture. A
                  conflict older than creation itself.
                </p>
                <a
                  className="action-button"
                  href="/excerpt"
                  data-track-event="read_book_one_excerpt"
                >
                  Read the Book One preview <span aria-hidden="true">→</span>
                </a>
                <div className="purchase-links" aria-label="Buy Book One">
                  <span>Or make it yours</span>
                  <a href={kindleLink} data-track-event="buy_book_one">
                    Kindle ↗
                  </a>
                  <a href={amazonLink} data-track-event="buy_book_one">
                    Paperback ↗
                  </a>
                </div>
              </div>
            </div>
            <figure className="hero-book">
              <div className="cover-halo" aria-hidden="true" />
              <div className="book-frame">
                <img
                  src={bookCover}
                  alt="The Shattered Pact, Book One of The Wellspring Saga"
                  width="400"
                  height="600"
                  fetchPriority="high"
                />
              </div>
              <figcaption>
                <span aria-hidden="true">I</span> The beginning of the fracture
              </figcaption>
            </figure>
          </div>
          <div className="content-width latest-dispatch">
            <p>
              <span className="eyebrow">From the Wellspring</span>
              <span>
                Already on the journey? <strong>{bookThreeTitle}</strong>, Book
                Three, is available now.
              </span>
            </p>
            <a href={bookThreeAmazonLink} data-track-event="buy_book_three">
              Discover Book Three ↗
            </a>
          </div>
        </section>
        <section
          id="book"
          className="saga-library section-space"
          aria-labelledby="books-title"
        >
          <div className="content-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The reading order</p>
                <h2 id="books-title">One world. Deepening fractures.</h2>
              </div>
              <p>
                Begin with <em>The Shattered Pact.</em>
                <br />
                Follow the saga in order.
              </p>
            </div>
            <div className="book-shelf">
              {series.map((book, index) => (
                <article className="shelf-book" key={book.title}>
                  <div className="shelf-topline">
                    <span>0{book.position}</span>
                    <span>
                      {index === 0
                        ? "Start here"
                        : index === 2
                          ? "Latest release"
                          : "Continue the journey"}
                    </span>
                  </div>
                  <a
                    className="shelf-cover"
                    href={index === 0 ? "/excerpt" : book.link}
                    data-track-event={
                      index === 0 ? "read_book_one_excerpt" : book.trackEvent
                    }
                    aria-label={
                      index === 0
                        ? "Read a preview of The Shattered Pact"
                        : `Find ${book.title} on Amazon`
                    }
                  >
                    <img
                      src={book.cover}
                      alt={`${book.title} book cover`}
                      width="300"
                      height="450"
                      loading="lazy"
                    />
                  </a>
                  <p className="chapter-label">
                    {book.label} · {seriesName}
                  </p>
                  <h3>{book.title}</h3>
                  <p className="book-description">{book.description}</p>
                  <div className="shelf-actions">
                    {index === 0 ? (
                      <>
                        <a
                          className="text-link"
                          href="/excerpt"
                          data-track-event="read_book_one_excerpt"
                        >
                          Read the preview →
                        </a>
                        <div className="format-links">
                          <a
                            href={kindleLink}
                            data-track-event={book.trackEvent}
                          >
                            Buy Kindle ↗
                          </a>
                          <a
                            href={amazonLink}
                            data-track-event={book.trackEvent}
                          >
                            Buy paperback ↗
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <a
                          className="text-link"
                          href={book.link}
                          data-track-event={book.trackEvent}
                        >
                          Find on Amazon ↗
                        </a>
                        {index === 1 && (
                          <a
                            href="/excerpt/book-2"
                            data-track-event="read_book_two_excerpt"
                            className="muted-link"
                          >
                            Read Book Two preview →
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="world-notes">
              <p className="eyebrow">Beyond the familiar</p>
              <ul>
                {readerHooks.map((hook) => (
                  <li key={hook}>{hook}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="excerpt"
          className="opening-section section-space"
          aria-labelledby="opening-title"
        >
          <div className="content-width opening-grid">
            <div className="opening-heading">
              <p className="eyebrow">An invitation inside</p>
              <h2 id="opening-title">
                Every fracture
                <br />
                has a beginning.
              </h2>
              <p>
                The opening pages of <em>{bookTitle}</em>.<br />
                No signup needed. Just step inside.
              </p>
              <a
                className="text-link"
                href="/excerpt"
                data-track-event="read_book_one_excerpt"
              >
                Read the full excerpt →
              </a>
            </div>
            <div className="manuscript-preview">
              <p className="chapter-label">Book One · Chapter One</p>
              <blockquote>
                <p className="opening-line">{excerptParagraphs[0]}</p>
                <p>{excerptParagraphs[1]}</p>
                <p>{excerptParagraphs[2]}</p>
              </blockquote>
              <span className="manuscript-end" aria-hidden="true">
                ✦
              </span>
            </div>
          </div>
        </section>
        <section
          id="signup"
          className="reader-section section-space"
          aria-labelledby="reader-title"
        >
          <div className="content-width reader-panel">
            <div className="reader-intro">
              <p className="eyebrow">Letters from the Wellspring</p>
              <h2 id="reader-title">
                Stay close <br />
                to the fracture.
              </h2>
              <p>
                Release news, bonus lore, and behind-the-scenes notes from{" "}
                {authorName}.
              </p>
            </div>
            <div className="reader-form">
              <p className="chapter-label">Join the reader list</p>
              <NewsletterForm />
              <p className="signup-promise">
                About one email a month. No spam, no noise, just book news and
                saga extras.
              </p>
              <a className="muted-link" href="/privacy">
                Your privacy matters →
              </a>
            </div>
          </div>
        </section>
        <section
          id="series"
          className="author-section section-space"
          aria-labelledby="author-title"
        >
          <div className="content-width author-grid">
            <div className="author-portrait">
              <img
                src={authorImage}
                alt="A. Michael Wright"
                width="320"
                height="320"
                loading="lazy"
              />
              <p className="chapter-label">The storyteller behind the saga</p>
            </div>
            <div className="author-biography">
              <p className="eyebrow">About the author</p>
              <h2 id="author-title">{authorName}</h2>
              <p className="author-lead">
                Storyteller, designer, and habitual worldbuilder.
              </p>
              <p>
                His work has always lived somewhere between structure and
                imagination: data systems by day, fantasy worlds by night, with
                plenty of cooking, winemaking, and side projects in between. He
                likes building things from the ground up, whether that means a
                website, a game, a recipe, a vineyard dream, or an entire
                mythology.
              </p>
              <p>
                That instinct shapes his fiction: worlds with deep roots, broken
                systems, and characters forced to grow when everything around
                them begins to change.
              </p>
              <p>
                <em>The Shattered Pact</em> is his debut epic fantasy novel.
              </p>
              <a className="text-link" href={goodreadsLink}>
                Find Michael on Goodreads ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
