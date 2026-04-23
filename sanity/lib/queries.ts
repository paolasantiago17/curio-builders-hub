export const eventsQuery = `*[_type == "event"] | order(date asc)`;
export const latestEventDirectoryQuery = `*[_type == "eventDirectory"] | order(date desc)[0] {
  _id, eventName, date, title, subtitle, callout,
  clusters[] {
    title, badgeType,
    attendees[] { name, description }
  }
}`;
export const buildersQuery = `*[_type == "builderProfile"] | order(order asc, _createdAt asc) {
  _id,
  name,
  role,
  category,
  project,
  ask,
  askLabel,
  cardStyle,
  order,
  "avatarUrl": avatar.asset->url,
  "projectImageUrl": projectImage.asset->url,
  website,
  linkedin,
  instagram
}`;
