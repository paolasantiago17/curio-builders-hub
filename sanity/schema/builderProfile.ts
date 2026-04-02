import { defineField, defineType } from "sanity";

export const builderProfile = defineType({
  name: "builderProfile",
  title: "Builder Profile",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({
      name: "avatar",
      type: "image",
      title: "Avatar",
      description: "Optional — falls back to initials",
      options: { hotspot: true },
    }),
    defineField({ name: "role", type: "string", title: "Role" }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      description: "e.g. FINTECH, AI / DESIGN",
    }),
    defineField({ name: "project", type: "text", title: "Project Description" }),
    defineField({ name: "ask", type: "text", title: "Ask / What They Need" }),
    defineField({
      name: "askLabel",
      type: "string",
      title: "Ask Label",
      description: "Label shown above the ask (e.g. HER ASK, HIS ASK, THEIR ASK)",
      options: {
        list: [
          { title: "Her Ask", value: "HER ASK" },
          { title: "His Ask", value: "HIS ASK" },
          { title: "Their Ask", value: "THEIR ASK" },
        ],
      },
      initialValue: "THEIR ASK",
    }),
    defineField({
      name: "projectImage",
      type: "image",
      title: "Project / Background Image",
      description: "Optional project/background image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cardStyle",
      type: "string",
      title: "Card Style",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Quote", value: "quote" },
          { title: "Dark", value: "dark" },
          { title: "Image Left", value: "image-left" },
        ],
      },
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "draft",
    }),
    defineField({ name: "website", type: "url", title: "Website URL", description: "e.g. https://yoursite.com" }),
    defineField({ name: "linkedin", type: "url", title: "LinkedIn URL", description: "e.g. https://linkedin.com/in/yourname" }),
    defineField({ name: "instagram", type: "url", title: "Instagram URL", description: "e.g. https://instagram.com/yourhandle" }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
  ],
});
