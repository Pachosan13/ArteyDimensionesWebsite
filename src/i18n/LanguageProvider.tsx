import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  buildPath,
  getAlternatePath,
  getLocaleFromPath,
  translateSlug,
  type Locale,
  type Section,
} from "./config";
import { UI, type UIStrings } from "./ui";

interface I18nValue {
  locale: Locale;
  /** UI strings for the active locale. Access directly: `t.nav.services`. */
  t: UIStrings;
  /**
   * Build an in-app path for a section. `slug` is always the **Spanish** slug as it
   * appears in the data files; this translates it for the active locale. Components
   * therefore never need to know which language they are rendering in.
   */
  path: (section: Section, slug?: string) => string;
  /** The current page in the other language — used by the toggle and by hreflang. */
  alternatePath: (target: Locale) => string;
  /** Pick between two locale-specific values. */
  pick: <T>(values: Record<Locale, T>) => T;
}

const I18nContext = createContext<I18nValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      t: UI[locale],
      path: (section, slug) =>
        buildPath(section, locale, slug ? translateSlug(section, slug, DEFAULT_LOCALE, locale) : undefined),
      alternatePath: (target) => getAlternatePath(pathname, target),
      pick: (values) => values[locale],
    }),
    [locale, pathname],
  );

  // Keep the served `<html lang>` honest once the SPA takes over client-side routing.
  // The pre-rendered HTML already ships the correct value for the first paint.
  React.useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}

/**
 * Resolve a localized route param back to the canonical (Spanish) slug used as the key
 * in the data files. On Spanish routes this is a no-op.
 */
export function useCanonicalSlug(section: Section, slug: string | undefined): string | undefined {
  const { locale } = useI18n();
  if (!slug) return undefined;
  return translateSlug(section, slug, locale, DEFAULT_LOCALE);
}
