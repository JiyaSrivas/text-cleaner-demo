"use client";

import { useState, useCallback } from "react";

const EXAMPLE_TEXT = "   hELLO    wORLD!   this   is   a    MESSY    string   ";

export default function Demo() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [original, setOriginal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [history, setHistory] = useState([]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  }, []);

  async function handleClean(action) {
    if (!text.trim()) {
      setError("Please enter some text first.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/clean", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, action }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setResult("");
      } else {
        setResult(data.result);
        setOriginal(text);
        setHistory((prev) => {
          const entry = {
            id: Date.now(),
            action,
            input: text.length > 40 ? text.slice(0, 40) + "…" : text,
            output: data.result.length > 40 ? data.result.slice(0, 40) + "…" : data.result,
          };
          return [entry, ...prev].slice(0, 5);
        });
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setText("");
    setResult("");
    setOriginal("");
    setError("");
  }

  function handleExample() {
    setText(EXAMPLE_TEXT);
    setResult("");
    setOriginal("");
    setError("");
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
    showToast("Copied!");
  }

  const actionLabels = {
    capitalize: "Capitalize",
    removeExtraSpaces: "Remove Spaces",
    both: "Both",
  };

  return (
    <section id="demo" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Live Demo</h2>
          <p className="mt-3 text-muted">
            Type messy text, pick an action, and see jiya-npm clean it instantly.
          </p>
        </div>

        <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8">
          {/* Input */}
          <div className="relative">
            <label htmlFor="input-text" className="mb-2 block text-sm font-medium">
              Input Text
            </label>
            <textarea
              id="input-text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setError("");
              }}
              placeholder='Try something like: "   hELLO    wORLD!  "'
              rows={4}
              className="w-full resize-none rounded-xl border border-card-border bg-background px-4 py-3 font-mono text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <span className="absolute bottom-3 right-3 text-xs text-muted">
              {text.length} chars
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => handleClean("capitalize")}
              disabled={loading}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark active:scale-[0.97] disabled:opacity-50"
            >
              Capitalize
            </button>
            <button
              onClick={() => handleClean("removeExtraSpaces")}
              disabled={loading}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark active:scale-[0.97] disabled:opacity-50"
            >
              Remove Extra Spaces
            </button>
            <button
              onClick={() => handleClean("both")}
              disabled={loading}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark active:scale-[0.97] disabled:opacity-50"
            >
              Both
            </button>
            <button
              onClick={handleClear}
              className="rounded-lg border border-card-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
            >
              Clear
            </button>
            <button
              onClick={handleExample}
              className="rounded-lg border border-card-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
            >
              ✨ Try an example
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Cleaning your text…
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className="mt-6 animate-fade-in-up">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">Result</span>
                <button
                  onClick={copyResult}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-muted transition-colors hover:text-primary"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50/50 px-4 py-3 font-mono text-sm dark:border-green-800 dark:bg-green-950/30">
                {result}
              </div>

              {/* Before / After comparison */}
              {original && (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted uppercase tracking-wider">Before</span>
                    <div className="rounded-lg border border-card-border bg-background px-3 py-2 font-mono text-xs text-red-500 dark:text-red-400 break-all">
                      &ldquo;{original}&rdquo;
                    </div>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted uppercase tracking-wider">After</span>
                    <div className="rounded-lg border border-card-border bg-background px-3 py-2 font-mono text-xs text-green-600 dark:text-green-400 break-all">
                      &ldquo;{result}&rdquo;
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* History */}
          {history.length > 0 && (
            <div className="mt-8 border-t border-card-border pt-6">
              <h3 className="mb-3 text-sm font-medium text-muted">Recent History</h3>
              <div className="space-y-2">
                {history.map((h) => (
                  <div
                    key={h.id}
                    className="flex items-center gap-3 rounded-lg bg-background px-3 py-2 text-xs"
                  >
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                      {actionLabels[h.action]}
                    </span>
                    <span className="truncate text-muted">{h.input}</span>
                    <svg className="h-3 w-3 shrink-0 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="truncate font-medium">{h.output}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-toast rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg">
          {toast}
        </div>
      )}
    </section>
  );
}
