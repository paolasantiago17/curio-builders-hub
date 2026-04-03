import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-off-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-block">
              <span className="font-space-grotesk text-xs font-medium tracking-[0.15em] uppercase text-deep-navy blueprint-border px-4 py-2 rounded-full bg-white">
                Est. 2026 · Curio Builder Hub
              </span>
            </div>

            {/* H1 */}
            <div>
              <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                <span className="text-deep-navy block">A cultivated space</span>
                <span className="text-wisteria block">for builders,</span>
                <span className="text-deep-navy block">by builders.</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="font-manrope text-base sm:text-lg text-deep-navy/70 leading-relaxed max-w-md">
              A drop-in hub to find the connections you actually need, have a
              co-working session, and get support from a solid community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 font-manrope font-medium text-sm bg-wisteria text-white px-6 py-3.5 rounded-full hover:bg-deep-navy transition-colors"
              >
                See Events
              </a>
              <a
                href="/community"
                className="inline-flex items-center justify-center font-manrope font-medium text-sm border-2 border-periwinkle text-deep-navy px-6 py-3.5 rounded-full hover:bg-periwinkle/30 transition-colors"
              >
                Browse the Community Board
              </a>
            </div>
          </div>

          {/* Right Column — Hero image + overlay card */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden blueprint-border bg-gray-200">
              <Image
                src="/images/hero-event.jpg"
                alt="Curio Builder's Hub community event"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 bg-white rounded-xl p-4 shadow-lg blueprint-border">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-wisteria"
                  >
                    <path
                      d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-space-grotesk text-xs font-bold uppercase tracking-wider text-deep-navy mb-1">
                    Tech Founder&apos;s Lounge
                  </p>
                  <p className="font-manrope text-sm text-deep-navy/70 leading-snug">
                    Join fellow builders and founders for coworking and coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
