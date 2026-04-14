#!/usr/bin/env node
/**
 * Google Indexing API — Submit artedim.com blog URLs
 * Uses service account: indexing-bot@leads-agency.iam.gserviceaccount.com
 */

import { readFileSync } from "fs";

const KEY_FILE = "/Users/usuario/Documents/Claudia/leads-agency-614d0f36b311.json";
const ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

const URLS = [
  "https://www.artedim.com/blog",
  "https://www.artedim.com/blog/arquitecto-comercial-panama",
  "https://www.artedim.com/blog/locales-comerciales-panama",
  "https://www.artedim.com/blog/oficina-productividad-panama",
  "https://www.artedim.com/blog/arquitectura-corporativa-panama",
];

// ── Google Auth (manual JWT) ──
async function getAccessToken() {
  const key = JSON.parse(readFileSync(KEY_FILE, "utf8"));
  const now = Math.floor(Date.now() / 1000);

  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
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

// ── Submit URL ──
async function submitUrl(url, token) {
  const resp = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  const body = await resp.text();
  return { status: resp.status, ok: resp.ok, body };
}

// ── Main ──
async function main() {
  console.log("\nGoogle Indexing API — artedim.com Blog URLs\n");

  const token = await getAccessToken();
  console.log("Authenticated successfully\n");

  let ok = 0, fail = 0;

  for (const url of URLS) {
    const result = await submitUrl(url, token);
    const tag = result.ok ? "OK" : "FAIL";
    console.log(`  [${tag}] ${result.status} | ${url}`);
    if (!result.ok) {
      console.log(`    Response: ${result.body}`);
      fail++;
    } else {
      ok++;
    }
  }

  console.log(`\nResults: ${ok} submitted, ${fail} failed\n`);
}

main().catch(e => { console.error("ERROR:", e.message); process.exit(1); });
