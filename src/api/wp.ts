import { pages as staticPages } from "./static-data";

const WP_BASE = import.meta.env.VITE_WP_BASE_URL || "";

// async function fetchJson(endpoint: string) {
//   const base = WP_BASE.replace(/\/$/, "");
//   const url = base + "/wp-json/wp/v2" + endpoint;
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
//   return res.json();
// }

export async function fetchPageBySlug(slug: string) {
  // const pages = await fetchJson(
  //   `/pages?slug=${encodeURIComponent(slug)}&_embed`
  // );
  // return pages[0] || null;

  // In development, or if the API is blocked, use static data.
  if (import.meta.env.DEV || !WP_BASE) {
    console.log(`Fetching page for slug '${slug}' from static data.`);
    return staticPages[slug] || null;
  }

  // NOTE: The following code is for production, but the WordPress API is currently
  // blocked by robots.txt. This will not work until that is resolved.
  // To use this, you would need to uncomment the fetchJson function and the
  // code in this function, and remove the static data fallback.

  // For now, we'll just return the static data.
  return staticPages[slug] || null;
}

export function featuredImageFromEmbedded(item: any) {
  return item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}
