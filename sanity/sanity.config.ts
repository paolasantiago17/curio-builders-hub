import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Curio Builder's Hub",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Events")
              .schemaType("event")
              .child(S.documentTypeList("event").title("Events")),
            S.listItem()
              .title("Builder Profiles")
              .schemaType("builderProfile")
              .child(S.documentTypeList("builderProfile").title("Builder Profiles")),
            S.listItem()
              .title("Event Directories")
              .schemaType("eventDirectory")
              .child(S.documentTypeList("eventDirectory").title("Event Directories")),
            S.listItem()
              .title("Resources")
              .schemaType("resource")
              .child(S.documentTypeList("resource").title("Resources")),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
});
