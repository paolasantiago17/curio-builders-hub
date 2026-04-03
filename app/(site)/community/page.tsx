import type { Metadata } from "next";
import CommunityBoard from "@/components/CommunityBoard";
import { client } from "@/sanity/lib/client";
import { buildersQuery } from "@/sanity/lib/queries";

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

async function getBuilders() {
  try {
    const builders = await client.fetch(buildersQuery, {}, { cache: "no-store" });
    return builders && builders.length > 0 ? builders : null;
  } catch {
    return null;
  }
}

export default async function CommunityPage() {
  const builders = await getBuilders();

  return <CommunityBoard builders={builders} />;
}
