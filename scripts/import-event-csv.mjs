/**
 * Import a Luma event CSV into Sanity as an Event Directory document.
 *
 * Usage:
 *   node scripts/import-event-csv.mjs <path-to-csv> "<Event Name>" "<YYYY-MM-DD>"
 *
 * Example:
 *   node scripts/import-event-csv.mjs ~/Downloads/guests.csv "Curio 03" "2026-04-23"
 */

import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

// ─── Args ────────────────────────────────────────────────────────────────────
const csvPath   = process.argv[2];
const eventName = process.argv[3] || "Curio Event";
const eventDate = process.argv[4] || new Date().toISOString().slice(0, 10);

if (!csvPath) {
  console.error("Usage: node scripts/import-event-csv.mjs <csv-path> [event-name] [date]");
  process.exit(1);
}

// ─── Sanity client ───────────────────────────────────────────────────────────
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
});

// ─── Parse CSV ───────────────────────────────────────────────────────────────
const raw = readFileSync(csvPath, "utf-8");
const rows = parse(raw, { columns: true, skip_empty_lines: true, trim: true });

const approved = rows.filter(r => r.approval_status === "approved" && r.name?.trim());

console.log(`Found ${approved.length} approved attendees out of ${rows.length} total.`);

// ─── Clustering logic ────────────────────────────────────────────────────────
function getCluster(project = "", ask = "") {
  const t = `${project} ${ask}`.toLowerCase();
  if (/health|wellness|medic|mental|therapy|clinical/.test(t))
    return "healthtech";
  if (/financ|fintech|invest|trading|budget|payment|banking|money/.test(t))
    return "fintech";
  if (/ai.agent|automation|llm|machine.learn|artificial intel/.test(t))
    return "ai-agents";
  if (/beta|test|feedback|early.user|user.test|product.feedback/.test(t))
    return "beta-testers";
  if (/ship|market|gtm|go.to.market|launch|growth|revenue|pmf/.test(t))
    return "gtm";
  if (/non.tech|non tech|landing page|mockup|validation|no.code|nocode/.test(t))
    return "non-tech";
  if (/community|ecosystem|accelerat|founder|investor|mentor/.test(t))
    return "ecosystem";
  if (/vibe|chilling|chill|just meet|talk to someone|say hi|good vibes|networking|meet people/.test(t))
    return "vibes";
  if (/partner|collaborat|co.found|team|looking for/.test(t))
    return "connect";
  return "connect";
}

const CLUSTER_META = {
  "beta-testers": { title: "Looking for beta testers / users",  badgeType: "needs-you" },
  "gtm":          { title: "Want GTM / shipping advice",         badgeType: "needs-you" },
  "non-tech":     { title: "Non-tech founders need tech friends", badgeType: "needs-you" },
  "healthtech":   { title: "Healthtech cluster",                 badgeType: "find-each-other" },
  "fintech":      { title: "Fintech / finance builders",         badgeType: "find-each-other" },
  "ai-agents":    { title: "AI agents builders",                 badgeType: "find-each-other" },
  "ecosystem":    { title: "Ecosystem builders",                 badgeType: "go-see" },
  "connect":      { title: "Here to connect & collaborate",      badgeType: "needs-you" },
  "vibes":        { title: "Here for the vibes",                 badgeType: "say-hi" },
};

// ─── Build clusters ───────────────────────────────────────────────────────────
const buckets = {};

for (const row of approved) {
  const project = row["What are you building?"] || "";
  const ask     = row["Is there something you would like to get from this event? (eg. Product Feedback, Talk to someone who has shipped their app to market, etc.)"] || "";
  const key     = getCluster(project, ask);

  if (!buckets[key]) buckets[key] = [];

  // Use first name only if full name is all-caps (e.g. ERIC RAK → Eric Rak)
  const rawName  = row.name.trim();
  const name     = rawName === rawName.toUpperCase()
    ? rawName.split(" ").map(w => w[0] + w.slice(1).toLowerCase()).join(" ")
    : rawName;

  buckets[key].push({
    _type: "attendee",
    _key: row.api_id || `${name}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    description: [project, ask].filter(Boolean).join(" — ") || undefined,
  });
}

// ─── Build Sanity document ────────────────────────────────────────────────────
const clusters = Object.entries(buckets)
  .sort(([a], [b]) => {
    const order = ["healthtech","fintech","ai-agents","beta-testers","gtm","non-tech","ecosystem","connect","vibes"];
    return order.indexOf(a) - order.indexOf(b);
  })
  .map(([key, attendees]) => ({
    _type: "cluster",
    _key: key,
    ...CLUSTER_META[key],
    attendees,
  }));

const doc = {
  _type: "eventDirectory",
  eventName,
  date: eventDate,
  title: "This person needs you.",
  subtitle: "Tonight's attendees, sorted by what they're looking for. Go find them.",
  callout:
    "Walk up, say hi, and lead with what you can offer. Everyone here registered and answered what they need — so the hard part is already done. You just have to show up to the conversation.",
  clusters,
};

// ─── Push to Sanity ───────────────────────────────────────────────────────────
console.log("\nClusters summary:");
clusters.forEach(c => console.log(`  ${c.title} — ${c.attendees.length} people`));
console.log(`\nPushing to Sanity (project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID})...`);

const result = await client.create(doc);
console.log(`\n✅ Done! Created document: ${result._id}`);
console.log(`\nView at: https://curio.community/events`);
console.log(`Edit at: https://curio.community/studio`);
