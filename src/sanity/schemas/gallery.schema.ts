/**
 * Sanity.io Schema Definition for Gallery Visuals
 */
export const gallerySchema = {
  name: "galleryPhoto",
  title: "Gallery Photo",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Mountains & Inversions", value: "Mountains" },
          { title: "Atmosphere & Skies", value: "Atmosphere" },
          { title: "Storms & Clouds", value: "Storms" },
          { title: "Twilight & Horizons", value: "Twilight" },
        ],
      },
    },
    {
      name: "image",
      title: "Photograph Asset",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      title: "Story / Caption",
      type: "text",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "year",
      title: "Year Captured",
      type: "string",
      initialValue: "2026",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
};
