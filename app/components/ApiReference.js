const functions = [
  {
    name: "capitalize(str)",
    description: "Uppercases the first letter and lowercases the rest.",
    params: [
      {
        name: "str",
        type: "string",
        description: "The input string to capitalize.",
      },
    ],
    returns: 'string — The capitalized string, or "" if input is not a string.',
    example: `capitalize("hELLO wORLD");\n// => "Hello world"`,
  },
  {
    name: "removeExtraSpaces(str)",
    description:
      "Trims leading/trailing whitespace and collapses multiple spaces into one.",
    params: [
      {
        name: "str",
        type: "string",
        description: "The input string to clean.",
      },
    ],
    returns: 'string — The cleaned string, or "" if input is not a string.',
    example: `removeExtraSpaces("  too   many   spaces  ");\n// => "too many spaces"`,
  },
];

export default function ApiReference() {
  return (
    <section id="api" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">API Reference</h2>
          <p className="mt-3 text-muted">
            Everything jiya-npm exports — two functions, zero surprises.
          </p>
        </div>

        <div className="space-y-8">
          {functions.map((fn) => (
            <div
              key={fn.name}
              className="animate-fade-in-up rounded-2xl border border-card-border bg-card p-6 sm:p-8"
            >
              <h3 className="font-mono text-lg font-bold text-primary">
                {fn.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{fn.description}</p>

              {/* Parameters table */}
              <div className="mt-5">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  Parameters
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-card-border">
                        <th className="pb-2 pr-4 font-medium">Name</th>
                        <th className="pb-2 pr-4 font-medium">Type</th>
                        <th className="pb-2 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fn.params.map((p) => (
                        <tr key={p.name} className="border-b border-card-border/50">
                          <td className="py-2 pr-4 font-mono text-xs">{p.name}</td>
                          <td className="py-2 pr-4">
                            <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                              {p.type}
                            </span>
                          </td>
                          <td className="py-2 text-muted">{p.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Returns */}
              <div className="mt-4">
                <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  Returns
                </h4>
                <p className="text-sm">{fn.returns}</p>
              </div>

              {/* Example */}
              <div className="mt-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  Example
                </h4>
                <div className="overflow-x-auto rounded-xl border border-card-border bg-background">
                  <pre className="px-4 py-3 font-mono text-sm leading-relaxed">
                    <code>{fn.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
