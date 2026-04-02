export const eventsQuery = `*[_type == "event"] | order(date asc)`;
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
  "projectImageUrl": projectImage.asset->url
}`;
