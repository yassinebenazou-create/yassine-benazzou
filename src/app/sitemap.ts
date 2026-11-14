import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/contact",
    "/tarifs",
    "/blog",
    "/creation-site-web-maroc",
    "/creation-site-web-el-jadida",
    "/creation-site-web-casablanca",
    "/creation-site-web-agadir",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified,
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: `${base}/realisations/${project.slug}`,
      lastModified,
      priority: 0.7,
    })),
  ];
}
