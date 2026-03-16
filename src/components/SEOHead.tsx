import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://artedim.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/general/logoarteydim.jpg`;
const SITE_NAME = "Arte y Dimensiones";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaTag(attr: string, attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  jsonLd,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const canonicalUrl = `${BASE_URL}${pathname}`;
  const fullTitle = pathname === "/" ? title : `${title} | ${SITE_NAME}`;
  const image = ogImage ? (ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`) : DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    // Basic meta
    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "es_PA");

    // Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // JSON-LD
    // Remove previously injected LD
    document.querySelectorAll('script[data-seo-head="true"]').forEach((el) => el.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-head", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-head="true"]').forEach((el) => el.remove());
    };
  }, [fullTitle, description, keywords, canonicalUrl, image, ogType, jsonLd]);

  return null;
}
