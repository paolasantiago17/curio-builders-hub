import type { Metadata } from "next";
import CommunityBoard from "@/components/CommunityBoard";

export const metadata: Metadata = {
  title: "Community Board",
  description:
    "Meet the builders at Curio. Discover what people are building, find collaborators, and connect with founders across Vancouver.",
  openGraph: {
    url: "https://curio.community/community",
    title: "Community Board | Curio Builder's Hub",
    description:
      "Meet the builders at Curio. Discover what people are building, find collaborators, and connect with founders across Vancouver.",
  },
  alternates: {
    canonical: "https://curio.community/community",
  },
};
import { client } from "@/sanity/lib/client";
import { buildersQuery } from "@/sanity/lib/queries";

async function getBuilders() {
  try {
    const builders = await client.fetch(buildersQuery, {}, { cache: "no-store" });
    return builders && builders.length > 0 ? builders : null;
  } catch {
    return null;
  }
}

export const metadata = {
  title: "Community Board — Curio Builder's Hub",
  description:
    "Direct visibility for our community's builders. Discover projects, offer your expertise, and find your next collaborator.",
};

export default async function CommunityPage() {
  const builders = await getBuilders();

  return <CommunityBoard builders={builders} />;
}
