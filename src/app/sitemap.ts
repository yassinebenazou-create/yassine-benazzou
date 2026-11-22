import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogArticles } from "@/data/articles";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const SITE_LAST_MODIFIED = new Date("2026-11-22T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/contact",
    "/tarifs",
    "/devis",
    "/blog",
    "/creation-site-web-maroc",
    "/creation-site-web-france",
    "/creation-site-web-el-jadida",
    "/creation-site-web-casablanca",
    "/creation-site-web-agadir",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: SITE_LAST_MODIFIED,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: `${base}/realisations/${project.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      priority: 0.7,
    })),
    ...blogArticles.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      priority: 0.7,
    })),
  ];
}
