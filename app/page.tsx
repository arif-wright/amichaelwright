const amazonLink = "https://www.amazon.com/dp/B0GXPLPBRY";
const goodreadsLink = "https://www.goodreads.com/"; // TODO: Replace with your Goodreads author or book link.
const bookCover = "/images/Book%201.png"; // TODO: Rename/update this path if you change the cover filename in public/images.
const heroImage = "/images/hero.png"; // TODO: Rename/update this path if you change the hero filename in public/images.

const readerHooks = [
  "A survivor marked by something impossible",
  "Ancient forces moving beneath reality",
  "Epic stakes with a dark mythic edge",
  "A fractured world where creation itself has a memory",
];

const readerSignals = [
  {
    title:
      "For readers who want their fantasy vast, strange, and edged with dread.",
    label: "Epic dark fantasy",
  },
  {
    title:
      "Book One of a growing saga built around mystery, consequence, and old powers waking.",
    label: "The Wellspring Saga",
  },
];

const series = [
  {
    label: "Book 1",
    title: "The Shattered Pact",
    status: "Available now",
  },
  {
    label: "Book 2",
    title: "The Fracture of Worlds",
    status: "Coming soon",
  },
];

const primaryButton =
  "stone-button min-w-52 px-6 py-4 text-center text-xs focus:outline-none focus:ring-2 focus:ring-[#f3c96a] focus:ring-offset-2 focus:ring-offset-[#050202]";

const secondaryButton =
  "stone-button stone-button-secondary min-w-52 px-6 py-4 text-center text-xs focus:outline-none focus:ring-2 focus:ring-[#d8a846] focus:ring-offset-2 focus:ring-offset-[#050202]";

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
            A. Michael Wright
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 text-xs font-black uppercase tracking-[0.18em] text-[#d9c39b] sm:flex"
          >
            {["Book", "Excerpt", "Updates", "Series"].map((item) => (
              <a
                key={item}
                className="transition hover:text-[#f3c96a]"
                href={`#${item === "Updates" ? "signup" : item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
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
              The Wellspring Saga begins
            </p>
            <p className="font-serif text-4xl font-semibold uppercase leading-none text-[#fff1c5] drop-shadow-[0_0_20px_rgba(216,168,70,0.22)] sm:text-6xl">
              The Shattered Pact
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              The world was never meant to breathe. When it finally does... it
              begins to break.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9cdb9] sm:text-xl">
              An epic dark fantasy about a fractured world and the forces
              awakening beneath it.
            </p>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:gap-8">
              <a href={amazonLink} className={primaryButton}>
                Buy on Amazon
              </a>
              <a href="#signup" className={secondaryButton}>
                Join the List
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#d9c39b]">
              {["Paperback", "Dark Fantasy", "Book One"].map((tag) => (
                <span
                  key={tag}
                  className="rune-chip px-3 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
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
              The Shattered Pact
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
              Buy Paperback on Amazon
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
            The mark on Riven&apos;s arm has never stopped burning.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#d9cdb9]">
            <p>
              He has spent seventeen years pretending it isn&apos;t there,
              pretending the light that bends wrong near his skin is nothing,
              that the hum beneath his feet is imagination.
            </p>
            <p>
              Then the forest stops singing, something older than memory turns
              its eyes toward him, and Riven&apos;s awakening pulls him toward a
              war the world was never supposed to remember.
            </p>
            <p>
              The Shattered Pact begins with one impossible survivor and a
              question no one is ready to answer: what happens when the forces
              holding reality together decide they are done?
            </p>
          </div>
          <a href={amazonLink} className={`${primaryButton} mt-8`}>
            Read on Amazon
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
              A. Michael Wright
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9cdb9]">
              A. Michael Wright writes epic fantasy exploring the tension
              between order, change, and the forces that shape reality itself.
            </p>
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
            Start The Wellspring Saga with The Shattered Pact, available now in
            paperback on Amazon.
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
