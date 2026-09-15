export interface Leader {
  name: string;
  role: string;
  tagline: string;
  image: string;
  bio: string;
  highlights: string[];
}

export const leaders: Leader[] = [
  {
    name: "Irfan Kazmi",
    role: "Chief Executive Officer",
    tagline: "Leading every project forward",
    image:
      "https://storage.helloreaddy.io/project_files/b0dbc027-5afa-4c08-a7cf-90d759fad817/207013fc-76f0-4a91-ae4a-d0c583d58d3e_compressed_WhatsApp-Image-2026-09-11-at-6.30.28-AM.webp",
    bio: "Running point on planning, budgets and client care, our CEO keeps every build on schedule and every family in the loop. Clear communication, realistic timelines and no surprises — that's the promise from start to finish.",
    highlights: [
      "Turnkey project management",
      "Transparent, fixed-scope pricing",
      "One point of contact, always",
    ],
  },
  {
    name: "Mohammad Razvi",
    role: "Director of Construction",
    tagline: "Hands-on oversight, every job",
    image:
      "https://static.readdy.ai/image/f4cf296597105ca7841528ad6382b5ee/74441f3d0f5bb6e34e7e0c0901505b24.jpeg",
    bio: "Two decades on the tools, still hands-on with every crew — build it right, treat people fairly, and the work speaks for itself.",
    highlights: ["20+ years in construction", "Licensed Maryland contractor (MHIC #168360)"],
  },
];
