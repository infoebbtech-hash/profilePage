import React, { useEffect, useState } from "react";
import { fetchPageBySlug, featuredImageFromEmbedded } from "../api/wp";

export default function Hero() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    fetchPageBySlug("home").then(setPage).catch(console.error);
  }, []);

  if (!page) return <div className="p-8 text-center">Loading…</div>;

  const headline = page.title?.rendered || "";
  const sub = page.excerpt?.rendered || page.content?.rendered || "";
  const img = featuredImageFromEmbedded(page);
  const ctaLabel = page.meta?.cta_label || "Contact";
  const ctaLink =
    page.meta?.cta_link || `mailto:${import.meta.env.VITE_PRIMARY_EMAIL}`;

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
      {img && (
        <img
          src={img}
          alt=""
          className="w-full max-w-3xl rounded-lg mb-6 object-cover shadow"
        />
      )}
      <h1
        className="text-3xl md:text-5xl font-bold"
        dangerouslySetInnerHTML={{ __html: headline }}
      />
      <div
        className="mt-4 text-lg max-w-2xl"
        dangerouslySetInnerHTML={{ __html: sub }}
      />
      <a
        href={ctaLink}
        className="mt-8 inline-block px-6 py-3 rounded-lg shadow text-white bg-blue-600 hover:bg-blue-700"
        dangerouslySetInnerHTML={{ __html: ctaLabel }}
      />
    </section>
  );
}
