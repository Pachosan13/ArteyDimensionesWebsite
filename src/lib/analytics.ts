/**
 * Analytics — GA4 + Meta Pixel para Vite + React
 *
 * Activación: setear env vars en Vercel (Settings → Environment Variables):
 *   - VITE_GA4_ID         (G-XXXXXXXXXX) · crear en analytics.google.com
 *   - VITE_FB_PIXEL_ID    (15 dígitos)   · crear en business.facebook.com
 *
 * Sin las env vars, NO se inyecta nada (no breakage).
 * Carga async después de window.load para no afectar LCP.
 */

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
    _fbq?: unknown;
  }
}

function loadGA4(id: string) {
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${id}"]`)) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
}

function loadMetaPixel(id: string) {
  if (typeof window.fbq === 'function') return;
  // eslint-disable-next-line
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', id);
  window.fbq('track', 'PageView');
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;
  const fire = () => {
    if (GA4_ID) loadGA4(GA4_ID);
    if (FB_PIXEL_ID) loadMetaPixel(FB_PIXEL_ID);
  };
  if (document.readyState === 'complete') fire();
  else window.addEventListener('load', fire, { once: true });
}
