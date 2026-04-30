import {
  amazonLink,
  authorImage,
  authorName,
  bookCover,
  bookTitle,
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

function OrnateDivider() {
  return (
    <div className="divider-frame" aria-hidden="true" />
  );
}

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-hidden text-[#f7ead1]">
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
            {["Book", "Excerpt", "Updates", "Series"].map((item) => (
              <a
                key={item}
                className="transition hover:text-[#f3c96a]"
                href={
                  item === "Excerpt"
                    ? "/excerpt"
                    : `#${item === "Updates" ? "signup" : item.toLowerCase()}`
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
              {seriesName} begins
            </p>
            <h1 className="font-serif text-5xl font-semibold uppercase leading-none text-[#fff1c5] drop-shadow-[0_0_20px_rgba(216,168,70,0.22)] sm:text-7xl lg:text-8xl">
              {bookTitle}
            </h1>
            <p className="mt-6 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
              The world was never meant to breathe. When it finally does... it
              begins to break.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9cdb9] sm:text-xl">
              For readers of mythic, high-stakes fantasy where old powers,
              broken worlds, and impossible survivors collide.
            </p>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:gap-8">
              <a href={amazonLink} className={primaryButton}>
                Buy on Amazon
              </a>
              <a href="#signup" className={secondaryButton}>
                Join the List
              </a>
            </div>
            <nav
              aria-label="Mobile quick links"
              className="mt-8 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.18em] text-[#d9c39b] sm:hidden"
            >
              <a className="transition hover:text-[#f3c96a]" href="#book">
                Book
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
            <div className="stone-panel relative p-3 shadow-[0_0_60px_rgba(143,28,18,0.38)]">
              <div className="absolute -inset-5 -z-10 bg-[#8f1c12]/20 blur-3xl" />
              <img
                src={bookCover}
                alt="Book cover for The Shattered Pact"
                className="aspect-[2/3] w-full object-cover shadow-2xl ring-1 ring-[#f3c96a]/45"
              />
            </div>
          </div>
        </div>
      </section>

      <OrnateDivider />

      <section id="book" className="stone-bg px-5 py-20 sm:px-8 lg:px-12">
        <div className="stone-panel mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div className="max-w-xs border border-[#34505a]/70 bg-black/40 p-2 shadow-[0_0_0_3px_rgba(0,0,0,0.55)]">
            <img
              src={bookCover}
              alt="The Shattered Pact paperback cover"
              className="aspect-[2/3] w-full object-cover shadow-xl ring-1 ring-[#f3c96a]/20"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d8a846]">
              Book One
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold uppercase text-[#fff1c5] sm:text-5xl">
              {bookTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9cdb9]">
              Riven is the only one who survived something he shouldn&apos;t
              have. As reality begins to fracture, he&apos;s pulled into a
              conflict older than creation itself. He may not be the one meant
              to stop it, but the reason it started.
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
            <a href={amazonLink} className={`${primaryButton} mt-8`}>
              Buy on Amazon
            </a>
          </div>
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
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#d9cdb9]">
            {excerptParagraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href="/excerpt" className={`${primaryButton} mt-8`}>
            Read Chapter One
          </a>
        </div>
      </section>

      <OrnateDivider />

      <section id="signup" className="leather-bg px-5 py-20 sm:px-8 lg:px-12">
        <div className="stone-panel mx-auto max-w-4xl p-6 sm:p-10">
          <h2 className="font-serif text-3xl font-semibold text-[#fff1c5] sm:text-4xl">
            Get exclusive lore, updates, and early access to Book 2
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#d9cdb9]">
            Step closer to the fracture: new chapters, launch news, and
            behind-the-scenes notes from the Wellspring Saga.
          </p>

          {/* TODO: Replace this placeholder form with your ConvertKit embed form script/code. */}
          <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="min-h-12 rounded-sm border border-[#6e1b12] bg-black/45 px-4 text-[#fff5d6] outline-none transition placeholder:text-[#8d7b62] focus:border-[#f3c96a] focus:ring-2 focus:ring-[#f3c96a]/35"
              required
            />
            <button type="submit" className={primaryButton}>
              Join the List
            </button>
          </form>
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
              The Series
            </p>
            <div className="mt-6 divide-y divide-[#6e1b12]/70 border-y border-[#6e1b12]/70">
              {series.map((book) => (
                <article
                  key={book.title}
                  className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
                >
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8d7b62]">
                    {book.label}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#fff1c5]">
                    {book.title}
                  </h3>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d8a846]">
                    {book.status}
                  </p>
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
            Begin Book One
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold text-[#fff1c5] sm:text-5xl">
            Enter the fracture before it spreads.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#d9cdb9]">
            Start {seriesName} with {bookTitle}, available now on Amazon.
          </p>
          <a href={amazonLink} className={`${primaryButton} mt-8`}>
            Buy The Shattered Pact
          </a>
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
