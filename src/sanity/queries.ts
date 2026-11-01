/**
 * GROQ Queries for Sanity.io CMS
 */

// Query for all public projects ordered by display order
export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    tagline,
    description,
    techStack,
    githubUrl,
    liveUrl,
    metrics,
    featured,
    order
  }
`;

// Query for all visual gallery photos
export const GALLERY_QUERY = `
  *[_type == "galleryPhoto"] | order(order asc) {
    _id,
    title,
    category,
    caption,
    location,
    year,
    "imageUrl": image.asset->url
  }
`;

// Query for author profile and education credentials
export const PROFILE_QUERY = `
  *[_type == "profile"][0] {
    name,
    tagline,
    bio,
    education[] {
      school,
      degree,
      cgpa,
      period,
      highlight
    },
    certifications[] {
      name,
      issuer,
      date,
      verifyUrl
    }
  }
`;
