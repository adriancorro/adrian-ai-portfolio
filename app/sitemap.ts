import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // Reemplaza por tu dominio cuando publiques.
  return ["", "/projects", "/projects/gaudi", "/demo/gaudi"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
