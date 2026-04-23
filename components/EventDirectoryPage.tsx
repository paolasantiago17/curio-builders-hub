const BADGE_CONFIG = {
  "needs-you":      { label: "Needs You",       className: "bg-periwinkle text-wisteria" },
  "find-each-other":{ label: "Find Each Other",  className: "bg-pearl-beige text-deep-navy" },
  "go-see":         { label: "Go See Them",      className: "bg-wisteria text-white" },
  "say-hi":         { label: "Say Hi",           className: "bg-deep-navy text-white" },
} as const;

type BadgeType = keyof typeof BADGE_CONFIG;

interface Attendee {
  name: string;
  description?: string;
}

interface Cluster {
  title: string;
  badgeType: BadgeType;
  attendees?: Attendee[];
}

interface EventDirectoryData {
  eventName?: string;
  date?: string;
  title?: string;
  subtitle?: string;
  callout?: string;
  clusters?: Cluster[];
}

export default function EventDirectoryPage({ data }: { data: EventDirectoryData }) {
  const { eventName, title, subtitle, callout, clusters } = data;

  return (
    <section className="bg-off-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          {eventName && (
            <span className="font-space-grotesk text-xs font-bold uppercase tracking-[0.15em] text-wisteria">
              {eventName}
            </span>
          )}
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-deep-navy mt-2 mb-3 leading-tight">
            {title || "This person needs you."}
          </h1>
          {subtitle && (
            <p className="font-manrope text-base text-deep-navy/60">{subtitle}</p>
          )}
        </div>

        {/* Callout */}
        {callout && (
          <div className="border-l-4 border-wisteria bg-white rounded-r-xl px-5 py-4 mb-10">
            <p className="font-manrope text-sm text-deep-navy/70 leading-relaxed">{callout}</p>
          </div>
        )}

        {/* Clusters Grid */}
        {clusters && clusters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clusters.map((cluster, i) => {
              const badge = BADGE_CONFIG[cluster.badgeType] ?? BADGE_CONFIG["needs-you"];
              return (
                <div key={i} className="bg-white rounded-2xl border border-deep-navy/8 p-6 shadow-sm">
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h2 className="font-space-grotesk font-bold text-base text-deep-navy leading-snug">
                      {cluster.title}
                    </h2>
                    <span className={`flex-shrink-0 font-space-grotesk text-[9px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full ${badge.className}`}>
                      {badge.label}
                    </span>
                  </div>

                  {/* Attendees */}
                  {cluster.attendees && cluster.attendees.length > 0 && (
                    <div className="divide-y divide-deep-navy/6">
                      {cluster.attendees.map((person, j) => (
                        <div key={j} className="flex gap-3 py-2.5 items-baseline">
                          <span className="font-space-grotesk font-bold text-sm text-deep-navy min-w-[100px] flex-shrink-0">
                            {person.name}
                          </span>
                          {person.description && (
                            <span className="font-manrope text-xs text-deep-navy/55 leading-relaxed">
                              {person.description}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-24">
            <p className="font-space-grotesk font-bold text-xl text-deep-navy mb-2">No event directory yet</p>
            <p className="font-manrope text-sm text-deep-navy/50">
              Add an Event Directory in Sanity Studio to populate this page.
            </p>
          </div>
        )}

        {/* Suggest a correction */}
        <div className="mt-12 bg-white rounded-2xl border border-deep-navy/8 p-6 text-center shadow-sm">
          <p className="font-space-grotesk font-bold text-sm text-deep-navy mb-1">
            Is your info wrong or missing?
          </p>
          <p className="font-manrope text-xs text-deep-navy/55 mb-4">
            We pulled this from your registration form. Let us know and we&apos;ll update it.
          </p>
          <a
            href={`https://formspree.io/f/mjgpejva`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-manrope font-semibold text-xs text-wisteria border border-wisteria/40 bg-wisteria/5 hover:bg-wisteria hover:text-white px-5 py-2.5 rounded-full transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Suggest a correction
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="font-manrope text-xs text-deep-navy/35">
            Curio Builder&apos;s Hub · Est. 2026 ·{" "}
            <a href="https://curio.community" className="text-wisteria hover:underline">curio.community</a>
          </p>
        </div>

      </div>
    </section>
  );
}
