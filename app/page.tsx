import {
  amazonLink,
  authorImage,
  authorName,
  bookTitle,
  bookTwoAmazonLink,
  bookTwoExcerptParagraphs,
  bookTwoTitle,
  excerptParagraphs,
  goodreadsLink,
  heroImage,
  primaryButton,
  readerHooks,
  readerSignals,
  secondaryButton,
  series,
  seriesName,
} from "./site-data";
import NewsletterForm from "./newsletter-form";
import StructuredData from "./structured-data";

function OrnateDivider() {
  return (
    <div className="divider-frame" aria-hidden="true" />
  );
}

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-hidden text-[#f7ead1]">
      <StructuredData />
      <header className="absolute inset-x-0 top-0 z-20 border-b border-[#34505a]/55 bg-black/55 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <a
            href="#top"
            className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-[#f6d98d] transition hover:text-white"
          >
            {authorName}
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 text-xs font-black uppercase tracking-[0.18em] text-[#d9c39b] sm:flex"
          >
            {["Books", "Excerpt", "Updates", "Series"].map((item) => (
              <a
                key={item}
                className="transition hover:text-[#f3c96a]"
                href={
                  item === "Excerpt"
                    ? "/excerpt"
                    : `#${
                        item === "Updates"
                          ? "signup"
                          : item === "Books"
                            ? "book"
                            : item.toLowerCase()
                      }`
                }
              >
                {item}
              </a>
            ))}
            <a
              className="transition hover:text-[#f3c96a]"
              href={goodreadsLink}
            >
              Goodreads
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-screen items-center px-5 py-28 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_48%,rgba(221,86,32,0.25),transparent_28%),radial-gradient(circle_at_18%_22%,rgba(111,19,15,0.55),transparent_30%),linear-gradient(180deg,rgba(5,2,2,0.18),#050202_92%)]" />
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center opacity-40 saturate-125"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#050202] to-transparent" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#d8a846]">
              Books One and Two available now
            </p>
            <h1 className="font-serif text-5xl font-semibold uppercase leading-none text-[#fff1c5] drop-shadow-[0_0_20px_rgba(216,168,70,0.22)] sm:text-7xl lg:text-8xl">
              {seriesName}
            </h1>
            <p className="mt-6 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
              The world was never meant to breathe. When it finally does... it
              begins to break.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9cdb9] sm:text-xl">
              Begin with {bookTitle}, then continue into {bookTwoTitle}. A
              mythic dark fantasy saga where old powers, broken worlds, and
              impossible survivors collide.
            </p>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:gap-8">
              <a href={amazonLink} className={primaryButton}>
                Buy Book One
              </a>
              <a href={bookTwoAmazonLink} className={secondaryButton}>
                Buy Book Two
              </a>
            </div>
            <nav
              aria-label="Mobile quick links"
              className="mt-8 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.18em] text-[#d9c39b] sm:hidden"
            >
              <a className="transition hover:text-[#f3c96a]" href="#book">
                Books
              </a>
              <a className="transition hover:text-[#f3c96a]" href="/excerpt">
                Excerpt
              </a>
              <a className="transition hover:text-[#f3c96a]" href="#signup">
                Updates
              </a>
            </nav>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="stone-panel relative grid grid-cols-2 gap-3 p-3 shadow-[0_0_60px_rgba(143,28,18,0.38)]">
              <div className="absolute -inset-5 -z-10 bg-[#8f1c12]/20 blur-3xl" />
              {series.map((book) => (
                <img
                  key={book.title}
                  src={book.cover}
                  alt={`Book cover for ${book.title}`}
                  className="aspect-[2/3] w-full object-cover shadow-2xl ring-1 ring-[#f3c96a]/45"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <OrnateDivider />

      <section id="book" className="stone-bg px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
              The Books
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold uppercase text-[#fff1c5] sm:text-5xl">
              Begin the saga, then follow the fracture.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9cdb9]">
              The first two books of {seriesName} are available now on Amazon.
              Start with {bookTitle}, then continue into {bookTwoTitle}.
            </p>
            <p className="mt-5 rune-chip inline-block px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#d9c39b]">
              New to the saga? Start with {bookTitle}.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {series.map((book) => (
              <article
                key={book.title}
                className="stone-panel grid gap-6 p-5 sm:grid-cols-[10rem_1fr] sm:p-6"
              >
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-36 border border-[#34505a]/70 object-cover shadow-xl ring-1 ring-[#f3c96a]/20 sm:w-full"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
                    {book.label}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-[#fff1c5]">
                    {book.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[#d9cdb9]">
                    {book.description}
                  </p>
                  <a href={book.link} className={`${primaryButton} mt-auto pt-7`}>
                    {book.cta}
                  </a>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#8d7b62]">
                    {book.formatNote}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="stone-panel mt-10 p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
              For Readers Who Want
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {readerHooks.map((hook) => (
                <div
                  key={hook}
                  className="rune-chip px-4 py-4 text-sm font-semibold leading-6 text-[#d9cdb9] transition hover:border-[#d8a846]/70 hover:bg-[#2a0908]/45"
                >
                  {hook}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OrnateDivider />

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="stone-panel mx-auto max-w-6xl p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
            Series Facts
          </p>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Series", seriesName],
              ["Author", authorName],
              ["Genre", "Epic dark fantasy"],
              ["Reading order", `${bookTitle}, then ${bookTwoTitle}`],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-black uppercase tracking-[0.2em] text-[#8d7b62]">
                  {label}
                </dt>
                <dd className="mt-2 font-serif text-xl leading-7 text-[#fff1c5]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <OrnateDivider />

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {readerSignals.map((signal) => (
            <article
              key={signal.label}
              className="stone-panel p-6"
            >
              <h2 className="font-serif text-2xl leading-9 text-[#fff1c5]">
                {signal.title}
              </h2>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#d8a846]">
                {signal.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <OrnateDivider />

      <section id="excerpt" className="stone-bg px-5 py-20 sm:px-8 lg:px-12">
        <div className="stone-panel mx-auto max-w-4xl px-6 py-16 sm:px-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
            A Glimpse Inside
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#fff1c5] sm:text-4xl">
            Read the opening pages before you enter the fracture.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Book One",
                title: bookTitle,
                paragraphs: excerptParagraphs.slice(0, 2),
                href: "/excerpt",
                cta: "Read Book One",
              },
              {
                label: "Book Two",
                title: bookTwoTitle,
                paragraphs: bookTwoExcerptParagraphs.slice(0, 2),
                href: "/excerpt/book-2",
                cta: "Read Book Two",
              },
            ].map((sample) => (
              <article
                key={sample.title}
                className="rune-chip flex flex-col px-5 py-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d8a846]">
                  {sample.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#fff1c5]">
                  {sample.title}
                </h3>
                <div className="mt-5 flex-1 space-y-4 text-base leading-7 text-[#d9cdb9]">
                  {sample.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a href={sample.href} className={`${primaryButton} mt-7`}>
                  {sample.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OrnateDivider />

      <section id="signup" className="leather-bg px-5 py-20 sm:px-8 lg:px-12">
        <div className="stone-panel mx-auto max-w-4xl p-6 sm:p-10">
          <h2 className="font-serif text-3xl font-semibold text-[#fff1c5] sm:text-4xl">
            Get Book 3 news, exclusive lore, and saga updates
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#d9cdb9]">
            Step closer to the fracture: future release news,
            behind-the-scenes notes, and updates from The Wellspring Saga.
          </p>

          <NewsletterForm />
          <p className="mt-4 text-sm leading-6 text-[#8d7b62]">
            About one email a month. No spam, no noise, just book news and
            saga extras.
          </p>
        </div>
      </section>

      <OrnateDivider />

      <section id="series" className="stone-bg px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="stone-panel p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
              About the Author
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#fff1c5] sm:text-4xl">
              {authorName}
            </h2>
            <div className="author-copy mt-6 max-w-2xl text-lg leading-8 text-[#d9cdb9]">
              <div className="author-photo mb-5 aspect-square w-32 border border-[#6e1b12]/70 bg-black/40 sm:float-left sm:mb-3 sm:mr-6">
                <img
                  src={authorImage}
                  alt="A. Michael Wright"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p>
                  A. Michael Wright is a storyteller, designer, and habitual
                  worldbuilder.
                </p>
                <p>
                  His work has always lived somewhere between structure and
                  imagination: data systems by day, fantasy worlds by night,
                  with plenty of cooking, winemaking, and side projects in
                  between. He likes building things from the ground up, whether
                  that means a website, a game, a recipe, a vineyard dream, or
                  an entire mythology.
                </p>
                <p>
                  That instinct shapes his fiction: worlds with deep roots,
                  broken systems, and characters forced to grow when everything
                  around them begins to change.
                </p>
                <p>The Shattered Pact is his debut epic fantasy novel.</p>
              </div>
            </div>
          </div>

          <div className="stone-panel p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
              Reading Order
            </p>
            <div className="mt-6 divide-y divide-[#6e1b12]/70 border-y border-[#6e1b12]/70">
              {series.map((book) => (
                <article
                  key={book.title}
                  className="grid gap-4 py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:items-center"
                >
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-20 border border-[#34505a]/70 object-cover shadow-lg ring-1 ring-[#f3c96a]/20 sm:w-full"
                  />
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8d7b62]">
                      {book.label}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#fff1c5]">
                      {book.title}
                    </h3>
                  </div>
                  <a
                    href={book.link}
                    className="text-sm font-black uppercase tracking-[0.18em] text-[#d8a846] transition hover:text-[#fff1c5]"
                  >
                    {book.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OrnateDivider />

      <section className="leather-bg px-5 pb-20 pt-14 sm:px-8 lg:px-12">
        <div className="stone-panel mx-auto max-w-6xl px-6 py-10 text-center sm:px-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
            Enter the Wellspring Saga
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold text-[#fff1c5] sm:text-5xl">
            Enter the fracture before it spreads.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#d9cdb9]">
            Start {seriesName} with {bookTitle}, then continue into The
            Fracture of Worlds.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <a href={amazonLink} className={primaryButton}>
              Buy Book One
            </a>
            <a href={bookTwoAmazonLink} className={secondaryButton}>
              Buy Book Two
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#6e1b12]/70 bg-black/35 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-[#8d7b62] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} A. Michael Wright</p>
          <nav aria-label="Footer links" className="flex flex-wrap gap-5">
            <a className="transition hover:text-[#d8a846]" href={amazonLink}>
              Amazon
            </a>
            <a className="transition hover:text-[#d8a846]" href={goodreadsLink}>
              Goodreads
            </a>
            <a className="transition hover:text-[#d8a846]" href="#signup">
              Email signup
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
