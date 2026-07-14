#!/usr/bin/env node
/**
 * Google Search Console submission.
 *
 *   node scripts/gsc-submit.mjs            → submit sitemap, then ping the Indexing API
 *                                            for every URL in it
 *   node scripts/gsc-submit.mjs --en       → Indexing API for the /en URLs only
 *   node scripts/gsc-submit.mjs --sitemap  → sitemap only
 *
 * Reads the live sitemap so the URL list can never drift from what is actually deployed.
 * The previous scripts hard-coded a list against `www.artedim.com`, which 308-redirects
 * to the apex — and included one blog slug that never existed.
 *
 * A note on the Indexing API: Google documents it for JobPosting and BroadcastEvent
 * only. It generally accepts other URLs and does speed up discovery, but it is not a
 * guarantee, and it is not what actually gets a page indexed. The sitemap plus internal
 * links is the load-bearing path; treat the Indexing API as a nudge, not a promise.
 */

import { readFileSync } from "fs";
import { createSign } from "crypto";

const KEY_FILE = "/Users/usuario/Documents/Claudia/leads-agency-614d0f36b311.json";
const SITE = "sc-domain:artedim.com"; // domain property — covers apex and www
const SITEMAP_URL = "https://artedim.com/sitemap.xml";

const args = process.argv.slice(2);
const onlyEn = args.includes("--en");
const onlySitemap = args.includes("--sitemap");

async function getToken(scope) {
  const key = JSON.parse(readFileSync(KEY_FILE, "utf8"));
  const now = Math.floor(Date.now() / 1000);

  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      iss: key.client_email,
      scope,
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  ).toString("base64url");

  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const jwt = `${header}.${payload}.${sign.sign(key.private_key, "base64url")}`;

  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const data = await resp.json();
  if (!data.access_token) throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function submitSitemap() {
  const token = await getToken("https://www.googleapis.com/auth/webmasters");
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;

  const resp = await fetch(url, { method: "PUT", headers: { Authorization: `Bearer ${token}` } });

  if (resp.ok) {
    console.log(`✅ Sitemap submitted to ${SITE}\n   ${SITEMAP_URL}`);
    return true;
  }
  console.error(`❌ Sitemap submission failed [${resp.status}]: ${(await resp.text()).slice(0, 300)}`);
  return false;
}

async function fetchSitemapUrls() {
  const xml = await (await fetch(SITEMAP_URL)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return onlyEn ? urls.filter((u) => u.includes("/en")) : urls;
}

async function submitForIndexing(urls) {
  const token = await getToken("https://www.googleapis.com/auth/indexing");
  let ok = 0;
  const failures = [];

  for (const url of urls) {
    const resp = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });

    if (resp.ok) {
      ok++;
      process.stdout.write(".");
    } else {
      failures.push(`${url} → ${resp.status} ${(await resp.text()).slice(0, 120)}`);
      process.stdout.write("x");
    }
    await new Promise((r) => setTimeout(r, 120)); // stay under the rate limit
  }

  console.log("");
  console.log(`\n✅ Indexing API accepted ${ok}/${urls.length} URLs`);
  if (failures.length) {
    console.log(`\n❌ ${failures.length} failed:`);
    failures.slice(0, 10).forEach((f) => console.log(`   · ${f}`));
  }
  return ok;
}

async function checkSitemapStatus() {
  const token = await getToken("https://www.googleapis.com/auth/webmasters");
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;
  const resp = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!resp.ok) return;

  const s = await resp.json();
  console.log("\n📊 Sitemap status in GSC:");
  console.log(`   submitted:  ${s.lastSubmitted ?? "—"}`);
  console.log(`   downloaded: ${s.lastDownloaded ?? "not yet — Google fetches it on its own schedule"}`);
  console.log(`   warnings:   ${s.warnings ?? 0} · errors: ${s.errors ?? 0}`);
  const web = (s.contents ?? []).find((c) => c.type === "web");
  if (web) console.log(`   URLs seen:  ${web.submitted}`);
}

// ── Run ──
console.log(`\nGoogle Search Console — ${SITE}\n`);

await submitSitemap();

if (!onlySitemap) {
  const urls = await fetchSitemapUrls();
  console.log(`\nPinging Indexing API for ${urls.length} URL(s)${onlyEn ? " (English only)" : ""}…`);
  await submitForIndexing(urls);
}

await checkSitemapStatus();
console.log("");
