const amazonLink = "https://www.amazon.com/dp/B0GXPLPBRY";
const goodreadsLink = "https://www.goodreads.com/"; // TODO: Replace with your Goodreads author or book link.
const bookCover = "/images/Book%201.png"; // TODO: Rename/update this path if you change the cover filename in public/images.
const heroImage = "/images/hero-bg-placeholder.svg"; // TODO: Replace with a cinematic hero image in public/images if desired.

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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050308] text-stone-100">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <a
            href="#top"
            className="font-serif text-lg font-semibold text-white transition hover:text-[#d9b566]"
          >
            A. Michael Wright
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.16em] text-stone-300 sm:flex"
          >
            <a className="transition hover:text-[#d9b566]" href="#book">
              Book
            </a>
            <a className="transition hover:text-[#d9b566]" href="#excerpt">
              Excerpt
            </a>
            <a className="transition hover:text-[#d9b566]" href="#signup">
              Updates
            </a>
            <a className="transition hover:text-[#d9b566]" href="#series">
              Series
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[92vh] items-center px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_18%,rgba(111,53,170,0.34),transparent_34%),linear-gradient(180deg,rgba(5,3,8,0.35),#050308_88%)]" />
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center opacity-32"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050308] to-transparent" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b566]">
              The Wellspring Saga begins
            </p>
            <p className="font-serif text-3xl font-semibold leading-none text-white sm:text-5xl">
              The Shattered Pact
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              The world was never meant to breathe. When it finally does... it
              begins to break.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
              An epic dark fantasy about a fractured world and the forces
              awakening beneath it.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={amazonLink}
                className="inline-flex items-center justify-center rounded border border-[#f4d48b] bg-[#d9b566] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#120813] shadow-[0_0_36px_rgba(217,181,102,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f1cf7a] focus:outline-none focus:ring-2 focus:ring-[#f4d48b] focus:ring-offset-2 focus:ring-offset-[#050308]"
              >
                Buy on Amazon
              </a>
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded border border-white/18 bg-white/7 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#a56cff] hover:bg-[#6f35aa]/30 focus:outline-none focus:ring-2 focus:ring-[#a56cff] focus:ring-offset-2 focus:ring-offset-[#050308]"
              >
                Join the List
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
              <span className="border border-white/14 bg-black/25 px-3 py-2">
                Paperback
              </span>
              <span className="border border-white/14 bg-black/25 px-3 py-2">
                Dark Fantasy
              </span>
              <span className="border border-white/14 bg-black/25 px-3 py-2">
                Book One
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative">
              <div className="absolute -inset-4 rounded bg-[#6f35aa]/22 blur-3xl" />
              <img
                src={bookCover}
                alt="Book cover for The Shattered Pact"
                className="relative aspect-[2/3] w-full rounded object-cover shadow-2xl ring-1 ring-[#d9b566]/45"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 border-y border-white/10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="max-w-xs">
            <img
              src={bookCover}
              alt="The Shattered Pact paperback cover"
              className="aspect-[2/3] w-full rounded object-cover shadow-xl ring-1 ring-white/15"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b566]">
              Book One
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-5xl">
              The Shattered Pact
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Riven is the only one who survived something he shouldn&apos;t
              have. As reality begins to fracture, he&apos;s pulled into a
              conflict older than creation itself. He may not be the one meant
              to stop it, but the reason it started.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {readerHooks.map((hook) => (
                <div
                  key={hook}
                  className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-stone-300 transition hover:border-[#d9b566]/45 hover:bg-[#d9b566]/5"
                >
                  {hook}
                </div>
              ))}
            </div>
            <a
              href={amazonLink}
              className="mt-8 inline-flex items-center justify-center rounded border border-[#f4d48b] bg-[#d9b566] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#120813] transition hover:-translate-y-0.5 hover:bg-[#f1cf7a] focus:outline-none focus:ring-2 focus:ring-[#f4d48b] focus:ring-offset-2 focus:ring-offset-[#050308]"
            >
              Buy Paperback on Amazon
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {readerSignals.map((signal) => (
            <article
              key={signal.label}
              className="border border-white/10 bg-[#0b0710] p-6"
            >
              <h2 className="font-serif text-2xl leading-9 text-white">
                {signal.title}
              </h2>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#d9b566]">
                {signal.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="excerpt" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl border-y border-white/10 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b566]">
            A Glimpse Inside
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
            The mark on Riven&apos;s arm has never stopped burning.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-stone-300">
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
          <a
            href={amazonLink}
            className="mt-8 inline-flex items-center justify-center rounded border border-[#f4d48b] bg-[#d9b566] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#120813] transition hover:-translate-y-0.5 hover:bg-[#f1cf7a] focus:outline-none focus:ring-2 focus:ring-[#f4d48b] focus:ring-offset-2 focus:ring-offset-[#050308]"
          >
            Read on Amazon
          </a>
        </div>
      </section>

      <section id="signup" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded border border-[#6f35aa]/45 bg-[#120813]/72 p-6 shadow-[0_0_60px_rgba(111,53,170,0.22)] sm:p-10">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Get exclusive lore, updates, and early access to Book 2
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-stone-300">
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
              className="min-h-12 rounded border border-white/15 bg-black/35 px-4 text-white outline-none transition placeholder:text-stone-500 focus:border-[#d9b566] focus:ring-2 focus:ring-[#d9b566]/35"
              required
            />
            <button
              type="submit"
              className="min-h-12 rounded border border-[#a56cff] bg-[#6f35aa] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#8147c4] focus:outline-none focus:ring-2 focus:ring-[#a56cff] focus:ring-offset-2 focus:ring-offset-[#120813]"
            >
              Join the List
            </button>
          </form>
        </div>
      </section>

      <section id="series" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b566]">
              About the Author
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
              A. Michael Wright
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              A. Michael Wright writes epic fantasy exploring the tension
              between order, change, and the forces that shape reality itself.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b566]">
              The Series
            </p>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {series.map((book) => (
                <article
                  key={book.title}
                  className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-stone-500">
                    {book.label}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {book.title}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9b566]">
                    {book.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl border border-[#d9b566]/25 bg-[linear-gradient(135deg,rgba(217,181,102,0.12),rgba(111,53,170,0.12),rgba(0,0,0,0.18))] px-6 py-10 text-center sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b566]">
            Begin Book One
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold text-white sm:text-5xl">
            Enter the fracture before it spreads.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Start The Wellspring Saga with The Shattered Pact, available now in
            paperback on Amazon.
          </p>
          <a
            href={amazonLink}
            className="mt-8 inline-flex items-center justify-center rounded border border-[#f4d48b] bg-[#d9b566] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#120813] shadow-[0_0_36px_rgba(217,181,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#f1cf7a] focus:outline-none focus:ring-2 focus:ring-[#f4d48b] focus:ring-offset-2 focus:ring-offset-[#050308]"
          >
            Buy The Shattered Pact
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} A. Michael Wright</p>
          <nav aria-label="Footer links" className="flex flex-wrap gap-5">
            <a className="transition hover:text-[#d9b566]" href={amazonLink}>
              Amazon
            </a>
            <a className="transition hover:text-[#d9b566]" href={goodreadsLink}>
              Goodreads
            </a>
            <a className="transition hover:text-[#d9b566]" href="#signup">
              Email signup
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
