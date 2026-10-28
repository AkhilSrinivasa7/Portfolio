export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: string;
  color: string;
  description: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/srinivasa-shanmukha-akhil-c-763399349",
    handle: "srinivasa-shanmukha-akhil-c",
    icon: "linkedin",
    color: "#0a66c2",
    description: "Professional updates, career journey & connections",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/AkhilSrinivasa7",
    handle: "@AkhilSrinivasa7",
    icon: "github",
    color: "#ccff00",
    description: "Open-source repositories, experiments & commits",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    url: "https://leetcode.com/u/AkhilSrinivasa7/",
    handle: "AkhilSrinivasa7",
    icon: "leetcode",
    color: "#ffa116",
    description: "Data structures, algorithms & problem solving",
  },
  {
    id: "mail",
    name: "Email",
    url: "mailto:akhilintrovert1@gmail.com",
    handle: "akhilintrovert1@gmail.com",
    icon: "mail",
    color: "#ea4335",
    description: "Direct outreach, collaborations & opportunities",
  },
];
