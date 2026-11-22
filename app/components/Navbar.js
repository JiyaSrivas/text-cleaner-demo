"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const links = [
    { label: "Demo", href: "#demo" },
    { label: "Features", href: "#features" },
    { label: "Install", href: "#install" },
    { label: "API", href: "#api" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-mono">
            jn
          </span>
          jiya-npm
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* npm link */}
          <a
            href="https://www.npmjs.com/package/jiya-npm"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-card-border px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary sm:inline-flex items-center gap-1.5"
          >
            <svg viewBox="0 0 780 250" className="h-4 w-auto" fill="currentColor">
              <path d="M240 250h100V50h100v200h100V0H240zM0 0v250h240V50H140v200H40V0z"/>
            </svg>
            npm
          </a>

          {/* GitHub link */}
          <a
            href="https://github.com/JiyaSrivas/jiya-npm"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-card-border px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary sm:inline-flex items-center gap-1.5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-card md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-card-border px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2">
            <a
              href="https://www.npmjs.com/package/jiya-npm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-card-border px-3 py-1.5 text-sm font-medium text-muted"
            >
              npm
            </a>
            <a
              href="https://github.com/JiyaSrivas/jiya-npm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-card-border px-3 py-1.5 text-sm font-medium text-muted"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
