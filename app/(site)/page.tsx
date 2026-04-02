import Hero from "@/components/Hero";
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
      <Philosophy />
      <EventRoadmap events={events} />
      <CTA />
    </>
  );
}
