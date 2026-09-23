import { MetadataRoute } from "next";

const BASE = "https://www.trofiz.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/mentions-legales`, lastModified: new Date("2026-09-24"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/confidentialite`, lastModified: new Date("2026-09-24"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cgu`, lastModified: new Date("2026-09-24"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
