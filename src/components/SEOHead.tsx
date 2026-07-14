import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, HREFLANG, OG_LOCALE, absoluteUrl, getLocaleFromPath } from "../i18n/config";
import { getRouteEntry } from "../i18n/manifest";

const DEFAULT_OG_IMAGE = `${BASE_URL}/images/general/logoarteydim.jpg`;
const SITE_NAME = "Arte y Dimensiones";

function setMetaTag(attr: string, attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Syncs `<head>` to the current route.
 *
 * Everything it writes comes from the route manifest — the same object the build-time
 * pre-render script bakes into the served HTML. So the head a crawler sees before
 * hydration and the head a user sees after it are the same by construction, not by
 * two lists being kept in step by hand.
 */
export default function SEOHead() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const entry = getRouteEntry(pathname);

  useEffect(() => {
    // Unknown path: NotFound owns the head (it sets `noindex`). Leave it alone.
    if (!entry) return;

    const canonicalUrl = absoluteUrl(entry.path);
    const image = entry.ogImage
      ? entry.ogImage.startsWith("http")
        ? entry.ogImage
        : `${BASE_URL}${entry.ogImage}`
      : DEFAULT_OG_IMAGE;

    document.title = entry.title;

    setMetaTag("name", "description", entry.description);
    setMetaTag("name", "keywords", entry.keywords);

    setLinkTag("canonical", canonicalUrl);

    // hreflang — bidirectional, with x-default on Spanish: Panama is the primary market,
    // so an unmatched visitor should land there rather than on the English page.
    setLinkTag("alternate", entry.alternates.es, HREFLANG.es);
    setLinkTag("alternate", entry.alternates.en, HREFLANG.en);
    setLinkTag("alternate", entry.alternates.es, "x-default");

    setMetaTag("property", "og:title", entry.title);
    setMetaTag("property", "og:description", entry.description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:type", entry.ogType);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", OG_LOCALE[locale]);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", entry.title);
    setMetaTag("name", "twitter:description", entry.description);
    setMetaTag("name", "twitter:image", image);

    // Replace the JSON-LD the pre-render baked in, so a client-side navigation does not
    // leave the previous page's schema behind.
    document.querySelectorAll('script[data-seo-head="true"]').forEach((el) => el.remove());

    entry.jsonLd.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [entry, locale]);

  return null;
}
