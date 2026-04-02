import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "date", type: "datetime", title: "Date" }),
    defineField({ name: "location_name", type: "string", title: "Location Name" }),
    defineField({ name: "location_url", type: "url", title: "Location URL" }),
    defineField({ name: "nearest_station", type: "string", title: "Nearest Station" }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "luma_url", type: "url", title: "Luma URL" }),
  ],
});
