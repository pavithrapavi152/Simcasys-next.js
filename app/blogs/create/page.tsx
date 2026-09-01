"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [adminid, setAdminid] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          content: content.trim(),
          image: image.trim(),
          adminid: adminid.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        console.log("API response:", data);

        throw new Error(
          data.error || data.message || "Failed to create blog"
      );
      }
      setMessage("Blog created successfully!");

      setTitle("");
      setSlug("");
      setContent("");
      setImage("");
      setAdminid("");

      setTimeout(() => {
        router.push("/blogs");
      }, 1000);
    } catch (error) {
      console.error("Blog create error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to create blog"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">

      <div className="mx-auto max-w-3xl">

        {/* PAGE HEADER */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Add Blog
          </h1>

          <p className="mt-2 text-gray-600">
            Create and publish a new blog
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-lg"
        >

          {/* TITLE */}

          <div className="mb-6">
            <label
              htmlFor="title"
              className="mb-2 block font-semibold text-gray-800"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* SLUG */}

          <div className="mb-6">
            <label
              htmlFor="slug"
              className="mb-2 block font-semibold text-gray-800"
            >
              Slug
            </label>

            <input
              id="slug"
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="my-first-blog"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />

            <p className="mt-2 text-sm text-gray-500">
              Example: my-first-blog
            </p>
          </div>

          {/* CONTENT */}

          <div className="mb-6">
            <label
              htmlFor="content"
              className="mb-2 block font-semibold text-gray-800"
            >
              Content
            </label>

            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter your blog content"
              rows={10}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* IMAGE */}

          <div className="mb-6">
            <label
              htmlFor="image"
              className="mb-2 block font-semibold text-gray-800"
            >
              Image URL
            </label>

            <input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/blog-image.jpg"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />

            <p className="mt-2 text-sm text-gray-500">
              Enter the URL of the blog image.
            </p>
          </div>

          {/* ADMIN ID */}

          <div className="mb-6">
            <label
              htmlFor="adminid"
              className="mb-2 block font-semibold text-gray-800"
            >
              Admin ID
            </label>

            <input
              id="adminid"
              type="text"
              value={adminid}
              onChange={(e) => setAdminid(e.target.value)}
              placeholder="Enter admin UUID"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />

            <p className="mt-2 text-sm text-gray-500">
              Enter the actual Admin UUID from your database.
            </p>
          </div>

          {/* CREATED AT */}

          <div className="mb-6">
            <label className="mb-2 block font-semibold text-gray-800">
              Created At
            </label>

            <input
              type="text"
              value="Automatically generated"
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-gray-500"
            />

            <p className="mt-2 text-sm text-gray-500">
              SQL Server will set this when the blog is created.
            </p>
          </div>

          {/* UPDATED AT */}

          <div className="mb-6">
            <label className="mb-2 block font-semibold text-gray-800">
              Updated At
            </label>

            <input
              type="text"
              value="Automatically generated"
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-gray-500"
            />

            <p className="mt-2 text-sm text-gray-500">
              This will be changed when the blog is updated.
            </p>
          </div>

          {/* SUCCESS MESSAGE */}

          {message && (
            <div className="mb-6 rounded-lg bg-green-100 px-4 py-3">
              <p className="font-semibold text-green-700">
                {message}
              </p>
            </div>
          )}

          {/* ERROR MESSAGE */}

          {error && (
            <div className="mb-6 rounded-lg bg-red-100 px-4 py-3">
              <p className="font-semibold text-red-700">
                {error}
              </p>
            </div>
          )}

          {/* BUTTONS */}

          <div className="flex gap-4">

            <button
              type="button"
              onClick={() => router.push("/blogs")}
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Blog"}
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}

