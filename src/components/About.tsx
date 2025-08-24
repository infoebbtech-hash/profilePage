import React, { useEffect, useState } from "react";
import { fetchPageBySlug } from "../api/wp";

export default function About() {
  const [page, setPage] = useState<any>(null);
  useEffect(() => {
    fetchPageBySlug("about").then(setPage).catch(console.error);
  }, []);
  if (!page) return <div className="p-8">Loading…</div>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </section>
  );
}
