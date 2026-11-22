"use client";

import { useState } from "react";

const steps = [
  {
    step: 1,
    title: "Install",
    description: "Add jiya-npm to your project with npm.",
    code: "npm install jiya-npm",
    language: "bash",
  },
  {
    step: 2,
    title: "Import",
    description: "Require the functions you need.",
    code: `const { capitalize, removeExtraSpaces } = require("jiya-npm");`,
    language: "js",
  },
  {
    step: 3,
    title: "Use",
    description: "Clean your text in one line.",
    code: `capitalize("hELLO wORLD");
// => "Hello world"

removeExtraSpaces("  too   many   spaces  ");
// => "too many spaces"`,
    language: "js",
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 rounded-md p-1.5 text-muted opacity-0 transition-all group-hover:opacity-100 hover:text-primary"
      aria-label="Copy code"
    >
      {copied ? (
        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

export default function HowItWorks() {
  return (
    <section id="install" className="scroll-mt-20 bg-card/50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-muted">Three steps. That&apos;s it.</p>
        </div>

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.step} className="animate-fade-in-up flex gap-6">
              {/* Step number */}
              <div className="flex shrink-0 flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {s.step}
                </div>
                {s.step < steps.length && (
                  <div className="mt-2 h-full w-px bg-card-border" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.description}</p>
                <div className="group relative mt-3 overflow-hidden rounded-xl border border-card-border bg-background">
                  <div className="flex items-center gap-2 border-b border-card-border px-4 py-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-muted">{s.language}</span>
                  </div>
                  <pre className="overflow-x-auto px-4 py-3 font-mono text-sm leading-relaxed">
                    <code>{s.code}</code>
                  </pre>
                  <CopyButton text={s.code} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
