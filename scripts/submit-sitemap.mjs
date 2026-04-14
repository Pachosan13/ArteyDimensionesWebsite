#!/usr/bin/env node
/**
 * Submit sitemap to Google Search Console via API
 * Uses service account: indexing-bot@leads-agency.iam.gserviceaccount.com
 */

import { readFileSync } from "fs";

const KEY_FILE = "/Users/usuario/Documents/Claudia/leads-agency-614d0f36b311.json";
const SITE_URL = "https://www.artedim.com/"; // trailing slash required for SC API
const SITEMAP_URL = "https://www.artedim.com/sitemap.xml";

async function getAccessToken() {
  const key = JSON.parse(readFileSync(KEY_FILE, "utf8"));
  const now = Math.floor(Date.now() / 1000);

  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })).toString("base64url");

  const { createSign } = await import("crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(key.private_key, "base64url");

  const jwt = `${header}.${payload}.${signature}`;

  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const data = await resp.json();
  if (!data.access_token) throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function submitSitemap(token) {
  // Try both site URL formats
  const siteUrls = [
    "https://www.artedim.com/",
    "sc-domain:artedim.com",
    "https://artedim.com/",
  ];

  for (const siteUrl of siteUrls) {
    const encodedSite = encodeURIComponent(siteUrl);
    const encodedSitemap = encodeURIComponent(SITEMAP_URL);
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps/${encodedSitemap}`;

    console.log(`Trying site: ${siteUrl}`);
    const resp = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      console.log(`  [OK] Sitemap submitted for ${siteUrl}`);
      return true;
    } else {
      const body = await resp.text();
      console.log(`  [${resp.status}] ${body.substring(0, 200)}`);
    }
  }
  return false;
}

async function main() {
  console.log("\nGoogle Search Console — Submit Sitemap\n");

  const token = await getAccessToken();
  console.log("Authenticated\n");

  const result = await submitSitemap(token);
  if (!result) {
    console.log("\nNote: Sitemap submission requires the service account to be added as a user");
    console.log("in Google Search Console for artedim.com.");
    console.log("Add indexing-bot@leads-agency.iam.gserviceaccount.com as an owner/user in GSC.");
  }
}

main().catch(e => { console.error("ERROR:", e.message); process.exit(1); });
