import type { Metadata } from "next";

export const links = {
  sourceCode: "/",
  ownerName: "MorX",
  ownerEmail: "/",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s web`,
  description: "We help you figure out where to find your leads, how to engage with them, and how to approach each negotiation individually.",
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
