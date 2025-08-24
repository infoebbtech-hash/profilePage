import React, { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((s) => ({ ...s, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    // Honeypot value (bots will fill it)
    const botField =
      (new FormData(e.currentTarget).get("bot-field") as string) || "";

    try {
      const body = encode({
        "form-name": "contact",
        "bot-field": botField,
        name: fields.name,
        email: fields.email,
        message: fields.message,
      });

      const resp = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or email directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div
          className="p-6 bg-green-50 border border-green-200 rounded"
          aria-live="polite"
        >
          Thanks — your message was sent.
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      {status === "error" && (
        <div
          className="mb-4 p-3 rounded border border-red-300 bg-red-50 text-red-800"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        aria-busy={status === "submitting"}
        className="space-y-4"
      >
        {/* Netlify needs these */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <label className="block">
          <span className="text-sm mb-1 block">Name</span>
          <input
            name="name"
            value={fields.name}
            onChange={handleChange("name")}
            required
            autoComplete="name"
            className="w-full border px-3 py-2 rounded"
          />
        </label>

        <label className="block">
          <span className="text-sm mb-1 block">Email</span>
          <input
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange("email")}
            required
            autoComplete="email"
            className="w-full border px-3 py-2 rounded"
          />
        </label>

        <label className="block">
          <span className="text-sm mb-1 block">Message</span>
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange("message")}
            required
            rows={6}
            className="w-full border px-3 py-2 rounded"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-5 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
      </form>

      <p className="mt-3 text-sm text-gray-600">
        Prefer email?{" "}
        <a
          className="underline"
          href={`mailto:${import.meta.env.VITE_PRIMARY_EMAIL || ""}`}
        >
          {import.meta.env.VITE_PRIMARY_EMAIL || "Email us"}
        </a>
      </p>
    </section>
  );
}
