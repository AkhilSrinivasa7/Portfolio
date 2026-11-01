/**
 * Sanity.io Schema Definition for Portfolio Projects
 */
export const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Artificial Intelligence", value: "AI" },
          { title: "Distributed Systems", value: "Systems" },
          { title: "Full Stack Web", value: "FullStack" },
          { title: "Security & Tools", value: "Security" },
        ],
      },
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "githubUrl",
      title: "GitHub Repository URL",
      type: "url",
    },
    {
      name: "liveUrl",
      title: "Live Deployment URL",
      type: "url",
    },
    {
      name: "metrics",
      title: "Key Performance Metrics",
      type: "object",
      fields: [
        { name: "stars", title: "GitHub Stars", type: "number" },
        { name: "latency", title: "Query Latency", type: "string" },
        { name: "accuracy", title: "Model Accuracy", type: "string" },
      ],
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
};
