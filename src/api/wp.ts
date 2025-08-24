import { pages as staticPages } from "./static-data";

const WP_BASE = import.meta.env.VITE_WP_BASE_URL;

async function fetchWpApi(endpoint: string) {
  const url = `${WP_BASE}${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WP API failed: ${res.status}`);
  return res.json();
}

export async function fetchPageBySlug(slug: string) {
  // Use static data in development or if no base URL is set
  // if (import.meta.env.MODE === "development" || !WP_BASE) {
  //   console.log(`Fetching page for slug '${slug}' from static data.`);
  //   return staticPages[slug] || null;
  // }

  // Try live API in production
  try {
    const pages = await fetchWpApi(slug);
    return pages[0] || null;
  } catch (error) {
    console.error("API fetch failed, falling back to static data:", error);
    return staticPages[slug] || null;
  }
}

export function featuredImageFromEmbedded(item: any) {
  return item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}
