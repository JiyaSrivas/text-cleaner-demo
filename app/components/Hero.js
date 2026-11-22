"use client";

import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  function copyInstall() {
    navigator.clipboard.writeText("npm install jiya-npm");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-32">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium text-primary">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          v1.0.0 — Now available on npm
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Clean your text with{" "}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            one line of code
          </span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          <strong>jiya-npm</strong> is a tiny, zero-dependency utility that capitalizes text
          and removes extra spaces. Simple, fast, and tested.
        </p>

        {/* CTA row */}
        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
          >
            Try it now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          {/* Install box */}
          <button
            onClick={copyInstall}
            className="group inline-flex items-center gap-3 rounded-xl border border-card-border bg-card px-5 py-3 font-mono text-sm transition-colors hover:border-primary/40"
          >
            <span className="text-muted">$</span>
            <span>npm install jiya-npm</span>
            <span className="text-muted transition-colors group-hover:text-primary">
              {copied ? (
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
