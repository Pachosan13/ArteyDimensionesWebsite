import React from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";
import type { Locale } from "../i18n/config";

/**
 * Switches to the *same page* in the other language, not to the homepage — the pairing
 * comes from the same route map that generates the hreflang tags, so a visitor and a
 * crawler always agree on which page is the counterpart of which.
 */
const LanguageToggle: React.FC<{ className?: string; onNavigate?: () => void }> = ({
  className = "",
  onNavigate,
}) => {
  const { locale, t, alternatePath } = useI18n();
  const target: Locale = locale === "es" ? "en" : "es";

  return (
    <Link
      to={alternatePath(target)}
      onClick={onNavigate}
      hrefLang={target}
      aria-label={t.lang.switchAria}
      className={`inline-flex items-center gap-1.5 font-semibold text-[#4B4B4B] hover:text-brand transition-colors ${className}`}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span className="uppercase tracking-wide text-sm">{target}</span>
    </Link>
  );
};

export default LanguageToggle;
