import { authorName, goodreadsLink, seriesName } from "./site-data";

export default function SiteFooter() {
  return (
    <footer className="saga-footer">
      <div className="content-width footer-inner">
        <div>
          <a href="/" className="footer-brand">
            {seriesName}
          </a>
          <p>Epic dark fantasy by {authorName}</p>
          <small>
            © {new Date().getFullYear()} {authorName}
          </small>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#book">The books</a>
          <a href={goodreadsLink}>Goodreads</a>
          <a href="/#signup">Reader letters</a>
          <a href="/privacy">Privacy</a>
          <a href="/unsubscribe">Unsubscribe</a>
        </nav>
        <a className="back-top" href="#main-content">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
