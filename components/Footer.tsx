import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white blueprint-border-b border-t border-deep-navy/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-wisteria"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="14" cy="14" r="2" fill="currentColor" />
                <line
                  x1="14"
                  y1="2"
                  x2="14"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="14"
                  y1="20"
                  x2="14"
                  y2="26"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="2"
                  y1="14"
                  x2="8"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="14"
                  x2="26"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-space-grotesk font-bold text-deep-navy text-sm">
                Curio Builder&apos;s Hub
              </span>
            </div>
            <p className="font-manrope text-xs text-deep-navy/40 tracking-wider uppercase">
              Est. 2026
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            <Link
              href="/#philosophy"
              className="font-manrope text-xs text-deep-navy/50 hover:text-wisteria transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="/#roadmap"
              className="font-manrope text-xs text-deep-navy/50 hover:text-wisteria transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/community"
              className="font-manrope text-xs text-deep-navy/50 hover:text-wisteria transition-colors"
            >
              Community
            </Link>
          </div>

          {/* Social placeholders */}
          <div className="flex items-center gap-4">
            {/* Instagram placeholder */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full blueprint-border flex items-center justify-center text-deep-navy/40 hover:text-wisteria hover:border-wisteria/30 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn placeholder */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full blueprint-border flex items-center justify-center text-deep-navy/40 hover:text-wisteria hover:border-wisteria/30 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Twitter/X placeholder */}
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full blueprint-border flex items-center justify-center text-deep-navy/40 hover:text-wisteria hover:border-wisteria/30 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-deep-navy/10 text-center">
          <p className="font-manrope text-xs text-deep-navy/30">
            &copy; {new Date().getFullYear()} Curio Builder&apos;s Hub · EST. 2026 · Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
