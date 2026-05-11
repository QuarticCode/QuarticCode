import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://quartic-code.com",
      lastModified: new Date(),
    },
  ];
}
