import type { Metadata } from "next";

export const links = {
  sourceCode: "/",
  ownerName: "A.D.S.",
  ownerEmail: "/",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Web`,
  description: "Quick, Reliable, Affordable– Anytime, Anywhere",
  keywords: [
    "graphic design",
    "graphic designer",
    "design agency",
    "creative agency",
    "branding agency",
    "logo design",
    "print design",
    "digital design",
    "visual design",
    "illustration",
    "typography",
    "small businesses",
    "graphic designer near me",
    "animation",
  
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "/",
  },
} as const;
