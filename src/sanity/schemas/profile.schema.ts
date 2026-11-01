/**
 * Sanity.io Schema Definition for User Profile & Credentials
 */
export const profileSchema = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      initialValue: "Ch Srinivasa Shanmukha Akhil",
    },
    {
      name: "tagline",
      title: "Hero Tagline",
      type: "string",
    },
    {
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "education",
      title: "Education Milestones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "school", title: "Institution", type: "string" },
            { name: "degree", title: "Degree", type: "string" },
            { name: "cgpa", title: "CGPA", type: "string" },
            { name: "period", title: "Period", type: "string" },
            { name: "highlight", title: "Highlight", type: "string" },
          ],
        },
      ],
    },
    {
      name: "certifications",
      title: "Verified Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Certificate Name", type: "string" },
            { name: "issuer", title: "Issuer", type: "string" },
            { name: "date", title: "Date", type: "string" },
            { name: "verifyUrl", title: "Verification Link", type: "url" },
          ],
        },
      ],
    },
  ],
};
