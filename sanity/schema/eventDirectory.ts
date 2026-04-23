import { defineField, defineType } from "sanity";

export const eventDirectory = defineType({
  name: "eventDirectory",
  title: "Event Directory",
  type: "document",
  fields: [
    defineField({
      name: "eventName",
      type: "string",
      title: "Event Name",
      description: "e.g. Curio 03",
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Event Date",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      description: 'e.g. "This person needs you."',
      initialValue: "This person needs you.",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      initialValue: "Tonight's attendees, sorted by what they're looking for. Go find them.",
    }),
    defineField({
      name: "callout",
      type: "text",
      title: "Callout Text",
      description: "The intro blurb shown at the top",
      initialValue:
        "Walk up, say hi, and lead with what you can offer. Everyone here registered and answered what they need — so the hard part is already done. You just have to show up to the conversation.",
    }),
    defineField({
      name: "clusters",
      type: "array",
      title: "Clusters",
      description: "Groups of attendees by what they need",
      of: [
        {
          type: "object",
          name: "cluster",
          title: "Cluster",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Cluster Title",
              description: 'e.g. "Looking for beta testers / users"',
            }),
            defineField({
              name: "badgeType",
              type: "string",
              title: "Badge",
              options: {
                list: [
                  { title: "Needs You", value: "needs-you" },
                  { title: "Find Each Other", value: "find-each-other" },
                  { title: "Go See Them", value: "go-see" },
                  { title: "Say Hi", value: "say-hi" },
                ],
              },
              initialValue: "needs-you",
            }),
            defineField({
              name: "attendees",
              type: "array",
              title: "Attendees",
              of: [
                {
                  type: "object",
                  name: "attendee",
                  title: "Attendee",
                  fields: [
                    defineField({ name: "name", type: "string", title: "Name" }),
                    defineField({ name: "description", type: "string", title: "Description / What they need" }),
                  ],
                  preview: {
                    select: { title: "name", subtitle: "description" },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "badgeType" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "eventName", subtitle: "date" },
  },
  orderings: [{ title: "Date, newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
