"use client";

import { useEffect, useRef, useState } from "react";
import { authorName } from "./site-data";

const links = [
  ["The books", "/#book"],
  ["Read an excerpt", "/excerpt"],
  ["Reader letters", "/#signup"],
  ["The author", "/#series"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function closeOutside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    function close() {
      setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 800px)");
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    window.addEventListener("popstate", close);
    window.addEventListener("hashchange", close);
    window.addEventListener("pageshow", close);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("popstate", close);
      window.removeEventListener("hashchange", close);
      window.removeEventListener("pageshow", close);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="saga-header" ref={header}>
        <div className="content-width header-inner">
          <a
            className="author-wordmark"
            href="/"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              ✦
            </span>
            <span>
              {authorName}
              <small>Author of The Wellspring Saga</small>
            </span>
          </a>
          <button
            ref={button}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span
              className={open ? "menu-icon is-open" : "menu-icon"}
              aria-hidden="true"
            >
              <i />
              <i />
            </span>
          </button>
          <nav
            id="primary-navigation"
            className={open ? "saga-nav is-open" : "saga-nav"}
            aria-label="Primary navigation"
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                event.relatedTarget !== button.current
              )
                setOpen(false);
            }}
          >
            {links.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
