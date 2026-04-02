import Image from "next/image";

export interface BuilderProfile {
  _id?: string;
  name: string;
  role?: string;
  category?: string;
  project?: string;
  ask?: string;
  askLabel?: string | null; // e.g. "HER ASK", "HIS ASK", "THEIR ASK"
  cardStyle?: "default" | "quote" | "dark" | "image-left";
  avatarUrl?: string | null;
  projectImageUrl?: string | null;
}

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function Avatar({ name, imageUrl, size = "md" }: { name: string; imageUrl?: string | null; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : size === "lg" ? "w-12 h-12 text-sm" : "w-10 h-10 text-sm";
  if (imageUrl) {
    return (
      <div className={`${sizeClass} rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white`}>
        <Image src={imageUrl} alt={name} width={48} height={48} className="object-cover w-full h-full" />
      </div>
    );
  }
  return (
    <div className={`${sizeClass} rounded-full bg-periwinkle flex items-center justify-center flex-shrink-0 ring-2 ring-white`}>
      <span className="font-space-grotesk font-bold text-deep-navy">{getInitials(name)}</span>
    </div>
  );
}

function AskBox({ ask, label = "THEIR ASK", dark = false }: { ask: string; label?: string; dark?: boolean }) {
  return (
    <div className={`rounded-xl p-3.5 ${dark ? "border border-white/20 bg-white/8" : "bg-periwinkle/25 border border-periwinkle/50"}`}>
      <div className="flex items-center gap-1.5 mb-2">
        {/* Hand icon */}
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className={dark ? "text-periwinkle" : "text-wisteria"}>
          <path d="M7 1.5V7M7 1.5C7 1.5 7 1 7.5 1C8 1 8 1.5 8 1.5V6M7 1.5C7 1.5 7 1 6.5 1C6 1 6 1.5 6 1.5V6M8 3C8 3 8 2.5 8.5 2.5C9 2.5 9 3 9 3V7M6 3C6 3 6 2.5 5.5 2.5C5 2.5 5 3 5 3V8.5L4 7.5C3.7 7.2 3.2 7.2 3 7.5C2.8 7.8 2.8 8.2 3 8.5L5.5 11C5.5 11 6 12.5 8 12.5C10 12.5 10.5 11 10.5 11V7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={`font-space-grotesk text-[9px] font-bold uppercase tracking-[0.14em] ${dark ? "text-periwinkle" : "text-wisteria"}`}>
          {label}
        </span>
      </div>
      <p className={`font-manrope text-xs leading-relaxed ${dark ? "text-white/70" : "text-deep-navy/75"}`}>
        {ask}
      </p>
    </div>
  );
}

function CategoryTag({ category, dark = false }: { category: string; dark?: boolean }) {
  if (dark) {
    return (
      <span className="font-space-grotesk text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 border border-white/25 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {category}
      </span>
    );
  }
  return (
    <span className="font-space-grotesk text-[9px] font-bold uppercase tracking-[0.12em] text-deep-navy bg-periwinkle/50 px-2.5 py-1 rounded-full">
      {category}
    </span>
  );
}

interface BuilderCardProps {
  profile: BuilderProfile;
}

export default function BuilderCard({ profile }: BuilderCardProps) {
  const { name, role, category, project, ask, askLabel, cardStyle = "default", avatarUrl, projectImageUrl } = profile;
  const resolvedAskLabel = askLabel || "THEIR ASK";

  // Quote style
  if (cardStyle === "quote") {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-deep-navy/8 flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <Avatar name={name} imageUrl={avatarUrl} />
            <div>
              <p className="font-space-grotesk font-bold text-sm text-deep-navy leading-tight">{name}</p>
              {role && <p className="font-manrope text-xs text-deep-navy/45 mt-0.5">{role}</p>}
            </div>
          </div>
          {category && <CategoryTag category={category} />}
        </div>

        {project && (
          <blockquote className="font-space-grotesk text-sm font-medium text-deep-navy leading-relaxed italic border-l-2 border-wisteria/60 pl-3 flex-1">
            &ldquo;{project}&rdquo;
          </blockquote>
        )}

        {ask && <AskBox ask={ask} label={resolvedAskLabel} />}
      </div>
    );
  }

  // Dark style — background image overlay
  if (cardStyle === "dark") {
    return (
      <div className="rounded-2xl flex flex-col h-full relative overflow-hidden min-h-[320px] shadow-md">
        {projectImageUrl ? (
          <Image src={projectImageUrl} alt={`${name}'s project`} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #2a3a5c 0%, #1a2540 50%, #415A96 100%)" }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/70 to-deep-navy/30" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 flex flex-col h-full p-6">
          {/* Top row */}
          <div className="flex items-center justify-between mb-auto">
            <div className="flex items-center gap-2.5">
              <Avatar name={name} imageUrl={avatarUrl} size="sm" />
              <div>
                <p className="font-space-grotesk font-bold text-sm text-white leading-tight">{name}</p>
                {role && <p className="font-manrope text-[11px] text-white/45 mt-0.5">{role}</p>}
              </div>
            </div>
            {category && <CategoryTag category={category} dark />}
          </div>

          {/* Project — pushed to bottom */}
          <div className="mt-8 flex flex-col gap-3">
            {project && (
              <p className="font-space-grotesk font-bold text-base text-white leading-snug">
                {project}
              </p>
            )}
            {ask && <AskBox ask={ask} label={resolvedAskLabel} dark />}
          </div>
        </div>
      </div>
    );
  }

  // Image-left style — large featured card
  if (cardStyle === "image-left") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-deep-navy/8 overflow-hidden flex flex-col sm:flex-row h-full min-h-[280px]">
        {/* Image column with category overlay */}
        <div className="w-full sm:w-[38%] bg-gray-100 relative min-h-[200px] sm:min-h-0 flex-shrink-0">
          {projectImageUrl ? (
            <Image src={projectImageUrl} alt={`${name}'s project`} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-periwinkle/20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-deep-navy/20">
                <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="13" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 28l10-9 8 8 6-6 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
          )}
          {/* Category tag overlaid on image */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="font-space-grotesk text-[9px] font-bold uppercase tracking-[0.12em] text-white bg-deep-navy/75 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Text column */}
        <div className="flex-1 p-5 flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <Avatar name={name} imageUrl={avatarUrl} size="sm" />
            <div>
              <p className="font-space-grotesk font-bold text-sm text-deep-navy leading-tight">{name}</p>
              {role && <p className="font-manrope text-xs text-deep-navy/45 mt-0.5">{role}</p>}
            </div>
          </div>

          {project && (
            <p className="font-space-grotesk font-bold text-base text-deep-navy leading-snug flex-1">
              {project}
            </p>
          )}

          {ask && <AskBox ask={ask} label={resolvedAskLabel} />}
        </div>
      </div>
    );
  }

  // Default style
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-deep-navy/8 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <Avatar name={name} imageUrl={avatarUrl} />
          <div>
            <p className="font-space-grotesk font-bold text-sm text-deep-navy leading-tight">{name}</p>
            {role && <p className="font-manrope text-xs text-deep-navy/45 mt-0.5">{role}</p>}
          </div>
        </div>
        {category && <CategoryTag category={category} />}
      </div>

      {project && (
        <p className="font-manrope text-sm text-deep-navy/80 leading-relaxed flex-1">
          {project}
        </p>
      )}

      {ask && <AskBox ask={ask} label={resolvedAskLabel} />}
    </div>
  );
}
