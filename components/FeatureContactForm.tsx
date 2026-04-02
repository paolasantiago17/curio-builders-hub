"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgpejva";

export default function FeatureContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 4.5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-space-grotesk font-bold text-sm text-white">Message sent!</p>
        <p className="font-manrope text-xs text-white/60">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      <input type="hidden" name="_subject" value="Feature Inquiry — Curio Builder's Hub" />
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full font-manrope text-xs text-deep-navy bg-white/90 border border-white/20 rounded-lg px-3 py-2 placeholder:text-deep-navy/40 focus:outline-none focus:border-white transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full font-manrope text-xs text-deep-navy bg-white/90 border border-white/20 rounded-lg px-3 py-2 placeholder:text-deep-navy/40 focus:outline-none focus:border-white transition-colors"
      />
      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={2}
        className="w-full font-manrope text-xs text-deep-navy bg-white/90 border border-white/20 rounded-lg px-3 py-2 placeholder:text-deep-navy/40 focus:outline-none focus:border-white transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full font-space-grotesk font-bold text-xs uppercase tracking-wider text-deep-navy bg-white rounded-lg py-2.5 hover:bg-pearl-beige transition-colors disabled:opacity-60 mt-1"
      >
        {status === "sending" ? "Sending…" : "Apply to Feature"}
      </button>
      {status === "error" && (
        <p className="font-manrope text-xs text-red-300 text-center">Something went wrong — try again.</p>
      )}
    </form>
  );
}
