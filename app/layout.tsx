import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curio.community"),
  title: {
    default: "Curio Builder's Hub — Where Builders Connect",
    template: "%s | Curio Builder's Hub",
  },
  description:
    "A cultivated community for builders, founders, and makers in Vancouver. Join co-working sessions, meet your next collaborator, and get featured on the community board.",
  keywords: ["builders community", "founders", "Vancouver startups", "co-working", "makers", "Curio"],
  authors: [{ name: "Curio Builder's Hub", url: "https://curio.community" }],
  openGraph: {
    type: "website",
    url: "https://curio.community",
    siteName: "Curio Builder's Hub",
    title: "Curio Builder's Hub — Where Builders Connect",
    description:
      "A cultivated community for builders, founders, and makers in Vancouver. Join co-working sessions, meet your next collaborator, and get featured on the community board.",
    images: [
      {
        url: "/images/hero-event.jpg",
        width: 1200,
        height: 630,
        alt: "Curio Builder's Hub — community gathering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curio Builder's Hub — Where Builders Connect",
    description:
      "A cultivated community for builders, founders, and makers in Vancouver.",
    images: ["/images/hero-event.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} font-manrope bg-off-white text-deep-navy antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
