import CommunityBoard from "@/components/CommunityBoard";
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
