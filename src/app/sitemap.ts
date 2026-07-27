import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quartic-code.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/web-development`, lastModified: new Date() },
    { url: `${baseUrl}/services/mobile-development`, lastModified: new Date() },
    { url: `${baseUrl}/services/design`, lastModified: new Date() },
    { url: `${baseUrl}/services/cloud-infrastructure`, lastModified: new Date() },
    { url: `${baseUrl}/works`, lastModified: new Date() },
    { url: `${baseUrl}/projects/pan-y-chocolate-pos`, lastModified: new Date() },
  ];
}
