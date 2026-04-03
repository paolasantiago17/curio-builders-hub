"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white blueprint-border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/curio-logo.svg"
              alt="Curio Builder's Hub"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-space-grotesk font-bold text-deep-navy text-[15px] tracking-tight leading-tight">
              Curio Builder&apos;s Hub
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#philosophy"
              className="font-manrope text-sm font-medium text-deep-navy hover:text-wisteria transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="/#roadmap"
              className="font-manrope text-sm font-medium text-deep-navy hover:text-wisteria transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/community"
              className="font-manrope text-sm font-medium text-deep-navy hover:text-wisteria transition-colors"
            >
              Community
            </Link>
            <a
              href="https://luma.com/curio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope text-sm font-medium bg-wisteria text-white px-5 py-2 rounded-full hover:bg-deep-navy transition-colors"
            >
              Join Hub
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-deep-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-blueprint bg-white py-4 space-y-1">
            <Link
              href="/#philosophy"
              className="block px-4 py-3 font-manrope text-sm font-medium text-deep-navy hover:bg-off-white rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Philosophy
            </Link>
            <Link
              href="/#roadmap"
              className="block px-4 py-3 font-manrope text-sm font-medium text-deep-navy hover:bg-off-white rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/community"
              className="block px-4 py-3 font-manrope text-sm font-medium text-deep-navy hover:bg-off-white rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Community
            </Link>
            <div className="px-4 pt-2">
              <a
                href="#"
                className="block text-center font-manrope text-sm font-medium bg-wisteria text-white px-5 py-3 rounded-full hover:bg-deep-navy transition-colors"
              >
                Join Hub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
