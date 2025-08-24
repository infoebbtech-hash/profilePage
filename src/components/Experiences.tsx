import React, { useEffect, useState } from "react";
import { fetchPageBySlug } from "../api/wp";

export default function Experiences() {
  const [page, setPage] = useState<any>(null);
  useEffect(() => {
    fetchPageBySlug("experiences").then(setPage).catch(console.error);
  }, []);
  if (!page) return <div className="p-8">Loading…</div>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />

      <div className="mt-8 text-sm text-gray-600">
        <p>
          Tip: consider separating Education and Interests into their own short
          sections on that WP page for clarity.
        </p>
      </div>
    </section>
  );
}
