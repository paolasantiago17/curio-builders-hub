import BuilderCard, { BuilderProfile } from "./BuilderCard";

const seedBuilders: BuilderProfile[] = [
  {
    _id: "seed-1",
    name: "Sarah D.",
    role: "Technical Founder",
    category: "FINTECH",
    project:
      "Building a sustainable fintech app to track carbon footprints of transactions.",
    ask: "Looking for a React developer with a strong interest in ESG data to collaborate on the MVP.",
    cardStyle: "image-left",
  },
  {
    _id: "seed-2",
    name: "Marcus V.",
    role: "Founder",
    category: "CMS / TECH",
    project:
      "Architecting a headless CMS specifically tailored for artisanal manufacturing brands.",
    ask: "Seeking a Marketing strategist familiar with D2C and artisanal brand growth.",
    cardStyle: "quote",
  },
  {
    _id: "seed-3",
    name: "Elena R.",
    role: "Founder",
    category: "AI / DESIGN",
    project:
      "Developing an AI co-pilot for interior designers to generate blueprints.",
    ask: "I need feedback and beta-testing from working architects and interior designers.",
    cardStyle: "dark",
  },
  {
    _id: "seed-4",
    name: "David K.",
    role: "Founder",
    category: "CLEANTECH",
    project:
      "Building a decentralized protocol for community solar grids and local energy sharing.",
    ask: "Seeking warm intros to climate-tech seed investors.",
    cardStyle: "default",
  },
  {
    _id: "seed-5",
    name: "Priya S.",
    role: "Founder",
    category: "MARKETPLACE",
    project:
      "B2B marketplace platform for sourcing upcycled and reclaimed building materials.",
    ask: "Looking for a logistics and supply chain expert to consult.",
    cardStyle: "default",
  },
  {
    _id: "seed-6",
    name: "James L.",
    role: "Founder",
    category: "DEVTOOLS",
    project:
      "Creating an open-source observability tool designed for edge computing deployments.",
    ask: "Connecting with Rust engineers for core protocol development.",
    cardStyle: "quote",
  },
];

interface CommunityBoardProps {
  builders: BuilderProfile[] | null;
}

export default function CommunityBoard({ builders }: CommunityBoardProps) {
  const profiles = builders && builders.length > 0 ? builders : seedBuilders;

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="space-y-5">
          {/* Pill label */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 font-space-grotesk text-xs font-medium tracking-[0.12em] uppercase text-deep-navy bg-white border border-green-500/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Community Board
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-deep-navy leading-tight">
            What&apos;s being built at{" "}
            <em className="not-italic text-wisteria italic font-bold">Curio</em>
          </h1>

          {/* Subtext */}
          <p className="font-manrope text-base sm:text-lg text-deep-navy/60 leading-relaxed max-w-2xl">
            Direct visibility for our community&apos;s builders. Discover
            projects, offer your expertise, and find your next collaborator.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-deep-navy/10" />

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Row 1: Sarah D. (featured, 2 cols) + Marcus V. (1 col) */}
          {profiles[0] && (
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
              <BuilderCard profile={profiles[0]} />
            </div>
          )}
          {profiles[1] && (
            <div className="md:col-span-1 lg:col-span-1">
              <BuilderCard profile={profiles[1]} />
            </div>
          )}

          {/* Row 2: Elena R. (dark, taller), David K., Priya S. */}
          {profiles[2] && (
            <div className="md:col-span-1 lg:col-span-1 lg:row-span-1">
              <BuilderCard profile={profiles[2]} />
            </div>
          )}
          {profiles[3] && (
            <div className="md:col-span-1 lg:col-span-1">
              <BuilderCard profile={profiles[3]} />
            </div>
          )}
          {profiles[4] && (
            <div className="md:col-span-1 lg:col-span-1">
              <BuilderCard profile={profiles[4]} />
            </div>
          )}

          {/* Row 3: James L. + "Your Project Here" spanning 2 cols */}
          {profiles[5] && (
            <div className="md:col-span-1 lg:col-span-1">
              <BuilderCard profile={profiles[5]} />
            </div>
          )}

          {/* Any additional profiles from Sanity */}
          {profiles.slice(6).map((profile) => (
            <div key={profile._id || profile.name}>
              <BuilderCard profile={profile} />
            </div>
          ))}

          {/* "Your Project Here" card — spans 2 cols on last row */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="rounded-2xl p-10 flex flex-col items-center justify-center gap-5 min-h-[200px] text-center h-full" style={{background: "linear-gradient(145deg, #415A96 0%, #2a3a5c 100%)"}}>
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-space-grotesk font-bold text-lg text-white">
                  Your Project Here
                </h3>
                <p className="font-manrope text-sm text-white/65 leading-relaxed max-w-xs">
                  Get featured in front of hundreds of builders. Find the connections, talent, and feedback you need to scale your idea.
                </p>
              </div>
              <a
                href="#"
                className="font-manrope font-semibold text-sm text-white bg-white/20 border border-white/30 px-6 py-2.5 rounded-full hover:bg-white hover:text-deep-navy transition-colors"
              >
                Apply to Feature →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
