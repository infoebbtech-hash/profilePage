import { useEffect, useState } from "react";
import { fetchPageBySlug } from "../api/wp";

export default function About() {
  const [page, setPage] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      try {
        setLoading(true);
        const pageData = await fetchPageBySlug("about");
        console.log(pageData);
        setPage(pageData);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load page");
      } finally {
        setLoading(false);
      }
    };

    loadPage();
  }, []);

  if (loading) return <div className="p-8">Loading…</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!page) return <div className="p-8">Page not found</div>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">
        {page.title?.rendered || "About"}
      </h2>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content?.rendered || "" }}
      />
    </section>
  );
}
