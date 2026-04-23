import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { latestEventDirectoryQuery } from "@/sanity/lib/queries";
import EventDirectoryPage from "@/components/EventDirectoryPage";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Tonight's attendees at Curio Builder's Hub, sorted by what they're looking for. Go find them.",
  openGraph: {
    url: "https://curio.community/events",
    title: "Events | Curio Builder's Hub",
  },
  alternates: {
    canonical: "https://curio.community/events",
  },
};

async function getEventDirectory() {
  try {
    return await client.fetch(latestEventDirectoryQuery, {}, { cache: "no-store" });
  } catch {
    return null;
  }
}

export default async function EventsPage() {
  const data = await getEventDirectory();
  return <EventDirectoryPage data={data ?? {}} />;
}
