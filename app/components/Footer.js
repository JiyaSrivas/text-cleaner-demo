export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-card/50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold">jiya-npm</p>
            <p className="mt-1 text-xs text-muted">
              Built with ♥ by{" "}
              <a
                href="https://github.com/JiyaSrivas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Jiya Srivas
              </a>
            </p>
          </div>

          {/* Center links */}
          <div className="flex gap-6 text-sm text-muted">
            <a
              href="https://www.npmjs.com/package/jiya-npm"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              npm
            </a>
            <a
              href="https://github.com/JiyaSrivas/jiya-npm"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a href="#demo" className="transition-colors hover:text-primary">
              Demo
            </a>
            <a href="#api" className="transition-colors hover:text-primary">
              API
            </a>
          </div>

          {/* Right */}
          <p className="text-xs text-muted">MIT License</p>
        </div>
      </div>
    </footer>
  );
}
