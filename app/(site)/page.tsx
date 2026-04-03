import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Curio Builder's Hub — Where Builders Connect",
  description:
    "A cultivated community for builders, founders, and makers in Vancouver. Join co-working sessions, meet your next collaborator, and get featured on the community board.",
  openGraph: {
    url: "https://curio.community",
  },
  alternates: {
    canonical: "https://curio.community",
  },
};
import Philosophy from "@/components/Philosophy";
import EventRoadmap from "@/components/EventRoadmap";
import CTA from "@/components/CTA";
import { client } from "@/sanity/lib/client";
import { eventsQuery } from "@/sanity/lib/queries";

async function getEvents() {
  try {
    const events = await client.fetch(eventsQuery, {}, { cache: "no-store" });
    return events;
  } catch {
    return null;
  }
}

export default async function Home() {
  const events = await getEvents();

  return (
    <>
      <Hero />
      <EventRoadmap events={events} />
      <Philosophy />
      <CTA />
    </>
  );
}
