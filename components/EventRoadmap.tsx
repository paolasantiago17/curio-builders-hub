import TruncatedText from "./TruncatedText";
import SponsorContactForm from "./SponsorContactForm";

interface SanityEvent {
  _id?: string;
  title?: string;
  date?: string;
  location_name?: string;
  nearest_station?: string;
  tags?: string[];
  description?: string;
  luma_url?: string;
}

const seedEvents: SanityEvent[] = [
  {
    _id: "seed-1",
    title: "Builder's",
    location_name: "Cafe Our Hours",
    nearest_station: "Wellesley Station",
    tags: ["Coworking", "Networking", "Open Mic"],
    description:
      "Drop in for coworking, coffee, and chat followed by an Open Mic for you to bring any announcements or asks.",
    luma_url: "#",
  },
];

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

interface EventRoadmapProps {
  events: SanityEvent[] | null;
}

export default function EventRoadmap({ events }: EventRoadmapProps) {
  const allEvents = events && events.length > 0 ? events : seedEvents;
  const primaryEvent = allEvents[0];       // most upcoming — blue card
  const secondEvent = allEvents[1] ?? null; // next upcoming — beige card
  const upcomingEvents = allEvents.slice(2); // any further events — row below

  return (
    <section
      id="roadmap"
      className="bg-off-white py-20 px-4 sm:px-6 lg:px-8 blueprint-border-b"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-deep-navy">
            Event Roadmap
          </h2>
          <span className="font-space-grotesk text-xs font-medium tracking-[0.15em] uppercase text-deep-navy blueprint-border px-3 py-1.5 rounded-full bg-white">
            Come Join Us
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main event card — spans 2/3 */}
          <div className="lg:col-span-2 bg-deep-navy rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[420px]">
            <div className="space-y-5">
              {/* Title */}
              <h3 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-white leading-tight">
                {primaryEvent.title || "Builder's"}
              </h3>

              {/* Date */}
              {primaryEvent.date && (
                <p className="font-manrope text-sm text-wisteria font-medium">
                  {formatDate(primaryEvent.date)}
                </p>
              )}

              {/* Location */}
              <div className="flex items-center gap-2 text-white/60">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-manrope text-sm">
                  at {primaryEvent.location_name || "Cafe Our Hours"}
                  {primaryEvent.nearest_station &&
                    ` | Nearest Station: ${primaryEvent.nearest_station}`}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(primaryEvent.tags || ["Coworking", "Networking", "Open Mic"]).map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-manrope text-xs font-medium text-white border border-white/40 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Description */}
              <p className="font-manrope text-sm sm:text-base text-white/70 leading-relaxed max-w-lg">
                <TruncatedText
                  text={primaryEvent.description || "Drop in for coworking, coffee, and chat followed by an Open Mic for you to bring any announcements or asks."}
                  limit={300}
                />
              </p>
            </div>

            {/* Register button */}
            <div className="mt-8">
              <a
                href={primaryEvent.luma_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-manrope font-medium text-sm text-white border border-white/50 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Register on Luma
                <span>📅</span>
              </a>
            </div>
          </div>

          {/* Sidebar — 2 stacked cards */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Card 1 — Next upcoming event (beige) or static Build Together */}
            {secondEvent ? (
              <a
                href={secondEvent.luma_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pearl-beige rounded-2xl p-6 blueprint-border flex-1 flex flex-col gap-3 hover:brightness-95 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-space-grotesk text-[10px] font-bold uppercase tracking-wider text-deep-navy/50">
                    Up Next
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-deep-navy/40">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="font-space-grotesk font-bold text-base text-deep-navy leading-snug">
                  {secondEvent.title}
                </h4>
                {secondEvent.date && (
                  <p className="font-manrope text-xs text-deep-navy font-medium">
                    {formatDate(secondEvent.date)}
                  </p>
                )}
                {secondEvent.location_name && (
                  <p className="font-manrope text-xs text-deep-navy/60">
                    {secondEvent.location_name}
                    {secondEvent.nearest_station && ` · ${secondEvent.nearest_station}`}
                  </p>
                )}
                {secondEvent.tags && secondEvent.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-auto pt-2">
                    {secondEvent.tags.map((tag) => (
                      <span key={tag} className="font-manrope text-[10px] text-deep-navy/60 bg-deep-navy/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            ) : (
              <div className="bg-pearl-beige rounded-2xl p-6 blueprint-border flex-1">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-deep-navy">
                    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="16" cy="16" r="2" fill="currentColor" />
                    <line x1="16" y1="3" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="16" y1="23" x2="16" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="16" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="23" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h4 className="font-space-grotesk font-bold text-lg text-deep-navy mb-2">
                  Build Together
                </h4>
                <p className="font-manrope text-sm text-deep-navy/70 leading-relaxed">
                  A focused environment where technical and non-technical founders bridge the gap.
                </p>
              </div>
            )}

            {/* Card 2 — Location Note */}
            <div className="bg-gray-100 rounded-2xl p-6 blueprint-border relative overflow-visible">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-space-grotesk font-bold text-base text-deep-navy">
                    Location Note
                  </h4>
                  <span className="font-space-grotesk text-[10px] font-bold uppercase tracking-wider text-white bg-deep-navy px-2 py-1 rounded-full">
                    Sponsor
                  </span>
                </div>
                <p className="font-manrope text-sm text-deep-navy/70 leading-relaxed">
                  We partner with selected cafes and event spaces. Interested in hosting one of our events?
                </p>
                <SponsorContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming events row — only shown if there are more events */}
        {upcomingEvents.length > 0 && (
          <div className="mt-8">
            <p className="font-space-grotesk text-xs font-medium tracking-[0.15em] uppercase text-deep-navy/40 mb-4">
              Also Coming Up
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <a
                  key={event._id || event.title}
                  href={event.luma_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-5 blueprint-border hover:shadow-md transition-shadow flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-space-grotesk font-bold text-sm text-deep-navy leading-snug">
                      {event.title}
                    </h4>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-wisteria">
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {event.date && (
                    <p className="font-manrope text-xs text-wisteria font-medium">
                      {formatDate(event.date)}
                    </p>
                  )}
                  {event.location_name && (
                    <p className="font-manrope text-xs text-deep-navy/50">
                      {event.location_name}
                      {event.nearest_station && ` · ${event.nearest_station}`}
                    </p>
                  )}
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {event.tags.map((tag) => (
                        <span key={tag} className="font-manrope text-[10px] text-deep-navy/60 bg-periwinkle/30 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
