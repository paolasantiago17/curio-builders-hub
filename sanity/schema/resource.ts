import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "Link", value: "link" },
          { title: "Photo", value: "photo" },
          { title: "Article", value: "article" },
          { title: "Tool", value: "tool" },
        ],
      },
    }),
    defineField({ name: "url", type: "url", title: "URL" }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
  ],
});
