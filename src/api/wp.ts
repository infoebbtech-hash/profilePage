const WP_BASE = import.meta.env.VITE_WP_BASE_URL || "";

async function fetchJson(endpoint: string) {
  const base = WP_BASE.replace(/\/$/, "");
  const url = base + "/wp-json/wp/v2" + endpoint;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  return res.json();
}

export async function fetchPageBySlug(slug: string) {
  const pages = await fetchJson(
    `/pages?slug=${encodeURIComponent(slug)}&_embed`
  );
  return pages[0] || null;
}

export function featuredImageFromEmbedded(item: any) {
  return item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}
