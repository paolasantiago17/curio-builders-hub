"use client";

import { useState } from "react";

interface TruncatedTextProps {
  text: string;
  limit?: number;
  className?: string;
}

export default function TruncatedText({
  text,
  limit = 300,
  className = "",
}: TruncatedTextProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > limit;
  const displayed = expanded || !isLong ? text : text.slice(0, limit).trimEnd() + "…";

  return (
    <span className={className}>
      {displayed}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-1.5 font-manrope text-sm text-white/50 underline underline-offset-2 hover:text-white/80 transition-colors"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </span>
  );
}
